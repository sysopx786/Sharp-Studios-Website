import { BarberPole } from "@/components/barber-pole";
import { LinkBooksy } from "@/components/link-booksy";
import { loc, useI18n } from "@/lib/i18n";
import { SHOP } from "@/lib/shop";
import { asset } from "@/lib/utils";

export function AboutSection() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:py-28">
        <div className="min-w-0">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
            {t.aboutKicker}
          </p>
          <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
            {t.aboutTitle}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{t.aboutP1}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            <LinkBooksy text={t.aboutP2} />
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/80">{t.aboutP3}</p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
            <div>
              <dt className="font-display text-3xl font-semibold sm:text-4xl">{t.aboutStat1Value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{t.aboutStat1Label}</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold sm:text-4xl">{t.aboutStat2Value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{t.aboutStat2Label}</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold sm:text-4xl">{t.aboutStat3Value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{t.aboutStat3Label}</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <img
            src={asset("/images/google/g-47.jpg")}
            alt={loc(lang, "Barber chairs", "Sillas de la barbería", "Cadeiras da barbearia")}
            width={1280}
            height={800}
            decoding="async"
            className="aspect-[16/10] w-full rounded-xl object-cover object-center"
          />
          <div className="absolute -left-3 bottom-8 hidden items-center gap-3 rounded-lg bg-ink px-4 py-3 text-paper sm:flex">
            <BarberPole height={36} />
            <span className="text-sm">
              {SHOP.address}
              <br />
              <span className="text-cream/80">{SHOP.city}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
