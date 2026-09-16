import { FEATURED_VIDEO } from "@/lib/shop";
import { useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";

export function FeaturedSection() {
  const { t } = useI18n();

  return (
    <section id="featured" className="scroll-mt-32 bg-ink text-paper">
      <div className="mx-auto w-full max-w-[360px] px-4 py-12 sm:py-16">
        <video
          controls
          playsInline
          preload="metadata"
          poster={asset(FEATURED_VIDEO.poster)}
          className="aspect-[9/16] w-full rounded-xl bg-ink-2 object-cover"
        >
          <source src={asset(FEATURED_VIDEO.src)} type="video/mp4" />
        </video>
        <p className="mt-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-cream">
          {t.featuredCut}
        </p>
      </div>
    </section>
  );
}
