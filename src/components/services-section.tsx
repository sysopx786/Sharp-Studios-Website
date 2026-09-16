import { LinkBooksy } from "@/components/link-booksy";
import { SERVICE_NAME, useI18n } from "@/lib/i18n";
import { SERVICES, SHOP } from "@/lib/shop";

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
          {t.servicesKicker}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {t.servicesTitle}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/80">
          <LinkBooksy text={t.servicesLead} />
        </p>
        <ul className="mt-12 divide-y divide-ink/10 overflow-hidden rounded-xl border border-ink/10 bg-white">
          {SERVICES.map((s) => {
            const desc = t[SERVICE_NAME[s.id].d];
            return (
              <li key={s.id} className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0">
                  <p className="font-display text-2xl font-semibold uppercase tracking-wide">
                    {t[SERVICE_NAME[s.id].en]}
                  </p>
                  {desc ? <p className="mt-1 text-sm text-ink/60">{desc}</p> : null}
                  <p className="mt-2 text-sm text-ink/55">
                    {t.servicesLowest} {s.lowest}
                  </p>
                  <span className="mt-3 inline-flex rounded-full bg-[#d7f3f1] px-3 py-1 text-xs font-semibold text-[#1a7a74]">
                    {t.servicesSave}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <p className="text-right">
                    <span className="block text-sm tabular-nums text-ink/40 line-through">{s.price}</span>
                    <span className="block text-lg font-semibold tabular-nums text-oxblood">{s.sale}</span>
                    <span className="text-xs tabular-nums text-ink/50">{s.duration}</span>
                  </p>
                  <a
                    href={SHOP.booksyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-oxblood px-4 py-2 text-[0.7rem] font-semibold text-paper hover:bg-oxblood-dark sm:text-xs"
                  >
                    {t.heroBook}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
