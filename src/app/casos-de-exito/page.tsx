import Card from "./Card";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/casos-de-exito`,
	},
	title: `Casos de éxito | BDN Digital Studio`,
	description: `Descubre cómo en BDN Digital Studio hemos transformado ideas en resultados exitosos para nuestros clientes. Desde el diseño y desarrollo de sitios web en WordPress hasta proyectos avanzados con React y Astro, exploramos soluciones personalizadas que destacan por su diseño, funcionalidad y tecnología avanzada. Inspírate con nuestros casos de éxito y haz realidad tu próximo proyecto con nosotros.`,
};

export default function CasosDeExito() {
	return (
		<section className='mt-16'>
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
