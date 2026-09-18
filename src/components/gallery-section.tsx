import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { loc, useI18n } from "@/lib/i18n";
import { GALLERY, HIGHLIGHTS, PHOTOS } from "@/lib/shop";
import { asset, cn } from "@/lib/utils";

export function GallerySection() {
  const { t, lang } = useI18n();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (lightbox === null) return;

    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setLightbox(null);
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lastFocus.current?.focus();
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="scroll-mt-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream">
          {t.galleryKicker}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {t.galleryTitle}
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {HIGHLIGHTS.map((img, i) => {
            const alt = loc(lang, img.altEn, img.altEs, img.altEs);
            return (
              <li key={img.src} className="min-w-0">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={alt}
                  className="group relative block size-full overflow-hidden rounded-lg"
                >
                  <img
                    src={asset(img.src)}
                    alt={alt}
                    width={382}
                    height={510}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] size-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </button>
              </li>
            );
          })}
        </ul>
        {GALLERY.length > 0 ? (
          <>
            <h3 className="font-display mt-16 max-w-xl text-3xl font-semibold uppercase leading-[0.9] sm:text-4xl">
              {t.galleryShop}
            </h3>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {GALLERY.map((img, i) => {
                const alt = loc(lang, img.altEn, img.altEs, img.altEs);
                return (
                  <li key={img.src} className={cn(img.wide && "col-span-2")}>
                    <button
                      type="button"
                      onClick={() => setLightbox(HIGHLIGHTS.length + i)}
                      aria-label={alt}
                      className="group relative block size-full overflow-hidden rounded-lg"
                    >
                      <img
                        src={asset(img.src)}
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className={cn(
                          "size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]",
                          img.wide ? "aspect-[16/9]" : "aspect-[4/5] sm:aspect-[4/3]",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
      </div>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.galleryKicker}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label={t.closePhoto}
            onClick={() => setLightbox(null)}
          />
          <button
            ref={closeRef}
            type="button"
            className="absolute top-4 right-4 z-10 size-11 text-paper"
            onClick={() => setLightbox(null)}
            aria-label={t.closePhoto}
          >
            <X className="size-7" />
          </button>
          <img
            src={asset(PHOTOS[lightbox].src)}
            alt={loc(lang, PHOTOS[lightbox].altEn, PHOTOS[lightbox].altEs, PHOTOS[lightbox].altEs)}
            className="relative z-10 max-h-[88vh] max-w-full rounded-lg object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
