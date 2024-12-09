import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
  const faqData = [
    {
      question: "¿Qué incluye vuestro servicio de SEM?",
      answer: `
				Nuestro servicio de SEM incluye la planificación, creación y gestión de campañas publicitarias en motores de búsqueda como Google Ads. Trabajamos en la selección de palabras clave, diseño de anuncios, optimización del presupuesto y seguimiento de resultados para maximizar tu retorno de inversión (ROI).
			`,
    },
    {
      question: "¿Qué es SEM y en qué se diferencia del SEO?",
      answer: `
				El SEM (Search Engine Marketing) utiliza campañas de pago para aparecer en los primeros resultados de búsqueda, mientras que el SEO mejora el posicionamiento orgánico de tu sitio. El SEM es ideal para obtener resultados rápidos, mientras que el SEO ofrece beneficios a largo plazo.
			`,
    },
    {
      question: "¿Cómo determináis las palabras clave para las campañas?",
      answer: `
				Realizamos un análisis detallado de tu negocio, público objetivo y competencia para seleccionar palabras clave relevantes. Utilizamos herramientas avanzadas como Google Keyword Planner para garantizar que tus anuncios lleguen a las personas adecuadas.
			`,
    },
    {
      question: "¿Cuánto presupuesto necesito para una campaña de SEM?",
      answer: `
				El presupuesto depende de tus objetivos y del nivel de competencia de tu sector. Te ayudamos a definir un presupuesto adecuado y optimizamos cada euro invertido para obtener los mejores resultados posibles.
			`,
    },
    {
      question: "¿Qué plataformas de publicidad utilizáis?",
      answer: `
				Nos especializamos en Google Ads, pero también gestionamos campañas en otras plataformas como Bing Ads y anuncios en redes sociales para complementar tu estrategia de SEM.
			`,
    },
    {
      question: "¿Cómo medís el éxito de las campañas de SEM?",
      answer: `
				Analizamos métricas clave como clics (CTR), conversiones, costo por clic (CPC) y retorno de inversión (ROI). Proporcionamos reportes regulares para que veas el impacto de tus campañas en tiempo real.
			`,
    },
    {
      question: "¿Qué tipo de anuncios podéis crear?",
      answer: `
				Diseñamos diferentes tipos de anuncios, incluyendo anuncios de búsqueda, anuncios gráficos, campañas de remarketing y anuncios de video. Adaptamos los formatos según tus objetivos y audiencia.
			`,
    },
    {
      question: "¿Es el SEM adecuado para mi negocio?",
      answer: `
				El SEM es ideal para empresas que buscan resultados inmediatos y medibles. Si necesitas atraer más clientes, promocionar ofertas específicas o aumentar tu visibilidad en poco tiempo, el SEM es una excelente opción.
			`,
    },
    {
      question: "¿Cuánto tiempo lleva ver resultados con el SEM?",
      answer: `
				Los resultados del SEM son prácticamente inmediatos una vez que la campaña está activa. En cuestión de horas, tus anuncios pueden aparecer en los resultados de búsqueda y empezar a generar clics y conversiones.
			`,
    },
    {
      question: "¿Ofrecéis soporte continuo para las campañas de SEM?",
      answer: `
				Sí, monitorizamos y optimizamos constantemente tus campañas para mejorar su rendimiento. También estamos disponibles para realizar ajustes según tus necesidades o cambios en tu estrategia de negocio.
			`,
    },
  ];
  return <RenderAccordion data={faqData} />;
}
