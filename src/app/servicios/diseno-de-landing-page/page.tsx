import { Image } from "@nextui-org/react";
// test
export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/diseno-de-landing-page`,
	},
	title: `Diseño de landing page | BDN Digital Studio`,
	description: `Ofrecemos soluciones de diseño y desarrollo de landing pages en Badalona. No solo páginas atractivas sino lo más importante, que convierten. ¡Haz realidad tu proyecto con nosotros!`,
};

export default function DisenoDeLandingPage() {
	return (
		<>
			<Image
				width='100%'
				height={600}
				src='/assets/images/landing-page-hero.webp'
				alt='Imagen de cabecera con texto landing page sobre un edificio arquitectónico'
			/>
			<h1 className='uppercase text-4xl font-semibold text-gray-800 mt-10 mb-6'>
				Agencia de diseño de landing page
			</h1>
			<p>
				Si estás aquí, seguramente buscas una solución eficaz para atraer
				clientes y <strong>mejorar tus conversiones</strong>. En el mundo
				digital actual, un buen diseño de landing page marca la diferencia entre
				una simple visita y un cliente satisfecho. Nos especializamos en crear
				páginas de aterrizaje optimizadas que combinan creatividad, estrategia y
				resultados medibles.{" "}
				<strong>Diseñamos cada detalle pensando en tus objetivos</strong>,
				asegurándonos de que cada llamada a la acción sea clara, atractiva y
				persuasiva. Ya sea que busques captar leads, promover un producto o
				aumentar tus ventas, una landing page bien diseñada puede ser el motor
				que impulse tu negocio al siguiente nivel. Con un enfoque amigable y
				personalizado, trabajaremos contigo para entender tu visión y hacerla
				realidad.
			</p>
			{/* zona para añadir cards */}
		</>
	);
}
