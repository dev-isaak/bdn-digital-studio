import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
  const faqData = [
    {
      question: "¿Qué incluye el servicio de mantenimiento web?",
      answer: `
				Nuestro servicio de mantenimiento web incluye actualizaciones regulares de software, copias de seguridad, monitoreo de seguridad, resolución de problemas técnicos, optimización de rendimiento y soporte continuo para cambios menores en el sitio.
			`,
    },
    {
      question: "¿Por qué es importante mantener mi web actualizada?",
      answer: `
				Mantener tu web actualizada garantiza su seguridad, evita problemas de compatibilidad y asegura un rendimiento óptimo. Además, las actualizaciones regulares mejoran la experiencia del usuario y el posicionamiento en motores de búsqueda.
			`,
    },
    {
      question: "¿Qué tipo de sitios web mantenéis?",
      answer: `
				Ofrecemos mantenimiento para todo tipo de sitios web, incluidos los desarrollados en WordPress, Astro, React y plataformas personalizadas. Nos adaptamos a las necesidades de tu sitio, independientemente de la tecnología utilizada.
			`,
    },
    {
      question:
        "¿Incluye el mantenimiento la protección contra ataques de hackers?",
      answer: `
				Sí, nuestro servicio de mantenimiento incluye monitoreo de seguridad, instalación de medidas de protección y recuperación en caso de ataques. Trabajamos para prevenir vulnerabilidades y mantener tu sitio seguro.
			`,
    },
    {
      question: "¿Con qué frecuencia realizáis copias de seguridad?",
      answer: `
				Realizamos copias de seguridad de manera regular, dependiendo de la actividad de tu sitio. Para sitios de alto tráfico, las copias pueden ser diarias, mientras que para sitios estándar suelen ser semanales. También podemos ajustar la frecuencia según tus necesidades.
			`,
    },
    {
      question: "¿Qué pasa si mi web deja de funcionar repentinamente?",
      answer: `
				Si tu web experimenta problemas, nuestro equipo actuará rápidamente para identificar y resolver el problema. El soporte técnico está incluido en nuestro servicio de mantenimiento para minimizar el tiempo de inactividad.
			`,
    },
    {
      question:
        "¿Puedo solicitar cambios en mi web como parte del mantenimiento?",
      answer: `
				Sí, el servicio incluye soporte para cambios menores, como actualizaciones de contenido, imágenes o ajustes básicos en el diseño. Si necesitas modificaciones más grandes, podemos ofrecerte un presupuesto adicional.
			`,
    },
    {
      question: "¿Cuánto cuesta el servicio de mantenimiento web?",
      answer: `
				Los precios varían según el tipo de web, la frecuencia de las actualizaciones y el nivel de soporte requerido. Ofrecemos planes personalizados para ajustarnos a tus necesidades y presupuesto.
			`,
    },
    {
      question: "¿El mantenimiento incluye optimización para SEO?",
      answer: `
				Aunque el mantenimiento no se centra específicamente en SEO, incluye ajustes que impactan positivamente en el rendimiento de tu web, como la velocidad de carga y la resolución de errores técnicos. También podemos añadir un servicio adicional de optimización SEO si lo necesitas.
			`,
    },
    {
      question:
        "¿Puedo contratar el mantenimiento aunque mi web no haya sido creada por vosotros?",
      answer: `
				¡Claro que sí! Antes de iniciar el mantenimiento, realizamos una auditoría para evaluar el estado actual de tu sitio y asegurarnos de que podamos trabajar en él sin problemas.
			`,
    },
  ];

  return <RenderAccordion data={faqData} />;
}
