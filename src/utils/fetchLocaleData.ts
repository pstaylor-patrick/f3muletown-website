import Papa from 'papaparse';

interface LocaleData {
  region_name: string,
  meta_description: string,
  hero_title: string,
  hero_subtitle: string,
  pax_count: number,
  region_city: string,
  region_state: string,
  /** HACK: `region_facebook: URL` */
  region_facebook: string,
  region_map_lat: number,
  region_map_lon: number,
  region_map_zoom: number,
}


export async function fetchLocaleData(): Promise<LocaleData> {
  /** HACK: `&cacheKey=` */
  /** TODO: `&sheet=locales` */
  const sheetURL = 
    'https://docs.google.com/spreadsheets/d/1aHl-uYuSEL5QX05LnjffOuSQWlIFVLRGa5vWX7LKn9s/gviz/tq?tqx=out:csv&cacheKey=ED3041CD9BA1';
  const response = await fetch(sheetURL);
  const csvText = await response.text();

  // Parse CSV into JSON
  const parsedData = Papa.parse(csvText, { header: true }).data;

  // console.log(parsedData)

  return parsedData.pop() as LocaleData;
}