import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  href: string;
}

export default function Header({ href }: HeaderProps) {
  const isRegionPage = href.startsWith('/regions/');
  const regionSlug = isRegionPage ? href.split('/')[2] : null;

  const pages = [
    { href: '/', text: 'ALL REGIONS' },
    ...(regionSlug ? [
      { href: `/regions/${regionSlug}/fng`, text: 'NEW TO F3 [FNG]' },
      { href: `/regions/${regionSlug}/workouts`, text: 'WORKOUTS [AO]' },
    ] : [])
  ];

  return (
    <header className="p-5 text-center">
      <Link href={regionSlug ? `/regions/${regionSlug}` : '/'}>
        <Image
          src={'/f3-white.png'}
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
