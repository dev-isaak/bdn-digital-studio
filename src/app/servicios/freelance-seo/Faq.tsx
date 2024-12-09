import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
  const faqData = [
    {
      question: "¿Qué es el SEO y por qué es importante para mi negocio?",
      answer: `
        El SEO (Search Engine Optimization) es un conjunto de técnicas para mejorar la visibilidad de tu sitio web en los motores de búsqueda como Google. Es importante porque aumenta el tráfico orgánico de calidad, mejora el posicionamiento y ayuda a atraer clientes potenciales interesados en tus productos o servicios.
      `,
    },
    {
      question: "¿Cuánto tiempo tarda en ver resultados con SEO?",
      answer: `
        El SEO es una estrategia a largo plazo. Los primeros resultados suelen notarse entre 3 y 6 meses, dependiendo de la competencia y el estado inicial de tu web. Sin embargo, los beneficios son duraderos y generan tráfico constante sin necesidad de pagar por publicidad.
      `,
    },
    {
      question: "¿Qué incluye vuestro servicio de SEO?",
      answer: `
        Incluye auditorías SEO, investigación de palabras clave, optimización on-page, SEO técnico, creación de contenido optimizado, estrategias de link building y reportes mensuales con análisis de resultados. Adaptamos cada estrategia a las necesidades de tu negocio.
      `,
    },
    {
      question: "¿Es necesario realizar SEO si ya tengo tráfico en mi web?",
      answer: `
        Sí, el SEO no solo busca aumentar el tráfico, sino atraer visitantes cualificados y mejorar la experiencia del usuario. Además, te ayuda a mantener la competitividad, incluso si ya tienes una base sólida de visitantes.
      `,
    },
    {
      question: "¿Cuál es la diferencia entre SEO on-page y off-page?",
      answer: `
        El SEO on-page se centra en optimizar los elementos internos de tu sitio web, como contenido, etiquetas meta, estructura de URLs y velocidad de carga. El SEO off-page, por otro lado, se enfoca en factores externos como la generación de backlinks y la autoridad de dominio.
      `,
    },
    {
      question: "¿Qué pasa si mi sitio web ya tiene penalizaciones de Google?",
      answer: `
        Nos especializamos en identificar y solucionar problemas que puedan estar afectando tu posicionamiento, incluyendo penalizaciones de Google. Analizamos el origen del problema y diseñamos un plan para recuperar la salud SEO de tu web.
      `,
    },
    {
      question: "¿Hacéis SEO para negocios locales?",
      answer: `
        Sí, el SEO local es una de nuestras especialidades. Ayudamos a posicionar tu negocio en búsquedas geolocalizadas, optimizamos tu ficha de Google My Business y trabajamos en estrategias específicas para atraer clientes cercanos.
      `,
    },
    {
      question:
        "¿Cómo identificáis las mejores palabras clave para mi negocio?",
      answer: `
        Realizamos un análisis exhaustivo basado en las búsquedas de tu público objetivo, la competencia y las tendencias del mercado. Esto nos permite seleccionar palabras clave relevantes y de alta conversión para tu negocio.
      `,
    },
    {
      question: "¿Necesito hacer cambios en mi web para implementar SEO?",
      answer: `
        Es probable que sea necesario realizar ajustes en el contenido, la estructura o el diseño de tu web para optimizarla. Nos encargamos de hacer recomendaciones claras y, si es necesario, podemos implementar las mejoras directamente.
      `,
    },
    {
      question: "¿Proporcionáis reportes sobre el progreso del SEO?",
      answer: `
        Sí, generamos reportes mensuales detallados con métricas clave como el tráfico orgánico, rankings de palabras clave, backlinks y más. También explicamos los resultados y las acciones que tomaremos para seguir mejorando.
      `,
    },
  ];
  return <RenderAccordion data={faqData} />;
}
