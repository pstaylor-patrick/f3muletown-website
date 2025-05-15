import Papa from 'papaparse';

interface LocaleData {
  region_name: string;
  meta_description: string;
  hero_title: string;
  hero_subtitle: string;
  pax_count: number;
  region_city: string;
  region_state: string;
  region_facebook: string;
  region_map_lat: number;
  region_map_lon: number;
  region_map_zoom: number;
}

interface Workout {
  ao: string;
  style: string;
  location: {
    href: string;
    text: string;
  };
  day: string;
  time: string;
}

interface RawLocaleData {
  Timestamp: string;
  'Region Name': string;
  'Meta Description': string;
  'Hero Title': string;
  'Hero Subtitle': string;
  'PAX Count': string;
  'Region City': string;
  'Region State': string;
  'Region Facebook URL': string;
  'Region Map Latitude': string;
  'Region Map Longitude': string;
  'Region Map Zoom': string;
}

export const enum GoogleSheetsDataType {
  LOCALE_DATA = 'locales',
  WORKOUT_DATA = 'workouts',
  FORMS_DATA = '1546501139',
}

const getCacheKey = () => {
  const today = new Date();
  return `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
};

export const fetchGoogleSheetsData = async <T>(
  googleSheetsDataType: GoogleSheetsDataType,
  cacheKey?: string
): Promise<T[]> => {
  const _cacheKey = cacheKey ?? getCacheKey();
  const url = `https://docs.google.com/spreadsheets/d/1aHl-uYuSEL5QX05LnjffOuSQWlIFVLRGa5vWX7LKn9s/gviz/tq?tqx=out:csv&sheet=${googleSheetsDataType}&cacheKey=${_cacheKey}`;
  const response = await fetch(url);
  const csvText = await response.text();
  const parsedData = Papa.parse(csvText, { header: true }).data as T[];
  console.log('parsedData', parsedData);
  return parsedData;
};

export const REGION_NAME = 'Muletown';

export async function fetchAllRegions(
  cacheKey?: string
): Promise<LocaleData[]> {
  const data = await fetchGoogleSheetsData<RawLocaleData>(
    GoogleSheetsDataType.FORMS_DATA,
    cacheKey
  );

  // Get unique regions and their latest data
  const regionMap = new Map<string, RawLocaleData>();
  data.forEach((entry) => {
    const existingEntry = regionMap.get(entry['Region Name']);
    if (
      !existingEntry ||
      new Date(entry.Timestamp) > new Date(existingEntry.Timestamp)
    ) {
      regionMap.set(entry['Region Name'], entry);
    }
  });

  return Array.from(regionMap.values()).map((entry) => ({
    region_name: entry['Region Name'],
    meta_description: entry['Meta Description'],
    hero_title: entry['Hero Title'],
    hero_subtitle: entry['Hero Subtitle'],
    pax_count: Number(entry['PAX Count']),
    region_city: entry['Region City'],
    region_state: entry['Region State'],
    region_facebook: entry['Region Facebook URL'],
    region_map_lat: Number(entry['Region Map Latitude']),
    region_map_lon: Number(entry['Region Map Longitude']),
    region_map_zoom: Number(entry['Region Map Zoom']),
  }));
}

export function getRegionSlug(regionName: string): string {
  return regionName.toLowerCase().trim().replace(/\s+/g, '-');
}

export function getRegionNameFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function fetchLocaleData(
  regionSlug?: string,
  cacheKey?: string
): Promise<LocaleData> {
  const data = await fetchGoogleSheetsData<RawLocaleData>(
    GoogleSheetsDataType.FORMS_DATA,
    cacheKey
  );

  let regionName = REGION_NAME;
  if (regionSlug) {
    regionName = getRegionNameFromSlug(regionSlug);
  }

  // Filter for specified region entries and sort by timestamp in descending order
  const sortedData = [...data]
    .filter((entry) => entry['Region Name'] === regionName)
    .sort((a, b) => {
      const dateA = new Date(a.Timestamp);
      const dateB = new Date(b.Timestamp);
      return dateB.getTime() - dateA.getTime();
    });

  if (sortedData.length === 0) {
    throw new Error(`No data found for ${regionName} region`);
  }

  const latestData = sortedData[0];
  return {
    region_name: latestData['Region Name'],
    meta_description: latestData['Meta Description'],
    hero_title: latestData['Hero Title'],
    hero_subtitle: latestData['Hero Subtitle'],
    pax_count: Number(latestData['PAX Count']),
    region_city: latestData['Region City'],
    region_state: latestData['Region State'],
    region_facebook: latestData['Region Facebook URL'],
    region_map_lat: Number(latestData['Region Map Latitude']),
    region_map_lon: Number(latestData['Region Map Longitude']),
    region_map_zoom: Number(latestData['Region Map Zoom']),
  } as LocaleData;
}

export async function fetchWorkoutsData(cacheKey?: string): Promise<Workout[]> {
  const data = await fetchGoogleSheetsData(
    GoogleSheetsDataType.WORKOUT_DATA,
    cacheKey
  );
  return data.map((row: any) => ({
    ao: row.ao || '',
    style: row.style || '',
    location: {
      href: row.location_href || '',
      text: row.location_text || '',
    },
    day: row.day || '',
    time: row.time || '',
  })) as Workout[];
}
