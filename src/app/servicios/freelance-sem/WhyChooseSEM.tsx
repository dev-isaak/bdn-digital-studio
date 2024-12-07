import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function WhyChooseSEM() {
	const porqueElegirnosSection = [
		{
			number: "01",
			title: "Estrategias personalizadas",
			body: "<p>Nos aseguramos de diseñar campañas de SEM adaptadas a las necesidades específicas de tu negocio, maximizando el impacto en tu público objetivo.</p>",
		},
		{
			number: "02",
			title: "Optimización continua",
			body: "<p>Analizamos el rendimiento de tus campañas en tiempo real y realizamos ajustes constantes para maximizar el ROI y minimizar el costo por clic.</p>",
		},
		{
			number: "03",
			title: "Transparencia total",
			body: "<p>Te proporcionamos reportes claros y detallados para que siempre sepas cómo está funcionando tu inversión publicitaria.</p>",
		},
		{
			number: "04",
			title: "Experiencia comprobada",
			body: "<p>Contamos con años de experiencia en la gestión de campañas SEM para diversos sectores, asegurando resultados tangibles para nuestros clientes.</p>",
		},
	];
	return (
		<CardsBlock>
			{porqueElegirnosSection.map((item, index) => (
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
