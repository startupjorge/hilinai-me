import type { Locale } from "./config";

/** UI chrome strings (nav, buttons, section headings). Page body copy lives in content/. */
const dictionaries = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre Maria Elena",
      book: "Reservar",
      contact: "Contacto",
    },
    cta: {
      book: "Reservar una sesión",
      bookShort: "Reservar",
      explore: "Ver servicios",
      whatsapp: "Escribir por WhatsApp",
      allServices: "Ver todos los servicios",
      learnMore: "Conocer más",
      contactMe: "Escríbeme",
    },
    home: {
      eyebrow: "Transformación consciente",
      heroTitle: "Vuelve a ti. Camina con confianza.",
      heroLead:
        "La transformación personal es un proceso de cambio y crecimiento que te ayuda a alcanzar tus metas y a vivir una vida más plena. ¿Qué quieres cambiar en tu vida?",
      heroNote: "Acompañamiento individual y en grupo, en español e inglés, desde Miami.",
      pillarsTitle: "Tres pilares de este camino",
      pillars: [
        {
          title: "Auto-reconocimiento",
          body: "Verte con honestidad y sin juicio. Entender de dónde vienes y qué te mueve.",
        },
        {
          title: "Empoderamiento",
          body: "Recuperar tu voz y tu capacidad de decidir. Pasar de la duda a la acción.",
        },
        {
          title: "Confianza",
          body: "Construir una base firme dentro de ti que sostiene incluso cuando todo cambia.",
        },
      ],
      servicesTitle: "Formas de trabajar juntas",
      servicesLead:
        "Cada proceso se adapta a tu momento. Si no sabes por dónde empezar, una Sesión Individual es un buen primer paso.",
      aboutTitle: "Hola, soy Maria Elena",
      aboutBody:
        "Soy Facilitadora de Transformación Consciente. Acompaño a personas que sienten que es momento de un cambio real, no de una motivación pasajera. Mi trabajo une el auto-reconocimiento, la reconexión con las raíces y herramientas prácticas para sostener lo que descubres.",
      aboutLink: "Conocer mi historia",
      quoteTitle: "En palabras de Maria Elena",
      quotes: [
        "La transformación personal es un proceso de cambio y crecimiento que te ayuda a alcanzar tus metas y a vivir una vida más plena. ¿Qué cambios quieres hacer en tu vida?",
        "El dolor es una oportunidad para crecer, aprender y transformar nuestra vida. No dejes que el dolor te consuma. Úsalo como impulso para tu crecimiento y tu transformación.",
      ],
      ctaTitle: "¿Lista para empezar?",
      ctaBody:
        "Reserva una Sesión Individual o escríbeme por WhatsApp y conversamos sobre tu momento.",
    },
    servicesPage: {
      eyebrow: "Servicios",
      title: "Acompañamiento a tu medida",
      lead:
        "Procesos individuales y grupales para el auto-reconocimiento, el empoderamiento y la confianza. Todos disponibles en español e inglés.",
      forWho: "Para quién es",
      format: "Formato",
      duration: "Duración",
      investment: "Inversión",
      includes: "Qué incluye",
      outcomes: "Con qué sales",
      bookThis: "Reservar este proceso",
      backToServices: "Volver a servicios",
      notFound: "No encontramos ese servicio.",
    },
    aboutPage: {
      eyebrow: "Sobre Maria Elena",
      title: "Maria Elena Acevedo",
      role: "Facilitadora de Transformación Consciente",
      intro:
        "Vivo en Miami y acompaño a personas de habla hispana e inglesa en procesos de cambio profundo. Creo en un trabajo que va a la raíz: entender de dónde vienes, reconciliarte con tu historia y construir desde ahí una confianza que no depende de las circunstancias.",
      storyTitle: "Mi camino",
      story: [
        "Hilina'i es una palabra hawaiana que habla de confianza y de apoyarse. Ese es el corazón de mi trabajo: crear un espacio seguro donde puedas apoyarte mientras vuelves a ti.",
        "Trabajo con quienes sienten que algo tiene que cambiar y no saben por dónde empezar, con migrantes que cargan una historia lejos de su tierra, y con personas que quieren tomar decisiones desde su propio criterio y no desde el miedo.",
        "Mi enfoque combina conversación guiada, ejercicios de auto-reconocimiento y prácticas de arraigo. Sin fórmulas mágicas y a un ritmo humano.",
      ],
      approachTitle: "Cómo acompaño",
      approach: [
        {
          title: "A la raíz, no al síntoma",
          body: "Miramos lo que sostiene el patrón, no solo lo que se ve en la superficie.",
        },
        {
          title: "A tu ritmo",
          body: "El proceso respeta tus tiempos. No hay prisa por llegar a ningún lado.",
        },
        {
          title: "Con herramientas que quedan",
          body: "Sales con prácticas concretas que puedes seguir usando por tu cuenta.",
        },
        {
          title: "En dos idiomas",
          body: "Puedes hacer todo el proceso en español, en inglés o combinando ambos.",
        },
      ],
      ctaTitle: "Conversemos",
      ctaBody: "Si algo de esto resuena contigo, escríbeme y vemos si es buen momento para empezar.",
    },
    bookPage: {
      eyebrow: "Reservar",
      title: "Reserva tu sesión",
      lead:
        "Elige un día y una hora en el calendario. Si tienes dudas sobre qué proceso es para ti, escríbeme antes por WhatsApp.",
      calendarTitle: "Reserva en el calendario",
      calendarNote:
        "Recibirás la confirmación por correo con el enlace de la videollamada. Si prefieres coordinar por WhatsApp, también puedes.",
      calendarPlaceholder: "Cargando el calendario...",
      stepsTitle: "Cómo funciona",
      steps: [
        "Elige el día y la hora que te funcione en el calendario.",
        "Recibes la confirmación con el enlace de la videollamada o el punto de encuentro en Miami.",
        "Si aplica, te envío un cuestionario breve para preparar la sesión.",
      ],
      chooseService: "Proceso de interés",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos",
      lead:
        "La forma más rápida de contactarme es por WhatsApp o con el formulario de abajo. También puedes seguir mi trabajo en Instagram y Facebook.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Correo",
      instagramLabel: "Instagram",
      locationLabel: "Ubicación",
      locationValue:
        "Área de Miami y Fort Lauderdale, Florida. Sesiones en línea y presenciales.",
      formTitle: "Envíame un mensaje",
      formName: "Nombre",
      formEmail: "Correo",
      formInterest: "¿En qué te puedo acompañar?",
      formMessage: "Mensaje",
      formSubmit: "Enviar mensaje",
      formSending: "Enviando...",
      formSuccess:
        "Gracias por escribir. Te responderé lo antes posible.",
      formError:
        "No se pudo enviar el mensaje. Escríbeme directamente por",
      formNote:
        "Suelo responder en 1 o 2 días. Si necesitas algo urgente, escríbeme por WhatsApp.",
    },
    footer: {
      tagline: "Transformación consciente desde Miami. Auto-reconocimiento, empoderamiento y confianza.",
      nav: "Navegación",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      langLabel: "Idioma",
    },
    lang: { switchTo: "English", current: "Español" },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Maria Elena",
      book: "Book",
      contact: "Contact",
    },
    cta: {
      book: "Book a session",
      bookShort: "Book",
      explore: "See services",
      whatsapp: "Message on WhatsApp",
      allServices: "See all services",
      learnMore: "Learn more",
      contactMe: "Get in touch",
    },
    home: {
      eyebrow: "Conscious transformation",
      heroTitle: "Come back to yourself. Walk with confidence.",
      heroLead:
        "Personal transformation is a process of change and growth that helps you reach your goals and live a fuller life. What do you want to change in your life?",
      heroNote: "One on one and group guidance, in Spanish and English, from Miami.",
      pillarsTitle: "Three pillars of this path",
      pillars: [
        {
          title: "Self recognition",
          body: "Seeing yourself honestly and without judgment. Understanding where you come from and what moves you.",
        },
        {
          title: "Empowerment",
          body: "Reclaiming your voice and your ability to decide. Moving from doubt into action.",
        },
        {
          title: "Confidence",
          body: "Building a firm base inside yourself that holds even when everything changes.",
        },
      ],
      servicesTitle: "Ways to work together",
      servicesLead:
        "Every process adapts to your moment. If you are not sure where to start, a Single Session is a good first step.",
      aboutTitle: "Hello, I am Maria Elena",
      aboutBody:
        "I am a Conscious Transformation Facilitator. I walk alongside people who feel it is time for real change, not passing motivation. My work joins self recognition, reconnection with your roots and practical tools to hold what you discover.",
      aboutLink: "Read my story",
      quoteTitle: "In Maria Elena's words",
      quotes: [
        "Personal transformation is a process of change and growth that can help you achieve your goals and live a more fulfilling life. What changes do you want to make in your life?",
        "Pain is an opportunity to grow, to learn, and to transform our lives. Don't let pain consume you, but instead use it as fuel to drive your growth and transformation.",
      ],
      ctaTitle: "Ready to begin?",
      ctaBody:
        "Book a Single Session or message me on WhatsApp and we can talk about your moment.",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Guidance shaped around you",
      lead:
        "One on one and group processes for self recognition, empowerment and confidence. All available in Spanish and English.",
      forWho: "Who it is for",
      format: "Format",
      duration: "Duration",
      investment: "Investment",
      includes: "What it includes",
      outcomes: "What you leave with",
      bookThis: "Book this process",
      backToServices: "Back to services",
      notFound: "We could not find that service.",
    },
    aboutPage: {
      eyebrow: "About Maria Elena",
      title: "Maria Elena Acevedo",
      role: "Conscious Transformation Facilitator",
      intro:
        "I live in Miami and I work with Spanish and English speaking people through processes of deep change. I believe in work that goes to the root: understanding where you come from, making peace with your story and building from there a confidence that does not depend on circumstances.",
      storyTitle: "My path",
      story: [
        "Hilina'i is a Hawaiian word about trust and leaning on something. That is the heart of my work: creating a safe space where you can lean while you come back to yourself.",
        "I work with people who feel that something has to change and do not know where to start, with migrants who carry a story far from home, and with people who want to make decisions from their own judgment rather than from fear.",
        "My approach combines guided conversation, self recognition exercises and grounding practices. No magic formulas, and at a human pace.",
      ],
      approachTitle: "How I work",
      approach: [
        {
          title: "Root, not symptom",
          body: "We look at what holds the pattern in place, not only what shows on the surface.",
        },
        {
          title: "At your pace",
          body: "The process respects your timing. There is no rush to get anywhere.",
        },
        {
          title: "With tools that stay",
          body: "You leave with concrete practices you can keep using on your own.",
        },
        {
          title: "In two languages",
          body: "You can do the whole process in Spanish, in English or a mix of both.",
        },
      ],
      ctaTitle: "Let us talk",
      ctaBody:
        "If any of this resonates with you, send me a message and we will see if it is a good time to start.",
    },
    bookPage: {
      eyebrow: "Book",
      title: "Book your session",
      lead:
        "Pick a day and time on the calendar. If you are unsure which process is right for you, message me on WhatsApp first.",
      calendarTitle: "Book on the calendar",
      calendarNote:
        "You will get a confirmation by email with the video call link. If you prefer to arrange it over WhatsApp, that works too.",
      calendarPlaceholder: "Loading the calendar...",
      stepsTitle: "How it works",
      steps: [
        "Pick the day and time that works for you on the calendar.",
        "You receive a confirmation with the video call link or the meeting point in Miami.",
        "If it applies, I send you a short questionnaire to prepare for the session.",
      ],
      chooseService: "Process of interest",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let us talk",
      lead:
        "The fastest way to reach me is on WhatsApp or through the form below. You can also follow my work on Instagram and Facebook.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      instagramLabel: "Instagram",
      locationLabel: "Location",
      locationValue:
        "Miami and Fort Lauderdale area, Florida. Online and in person sessions.",
      formTitle: "Send me a message",
      formName: "Name",
      formEmail: "Email",
      formInterest: "How can I support you?",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending...",
      formSuccess: "Thank you for reaching out. I will get back to you soon.",
      formError: "The message could not be sent. Reach me directly on",
      formNote:
        "I usually reply within 1 to 2 days. For anything urgent, message me on WhatsApp.",
    },
    footer: {
      tagline: "Conscious transformation from Miami. Self recognition, empowerment and confidence.",
      nav: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      langLabel: "Language",
    },
    lang: { switchTo: "Español", current: "English" },
  },
};

export type Dictionary = (typeof dictionaries)["es"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
