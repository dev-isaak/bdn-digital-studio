import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Button, Image, Link } from "@nextui-org/react";
import { ImCross } from "react-icons/im";
import HowWeWork from "./HowWeWork";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";
import React from "react";
import CardDevelopment from "./CardDevelopment";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/freelance-desarrollo-web`,
	},
	title: `Diseño y desarrollo de páginas web | BDN Digital Studio`,
	description: `Ofrecemos soluciones de diseño y desarrollo web en Badalona, desde sitios en WordPress hasta proyectos personalizados. Creamos páginas atractivas, funcionales y adaptadas a tus necesidades. ¡Haz realidad tu proyecto con nosotros!`,
};

export default function WebDevelopment() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Diseño y desarrollo web a medida y en WordPress
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building8.webp'
					altText='Edificio arquitectónico'>
					<p>
						En BDN Digital Studio nos especializamos en el{" "}
						<strong>diseño y desarrollo de páginas web en Badalona</strong>. Nos
						apasiona crear experiencias digitales únicas, adaptadas a las
						necesidades de nuestros clientes. Ofrecemos soluciones integrales
						que incluyen desde la{" "}
						<strong>creación de páginas en WordPress</strong> hasta proyectos de
						desarrollo a medida.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='Cuál es nuestra función'
					secondText='Como agencia de diseño y creación de páginas web '
				/>
				<p>
					En la actualidad, contar con un sitio web profesional ya no es
					opcional; es una necesidad. Tu página web es tu carta de presentación
					en el mundo digital y el primer lugar donde los clientes potenciales
					buscan información sobre tus productos o servicios.
				</p>
				<p>
					En <strong>BDN Digital Studio</strong>, sabemos que un sitio bien
					diseñado no solo debe verse bien, sino también ser funcional, rápido y
					estar optimizado para convertir visitantes en clientes. Y ahí es donde
					entramos nosotros, por eso, trabajamos en proyectos que combinan
					diseño, rendimiento y tecnología de vanguardia, haciendo que tus
					clientes te encuentren esten donde esten.
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
					firstText='Qué te ofrecemos'
					secondText='Como empresa de desarrollo de páginas web'
				/>
				<p>
					En BDN Digital Studio, nos especializamos en las tecnologías más
					demandadas por nuestros clientes. Como agencia de diseño de páginas
					web creamos servicios a medida teniendo en cuenta los requisitos de
					nuestros clientes.
				</p>
				<div className='flex justify-center xl:justify-between bg-[#6ba8ac50] p-4 flex-wrap mt-4 gap-4'>
					<CardDevelopment />
				</div>
			</section>
			<section>
				<Heading
					firstText='Cómo trabajamos'
					secondText='Durante el desarrollo de tu web'
				/>
				<HowWeWork />
			</section>
			<section>
				<Faq />
			</section>
			<ContactBlock />
		</div>
	);
}
