interface HeroProps {
  title: string;
  subtitle: string;
  /** img.src */
  imgUrl: string;
}

export default function Hero({ title, subtitle, imgUrl }: HeroProps) {
  return (
    <section className="relative py-52 px-4" style={{ height: 500 }}>
      <div className="w-full leading-none">
        <h1 className="pb-10">{title}</h1>
        <p className="uppercase subtitle">{subtitle}</p>
      </div>
      <div
        style={{ backgroundImage: `url('${imgUrl}')` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-60 -z-50"
      />
    </section>
  );
}
