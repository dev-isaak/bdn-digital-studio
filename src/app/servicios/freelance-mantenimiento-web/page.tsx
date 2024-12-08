import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Image } from "@nextui-org/react";
import WhatWeOffer from "./WhatWeOffer";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/freelance-mantenimiento-web`,
	},
	title: `Mantenimiento Web Freelance | BDN Digital Studio`,
	description: `Mantén tu web segura y optimizada con el servicio de mantenimiento WordPress de BDN Digital Studio. Nos encargamos de actualizaciones, copias de seguridad, protección contra malware y optimización constante del rendimiento. Con nuestro soporte técnico especializado, garantizamos que tu sitio funcione perfectamente y esté siempre actualizado. ¡Deja tu web en manos de expertos!`,
};

export default function MaintenaceWeb() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Mantenimiento Web Profesional
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building1.webp'
					altText='Edificio arquitectónico'>
					<p>
						En <strong>BDN Digital Studio</strong>, entendemos que tu sitio web
						es una herramienta esencial para tu negocio. Pero no basta con
						lanzarlo al mundo digital y esperar que funcione sin supervisión.
						Los sitios web, especialmente los basados en{" "}
						<strong>WordPress</strong>, necesitan un mantenimiento constante
						para garantizar que sean rápidos, seguros y funcionales.
					</p>
					<p>
						Nuestro <strong>servicio de mantenimiento WordPress</strong> está
						diseñado para cuidar cada aspecto de tu web, permitiéndote centrarte
						en tu negocio mientras nosotros nos encargamos de todo lo demás.
						Desde actualizaciones y copias de seguridad hasta la optimización de
						rendimiento y la resolución de problemas técnicos, ofrecemos
						soluciones completas para proteger tu inversión digital.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='Qué tan importante es'
					secondText='El mantenimento web en Wordpress'
				/>
				<p>
					Un sitio web sin mantenimiento puede enfrentar varios problemas como:
				</p>
				<ul className='flex flex-col gap-2 my-4 ml-4'>
					<li>
						<strong>Rendimiento deficiente:</strong> Una web lenta aleja a los
						visitantes y perjudica tu posicionamiento en motores de búsqueda.
					</li>
					<li>
						<strong>Riesgos de seguridad:</strong> Las vulnerabilidades en
						plugins, temas o versiones antiguas de WordPress pueden ser
						explotadas por hackers.
					</li>
					<li>
						<strong>Problemas técnicos:</strong> Sin actualizaciones regulares,
						ciertas funciones de tu web podrían dejar de funcionar.
					</li>
				</ul>
				<p>
					El mantenimiento regular no solo evita estos problemas, sino que
					también asegura que tu sitio esté siempre actualizado y optimizado
					para ofrecer la mejor experiencia al usuario.
				</p>
			</section>
			<div className='my-10'>
				<Image
					src='/assets/images/building5.webp'
					alt='edificio arquitectónico'
					width={1200}
					height={400}
				/>
			</div>
			<section>
				<Heading
					firstText='Qué te ofrecemos'
					secondText='con nuestro plan de mantenimiento para empresas'
				/>
				<p>
					En BDN Digital Studio, hemos diseñado un servicio integral de
					mantenimiento para WordPress que se adapta a las necesidades de
					cualquier tipo de negocio.
				</p>
				<WhatWeOffer />
			</section>
			<section>
				<h2 className='uppercase font-medium text-4xl text-center my-6'>
					Preguntas Frecuentes
				</h2>
				<Faq />
			</section>
			<ContactBlock />
		</div>
	);
}
