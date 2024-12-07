import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
	const faqData = [
		{
			question: "¿Qué incluye el servicio de gestión de redes sociales?",
			answer: `
				Nuestro servicio de gestión de redes sociales incluye la planificación estratégica de contenido, publicación regular, interacción con la audiencia, gestión de comunidades, campañas publicitarias en redes sociales (social ads) y análisis de métricas. Todo adaptado a las necesidades de tu negocio.
			`,
		},
		{
			question: "¿Qué redes sociales gestionáis?",
			answer: `
				Trabajamos con las principales plataformas como Facebook, Instagram, X o LinkedIn. Si necesitas gestionar otras plataformas específicas, podemos evaluarlo y adaptar nuestra estrategia.
			`,
		},
		{
			question:
				"¿Por qué debería contratar un servicio de gestión de redes sociales?",
			answer: `
				Contratar un servicio profesional garantiza una estrategia consistente, contenido de calidad, interacción efectiva con la audiencia y una mejora significativa en la visibilidad de tu marca. Además, te permite ahorrar tiempo y concentrarte en otros aspectos de tu negocio.
			`,
		},
		{
			question: "¿Cómo medís el éxito de la gestión de redes sociales?",
			answer: `
				Evaluamos el éxito a través de métricas clave como el crecimiento de seguidores, alcance, interacción, clics en enlaces, generación de leads y conversiones. También generamos reportes periódicos para que veas los resultados y ajustes necesarios.
			`,
		},
		{
			question: "¿Cuánto cuesta el servicio de gestión de redes sociales?",
			answer: `
				Los precios varían según las necesidades específicas de tu negocio, el número de redes a gestionar y la intensidad de las campañas. Ofrecemos planes personalizados para ajustarnos a tu presupuesto y objetivos.
			`,
		},
		{
			question: "¿Puedo participar en la creación de contenido para mis redes?",
			answer: `
				¡Por supuesto! Valoramos tu conocimiento del negocio y tu visión de la marca. Podemos trabajar juntos en la creación de contenido o asumir todo el proceso, según tus preferencias.
			`,
		},
		{
			question:
				"¿Es necesario invertir en publicidad pagada en redes sociales?",
			answer: `
				Aunque no es obligatorio, la publicidad en redes sociales es una herramienta poderosa para aumentar el alcance y generar resultados más rápidos. Diseñamos campañas de social ads que complementan la gestión orgánica para maximizar tus objetivos.
			`,
		},
		{
			question: "¿Qué pasa si no tengo redes sociales creadas?",
			answer: `
				No te preocupes, nos encargamos de todo el proceso. Crearemos las cuentas necesarias, optimizaremos sus perfiles y configuraremos las estrategias iniciales para empezar con el pie derecho.
			`,
		},
		{
			question: "¿Cuánto tiempo tomará ver resultados?",
			answer: `
				El tiempo para ver resultados puede variar según tus objetivos y la plataforma. Normalmente, los resultados orgánicos tardan entre 2 y 3 meses en reflejarse, mientras que las campañas publicitarias pueden generar impacto en cuestión de semanas.
			`,
		},
		{
			question: "¿Cómo sé que la estrategia está funcionando?",
			answer: `
				Proporcionamos reportes mensuales con métricas clave y análisis detallados para que puedas comprobar el progreso. Además, ajustamos la estrategia en tiempo real para optimizar los resultados.
			`,
		},
	];

	return <RenderAccordion data={faqData} />;
}
