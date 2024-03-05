import Image from 'next/image';

import fb from '../../../public/fb.svg';

export default function Footer() {
  return (
    <footer className="text-center py-10 px-4">
      <address>
        &copy; Copyright {new Date().getFullYear()} | F3 Muletown | All Rights
        Reserved | Powered by the PAX
      </address>
      <nav>
        <ul>
          <li>
            <a href="https://www.facebook.com/f3muletown" target="_blank">
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
