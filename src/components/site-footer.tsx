import { Clock, MapPin, MessageSquare, Phone } from "lucide-react";
import { BarberPole } from "@/components/barber-pole";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { DAY_NAME, loc, useI18n } from "@/lib/i18n";
import { HOUR_LABELS, SHOP, WEEK_HOURS } from "@/lib/shop";
import { asset } from "@/lib/utils";

export function SiteFooter() {
  const { t, lang } = useI18n();
  return (
    <footer id="visit" className="scroll-mt-32">
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
              {t.visitKicker}
            </p>
            <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
              {t.visitTitle}
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink/80">{t.visitLead}</p>
            <div className="mt-8 flex flex-col gap-3 text-base">
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-oxblood"
              >
                <MapPin className="size-4 text-oxblood" />
                {SHOP.address}, {SHOP.city}
              </a>
              <a
                href={`tel:${SHOP.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-oxblood"
              >
                <Phone className="size-4 text-oxblood" />
                {SHOP.phone}
              </a>
              <a
                href={SHOP.smsHref}
                className="inline-flex items-center gap-2 hover:text-oxblood"
              >
                <MessageSquare className="size-4 text-oxblood" />
                {t.textHint} · {SHOP.sms}
              </a>
            </div>
            <h3 className="mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              <Clock className="size-4" />
              {t.hoursTitle}
            </h3>
            <ul className="mt-4 divide-y divide-ink/10">
              {WEEK_HOURS.map((h, i) => (
                <li key={h.key} className="flex items-center justify-between py-2.5 text-sm">
                  <span>{t[DAY_NAME[i]]}</span>
                  <span className="tabular-nums text-ink/80">
                    {HOUR_LABELS[i].closed
                      ? t.closed
                      : `${HOUR_LABELS[i].open} – ${HOUR_LABELS[i].close}`}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              <Button asChild variant="primary" size="sm">
                <a href={SHOP.booksyUrl} target="_blank" rel="noreferrer">
                  {t.heroBook}
                </a>
              </Button>
              <Button asChild variant="line" size="sm">
                <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer">
                  {t.directions}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={asset("/images/reels/reel-entrance.jpg")}
              alt={loc(lang, "Sharp Studios storefront", "Fachada de Sharp Studios", "Fachada da Sharp Studios")}
              width={720}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full rounded-xl object-cover object-top"
            />
            <div className="overflow-hidden rounded-xl border border-ink/10">
              <iframe
                title={SHOP.address}
                src={SHOP.mapsEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-xl border border-ink/10 bg-white p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {t.owner}
              </p>
              <p className="mt-2 text-lg font-semibold">{SHOP.ownerName}</p>
              <a
                href={SHOP.booksyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-oxblood hover:underline"
              >
                {t.heroBook}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-line bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <BarberPole height={48} />
            <div>
              <p className="font-display text-2xl font-semibold uppercase tracking-[0.08em]">
                Sharp Studios
              </p>
              <p className="mt-1 text-sm text-cream/80">{t.footerTag}</p>
              <p className="mt-3 text-sm text-muted">{t.footerRights}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
