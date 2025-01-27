import Card from "./Card";
import { Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/casos-de-exito`,
	},
	title: `Casos de éxito | BDN Digital Studio`,
	description: `Descubre cómo en BDN Digital Studio hemos transformado ideas en resultados exitosos para nuestros clientes. Desde el diseño y desarrollo de sitios web en WordPress hasta proyectos avanzados.`,
};

export default function CasosDeExito() {
	return (
		<section>
			<div className='relative h-[300px] md:h-[450px] bg-primary text-white mb-6'>
				<h1
					className={`${oswald.className} absolute bottom-2 md:bottom-6 left-2 md:left-6 mb-4 text-center text-8xl md:text-[200px] font-semibold`}>
					Casos de éxito.
				</h1>
			</div>
			<div className='w-full flex px-4 flex-col md:flex-row'>
				<div className='w-[100%] md:w-[50%] p-4'>
					<Card
						text='Nobili'
						route='/casos-de-exito/nobili'
						imageURL='grifo-diseno-nobili.webp'
						list={["Wordpress"]}
					/>
				</div>
				<div className='w-[100%] md:w-[50%] p-4'>
					{/* <div className='w-full h-[500px]'></div> */}
				</div>
			</div>
		</section>
	);
}
