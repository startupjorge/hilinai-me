import type { Locale } from "@/i18n/config";

/**
 * Central content for the Hilina'i Me site.
 * Every string lives here in both languages so copy edits stay in one place.
 * Pricing and program details mirror Maria Elena's existing site. Items marked
 * TODO still need her confirmation.
 */

export const brand = {
  name: "Hilina'i Me",
  practitioner: "Maria Elena Acevedo",
  roleEs: "Facilitadora de Transformación Consciente",
  roleEn: "Conscious Transformation Facilitator",
  legalName: "Maria Elena Acevedo LLC",
  city: "Miami-Fort Lauderdale Area, Florida",
  whatsapp: "+17864844514",
  whatsappDisplay: "+1 (786) 484 4514",
  instagram: "https://www.instagram.com/hilinai_me/",
  instagramPersonal: "https://www.instagram.com/mariaacevedo2321/",
  facebook: "https://www.facebook.com/people/Hilinai-Me/61555591816094/",
  tiktok: "", // TODO: add TikTok URL
  youtube: "", // TODO: add YouTube URL
  email: "Mane78@hotmail.com",
};

/** Poetic tagline, in Maria Elena's own words (from her Hilina'i Me bio). */
export const tagline: Record<Locale, string> = {
  es: "Ven y descubre de manera fácil el camino del auto-reconocimiento, encuéntrate con tus raíces y con el lugar de donde vienes, empodérate y camina con confianza.",
  en: "Come and discover, in an easy way, the path of self recognition. Meet your roots and where you come from, find your power and walk with confidence.",
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
      tagline: "Un encuentro de una hora para tu estado emocional y tu energía.",
      summary:
        "Una sesión individual de una hora que trabaja tu estado emocional y tu energía. Combinamos conversación consciente, herramientas de auto-reconocimiento y sanación energética según lo que necesites ese día.",
      format: "Individual, en línea o presencial en Miami",
      duration: "1 hora",
      price: "80 USD",
      forWho:
        "Para quien quiere empezar, atender un momento puntual o probar cómo es trabajar juntas antes de comprometerse con un paquete.",
      includes: [
        "Sesión individual de 60 minutos",
        "Lectura de tu estado emocional y energético",
        "Prácticas sencillas para los días siguientes",
        "Espacio confidencial y sin juicio",
      ],
      outcomes: [
        "Más claridad sobre lo que estás atravesando",
        "Herramientas concretas para sostener la semana",
        "Un primer paso hacia el cambio que buscas",
      ],
    },
    en: {
      name: "Single Session",
      tagline: "A one hour meeting for your emotional state and your energy.",
      summary:
        "A one on one session of one hour focused on your emotional state and your energy. We combine conscious conversation, self recognition tools and energy healing depending on what you need that day.",
      format: "One on one, online or in person in Miami",
      duration: "1 hour",
      price: "80 USD",
      forWho:
        "For anyone who wants to begin, tend to a specific moment, or feel what working together is like before committing to a package.",
      includes: [
        "A 60 minute one on one session",
        "A reading of your emotional and energetic state",
        "Simple practices for the days that follow",
        "A confidential space without judgment",
      ],
      outcomes: [
        "More clarity about what you are going through",
        "Concrete tools to hold the week",
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
      tagline: "Un acompañamiento sostenido para un cambio real y duradero.",
      summary:
        "Diez sesiones individuales de una hora que trabajan tu estado emocional y tu energía a lo largo del tiempo. El proceso completo de Hilina'i Me: auto-reconocimiento, sanación energética, empoderamiento y confianza, a un ritmo humano.",
      format: "Individual, sesiones semanales o quincenales",
      duration: "10 sesiones de 1 hora",
      price: "720 USD",
      priceNote: "Pago único. Incluye 10% de descuento frente a la sesión suelta.",
      forWho:
        "Para quien está listo para mirar hacia dentro con honestidad y sostener el proceso hasta ver frutos.",
      includes: [
        "Diez sesiones individuales de 60 minutos",
        "Trabajo continuo sobre tu estado emocional y energético",
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
      tagline: "Sustained guidance for change that is real and lasting.",
      summary:
        "Ten one on one sessions of one hour working with your emotional state and your energy over time. The full Hilina'i Me process: self recognition, energy healing, empowerment and confidence, at a human pace.",
      format: "One on one, weekly or every two weeks",
      duration: "10 sessions of 1 hour",
      price: "720 USD",
      priceNote: "Paid in full. Includes a 10% discount compared to single sessions.",
      forWho:
        "For anyone ready to look inward with honesty and stay with the process until it bears fruit.",
      includes: [
        "Ten 60 minute one on one sessions",
        "Ongoing work with your emotional and energetic state",
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
      tagline: "Lecciones, ejercicios y una comunidad que camina contigo.",
      summary:
        "Una membresía con lecciones en video, ejercicios interactivos y herramientas prácticas para ver con nuevos ojos y transformar tu vida. Incluye una comunidad de personas comprometidas con encontrar libertad en todas las áreas de su vida.",
      format: "En línea, a tu ritmo, con comunidad",
      duration: "Acceso continuo",
      price: "Próximamente",
      priceNote: "Escríbeme para entrar en la lista de espera.",
      forWho:
        "Para quien quiere trabajar a su propio ritmo, con material de apoyo y el acompañamiento de un grupo.",
      includes: [
        "Lecciones en video",
        "Ejercicios interactivos y herramientas prácticas",
        "Comunidad de personas con el mismo compromiso",
        "Comprensión más profunda de tu propia mente",
      ],
      outcomes: [
        "Salir de patrones de pensamiento que te limitan",
        "Vivir con más confianza y sentido de vitalidad",
        "Una vida más plena, con propósito y autenticidad",
      ],
    },
    en: {
      name: "Membership Program",
      tagline: "Lessons, exercises and a community that walks with you.",
      summary:
        "A membership with video lessons, interactive exercises and practical tools to look through new eyes and transform your life. It includes a community of people committed to finding freedom in every area of their lives.",
      format: "Online, at your pace, with community",
      duration: "Ongoing access",
      price: "Coming soon",
      priceNote: "Message me to join the waiting list.",
      forWho:
        "For anyone who wants to work at their own pace, with supporting material and the company of a group.",
      includes: [
        "Video lessons",
        "Interactive exercises and practical tools",
        "A community of people with the same commitment",
        "A deeper understanding of your own mind",
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

/** Maria Elena's story, as she tells it on her current site. Lightly formatted. */
export const story: Record<Locale, { lead: string; paragraphs: string[] }> = {
  es: {
    lead: "No hay nada más valioso que la experiencia personal. Estas son las herramientas que dan forma a mi vida y que hoy comparto contigo.",
    paragraphs: [
      "Nací en una familia de padres muy jóvenes. Mi madre tenía 16 años y mi padre 19. Al ser tan jóvenes, pasé mucho tiempo con mis abuelos. Por parte de mi madre fui hija, sobrina y nieta única durante mis primeros cinco años, lo que me convirtió en una niña muy consentida.",
      "Cuando tenía ocho años, mis padres se divorciaron. Después de eso, mi padre empezó a beber y nuestra relación se volvió distante. Mi madre trabajó muy duro para sacarnos adelante a mi hermano y a mí.",
      "A los 11 años tuve mi primera menstruación y sufrí acoso en la escuela porque mi cuerpo se desarrolló antes que el de mis compañeras. Mi adolescencia fue difícil. La ausencia de mi padre me llevó a buscar aprobación en los demás, y sobreviví creyendo que mi único valor era mi sexualidad. Tuve muchas relaciones, cada una dañando más mi autoestima.",
      "Estudié economía y me gradué de la universidad a los 20 años. A los 21 me casé, pero la relación se convirtió en una dependencia poco sana. Mi elección de pareja reflejaba una atracción hacia cierto estereotipo, lo que llevó a un matrimonio de tres años que me dejó con el corazón roto, aunque también me hizo crecer.",
      "Volví a casa de mi madre y nos mudamos a Santo Domingo, República Dominicana. Allí entré en otra relación de codependencia, con abuso y alcohol. Eso me llevó a buscar ayuda y empecé a asistir a reuniones de 12 pasos para codependientes. Fueron un tiempo de gran sanación.",
      "Durante esa época descubrí una de mis mayores lecciones: hacerme responsable de mí misma. A los 33 me mudé a Estados Unidos y empecé a trabajar en el sector público. Por primera vez viví sola y logré estabilidad económica. Aprendí a estar conmigo misma y a disfrutar de mi soledad.",
      "A los 37, en 2015, empecé a trabajar en Merrill Lynch, aplicando mi formación como economista. A los 43 me despidieron del banco y mi mundo cambió. Perdí mi identidad y todo lo que consideraba seguro se desvaneció. Entendí que había creído que necesitaba a otros para protegerme. Ese período difícil también fue uno de grandes lecciones de vida.",
      "Descubrí que soy mucho más que un título profesional, que nadie me debe protección y que quienes de verdad me quieren me aceptan como soy.",
      "Siempre me interesó el crecimiento personal y he sido muy curiosa con la espiritualidad. Uno de mis dones es la capacidad de conectar con el mundo invisible. Esto me llevó a estudiar Reiki en 2001 y, en 2011, cursos de sanación energética, sonoterapia y armonización. Cuando perdí mi trabajo en el banco, me dediqué por completo a esta pasión y empecé a trabajar con clientes.",
      "A los 44 llegó mi hermoso hijo, que me inspiró a ser una mejor persona. Cuando Simón tenía seis meses, me diagnosticaron cáncer de mama. Ese diagnóstico cambió mi vida por completo. Recé por vivir, por la oportunidad de estar con mi hijo.",
      "Mi trabajo gira en torno a la energía holística, así que decidí integrar mi conocimiento energético en la quimioterapia, la radioterapia y las múltiples cirugías. Me convertí en mi propia clienta.",
      "Entendí que somos parte del planeta Tierra, parte de la naturaleza. Al conectar con ese saber descubrí nuestro poder de transformación. Podemos transformar todo lo que entra en nuestro cuerpo. Sabía que no podía cambiar mi situación, pero sí lo poderosa que era la energía que recibía.",
      "Uno de los momentos más duros fue perder mi cabello. Verme calva en el espejo me quebró. Ahí entendí por fin qué era la depresión.",
      "Encontré fuerza donde no la había y me recuperé. Hoy sigo con terapia hormonal. Terminé la quimio y la radiación, tuve mi reconstrucción y me siento bien en mi piel.",
      "Ahora soy mucho más consciente de lo que pongo en mi cuerpo. Cada vez que como una fruta, conecto con la Tierra y siento gratitud. Aprendí que la sanación empieza en el intestino y que el hígado y los riñones son fundamentales.",
      "Elegí el camino del crecimiento personal, con terapia semanal, a veces dos veces por semana, guiada por psicólogos y terapeutas. Estudié psicología Gestalt, Eneagrama y constelaciones familiares, y todo eso me ayudó a reconocerme y empoderarme.",
      "Hoy mi camino es el autoconocimiento, el empoderamiento y la confianza. Confío en los procesos de la vida y vivo en equilibrio. Tengo un matrimonio hermoso, un hijo maravilloso, una familia que me quiere y una red de apoyo fuerte. Mi vida es tranquila, alegre y llena de confianza.",
    ],
  },
  en: {
    lead: "There is nothing more valuable than personal experience. These are the tools that shape my life, and today I share them with you.",
    paragraphs: [
      "I was born into a family with very young parents. My mother was 16 and my father was 19. Because they were so young, I spent much of my early childhood with my grandparents. On my mother's side I was an only daughter, niece and granddaughter for my first five years, which made me a very spoiled child.",
      "When I was eight, my parents divorced. After that, my father started drinking and our relationship became distant. My mother worked very hard to support my brother and me.",
      "At 11 I got my first period and was bullied at school because my body developed faster than my classmates'. My teenage years were difficult. My father's absence led me to seek approval from others, and I survived by believing that my only value was my sexuality. I had many relationships, each one damaging my self esteem further.",
      "I studied economics and graduated from university at 20. At 21 I got married, but the relationship became an unhealthy dependency. My choice of partner reflected an attraction to a certain stereotype, which led to a three year marriage that left me heartbroken, though it also helped me grow.",
      "I returned to my mother's home and we moved to Santo Domingo, Dominican Republic. There I entered another codependent relationship, with abuse and alcohol. That led me to seek help, and I began attending 12 step meetings for codependents. They were a time of great healing.",
      "During that time I discovered one of my greatest lessons: taking responsibility for myself. At 33 I moved to the United States and started working in the public sector. For the first time I lived alone and achieved financial stability. I learned to be with myself and to enjoy my solitude.",
      "At 37, in 2015, I began working at Merrill Lynch, applying my background as an economist. At 43 I was laid off from the bank and my world changed. I lost my identity, and everything I considered secure vanished. I realized I had believed I needed others to protect me. That difficult period was also one of great life lessons.",
      "I discovered that I am much more than a professional title, that no one owes me protection, and that the people who truly love me accept me as I am.",
      "I have always been interested in personal growth and very curious about spirituality. One of my gifts is the ability to connect with the unseen world. This led me to study Reiki in 2001 and, in 2011, courses in energy healing, sound therapy and harmonization. When I lost my job at the bank, I dedicated myself fully to this passion and began working with clients.",
      "At 44 my beautiful son arrived, inspiring me to become a better person. When Simon was six months old, I was diagnosed with breast cancer. That diagnosis changed my life completely. I prayed for life, for the chance to be with my son.",
      "My work revolves around holistic energy, so I decided to integrate my energy knowledge into my chemotherapy, radiotherapy and multiple surgeries. I became my own client.",
      "I understood that we are part of planet Earth, part of nature. Connecting with that knowledge, I discovered our power of transformation. We can transform everything that enters our body. I knew I could not change my situation, but I knew how powerful the energy I received was.",
      "One of the hardest moments was losing my hair. Seeing myself bald in the mirror shattered me. That is when I finally understood what depression felt like.",
      "I found strength where there was none and I recovered. Today I continue with hormone therapy. I finished chemo and radiation, had my reconstruction, and I feel good in my skin.",
      "Now I am much more conscious of what I put into my body. Every time I eat a piece of fruit, I connect with the Earth and feel grateful. I learned that healing starts in the gut, and that the liver and kidneys play a crucial role.",
      "I chose the path of personal growth, with weekly therapy, sometimes twice a week, guided by knowledgeable psychologists and therapists. I studied Gestalt psychology, the Enneagram and family constellations, and all of it helped me recognize and empower myself.",
      "Today my path is self knowledge, empowerment and trust. I trust life's processes and live in balance. I have a beautiful marriage, an amazing son, a loving family and a strong support network. My life is calm, joyful and filled with confidence.",
    ],
  },
};
