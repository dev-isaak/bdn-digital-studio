import Heading from "@/app/_components/Heading";
import { Image } from "@nextui-org/react";
import OurMetodology from "./OurMetodology";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";
import TwoBlockGrid from "../components/TwoBlockGrid";
import AtreveteSection from "./AtreveteSection";
import ServiciosSection from "./ServiciosSection";

export default function SEO() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Posicionamiento SEO
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building1.webp'
					altText='Edificio arquitectónico'>
					<p>
						En <strong>BDN Digital Studio</strong>, entendemos que tener una
						página web no es suficiente para triunfar en el mundo digital. Es
						crucial que tu audiencia objetivo pueda encontrar tu sitio de manera
						fácil y orgánica. Por eso, en nuestro estudio de desarrollo web, nos
						especializamos en <strong>estrategias SEO</strong> que llevan tu
						negocio al siguiente nivel.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='Qué es el SEO'
					secondText='Y por qué es crucial para tu página web'
				/>
				<p>
					El SEO (<strong>Search Engine Optimization</strong>) es el arte y la
					ciencia de optimizar tu sitio web para que aparezca en los primeros
					resultados de motores de búsqueda como Google. Es una herramienta
					esencial para captar la atención de clientes potenciales en un entorno
					digital cada vez más competitivo.
				</p>
				<p>
					En <strong>BDN Digital Studio</strong>, sabemos que{" "}
					<strong>
						el 93% de las experiencias en línea comienzan con un motor de
						búsqueda
					</strong>
					, y el 75% de los usuarios nunca pasan de la primera página. Si tu
					sitio no está optimizado, estás perdiendo valiosas oportunidades de
					negocio.
				</p>
			</section>
			<div className='my-10'>
				<Image
					src='/assets/images/building10.webp'
					alt='edificio arquitectónico'
					width={1200}
					height={400}
				/>
			</div>
			<section>
				<Heading
					firstText='Atrévete'
					secondText='A dejar el SEO en nuestras manos'
				/>
				<AtreveteSection />
			</section>
			<section>
				<Heading
					firstText='Nuestra metodología'
					secondText='Como agencia frellace seo'
				/>
				<OurMetodology />
			</section>
			<section>
				<Heading
					firstText='Nuestros servicios'
					secondText='Podrán ayudarte en el SEO de tu web'
				/>
				<ServiciosSection />
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
