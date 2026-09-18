import { LinkBooksy } from "@/components/link-booksy";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
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
      </div>
    </section>
  );
}
