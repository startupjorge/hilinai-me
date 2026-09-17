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
      heroTitle: "Vuelve a ti. Camina con confianza.",
      heroLead:
        "Hilinai es una invitación al reconocimiento, la claridad y la acción consciente. Te invita a mirar tu historia desde otra perspectiva, reconocer los patrones que moldean cómo piensas, sientes y actúas, y reconectar con la fuerza, la sabiduría y los recursos que has construido en el camino.",
      heroLead2:
        "No necesitas a alguien que camine el camino por ti. A veces necesitas una perspectiva distinta para ver con más claridad lo que ya está en ti, y la confianza para pasar de entender a actuar.",
      heroNote: "Experiencias individuales y en grupo, disponibles virtualmente en español e inglés.",
      pillarsTitle: "Tres pilares del camino Hilinai",
      pillars: [
        {
          title: "Reconocimiento",
          body: "Mírate más allá de la historia que siempre te has contado sobre quién eres. Reconocer significa mirar tus experiencias desde otra perspectiva, identificar los patrones que dan forma a cómo piensas, sientes y actúas, y descubrir la fuerza, la sabiduría y los recursos que has construido en el camino.",
        },
        {
          title: "Empoderamiento",
          body: "Reconoce que tienes una elección. El empoderamiento comienza cuando la conciencia se vuelve responsabilidad: entender qué te corresponde cambiar, cuestionar las creencias que ya no te sirven y elegir cómo quieres responder en lugar de repetir automáticamente lo que ya conoces.",
        },
        {
          title: "Confianza",
          body: "Convierte lo que reconoces en tu forma de vivir. La confianza crece cuando empiezas a actuar desde la sabiduría, las capacidades, los valores y los recursos que reconoces como propios. No es la certeza de que todo saldrá como lo planeaste, es saber que puedes confiar en ti misma mientras avanzas.",
        },
      ],
      servicesTitle: "Formas de trabajar juntas",
      servicesLead:
        "Cada proceso se adapta a tu momento. Si no sabes por dónde empezar, una Sesión Individual es un buen primer paso.",
      aboutTitle: "Hola, soy Maria Elena",
      aboutBody:
        "Creé Hilinai desde una convicción simple: muchas veces llevamos dentro más sabiduría, fuerza y recursos de los que reconocemos. Acompaño a personas que están listas para mirar su historia con honestidad y reconectar con lo que ya es suyo.",
      aboutLink: "Conocer mi historia",
      quoteTitle: "En palabras de Maria Elena",
      quotes: [
        "La compasión es honrar el proceso de otra persona sin interferir en él.",
        "No necesitas a alguien que camine el camino por ti. A veces necesitas una perspectiva distinta para ver con más claridad lo que ya está en ti, y la confianza para pasar de entender a actuar.",
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
      role: "Fundadora de Hilinai | Creadora del Método Hilinai™",
      introParagraphs: [
        "Creé Hilinai desde una convicción simple: muchas veces llevamos dentro más sabiduría, fuerza y recursos de los que reconocemos.",
        "Mi trabajo está enraizado en escuchar sin juicio, hacer las preguntas que invitan a una perspectiva distinta y ayudar a las personas a reconocer los patrones, creencias y experiencias que han dado forma a cómo se ven a sí mismas y a sus vidas.",
        "No creo que mi papel sea decirle a alguien en quién debería convertirse ni caminar su camino por esa persona. Creo un espacio donde las personas pueden mirar su historia con mayor claridad, reconocer lo que ya está en ellas y decidir por sí mismas qué quieren llevar consigo, qué están listas para cuestionar y cómo eligen moverse.",
        "Hilinai no se trata de convertirte en alguien más. Se trata de reconocerte más plenamente, y de confiar en ti misma lo suficiente para actuar desde ese reconocimiento. Trabajo de forma virtual con individuos y grupos, en español e inglés.",
      ],
      storyTitle: "Mi camino",
      approachTitle: "Cómo trabajo",
      approach: [
        {
          title: "Perspectiva antes que respuestas",
          body: "No te digo lo que significa tu historia. La miramos juntas desde distintas perspectivas, para que puedas reconocer patrones, cuestionar lo que has dado por cierto y llegar a tu propia comprensión.",
        },
        {
          title: "Sin juicio",
          body: "Tu historia tiene un lugar aquí, incluyendo las partes que pueden sentirse difíciles, contradictorias, incómodas o difíciles de decir en voz alta. El trabajo empieza por ver lo que hay, no por juzgar lo que debería o no debería estar ahí.",
        },
        {
          title: "Herramientas que puedes hacer tuyas",
          body: "Puedo ofrecer preguntas, reflexiones, ejercicios y herramientas prácticas en el camino. Tú decides qué resuena, qué practicas y qué eliges poner en marcha en tu propia vida.",
        },
        {
          title: "Tu camino, tu ritmo",
          body: "No hay una versión tuya que esté tratando de crear. Puedo caminar a tu lado, ofrecer perspectiva y ayudarte a reconocer lo que puede ser difícil de ver desde donde estás. Las decisiones, y el camino, siguen siendo tuyas.",
        },
      ],
      philosophyLabel: "Filosofía",
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
        "Recibes la confirmación por correo con el enlace de la videollamada.",
        "Si aplica, te envío un cuestionario breve para preparar la sesión.",
      ],
      chooseService: "Proceso de interés",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Hablemos",
      lead:
        "La forma más rápida de contactarme es por WhatsApp o con el formulario de abajo. También puedes seguir mi trabajo en Instagram.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Correo",
      instagramLabel: "Instagram",
      locationLabel: "Disponibilidad",
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
      heroTitle: "Come back to yourself. Walk with confidence.",
      heroLead:
        "Hilinai is an invitation to recognition, clarity, and conscious action. It invites you to look at your story from a different perspective, recognize the patterns shaping the way you think, feel, and act, and reconnect with the strengths, wisdom, and resources you have built along the way.",
      heroLead2:
        "You don't need someone to walk the path for you. Sometimes, you need a different perspective to see more clearly what is already within you, and the confidence to move from understanding into action.",
      heroNote: "Individual and group experiences, available virtually in English and Spanish.",
      pillarsTitle: "Three pillars of the Hilinai path",
      pillars: [
        {
          title: "Recognition",
          body: "See yourself beyond the story you have always told about who you are. Recognition means looking at your experiences from a different perspective, identifying the patterns that shape the way you think, feel, and act, and discovering the strengths, wisdom, and resources you have built along the way.",
        },
        {
          title: "Empowerment",
          body: "Recognize that you have a choice. Empowerment begins when awareness becomes responsibility: understanding what is yours to change, questioning the beliefs that no longer serve you, and choosing how you want to respond instead of automatically repeating what you already know.",
        },
        {
          title: "Confidence",
          body: "Turn what you recognize into the way you live. Confidence grows when you begin to act from the wisdom, abilities, values, and resources you recognize as your own. It is not certainty that everything will go as planned, it is knowing that you can trust yourself as you move forward.",
        },
      ],
      servicesTitle: "Ways to work together",
      servicesLead:
        "Every process adapts to your moment. If you are not sure where to start, a Single Session is a good first step.",
      aboutTitle: "Hello, I am Maria Elena",
      aboutBody:
        "I created Hilinai from a simple conviction: we often carry within us more wisdom, strength, and resources than we recognize. I walk alongside people who are ready to look at their story with honesty and reconnect with what is already theirs.",
      aboutLink: "Read my story",
      quoteTitle: "In Maria Elena's words",
      quotes: [
        "Compassion is honoring another person's process without interfering with it.",
        "You don't need someone to walk the path for you. Sometimes, you need a different perspective to see more clearly what is already within you, and the confidence to move from understanding into action.",
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
      role: "Founder of Hilinai | Creator of the Hilinai™ Method",
      introParagraphs: [
        "I created Hilinai from a simple conviction: we often carry within us more wisdom, strength, and resources than we recognize.",
        "My work is rooted in listening without judgment, asking the questions that invite a different perspective, and helping people recognize the patterns, beliefs, and experiences that have shaped the way they see themselves and their lives.",
        "I do not believe it is my role to tell someone who they should become or to walk their path for them. I create a space where people can look at their story with greater clarity, recognize what is already within them, and decide for themselves what they want to carry forward, what they are ready to question, and how they choose to move.",
        "Hilinai is not about becoming someone else. It is about recognizing yourself more fully, and trusting yourself enough to act from that recognition. I work virtually with individuals and groups in English and Spanish.",
      ],
      storyTitle: "My path",
      approachTitle: "How I work",
      approach: [
        {
          title: "Perspective before answers",
          body: "I don't tell you what your story means. We look at it together from different perspectives, so you can recognize patterns, question what you have assumed to be true, and arrive at your own understanding.",
        },
        {
          title: "Without judgment",
          body: "Your story has a place here, including the parts that may feel difficult, contradictory, uncomfortable, or hard to say out loud. The work begins with seeing what is there; not judging what should or should not be there.",
        },
        {
          title: "Tools you can make your own",
          body: "I may offer questions, reflections, exercises, and practical tools along the way. You decide what resonates, what you practice, and what you choose to put into motion in your own life.",
        },
        {
          title: "Your path, your pace",
          body: "There is no version of you that I am trying to create. I can walk alongside you, offer perspective, and help you recognize what may be difficult to see from where you are. The choices, and the path, remain yours.",
        },
      ],
      philosophyLabel: "Philosophy",
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
        "You receive a confirmation by email with the video call link.",
        "If it applies, I send you a short questionnaire to prepare for the session.",
      ],
      chooseService: "Process of interest",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let us talk",
      lead:
        "The fastest way to reach me is on WhatsApp or through the form below. You can also follow my work on Instagram.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      instagramLabel: "Instagram",
      locationLabel: "Availability",
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
