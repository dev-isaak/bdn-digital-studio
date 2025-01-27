import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function ServiciosSection() {
	const serviciosSection = [
		{
			number: "01",
			title: "Auditorías SEO",
			body: "<p class='description'>Auditamos tu web para descubrir las fortalezas y debilidades de tu estrategia SEO actual. Identificamos problemas y oportunidades de mejora para llevar tu página al siguiente nivel.</p><p>En BDN Digital Studio, realizamos auditorías personalizadas y te proporcionamos un plan de acción claro para maximizar el rendimiento de tu sitio.</p>",
		},
		{
			number: "02",
			title: "SEO On-Page",
			body: "<p>Optimizamos cada elemento interno de tu web para mejorar su relevancia y posicionamiento en motores de búsqueda. Desde etiquetas meta hasta la estructura del contenido u optimización de imágenes, cuidamos cada detalle para que Google entienda mejor tu sitio.</p><p>En BDN Digital Studio, trabajamos en palabras clave, enlaces internos y contenido estratégico para garantizar que tu página alcance su máximo potencial.</p>",
		},
		{
			number: "03",
			title: "SEO Local",
			body: "<p class='description'>Posicionamos tu negocio en búsquedas geolocalizadas y destacamos tu negocio frente a la competencia en tu área. SEO Local es esencial para empresas que buscan captar clientes cercanos.</p><p>Configuramos Google My Business, optimizamos palabras clave locales y creamos contenido dirigido para que los clientes te encuentren fácilmente.</p>",
		},
		{
			number: "04",
			title: "Core Web Vitals",
			body: "<p class='description'>Mejoramos la experiencia del usuario optimizando métricas como velocidad de carga, interactividad y estabilidad visual. Estas métricas son clave para tu posicionamiento en Google.</p><p>En BDN Digital Studio, analizamos tu web con herramientas avanzadas y aplicamos mejoras técnicas para cumplir con los estándares de Core Web Vitals.</p>",
		},
	];
	return (
		<CardsBlock>
			{serviciosSection.map((item, index) => (
				<CardWithTopNumber
					key={index}
					number={item.number}
					title={item.title}
					text={item.body}
				/>
			))}
		</CardsBlock>
	);
}
