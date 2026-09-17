import type { Locale } from "@/i18n/config";

/**
 * Central content for the HILINAI site.
 * Every string lives here in both languages so copy edits stay in one place.
 *
 * Brand naming (from Maria Elena's brand guide, "HILINAI web.docx"):
 * the company and brand name is HILINAI. Hilinai.me is the domain only,
 * never the brand name. The method is the Hilinai™ Method.
 */

export const brand = {
  name: "HILINAI",
  method: "Hilinai™ Method",
  practitioner: "Maria Elena Acevedo",
  roleEs: "Fundadora de Hilinai | Creadora del Método Hilinai™",
  roleEn: "Founder of Hilinai | Creator of the Hilinai™ Method",
  legalName: "Maria Elena Acevedo LLC",
  availabilityEs: "Virtual · Español e inglés",
  availabilityEn: "Virtual · English & Spanish",
  whatsapp: "+17864844514",
  whatsappDisplay: "+1 (786) 484-4514",
  email: "hilinai2me@gmail.com",
  instagram: "https://www.instagram.com/hilinai_me/",
  facebook: "https://www.facebook.com/people/Hilinai-Me/61555591816094/",
  tiktok: "", // TODO: add TikTok URL
  youtube: "", // TODO: add YouTube URL
};

/** Fixed English brand slogan. Used as-is in both locales, like a wordmark. */
export const slogan = "TRUST YOUR CONFIDENCE";

/** Brand message shown under the logo in the footer. Mirrors the hero headline. */
export const tagline: Record<Locale, string> = {
  es: "Vuelve a ti. Camina con confianza.",
  en: "Come back to yourself. Walk with confidence.",
};

/** Cal.com booking. Namespace and calLink come from her Cal embed snippet. */
export const booking = {
  namespace: "30min",
  calLink: "maria-elena-acevedo/30min",
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${brand.whatsapp.replace(/[^\d]/g, "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type SocialKey =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "whatsapp";

export const socials: { label: string; href: string; key: SocialKey }[] = [
  { label: "Instagram", href: brand.instagram, key: "instagram" },
  { label: "Facebook", href: brand.facebook, key: "facebook" },
  { label: "TikTok", href: brand.tiktok, key: "tiktok" },
  { label: "YouTube", href: brand.youtube, key: "youtube" },
].filter((s) => s.href) as { label: string; href: string; key: SocialKey }[];

export type ServiceSlug =
  | "single-session"
  | "ten-session-package"
  | "membership-program";

export interface ServiceCopy {
  name: string;
  tagline: string;
  summary: string;
  format: string;
  duration: string;
  price: string;
  priceNote?: string;
  forWho: string;
  includes: string[];
  outcomes: string[];
}

export interface Service {
  slug: ServiceSlug;
  icon: string;
  featured?: boolean;
  es: ServiceCopy;
  en: ServiceCopy;
}

export const services: Service[] = [
  {
    slug: "single-session",
    icon: "spark",
    es: {
      name: "Sesión Individual",
      tagline:
        "Una sesión de una hora para explorar lo que está presente, ganar perspectiva y reconocer qué está pidiendo tu atención.",
      summary:
        "Una sesión individual de una hora para mirar tu momento actual desde otra perspectiva. A través de la conversación y algunas preguntas, reconocemos juntas los patrones y recursos que ya tienes.",
      format: "Individual, en línea",
      duration: "1 hora",
      price: "100 USD",
      forWho:
        "Para quien quiere empezar, atender un momento puntual o sentir cómo es trabajar juntas antes de comprometerse con un paquete.",
      includes: [
        "Sesión individual de 60 minutos",
        "Espacio de escucha sin juicio",
        "Preguntas y perspectiva sobre tu momento actual",
        "Alguna práctica o herramienta para llevar contigo",
      ],
      outcomes: [
        "Más claridad sobre lo que estás atravesando",
        "Una perspectiva distinta sobre tu propia historia",
        "Un primer paso hacia el cambio que buscas",
      ],
    },
    en: {
      name: "Single Session",
      tagline:
        "A one hour individual session to explore what is present, gain perspective, and recognize what may be asking for your attention.",
      summary:
        "A one on one session of one hour to look at your current moment from a different perspective. Through conversation and a few questions, we recognize together the patterns and resources you already have.",
      format: "One on one, online",
      duration: "1 hour",
      price: "100 USD",
      forWho:
        "For anyone who wants to begin, tend to a specific moment, or feel what working together is like before committing to a package.",
      includes: [
        "A 60 minute one on one session",
        "A space to be heard without judgment",
        "Questions and perspective on your current moment",
        "A practice or tool to take with you",
      ],
      outcomes: [
        "More clarity about what you are going through",
        "A different perspective on your own story",
        "A first step toward the change you are looking for",
      ],
    },
  },
  {
    slug: "ten-session-package",
    icon: "sun",
    featured: true,
    es: {
      name: "Paquete de 10 Sesiones",
      tagline:
        "Una serie de sesiones individuales para quienes quieren tiempo y espacio para explorar patrones, profundizar el reconocimiento y poner en práctica lo que descubren.",
      summary:
        "Diez sesiones individuales de una hora, a lo largo del tiempo. El camino completo de Hilinai: reconocimiento, empoderamiento y confianza, a un ritmo humano.",
      format: "Individual, en línea, sesiones semanales o quincenales",
      duration: "10 sesiones de 1 hora",
      price: "920 USD",
      priceNote: "Pago único, equivale a 92 USD por sesión.",
      forWho:
        "Para quien está listo para mirar hacia dentro con honestidad y sostener el proceso hasta ver frutos.",
      includes: [
        "Diez sesiones individuales de 60 minutos",
        "Trabajo continuo sobre los patrones que se repiten",
        "Prácticas y ejercicios entre sesiones",
        "Apoyo breve por mensaje entre encuentros",
      ],
      outcomes: [
        "Una relación más amable y firme contigo misma",
        "Patrones antiguos que dejan de repetirse",
        "Herramientas que quedan contigo después del proceso",
      ],
    },
    en: {
      name: "10 Session Package",
      tagline:
        "A series of individual sessions for those who want the time and space to explore patterns, deepen recognition, and put new awareness into practice.",
      summary:
        "Ten one on one sessions of one hour, over time. The full Hilinai path: recognition, empowerment and confidence, at a human pace.",
      format: "One on one, online, weekly or every two weeks",
      duration: "10 sessions of 1 hour",
      price: "920 USD",
      priceNote: "Paid in full, works out to 92 USD per session.",
      forWho:
        "For anyone ready to look inward with honesty and stay with the process until it bears fruit.",
      includes: [
        "Ten 60 minute one on one sessions",
        "Ongoing work with the patterns that keep repeating",
        "Practices and exercises between sessions",
        "Brief message support between meetings",
      ],
      outcomes: [
        "A kinder and firmer relationship with yourself",
        "Old patterns that stop repeating",
        "Tools that stay with you after the process ends",
      ],
    },
  },
  {
    slug: "membership-program",
    icon: "circle",
    es: {
      name: "Programa de Membresía",
      tagline: "Lecciones, programas, ejercicios y una comunidad que camina contigo.",
      summary:
        "Un espacio para la exploración continua, con lecciones, ejercicios guiados, herramientas prácticas y programas que invitan a mirar tus experiencias desde otras perspectivas y a poner en práctica lo que reconoces. También será un espacio de comunidad: aprender, reflexionar y explorar junto a otras personas mientras sigues tu propio camino.",
      format: "En línea, a tu ritmo, con comunidad",
      duration: "Acceso continuo",
      price: "Próximamente",
      priceNote: "Únete a la lista de espera para recibir novedades.",
      forWho:
        "Para quien quiere flexibilidad para explorar a su propio ritmo, con acceso a recursos prácticos y la experiencia de ser parte de una comunidad.",
      includes: [
        "Lecciones y programas guiados",
        "Ejercicios y herramientas prácticas",
        "Comunidad de personas en el mismo camino",
        "Idioma: español e inglés",
      ],
      outcomes: [
        "Salir de patrones de pensamiento que te limitan",
        "Vivir con más confianza y sentido de vitalidad",
        "Una vida más plena, con propósito y autenticidad",
      ],
    },
    en: {
      name: "Membership Program",
      tagline: "Lessons, programs, exercises and a community that walks with you.",
      summary:
        "A space designed for continued exploration through lessons, guided exercises, practical tools, and programs that invite you to look at your experiences from different perspectives and put what you recognize into practice. It will also be a space for community: opportunities to learn, reflect and explore alongside others while continuing to follow your own path.",
      format: "Online, at your pace, with community",
      duration: "Ongoing access",
      price: "Coming soon",
      priceNote: "Join the waiting list to receive updates.",
      forWho:
        "For anyone who wants the flexibility to explore at their own pace, with access to practical resources and the experience of being part of a community.",
      includes: [
        "Guided lessons and programs",
        "Exercises and practical tools",
        "A community on the same path",
        "Language: English and Spanish",
      ],
      outcomes: [
        "Break free from thought patterns that limit you",
        "Live with more confidence and a sense of aliveness",
        "A fuller life, purpose driven and authentic",
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceCopy(service: Service, locale: Locale): ServiceCopy {
  return locale === "es" ? service.es : service.en;
}

/**
 * "My Path": Maria Elena's biography, approved copy from her brand guide
 * ("HILINAI web.docx", section 7). English is the source text; Spanish is
 * a faithful translation.
 */
export const story: Record<Locale, { lead: string; paragraphs: string[] }> = {
  es: {
    lead: "Creo que quien soy hoy no puede separarse de lo que he vivido, cuestionado, descubierto, aceptado y elegido en el camino.",
    paragraphs: [
      "Mi vida ha incluido muchos de los desafíos que nos hacen humanos. He vivido relaciones que me hicieron cuestionar mi propio valor. He tenido que trabajar profundamente para entender patrones de dependencia, la necesidad de aprobación y la diferencia entre adaptarme para ser aceptada y tener el coraje de ser auténtica.",
      "Construí una carrera como economista y después trabajé en servicios financieros. Durante años, mi identidad profesional representó estabilidad, logro y una idea de quién era. Cuando perdí mi trabajo de forma inesperada, el piso se movió bajo mis pies. Tuve que enfrentar una pregunta que se volvería central en mi camino: ¿quién soy cuando cambian los roles, los títulos y las estructuras que he usado para definirme?",
      "La maternidad trajo otra transición profunda. Ser madre era algo que deseaba profundamente, y el camino hacia la maternidad me desafió de maneras que no había anticipado. Me invitó a encontrar partes nuevas de mí: mi fuerza, mis miedos, mi vulnerabilidad y un amor que cambió la forma en que entendía mi lugar en el mundo.",
      "Después llegó uno de los mayores retos de mi vida: el cáncer de mama. Pasé por tratamiento, cirugías, incertidumbre, cambios físicos, miedo y recuperación, mientras aprendía a vivir dentro de un cuerpo y una vida que estaban cambiando. El cáncer se volvió parte de mi historia, pero elegí no convertirlo en mi identidad.",
      "Junto a estas experiencias, nunca he dejado de explorar quién soy. Mi curiosidad me ha llevado por la terapia, el estudio personal, la espiritualidad, las prácticas energéticas, la Gestalt, el Eneagrama, las constelaciones familiares y años de cuestionar mis propias creencias y patrones. Algunas cosas se han quedado conmigo; otras han cambiado a medida que yo he cambiado.",
      "Todavía sigo descubriéndome.",
      "He aprendido a reconocer y aceptar tanto mi luz como mi sombra: las partes de mí que celebro y las que siguen desafiándome. No creo que el autoconocimiento sea un destino al que se llega. A medida que la vida cambia, nos encontramos de nuevo con nosotros mismos.",
      "Eso es parte de lo que dio origen a Hilinai. No una vida perfecta. No tener todas las respuestas. No la creencia de que mi camino deba convertirse en el camino de alguien más.",
      "Hilinai nació de la experiencia de sentir, una y otra vez, que el piso se movía bajo mis pies, y de descubrir que podía mirar de nuevo, reconocerme de nuevo, elegir de nuevo y moverme de nuevo.",
      "Hoy no me paro frente a otra persona porque ya resolví la vida. Camino a su lado como un ser humano que sabe lo que es cuestionar, cambiar, empezar de nuevo y seguir descubriendo quién es.",
    ],
  },
  en: {
    lead: "I believe that who I am today cannot be separated from what I have lived, questioned, discovered, accepted, and chosen along the way.",
    paragraphs: [
      "My life has included many of the challenges that make us human. I have experienced relationships that made me question my own worth. I have had to work deeply to understand patterns of dependency, the need for approval, and the difference between adapting to be accepted and having the courage to be authentic.",
      "I built a career as an economist and later worked in financial services. For years, my professional identity represented stability, achievement, and a sense of who I was. When I unexpectedly lost my job, the ground beneath me shifted. I had to confront a question that would become central to my own path: Who am I when the roles, titles, and structures I have used to define myself change?",
      "Motherhood brought another profound transition. Becoming a mother was something I deeply desired, and the path into motherhood challenged me in ways I had not anticipated. It invited me to meet new parts of myself: my strength, my fears, my vulnerability, and a love that changed the way I understood my place in the world.",
      "Then came one of the greatest challenges of my life: breast cancer. I went through treatment, surgeries, uncertainty, physical changes, fear, and recovery while learning how to live inside a body and a life that were changing. Cancer became part of my story, but I chose not to make it my identity.",
      "Alongside these experiences, I have never stopped exploring who I am. My curiosity has taken me through therapy, personal study, spirituality, energy practices, Gestalt, the Enneagram, family constellations, and years of questioning my own beliefs and patterns. Some things have stayed with me; others have changed as I have changed.",
      "I am still discovering myself.",
      "I have learned to recognize and accept both my light and my shadow: the parts of myself I celebrate and the parts that continue to challenge me. I don't believe self-knowledge is a destination we reach. As life changes, we meet ourselves again.",
      "That is part of what gave birth to Hilinai. Not a perfect life. Not having all the answers. Not a belief that my path should become someone else's path.",
      "Hilinai grew from the experience of repeatedly having the ground move beneath me and discovering that I could look again, recognize myself again, choose again, and move again.",
      "Today, I don't stand in front of another person because I have figured life out. I stand beside them as a human being who knows what it is to question, to change, to begin again, and to keep discovering who I am.",
    ],
  },
};

/** Approved standalone philosophy statement (brand guide section 8). */
export const philosophy: Record<Locale, string> = {
  es: "La compasión es honrar el proceso de otra persona sin interferir en él.",
  en: "Compassion is honoring another person's process without interfering with it.",
};
