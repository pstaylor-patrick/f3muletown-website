import Image from 'next/image';

import fb from '../../../public/fb.svg';
import { fetchLocaleData } from '@/utils/fetchContent';

export default async function Footer() {
  const locales = await fetchLocaleData()
  return (
    <footer className="text-center py-10 px-4">
      <address>
        &copy; Copyright {new Date().getFullYear()} | {locales.region_name} | All Rights
        Reserved | Powered by the PAX
      </address>
      <nav>
        <ul>
          <li>
            <a href={locales.region_facebook} target="_blank">
              <Image
                src={fb.src}
                alt="Facebook"
                width={35}
                height={35}
                className="my-0 mx-auto mt-5"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
