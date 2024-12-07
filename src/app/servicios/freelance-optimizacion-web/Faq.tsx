import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
	const faqData = [
		{
			question: "¿Qué incluye el servicio de optimización de sitios web?",
			answer: `
				Nuestro servicio de optimización incluye mejoras en la velocidad de carga, SEO técnico, diseño responsive, experiencia de usuario (UX), rendimiento general y corrección de errores técnicos que puedan afectar la funcionalidad del sitio.
			`,
		},
		{
			question: "¿Cómo sé si mi sitio web necesita optimización?",
			answer: `
				Si tu web es lenta, no aparece bien posicionada en los motores de búsqueda, no funciona correctamente en dispositivos móviles, o recibes quejas de usuarios sobre la navegación, es probable que necesite optimización. También realizamos auditorías para identificar problemas específicos.
			`,
		},
		{
			question: "¿Podéis mejorar la velocidad de carga de mi sitio web?",
			answer: `
				Sí, la velocidad de carga es una de nuestras prioridades. Optimizamos imágenes, minimizamos código, utilizamos tecnologías de caché y mejoramos la configuración del servidor para garantizar tiempos de carga rápidos.
			`,
		},
		{
			question: "¿Cómo afecta la optimización al SEO de mi sitio?",
			answer: `
				Un sitio optimizado mejora su posicionamiento en los motores de búsqueda porque factores como la velocidad de carga, la experiencia del usuario y el diseño responsive son elementos clave para el SEO. Además, nos aseguramos de implementar las mejores prácticas de SEO técnico durante la optimización.
			`,
		},
		{
			question: "¿Qué herramientas utilizáis para optimizar sitios web?",
			answer: `
				Utilizamos herramientas avanzadas como Google PageSpeed Insights, GTmetrix, Lighthouse y Ahrefs, entre otras, para analizar el rendimiento y encontrar áreas de mejora. También trabajamos con tecnologías modernas para implementar soluciones efectivas.
			`,
		},
		{
			question:
				"¿Puedo seguir usando mi web durante el proceso de optimización?",
			answer: `
				En la mayoría de los casos, sí. Realizamos las optimizaciones en un entorno de prueba o durante horarios de menor tráfico para evitar interrupciones en la experiencia de tus usuarios.
			`,
		},
		{
			question: "¿Cuánto tiempo tarda la optimización de un sitio web?",
			answer: `
				Depende del tamaño y la complejidad de tu sitio, así como de los problemas identificados. Generalmente, un proyecto de optimización puede llevar entre 1 y 4 semanas. Te proporcionaremos un cronograma claro desde el inicio.
			`,
		},
		{
			question: "¿Podéis optimizar cualquier tipo de sitio web?",
			answer: `
				Sí, trabajamos con todo tipo de sitios web, ya sean creados en WordPress, frameworks como Astro o React, o plataformas personalizadas. Adaptamos nuestras estrategias a las características de tu proyecto.
			`,
		},
		{
			question:
				"¿La optimización incluye mejoras en la experiencia del usuario (UX)?",
			answer: `
				Absolutamente. Mejorar la experiencia del usuario es una parte clave de nuestro servicio. Esto incluye optimizar la navegación, la estructura del contenido y la facilidad de uso en todos los dispositivos.
			`,
		},
		{
			question: "¿Proporcionáis reportes después de la optimización?",
			answer: `
				Sí, al finalizar el proceso, te entregamos un reporte detallado con las mejoras realizadas, el impacto en el rendimiento y las métricas clave, como velocidad de carga, puntuaciones de SEO técnico y otros indicadores importantes.
			`,
		},
	];

	return <RenderAccordion data={faqData} />;
}
