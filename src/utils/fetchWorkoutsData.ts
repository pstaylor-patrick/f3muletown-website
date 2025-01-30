import Papa from 'papaparse';

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

export async function fetchWorkoutsData(): Promise<Workout[]> {
  const today = new Date();
  /** update data no more than once per day */
  const cacheKey = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
  const sheetURL = 
    `https://docs.google.com/spreadsheets/d/1aHl-uYuSEL5QX05LnjffOuSQWlIFVLRGa5vWX7LKn9s/gviz/tq?tqx=out:csv&sheet=workouts&cacheKey=${cacheKey}`;
  const response = await fetch(sheetURL);
  const csvText = await response.text();

  // Parse CSV into JSON
  const parsedData = Papa.parse(csvText, { header: true }).data;

  // Transform parsed data into structured objects
  /** HACK: `row: any` */
  return parsedData.map((row: any) => ({
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