import { LinkBooksy } from "@/components/link-booksy";
import { loc, useI18n } from "@/lib/i18n";
import { asset } from "@/lib/utils";

const BARBERS = [
  {
    id: "wilson",
    src: "/images/barbers/wilson-portrait.jpg",
    name: "Wilson Heredia",
    pos: "object-top",
    role: {
      en: "Owner · Wilson The Barber",
      es: "Dueño · Wilson The Barber",
      pt: "Dono · Wilson The Barber",
    },
    bio: {
      en: "Wilson built the shop. Clients have been in his chair for six, eight years — now the neon says Sharp Studios. You want the owner? Ask for him.",
      es: "Wilson armó la barbería. Hay clientes de seis, ocho años en su silla — ahora el neón dice Sharp Studios. ¿Quieres al owner? Pídelo.",
      pt: "Wilson montou a loja. Tem cliente de seis, oito anos na cadeira dele — agora o neon diz Sharp Studios. Quer o dono? Pede ele.",
    },
    alt: {
      en: "Wilson Heredia, owner of Sharp Studios",
      es: "Wilson Heredia, dueño de Sharp Studios",
      pt: "Wilson Heredia, dono da Sharp Studios",
    },
  },
  {
    id: "alberto",
    src: "/images/barbers/alberto-portrait.jpg",
    name: "Alberto",
    pos: "object-center",
    role: {
      en: "The chairs on 5th",
      es: "Las sillas en la 5th",
      pt: "As cadeiras na 5th",
    },
    bio: {
      en: "Ask for Alberto. Families mention him by name — kids’ cuts, fades, the kind of chair that doesn’t rush you.",
      es: "Pide a Alberto. Las familias lo piden por nombre — cortes de niño, fades, una silla que no te apura.",
      pt: "Peça o Alberto. As famílias pedem ele pelo nome — corte de criança, fade, cadeira que não apressa.",
    },
    alt: {
      en: "Alberto at Sharp Studios",
      es: "Alberto en Sharp Studios",
      pt: "Alberto na Sharp Studios",
    },
  },
  {
    id: "charly",
    src: "/images/barbers/charly-portrait.jpg",
    name: "Charly",
    pos: "object-center",
    role: {
      en: "On the floor",
      es: "En el piso",
      pt: "No salão",
    },
    bio: {
      en: "Ask for Charly too. Parents bring kids back because the cut lands and the room stays easy.",
      es: "Pide a Charly también. Los papás vuelven con los niños porque el corte queda y el local se siente fácil.",
      pt: "Peça o Charly também. Os pais voltam com as crianças porque o corte acerta e a sala fica leve.",
    },
    alt: {
      en: "Charly at Sharp Studios",
      es: "Charly en Sharp Studios",
      pt: "Charly na Sharp Studios",
    },
  },
  {
    id: "jose",
    src: "/images/barbers/jose-portrait.jpg",
    name: "Jose",
    pos: "object-center",
    role: {
      en: "On the floor",
      es: "En el piso",
      pt: "No salão",
    },
    bio: {
      en: "Ask for Jose. Kids and fades — people leave the chair looking Sharp and they book him again.",
      es: "Pide a Jose. Niños y fades — salen Sharp y lo vuelven a reservar.",
      pt: "Peça o Jose. Criança e fade — saem Sharp e marcam de novo.",
    },
    alt: {
      en: "Jose at Sharp Studios",
      es: "Jose en Sharp Studios",
      pt: "Jose na Sharp Studios",
    },
  },
];

export function BarbersSection() {
  const { lang } = useI18n();

  return (
    <section id="barbers" className="scroll-mt-32 bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-oxblood">
          {loc(lang, "The chairs", "Las sillas", "As cadeiras")}
        </p>
        <h2 className="font-display mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] sm:text-5xl">
          {loc(lang, "Ask for a name.", "Pide un nombre.", "Peça um nome.")}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/80">
          <LinkBooksy
            text={loc(
              lang,
              "Ask for Wilson, Alberto, Charly, or Jose — book the chair on Booksy.",
              "Pide a Wilson, Alberto, Charly o Jose — reserva la silla en Booksy.",
              "Peça o Wilson, o Alberto, o Charly ou o Jose — reserve a cadeira no Booksy.",
            )}
          />
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BARBERS.map((barber) => (
            <li key={barber.id} className="overflow-hidden rounded-xl border border-ink/10 bg-white">
              <img
                src={asset(barber.src)}
                alt={loc(lang, barber.alt.en, barber.alt.es, barber.alt.pt)}
                loading="lazy"
                decoding="async"
                className={`aspect-[4/5] w-full object-cover ${barber.pos}`}
              />
              <div className="p-5 sm:p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-oxblood">
                  {loc(lang, barber.role.en, barber.role.es, barber.role.pt)}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold uppercase leading-tight">
                  {barber.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                  {loc(lang, barber.bio.en, barber.bio.es, barber.bio.pt)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
