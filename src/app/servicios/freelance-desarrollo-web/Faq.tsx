import RenderAccordion from "@/app/_components/RenderAccordion";

export default function Faq() {
	const faqData = [
		{
			question: "¿Qué tipo de páginas web desarrolláis?",
			answer: `
				Diseñamos y desarrollamos todo tipo de páginas web, desde sitios informativos, blogs y tiendas online hasta plataformas personalizadas. Trabajamos tanto con WordPress como con frameworks a medida como Astro y React.
			`,
		},
		{
			question: "¿Cómo decido entre WordPress y un desarrollo a medida?",
			answer: `
				Dependerá de las necesidades de tu proyecto. WordPress es ideal para sitios que necesitan flexibilidad y rapidez, como blogs o tiendas online. Si requieres funcionalidades específicas o un alto rendimiento, recomendamos un desarrollo a medida con frameworks como Astro o React.
			`,
		},
		{
			question: "¿Qué incluye vuestro servicio de desarrollo web?",
			answer: `
				Incluye diseño personalizado, desarrollo optimizado, integración de funcionalidades, configuración de hosting y dominio, y optimización para SEO. También garantizamos un diseño responsive y una experiencia de usuario intuitiva.
			`,
		},
		{
			question: "¿Podré gestionar mi web una vez terminada?",
			answer: `
				¡Claro que sí! Si eliges WordPress, te proporcionaremos acceso al panel de administración y una breve formación para que puedas añadir o modificar contenido fácilmente. En desarrollos a medida, podemos integrar herramientas de administración personalizadas.
			`,
		},
		{
			question: "¿Cuánto tiempo tardáis en desarrollar una web?",
			answer: `
				El tiempo varía según la complejidad del proyecto. Una web estándar en WordPress puede estar lista en 3-4 semanas, mientras que un desarrollo a medida puede tomar entre 6 y 12 semanas. Definimos plazos claros desde el inicio.
			`,
		},
		{
			question: "¿Ofrecéis servicios de mantenimiento web?",
			answer: `
				Sí, ofrecemos planes de mantenimiento para asegurar que tu web esté siempre actualizada, segura y funcionando al máximo rendimiento. Esto incluye actualizaciones, copias de seguridad y soporte técnico.
			`,
		},
		{
			question: "¿Mi web será compatible con dispositivos móviles?",
			answer: `
				Sí, todas nuestras webs se desarrollan con diseño responsive, lo que garantiza que se vean y funcionen perfectamente en cualquier dispositivo, ya sea ordenador, móvil o tablet.
			`,
		},
		{
			question: "¿Qué pasa si necesito funcionalidades especiales?",
			answer: `
				Podemos desarrollar funcionalidades personalizadas según tus necesidades. Ya sea una integración con herramientas de terceros, sistemas de reservas, membresías o cualquier otra funcionalidad, nos adaptamos a tu proyecto.
			`,
		},
		{
			question: "¿Incluís optimización para SEO en el desarrollo web?",
			answer: `
				Sí, desde la estructura del sitio hasta el contenido y la velocidad de carga, desarrollamos las páginas con las mejores prácticas SEO para garantizar un buen posicionamiento en los motores de búsqueda.
			`,
		},
		{
			question: "¿Qué garantías ofrecéis sobre el desarrollo de la web?",
			answer: `
				Ofrecemos soporte post-lanzamiento para solucionar cualquier problema técnico y asegurarnos de que la web funcione correctamente. Además, todos nuestros desarrollos incluyen pruebas exhaustivas antes de la entrega.
			`,
		},
	];
	return <RenderAccordion data={faqData} />;
}
