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

export const enum GoogleSheetsDataType {
  LOCALE_DATA = 'locales',
  WORKOUT_DATA = 'workouts',
}

const getCacheKey = () => {
  const today = new Date();
  return `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
};

export const fetchGoogleSheetsData = async (
  googleSheetsDataType: GoogleSheetsDataType,
  cacheKey?: string
) => {
  const _cacheKey = cacheKey ?? getCacheKey();
  const url = `https://docs.google.com/spreadsheets/d/1aHl-uYuSEL5QX05LnjffOuSQWlIFVLRGa5vWX7LKn9s/gviz/tq?tqx=out:csv&sheet=${googleSheetsDataType}&cacheKey=${_cacheKey}`;
  const response = await fetch(url);
  const csvText = await response.text();
  const parsedData = Papa.parse(csvText, { header: true }).data;
  return parsedData;
};

export async function fetchLocaleData(cacheKey?: string): Promise<LocaleData> {
  const data = await fetchGoogleSheetsData(
    GoogleSheetsDataType.LOCALE_DATA,
    cacheKey
  );
  return data.pop() as LocaleData;
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
