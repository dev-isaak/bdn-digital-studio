import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Image } from "@nextui-org/react";
import WhyUsSection from "./WhyUsSection";
import OurServices from "./OurServices";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/freelance-rrss`,
	},
	title: `Gestión de Redes Sociales | BDN Digital Studio`,
	description: `Gestionamos tus redes sociales de manera estratégica para conectar con tu audiencia y potenciar tu marca. Creamos contenido atractivo, optimizamos publicaciones y analizamos resultados para garantizar un crecimiento constante en tus plataformas digitales. Con nuestras estrategias, convertimos seguidores en clientes fieles.`,
};

export default function RRSS() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Gestión de Redes Sociales
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building12.webp'
					altText='Edificio arquitectónico'>
					<p>
						En <strong>BDN Digital Studio</strong>, sabemos que gestionar redes
						sociales puede ser abrumador y consumir tiempo valioso. Si sientes
						que tus esfuerzos no generan resultados, que no conectas con tu
						audiencia ideal, o que te faltan estrategias claras para destacar
						entre la competencia, estamos aquí para ayudarte. Combinamos
						estrategia, creatividad y análisis continuo para transformar tus
						redes sociales en una herramienta efectiva que impulsa tu marca y
						genera resultados reales.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='Gestión de Redes Sociales'
					secondText='Un impulso estratégico para tu negocio'
				/>
				<p>
					Las redes sociales no son solo plataformas de entretenimiento; son
					herramientas esenciales para construir una marca, interactuar con
					clientes y aumentar tus ingresos. En BDN Digital Studio,{" "}
					<strong>
						gestionamos tus redes sociales con estrategias efectivas
					</strong>{" "}
					para maximizar su impacto.
				</p>
			</section>
			<div className='my-10'>
				<Image
					src='/assets/images/building13.webp'
					alt='edificio arquitectónico'
					width={1200}
					height={400}
				/>
			</div>
			<section>
				<Heading
					firstText='Por qué deberías confiarnos'
					secondText='La gestión de tus redes sociales'
				/>
				<WhyUsSection />
			</section>
			<section>
				<Heading
					firstText='Nuestros servicios'
					secondText='Adaptados a las necesidades de tu negocio'
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
