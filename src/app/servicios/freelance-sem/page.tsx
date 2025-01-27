import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Image } from "@nextui-org/react";
import WhyChooseSEM from "./WhyChooseSEM";
import OurServices from "./OurServices";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/freelance-sem`,
	},
	title: `Campañas de SEM | BDN Digital Studio`,
	description: `Llega a tu audiencia ideal con campañas publicitarias optimizadas en Google Ads y otras plataformas. Como expertos en SEM, diseñamos estrategias personalizadas para aumentar tu visibilidad, atraer clientes potenciales y maximizar tu retorno de inversión. Resultados rápidos y medibles garantizados.`,
};

export default function SEM() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Agencia SEM y Gestión de Campañas Publicitarias
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building3.webp'
					altText='Edificio arquitectónico'>
					<p>
						En <strong>BDN Digital Studio</strong>, entendemos la importancia de
						una estrategia de marketing en buscadores bien diseñada. Nuestro
						servicio de SEM combina creatividad, análisis de datos y una gestión
						experta para que tus anuncios alcancen el máximo rendimiento. Con
						campañas adaptadas a tus objetivos y optimización constante,
						ayudamos a que tu negocio destaque entre la competencia y atraiga
						clientes potenciales de calidad.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='Qué es el SEM'
					secondText='Y cómo puede beneficiar a tu negocio'
				/>
				<p>
					El <strong>SEM (Search Engine Marketing)</strong> es una técnica de
					publicidad digital que permite a las empresas aparecer en los primeros
					resultados de búsqueda de manera rápida y efectiva. A través de
					campañas de pago, puedes atraer tráfico cualificado, aumentar tus
					ventas y mejorar la visibilidad de tu marca.
				</p>

				<p>
					En BDN Digital Studio, nos especializamos en diseñar y gestionar
					<strong>campañas de SEM</strong> que generan resultados medibles.
					Desde la selección de palabras clave hasta el análisis de métricas,
					trabajamos para maximizar el retorno de tu inversión publicitaria.
				</p>
			</section>
			<div className='my-10'>
				<Image
					src='/assets/images/building4.webp'
					alt='edificio arquitectónico'
					width={1200}
					height={400}
				/>
			</div>
			<section>
				<Heading
					firstText='Por qué hacer SEM'
					secondText='Y Para potenciar tu negocio'
				/>
				<WhyChooseSEM />
			</section>
			<section>
				<Heading
					firstText='Nuestros servicios'
					secondText='De marketing para empresas'
				/>
				<OurServices />
			</section>
			<section>
				<Faq />
			</section>
			<ContactBlock />
		</div>
	);
}
