import { createContext, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es" | "pt";

export const STORAGE_KEY = "sharp-studios-lang";

export function htmlLangAttr(lang: Lang) {
  return lang === "pt" ? "pt-BR" : lang;
}

export function readStoredLang(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en" || stored === "pt") return stored;
  } catch {
    /* private mode */
  }
  try {
    const match = document.cookie.match(/(?:^|; )sharp-studios-lang=([^;]*)/);
    const cookie = match ? decodeURIComponent(match[1]) : "";
    if (cookie === "es" || cookie === "en" || cookie === "pt") return cookie;
  } catch {
    /* ignore */
  }
  return null;
}

function persistLang(next: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* private mode */
  }
  try {
    document.cookie = `${STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
  } catch {
    /* ignore */
  }
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  return readStoredLang() ?? "en";
}

const copy = {
  en: {
    skip: "Skip to content",
    navHome: "Home",
    navAbout: "The shop",
    navBarbers: "The barbers",
    navFoundation: "82 five-star reviews",
    navWeek: "The week",
    navServices: "Services",
    navGallery: "Gallery",
    navFeatured: "The cut",
    navCuts: "The work",
    navReviews: "Reviews",
    navVisit: "Visit",
    navBook: "Book a chair",
    call: "Call",
    text: "Text",
    langLabel: "Español",
    open: "Open",
    closed: "Closed",
    opensAt: "Opens at",
    closesAt: "Closes at",
    walkins: "Book on Booksy · Closed Sun & Tue",
    heroSoundOn: "Sound on",
    heroSoundOff: "Sound off",
    heroKicker: "North 5th Street · Reading, PA",
    heroTitle: "Sharp Studios",
    heroSub: "Barbershop",
    heroLead:
      "Fades, beards, kids’ cuts, and a chair that already knows your name. Wilson’s shop. Bookings are online only — Booksy. No calls or texts. Closed Sunday and Tuesday.",
    heroBook: "Book on Booksy",
    bookHint: "Online only · No calls or texts",
    heroHours: "Hours & map",
    aboutKicker: "About Sharp Studios",
    aboutTitle: "Wilson’s shop on 5th.",
    aboutP1:
      "Sharp Studios is Wilson Heredia’s own chair in downtown Reading — 157 North 5th, right at Walnut. Clients who’ve sat with him for years finally have a shop with his name on the neon.",
    aboutP2:
      "The room is clean, kids-friendly, and they meet you with coffee. Fades, beards, shape-ups, and a premium sit with a hot towel. Spanish and English in the chairs. Every chair is booked on Booksy — online only, no calls or texts.",
    aboutP3:
      "Ask for Wilson. Ask for Alberto. Ask for Charly or Jose. Or take the next open seat. The cut is the point. The shop is the reason people stay.",
    aboutStat1Value: "5.0",
    aboutStat1Label: "stars from 82 reviews",
    aboutStat2Value: "6+",
    aboutStat2Label: "years in the same chairs",
    aboutStat3Value: "5",
    aboutStat3Label: "days a week",
    servicesKicker: "The menu",
    servicesTitle: "Fades, beards, kids.",
    servicesLead:
      "Neighborhood prices. Cash and cards. Book every chair on Booksy — online only. Save up to 10%.",
    svc_premium: "Premium",
    svc_premium_d: "",
    svc_combo: "Men’s Haircut w/ Beard",
    svc_combo_d: "",
    svc_mens: "Men’s Haircut (Regular)",
    svc_mens_d: "No beard no eyebrows",
    svc_kids: "Kids Haircut",
    svc_kids_d: "",
    svc_lineup: "Shape Up",
    svc_lineup_d: "",
    svc_beard: "Trim beard",
    svc_beard_d: "",
    svc_brows: "Eyebrows",
    svc_brows_d: "",
    servicesSave: "Save up to 10%",
    servicesLowest: "Lowest price in 30 days, before discount:",
    mins: "min",
    galleryKicker: "Gallery",
    galleryMark: "The mark.",
    galleryTitle: "The work.",
    galleryShop: "The shop.",
    videosKicker: "Reels",
    videosTitle: "From the chair.",
    videosLead: "Hit play. The door on 5th, the floor, then the cuts. More on Instagram.",
    videosVibe: "The vibe.",
    videosWork: "The work.",
    featuredCut: "The design",
    watchTiktok: "Watch on TikTok",
    watchIg: "Open Instagram",
    reviewsKicker: "From the chair",
    reviewsTitle: "What Reading says.",
    reviewsPeople: "People keep coming back",
    reviewsGoogle: "See Google reviews",
    reviewsWrite: "Write a Google review",
    reviewsWord: "reviews",
    reviewsMore: "More Google reviews",
    reviewsLess: "Show fewer",
    visitKicker: "Find us",
    visitTitle: "157 North 5th Street.",
    visitLead:
      "Look for the neon. Fifth and Walnut, downtown Reading. Street parking. Closed Sunday and Tuesday.",
    hoursTitle: "Hours",
    directions: "Get directions",
    callShop: "Call the shop",
    textShop: "Text us",
    textHint: "Text the shop",
    owner: "Owner",
    bookKicker: "Save a chair",
    bookTitle: "Book on Booksy.",
    bookLead: "Every chair is booked on Booksy. Online only — no calls or texts.",
    bookName: "Your name",
    bookPhone: "Phone",
    bookService: "Service",
    bookBarber: "Barber",
    bookDate: "Date",
    bookTime: "Time",
    bookNotes: "Anything we should know",
    bookNotesPh: "Fade, first visit…",
    bookSubmit: "Open Booksy",
    bookSending: "Opening…",
    bookError: "Couldn’t open Booksy. Call the shop.",
    bookThanks: "See you in the chair.",
    bookThanksLead: "Booksy has the next open seat.",
    bookAnother: "Book again",
    bookRecent: "Your requests on this phone",
    barber_any: "Next available",
    barber_wilson: "Wilson",
    barber_alberto: "Alberto",
    barber_charly: "Charly",
    day_sun: "Sunday",
    day_mon: "Monday",
    day_tue: "Tuesday",
    day_wed: "Wednesday",
    day_thu: "Thursday",
    day_fri: "Friday",
    day_sat: "Saturday",
    footerTag: "Reading, Pennsylvania",
    footerRights: "Walk-ins welcome. Se habla español.",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    closePhoto: "Close photo",
  },
  es: {
    skip: "Saltar al contenido",
    navHome: "Inicio",
    navAbout: "La barbería",
    navBarbers: "Los barberos",
    navFoundation: "82 reseñas de cinco estrellas",
    navWeek: "La semana",
    navServices: "Servicios",
    navGallery: "Galería",
    navFeatured: "El corte",
    navCuts: "El trabajo",
    navReviews: "Opiniones",
    navVisit: "Visítanos",
    navBook: "Reservar silla",
    call: "Llamar",
    text: "Texto",
    langLabel: "Português",
    open: "Abierto",
    closed: "Cerrado",
    opensAt: "Abre a las",
    closesAt: "Cierra a las",
    walkins: "Reservar en Booksy · Cerrado dom y mar",
    heroSoundOn: "Con sonido",
    heroSoundOff: "Sin sonido",
    heroKicker: "North 5th Street · Reading, PA",
    heroTitle: "Sharp Studios",
    heroSub: "Barbería",
    heroLead:
      "Fades, barbas, cortes de niño, y una silla que ya sabe cómo te llamas. La barbería de Wilson. Reservas solo en línea — Booksy. Sin llamadas ni textos. Cerrado domingo y martes.",
    heroBook: "Reservar en Booksy",
    bookHint: "Solo en línea · Sin llamadas ni textos",
    heroHours: "Horario y mapa",
    aboutKicker: "Sobre Sharp Studios",
    aboutTitle: "La barbería de Wilson en la 5th.",
    aboutP1:
      "Sharp Studios es la silla de Wilson Heredia en el centro de Reading — 157 North 5th, en Walnut. Clientes de años, por fin con el neón de él.",
    aboutP2:
      "El local está limpio, para niños, y te reciben con café. Fades, barbas, shape-ups, y un servicio premium con toalla caliente. Español e inglés en las sillas. Toda silla se reserva en Booksy — solo en línea, sin llamadas ni textos.",
    aboutP3:
      "Pide a Wilson. Pide a Alberto. Pide a Charly o Jose. O tómate la siguiente silla. El corte es el punto. La barbería es por qué la gente se queda.",
    aboutStat1Value: "5.0",
    aboutStat1Label: "estrellas en 82 reseñas",
    aboutStat2Value: "6+",
    aboutStat2Label: "años en las mismas sillas",
    aboutStat3Value: "5",
    aboutStat3Label: "días a la semana",
    servicesKicker: "El menú",
    servicesTitle: "Fades, barbas, niños.",
    servicesLead:
      "Precios de barrio. Efectivo y tarjeta. Reserva cada silla en Booksy — solo en línea. Ahorra hasta 10%.",
    svc_premium: "Premium",
    svc_premium_d: "",
    svc_combo: "Corte de caballero con barba",
    svc_combo_d: "",
    svc_mens: "Corte de caballero (regular)",
    svc_mens_d: "Sin barba, sin cejas",
    svc_kids: "Corte de niño",
    svc_kids_d: "",
    svc_lineup: "Shape Up",
    svc_lineup_d: "",
    svc_beard: "Arreglo de barba",
    svc_beard_d: "",
    svc_brows: "Cejas",
    svc_brows_d: "",
    servicesSave: "Ahorra hasta 10%",
    servicesLowest: "Precio más bajo en 30 días, antes del descuento:",
    mins: "min",
    galleryKicker: "Galería",
    galleryMark: "La marca.",
    galleryTitle: "El trabajo.",
    galleryShop: "La barbería.",
    videosKicker: "Reels",
    videosTitle: "Desde la silla.",
    videosLead: "Dale play. La puerta en la 5th, el piso, y después los cortes. Más en Instagram.",
    videosVibe: "El ambiente.",
    videosWork: "El trabajo.",
    featuredCut: "El diseño",
    watchTiktok: "Ver en TikTok",
    watchIg: "Abrir Instagram",
    reviewsKicker: "Desde la silla",
    reviewsTitle: "Lo que dice Reading.",
    reviewsPeople: "La gente vuelve",
    reviewsGoogle: "Ver reseñas de Google",
    reviewsWrite: "Escribir una reseña",
    reviewsWord: "reseñas",
    reviewsMore: "Más reseñas de Google",
    reviewsLess: "Ver menos",
    visitKicker: "Encuéntranos",
    visitTitle: "157 North 5th Street.",
    visitLead:
      "Busca el neón. Fifth y Walnut, centro de Reading. Estacionamiento en la calle. Cerrado domingo y martes.",
    hoursTitle: "Horario",
    directions: "Cómo llegar",
    callShop: "Llamar a la barbería",
    textShop: "Envíanos un texto",
    textHint: "Texto a la barbería",
    owner: "Propietario",
    bookKicker: "Guarda una silla",
    bookTitle: "Reserva en Booksy.",
    bookLead: "Toda silla se reserva en Booksy. Solo en línea — sin llamadas ni textos.",
    bookName: "Tu nombre",
    bookPhone: "Teléfono",
    bookService: "Servicio",
    bookBarber: "Barbero",
    bookDate: "Fecha",
    bookTime: "Hora",
    bookNotes: "Algo que debamos saber",
    bookNotesPh: "Fade, primera visita…",
    bookSubmit: "Abrir Booksy",
    bookSending: "Abriendo…",
    bookError: "No se pudo abrir Booksy. Llama a la barbería.",
    bookThanks: "Te vemos en la silla.",
    bookThanksLead: "Booksy tiene el siguiente turno.",
    bookAnother: "Reservar otra vez",
    bookRecent: "Tus pedidos en este teléfono",
    barber_any: "El siguiente disponible",
    barber_wilson: "Wilson",
    barber_alberto: "Alberto",
    barber_charly: "Charly",
    day_sun: "Domingo",
    day_mon: "Lunes",
    day_tue: "Martes",
    day_wed: "Miércoles",
    day_thu: "Jueves",
    day_fri: "Viernes",
    day_sat: "Sábado",
    footerTag: "Reading, Pennsylvania",
    footerRights: "Walk-ins bienvenidos. English spoken here.",
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    closePhoto: "Cerrar foto",
  },
  pt: {
    skip: "Pular para o conteúdo",
    navHome: "Início",
    navAbout: "A barbearia",
    navBarbers: "Os barbeiros",
    navFoundation: "82 avaliações de cinco estrelas",
    navWeek: "A semana",
    navServices: "Serviços",
    navGallery: "Galeria",
    navFeatured: "O corte",
    navCuts: "O trabalho",
    navReviews: "Avaliações",
    navVisit: "Visite",
    navBook: "Reservar cadeira",
    call: "Ligar",
    text: "Texto",
    langLabel: "English",
    open: "Aberto",
    closed: "Fechado",
    opensAt: "Abre às",
    closesAt: "Fecha às",
    walkins: "Reservar no Booksy · Fechado dom e ter",
    heroSoundOn: "Com som",
    heroSoundOff: "Sem som",
    heroKicker: "North 5th Street · Reading, PA",
    heroTitle: "Sharp Studios",
    heroSub: "Barbearia",
    heroLead:
      "Fades, barbas, cortes infantis, e uma cadeira que já sabe o seu nome. A loja do Wilson. Reservas só online — Booksy. Sem ligações nem textos. Fechado domingo e terça.",
    heroBook: "Reservar no Booksy",
    bookHint: "Só online · Sem ligações nem textos",
    heroHours: "Horário e mapa",
    aboutKicker: "Sobre Sharp Studios",
    aboutTitle: "A loja do Wilson na 5th.",
    aboutP1:
      "Sharp Studios é a cadeira do Wilson Heredia no centro de Reading — 157 North 5th, na Walnut. Cliente antigo, agora com o neon dele.",
    aboutP2:
      "O espaço é limpo, bom para criança, e te recebem com café. Fades, barbas, pezinho, e um premium com toalha quente. Espanhol e inglês nas cadeiras. Toda cadeira se reserva no Booksy — só online, sem ligações nem textos.",
    aboutP3:
      "Peça o Wilson. Peça o Alberto. Peça o Charly ou o Jose. Ou pegue a próxima cadeira. O corte é o ponto. A loja é o motivo de o pessoal ficar.",
    aboutStat1Value: "5.0",
    aboutStat1Label: "estrelas em 82 avaliações",
    aboutStat2Value: "6+",
    aboutStat2Label: "anos nas mesmas cadeiras",
    aboutStat3Value: "5",
    aboutStat3Label: "dias por semana",
    servicesKicker: "O cardápio",
    servicesTitle: "Fades, barbas, crianças.",
    servicesLead:
      "Preço de bairro. Dinheiro e cartão. Reserve cada cadeira no Booksy — só online. Economize até 10%.",
    svc_premium: "Premium",
    svc_premium_d: "",
    svc_combo: "Corte masculino com barba",
    svc_combo_d: "",
    svc_mens: "Corte masculino (regular)",
    svc_mens_d: "Sem barba, sem sobrancelha",
    svc_kids: "Corte infantil",
    svc_kids_d: "",
    svc_lineup: "Pezinho",
    svc_lineup_d: "",
    svc_beard: "Barba",
    svc_beard_d: "",
    svc_brows: "Sobrancelhas",
    svc_brows_d: "",
    servicesSave: "Economize até 10%",
    servicesLowest: "Menor preço em 30 dias, antes do desconto:",
    mins: "min",
    galleryKicker: "Galeria",
    galleryMark: "A marca.",
    galleryTitle: "O trabalho.",
    galleryShop: "A barbearia.",
    videosKicker: "Reels",
    videosTitle: "Da cadeira.",
    videosLead: "Dá play. A porta na 5th, o salão, e depois os cortes. Mais no Instagram.",
    videosVibe: "A vibe.",
    videosWork: "O trabalho.",
    featuredCut: "O desenho",
    watchTiktok: "Ver no TikTok",
    watchIg: "Abrir Instagram",
    reviewsKicker: "Da cadeira",
    reviewsTitle: "O que Reading diz.",
    reviewsPeople: "O pessoal volta",
    reviewsGoogle: "Ver avaliações do Google",
    reviewsWrite: "Escrever uma avaliação",
    reviewsWord: "avaliações",
    reviewsMore: "Mais avaliações do Google",
    reviewsLess: "Ver menos",
    visitKicker: "Encontre a gente",
    visitTitle: "157 North 5th Street.",
    visitLead:
      "Procure o neon. Fifth e Walnut, centro de Reading. Estacionamento na rua. Fechado domingo e terça.",
    hoursTitle: "Horário",
    directions: "Como chegar",
    callShop: "Ligar para a barbearia",
    textShop: "Manda um texto",
    textHint: "Texto para a loja",
    owner: "Proprietário",
    bookKicker: "Guarde uma cadeira",
    bookTitle: "Reserve no Booksy.",
    bookLead: "Toda cadeira se reserva no Booksy. Só online — sem ligações nem textos.",
    bookName: "Seu nome",
    bookPhone: "Telefone",
    bookService: "Serviço",
    bookBarber: "Barbeiro",
    bookDate: "Data",
    bookTime: "Hora",
    bookNotes: "Algo que a gente deva saber",
    bookNotesPh: "Fade, primeira visita…",
    bookSubmit: "Abrir Booksy",
    bookSending: "Abrindo…",
    bookError: "Não deu para abrir o Booksy. Ligue para a loja.",
    bookThanks: "Te vemos na cadeira.",
    bookThanksLead: "O Booksy tem o próximo horário.",
    bookAnother: "Reservar de novo",
    bookRecent: "Seus pedidos neste telefone",
    barber_any: "O próximo disponível",
    barber_wilson: "Wilson",
    barber_alberto: "Alberto",
    barber_charly: "Charly",
    day_sun: "Domingo",
    day_mon: "Segunda",
    day_tue: "Terça",
    day_wed: "Quarta",
    day_thu: "Quinta",
    day_fri: "Sexta",
    day_sat: "Sábado",
    footerTag: "Reading, Pennsylvania",
    footerRights: "Walk-ins bem-vindos. Se habla español.",
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    closePhoto: "Fechar foto",
  },
} as const;

export type Copy = { [K in keyof typeof copy.en]: string };

const I18nContext = createContext<{
  lang: Lang;
  t: Copy;
  setLang: (lang: Lang) => void;
} | null>(null);

export const LANG_ORDER: Lang[] = ["en", "es", "pt"];

export const LANG_SHORT: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

export const LANG_NAME: Record<Lang, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

export function otherLangs(current: Lang): Lang[] {
  return LANG_ORDER.filter((l) => l !== current);
}

export function loc(lang: Lang, en: string, es: string, pt?: string) {
  if (lang === "es") return es;
  if (lang === "pt") return pt ?? en;
  return en;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useLayoutEffect(() => {
    document.documentElement.lang = htmlLangAttr(lang);
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: copy[lang],
      setLang: (next: Lang) => {
        setLangState(next);
        persistLang(next);
      },
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

export const SERVICE_NAME: Record<string, { en: keyof Copy; d: keyof Copy }> = {
  premium: { en: "svc_premium", d: "svc_premium_d" },
  mens: { en: "svc_mens", d: "svc_mens_d" },
  kids: { en: "svc_kids", d: "svc_kids_d" },
  lineup: { en: "svc_lineup", d: "svc_lineup_d" },
  beard: { en: "svc_beard", d: "svc_beard_d" },
  brows: { en: "svc_brows", d: "svc_brows_d" },
  combo: { en: "svc_combo", d: "svc_combo_d" },
};

export const BARBER_NAME: Record<string, keyof Copy> = {
  any: "barber_any",
  wilson: "barber_wilson",
  alberto: "barber_alberto",
  charly: "barber_charly",
};

export const DAY_NAME: (keyof Copy)[] = [
  "day_sun",
  "day_mon",
  "day_tue",
  "day_wed",
  "day_thu",
  "day_fri",
  "day_sat",
];
