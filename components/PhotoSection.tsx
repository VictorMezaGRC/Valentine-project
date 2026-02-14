import Image from "next/image";

type PhotoSectionProps = {
  hasPhoto: boolean;
  hasFamily: boolean;
};

export function PhotoSection({ hasPhoto, hasFamily }: PhotoSectionProps) {
  if (!hasPhoto && !hasFamily) {
    return (
      <div className="mx-auto mt-6 w-full max-w-sm rounded-cute border border-brand-rose/20 bg-brand-blush p-6 text-center shadow-card">
        <p className="text-6xl" aria-hidden="true">
          💕👨‍👩‍👧
        </p>
        <p className="mt-3 text-sm font-semibold text-brand-wine/80">
          Drop `photo.jpeg` and `family.jpeg` in `/public` to personalize this love note.
        </p>
      </div>
    );
  }

  const mainImage = hasPhoto ? "/photo.jpeg" : "/family.jpeg";
  const showSecondary = hasPhoto && hasFamily;

  return (
    <section className="mx-auto mt-6 w-full max-w-xl" aria-label="Family photos">
      <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-2 shadow-card backdrop-blur">
        <Image
          src={mainImage}
          alt="A sweet family photo"
          width={1200}
          height={900}
          priority
          className="h-auto w-full rounded-[1.4rem] object-cover"
          sizes="(max-width: 768px) 92vw, 700px"
        />
      </div>

      {showSecondary && (
        <div className="relative -mt-10 ml-auto mr-3 w-36 animate-float overflow-hidden rounded-2xl border-2 border-white bg-white p-1 shadow-card sm:w-44">
          <Image
            src="/family.jpeg"
            alt="A sweet moment of your wife and baby"
            width={560}
            height={700}
            className="h-auto w-full rounded-xl object-cover"
            sizes="(max-width: 768px) 35vw, 180px"
          />
          <p className="px-2 pb-2 pt-1 text-[11px] font-bold text-brand-berry">Sweet moment 💞</p>
        </div>
      )}
    </section>
  );
}
