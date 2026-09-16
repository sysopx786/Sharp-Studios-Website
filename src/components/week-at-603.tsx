import { BooksyHref, LinkBooksy } from "@/components/link-booksy";
import { loc, useI18n, type Lang } from "@/lib/i18n";
import { hoursByKey, type WeekdayKey } from "@/lib/shop";

const DAY_ORDER: WeekdayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const DAY_SHORT: Record<WeekdayKey, Record<Lang, string>> = {
  sun: { en: "Sun", es: "Dom", pt: "Dom" },
  mon: { en: "Mon", es: "Lun", pt: "Seg" },
  tue: { en: "Tue", es: "Mar", pt: "Ter" },
  wed: { en: "Wed", es: "Mié", pt: "Qua" },
  thu: { en: "Thu", es: "Jue", pt: "Qui" },
  fri: { en: "Fri", es: "Vie", pt: "Sex" },
  sat: { en: "Sat", es: "Sáb", pt: "Sáb" },
};

const DAY_FULL: Record<WeekdayKey, Record<Lang, string>> = {
  sun: { en: "Sunday", es: "Domingo", pt: "Domingo" },
  mon: { en: "Monday", es: "Lunes", pt: "Segunda" },
  tue: { en: "Tuesday", es: "Martes", pt: "Terça" },
  wed: { en: "Wednesday", es: "Miércoles", pt: "Quarta" },
  thu: { en: "Thursday", es: "Jueves", pt: "Quinta" },
  fri: { en: "Friday", es: "Viernes", pt: "Sexta" },
  sat: { en: "Saturday", es: "Sábado", pt: "Sábado" },
};

export function WeekAt603() {
  const { lang } = useI18n();
  const sat = hoursByKey("sat");
  const mon = hoursByKey("mon");
  const thu = hoursByKey("thu");
  const fri = hoursByKey("fri");

  return (
    <section id="week" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="overflow-hidden rounded-2xl border border-ink/15 bg-[#f4efe8] px-4 py-10 sm:px-8 sm:py-12">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
            {loc(lang, "The week", "La semana", "A semana")}
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
            {loc(lang, "The week on 5th.", "La semana en la 5th.", "A semana na 5th.")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/80">
            {loc(
              lang,
              `Closed Sunday and Tuesday. Monday and Wednesday ${mon.openLabel}–${mon.closeLabel}. Thursday until ${thu.closeLabel}. Friday ${fri.openLabel}–${fri.closeLabel}. Saturday ${sat.openLabel}–${sat.closeLabel}.`,
              `Cerrado domingo y martes. Lunes y miércoles ${mon.openLabel}–${mon.closeLabel}. Jueves hasta las ${thu.closeLabel}. Viernes ${fri.openLabel}–${fri.closeLabel}. Sábado ${sat.openLabel}–${sat.closeLabel}.`,
              `Fechado domingo e terça. Segunda e quarta ${mon.openLabel}–${mon.closeLabel}. Quinta até ${thu.closeLabel}. Sexta ${fri.openLabel}–${fri.closeLabel}. Sábado ${sat.openLabel}–${sat.closeLabel}.`,
            )}
          </p>

          <div className="mt-10">
            <div className="flex overflow-hidden rounded-full border border-ink/20">
              {DAY_ORDER.map((key) => {
                const hours = hoursByKey(key);
                const peak = key === "sat";
                if (hours.closed) {
                  return (
                    <div
                      key={key}
                      className="flex min-h-12 flex-1 items-center justify-center border-r border-white/15 bg-ink/55 px-1 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-paper/55 last:border-r-0 sm:min-h-14 sm:px-2 sm:text-sm"
                    >
                      <span className="md:hidden">{DAY_SHORT[key][lang]}</span>
                      <span className="hidden md:inline">{DAY_FULL[key][lang]}</span>
                    </div>
                  );
                }
                return (
                  <div
                    key={key}
                    className={
                      peak
                        ? "flex min-h-12 flex-1 items-center justify-center bg-signal px-1 text-center text-[0.7rem] font-bold uppercase tracking-wide text-ink sm:min-h-14 sm:px-2 sm:text-sm"
                        : "flex min-h-12 flex-1 items-center justify-center border-r border-white/15 bg-ink px-1 text-center text-[0.7rem] font-semibold uppercase tracking-wide text-paper last:border-r-0 sm:min-h-14 sm:px-2 sm:text-sm"
                    }
                  >
                    <span className="md:hidden">{DAY_SHORT[key][lang]}</span>
                    <span className="hidden md:inline">{DAY_FULL[key][lang]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li className="rounded-xl border border-ink/10 bg-white px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-oxblood">
                {loc(lang, "Open days", "Días abiertos", "Dias abertos")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Walk-ins welcome", "Walk-ins bienvenidos", "Walk-ins bem-vindos")}
              </p>
              <p className="mt-1 text-sm text-ink/70">
                {loc(
                  lang,
                  `Mon & Wed ${mon.openLabel}–${mon.closeLabel}. Thu ${thu.openLabel}–${thu.closeLabel}.`,
                  `Lun y mié ${mon.openLabel}–${mon.closeLabel}. Jue ${thu.openLabel}–${thu.closeLabel}.`,
                  `Seg e qua ${mon.openLabel}–${mon.closeLabel}. Qui ${thu.openLabel}–${thu.closeLabel}.`,
                )}
              </p>
            </li>
            <li className="rounded-xl border border-signal bg-signal/25 px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink">
                <BooksyHref>Booksy</BooksyHref>
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Peak hours. Booking recommended.", "Hora pico. Mejor reservar.", "Horário de pico. Melhor reservar.")}
              </p>
              <p className="mt-1 text-sm text-ink/80">
                {loc(
                  lang,
                  "Save a chair when Thursday–Saturday stack.",
                  "Guarda silla cuando jueves a sábado se llenan.",
                  "Guarde cadeira quando quinta a sábado lotam.",
                )}
              </p>
            </li>
            <li className="rounded-xl border border-ink/10 bg-white px-4 py-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-oxblood">
                {loc(lang, "Sunday & Tuesday", "Domingo y martes", "Domingo e terça")}
              </p>
              <p className="mt-2 text-lg font-semibold">
                {loc(lang, "Closed", "Cerrado", "Fechado")}
              </p>
              <p className="mt-1 text-sm text-ink/70">
                <LinkBooksy
                  text={loc(
                    lang,
                    "Book the next open chair on Booksy.",
                    "Reserva la siguiente silla en Booksy.",
                    "Reserve a próxima cadeira no Booksy.",
                  )}
                />
              </p>
            </li>
          </ul>

          <p className="mt-8 text-sm italic text-ink/70">
            {loc(
              lang,
              "No appointment required, but booking a chair beats waiting.",
              "No hace falta cita, pero reservar silla gana a la espera.",
              "Não precisa de hora marcada, mas reservar cadeira ganha da fila.",
            )}
          </p>
          <p className="mt-3 text-sm font-medium text-ink">
            {loc(lang, "Visit us at 157 N 5th St, Reading, PA 19601.", "Visítanos en 157 N 5th St, Reading, PA 19601.", "Visite 157 N 5th St, Reading, PA 19601.")}
          </p>
        </div>
      </div>
    </section>
  );
}
