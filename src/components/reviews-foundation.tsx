import { loc, useI18n } from "@/lib/i18n";
import { SHOP } from "@/lib/shop";

export function ReviewsFoundation() {
  const { lang } = useI18n();

  return (
    <section id="foundation" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="rounded-2xl border border-ink/15 bg-[#f4efe8] px-4 py-10 sm:px-8 sm:py-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
            {loc(lang, "The foundation", "La base", "A base")}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
            {loc(
              lang,
              `The foundation of ${SHOP.reviewCount} five-star reviews.`,
              `La base de ${SHOP.reviewCount} reseñas de cinco estrellas.`,
              `A base de ${SHOP.reviewCount} avaliações de cinco estrelas.`,
            )}
          </h2>

          <div className="mx-auto mt-8 flex max-w-sm flex-col items-center rounded-full bg-signal px-8 py-6 text-center text-ink">
            <p className="font-display text-5xl font-semibold leading-none">{SHOP.rating}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em]">
              {loc(lang, "Stars", "Estrellas", "Estrelas")}
            </p>
            <p className="mt-2 text-sm italic">
              {loc(lang, "People keep coming back", "La gente vuelve", "O pessoal volta")}
            </p>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            <li className="rounded-full border-2 border-ink bg-white px-6 py-8 text-center md:aspect-square md:flex md:flex-col md:items-center md:justify-center">
              <p className="font-display text-2xl font-semibold uppercase">
                {loc(lang, "Mastery", "Oficio", "Ofício")}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                {loc(
                  lang,
                  "High fades, precision lineups, hot-towel premium sits.",
                  "High fades, perfilados precisos, silla premium con toalla caliente.",
                  "High fades, pezinho preciso, premium com toalha quente.",
                )}
              </p>
            </li>
            <li className="rounded-full border-2 border-signal bg-[#ece7dc] px-6 py-8 text-center md:aspect-square md:flex md:flex-col md:items-center md:justify-center">
              <p className="font-display text-2xl font-semibold uppercase">
                {loc(lang, "Atmosphere", "Ambiente", "Ambiente")}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                {loc(
                  lang,
                  "Family-friendly, exceptionally clean, safe and comfortable for kids.",
                  "Para familias, muy limpio, seguro y cómodo para niños.",
                  "Para famílias, muito limpo, seguro e confortável para crianças.",
                )}
              </p>
            </li>
            <li className="rounded-full border-2 border-ink bg-white px-6 py-8 text-center md:aspect-square md:flex md:flex-col md:items-center md:justify-center md:col-span-1">
              <p className="font-display text-2xl font-semibold uppercase">
                {loc(lang, "Connection", "Conexión", "Conexão")}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                {loc(
                  lang,
                  "Coffee at the door, bilingual chairs, Wilson’s own shop on 5th.",
                  "Café en la puerta, sillas bilingües, la barbería de Wilson en la 5th.",
                  "Café na porta, cadeiras bilíngues, a loja do Wilson na 5th.",
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
