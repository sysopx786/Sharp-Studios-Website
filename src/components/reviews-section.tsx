import { useState } from "react";
import { GoogleG, GoogleStars } from "@/components/brand-marks";
import { loc, useI18n } from "@/lib/i18n";
import { RATING_BARS, REVIEWS, SHOP } from "@/lib/shop";

const REVIEW_PREVIEW = 8;

export function ReviewsSection() {
  const { t, lang } = useI18n();
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <section id="reviews" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
          {t.reviewsKicker}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {t.reviewsTitle}
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/70">
              <GoogleG className="size-5" />
              Google
            </p>
            <div className="mt-4 flex items-end gap-3">
              <p className="font-display text-7xl font-semibold leading-none">{SHOP.rating.toFixed(1)}</p>
              <div className="pb-1">
                <GoogleStars count={5} className="flex gap-0.5" />
                <p className="mt-1 text-sm text-muted">
                  {SHOP.reviewCount} {t.reviewsWord}
                </p>
              </div>
            </div>
            <p className="mt-6 text-xl text-ink">{t.reviewsPeople}</p>
            <p className="mt-3 border-l-2 border-oxblood/40 pl-3 text-sm leading-relaxed text-ink/80">
              “{loc(lang, REVIEWS[0].quoteEn, REVIEWS[0].quoteEs, REVIEWS[0].quotePt)}”
              <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-muted">
                {REVIEWS[0].name} · Google
              </span>
            </p>
            <ul className="mt-6 space-y-2">
              {RATING_BARS.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-3 tabular-nums text-ink/70">{row.stars}</span>
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                    <span
                      className="block h-full rounded-full bg-[#FBBC04]"
                      style={{ width: `${row.pct}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={SHOP.googleWriteReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex min-h-12 items-center justify-center rounded-lg bg-ink px-4 text-center text-sm font-semibold text-paper hover:bg-ink-2"
            >
              {t.reviewsWrite}
            </a>
            <a
              href={SHOP.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex min-h-11 items-center justify-center text-sm text-oxblood underline-offset-4 hover:underline"
            >
              {t.reviewsGoogle}
            </a>
          </div>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {(showAllReviews ? REVIEWS.slice(1) : REVIEWS.slice(1, 1 + REVIEW_PREVIEW)).map((r, i) => (
                <li
                  key={`${r.name}-${i}`}
                  className="flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-5"
                >
                  <div>
                    <GoogleStars count={r.stars} className="flex gap-0.5" />
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">
                      “{loc(lang, r.quoteEn, r.quoteEs, r.quotePt)}”
                    </p>
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-oxblood">
                    {r.name}
                  </p>
                </li>
              ))}
            </ul>
            {REVIEWS.length - 1 > REVIEW_PREVIEW ? (
              <button
                type="button"
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl border border-ink/15 bg-white text-sm font-semibold text-ink hover:border-ink/30"
                onClick={() => setShowAllReviews((open) => !open)}
              >
                {showAllReviews ? t.reviewsLess : t.reviewsMore}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
