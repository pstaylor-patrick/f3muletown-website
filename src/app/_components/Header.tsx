import Image from 'next/image';
import Link from 'next/link';

import f3White from '../../../public/f3-white.png';

export default function Header({ href }: { href: string }) {
  const pages = [
    // { href: "/", text: "HOME" },
    { href: '/fng', text: 'NEW TO F3 [FNG]' },
    { href: '/workouts', text: 'WORKOUTS [AO]' },
    { href: '/convergence', text: 'CONVERGENCE' },
  ];

  return (
    <header className="p-5 text-center">
      <Link href="/">
        <Image
          src={f3White}
          alt="F3 White"
          width={60}
          height={60}
          className="my-0 mx-auto"
        />
      </Link>
      <nav className="uppercase">
        <ul>
          {pages.map((p, i) => (
            <li key={i} className={i < pages.length ? 'pt-2' : ''}>
              <Link
                href={p.href}
                title={p.text}
                className={`font-medium ${
                  href === p.href ? 'text-drp' : 'text-white'
                }`}
              >
                {p.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
