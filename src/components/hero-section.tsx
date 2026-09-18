import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { LinkBooksy } from "@/components/link-booksy";
import { SHOP } from "@/lib/shop";
import { useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="bg-ink pt-[7.5rem] text-paper md:pt-32">
      <h1 className="sr-only">
        {t.heroTitle} {t.heroSub}
      </h1>
      <div className="mx-auto max-w-2xl px-4 sm:max-w-3xl sm:px-6">
        <img
          src={asset("/images/hero-logo.jpg")}
          alt="Sharp Studios Barbershop"
          width={1024}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="mx-auto h-auto w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-14">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-signal">
          {t.heroKicker}
        </p>
        <p className="mt-4 max-w-xl text-lg text-paper sm:text-xl">
          <LinkBooksy text={t.heroLead} />
        </p>
        <a
          href="#reviews"
          className="mt-8 flex w-full max-w-xl items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-ink shadow-sm"
        >
          <GoogleG className="size-6 shrink-0" />
          <span className="font-display text-[1.75rem] font-semibold leading-none">
            {SHOP.rating.toFixed(1)}
          </span>
          <GoogleStars count={5} className="flex shrink-0 gap-px" />
          <span className="truncate text-sm text-neutral-500">
            {SHOP.reviewCount} {t.reviewsWord}
          </span>
        </a>
        <a
          href="#visit"
          className="mt-3 inline-flex min-h-12 w-full max-w-xl items-center justify-center rounded-xl bg-signal px-5 text-sm font-bold uppercase tracking-wide text-ink hover:bg-[#ffd34d]"
        >
          {t.heroHours}
        </a>
      </div>
    </section>
  );
}
