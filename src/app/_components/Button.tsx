import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
  target?: '_blank';
}

export default function Button({ href, text, target }: ButtonProps) {
  return (
    <Link
      href={href}
      target={target || '_self'}
      className="border-solid border-2 border-drp rounded text-drp uppercase font-medium font-blackops py-2 px-3 text-xl"
    >
      {text}
    </Link>
  );
}
