"use client";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

export default function Services() {
	return (
		<div className='flex flex-col gap-4'>
			<RenderColumnText
				title='Posicionamiento orgánico (SEO)'
				text='Impulsamos tu presencia digital con estrategias avanzadas de SEO y SEM. Mejoramos el posicionamiento orgánico de tu web en buscadores y gestionamos campañas publicitarias para maximizar tu alcance. Ya sea tráfico orgánico o de pago, diseñamos soluciones personalizadas para atraer más visitantes y aumentar tus conversiones.'
				image='building1.webp'
				alt='Edificio arquitectónico'
				href='/servicios/freelance-seo'
			/>
			<RenderColumnText
				title='Agencia SEM y Gestión de Campañas Publicitarias'
				text='Llega a tu audiencia ideal con campañas publicitarias optimizadas en Google Ads y otras plataformas. Como expertos en SEM, diseñamos estrategias personalizadas para aumentar tu visibilidad, atraer clientes potenciales y maximizar tu retorno de inversión. Resultados rápidos y medibles garantizados.'
				image='building3.webp'
				revert
				alt='Edificio arquitectónico'
				href='/servicios/freelance-sem'
			/>
			<RenderColumnText
				title='Desarrollo Web a Medida y en WordPress'
				text='En BDN Digital Studio, ofrecemos soluciones de desarrollo web en Barcelona, desde sitios en WordPress hasta proyectos personalizados con tecnologías como React y Astro. Creamos páginas atractivas, funcionales y adaptadas a tus necesidades. Nuestro enfoque combina diseño, rendimiento y tecnología avanzada para garantizar una presencia online de alto impacto. ¡Haz realidad tu proyecto con nosotros!'
				image='building8.webp'
				alt='Edificio arquitectónico'
				href='/servicios/freelance-desarrollo-web'
			/>
			<RenderColumnText
				title='Mantenimiento Web Profesional'
				text='Mantén tu web segura y optimizada con el servicio de mantenimiento WordPress de BDN Digital Studio. Nos encargamos de actualizaciones, copias de seguridad, protección contra malware y optimización constante del rendimiento. Con nuestro soporte técnico especializado, garantizamos que tu sitio funcione perfectamente y esté siempre actualizado. ¡Deja tu web en manos de expertos!'
				image='building9.webp'
				revert
				alt='Edificio arquitectónico'
				href='/servicios/freelance-mantenimiento-web'
			/>
			<RenderColumnText
				title='Optimización de Sitios Web'
				text='Aumenta la velocidad y la eficiencia de tu sitio con nuestro servicio de optimización WordPress. En BDN Digital Studio, ajustamos plugins, temas y configuraciones para maximizar el rendimiento. Además, trabajamos con soluciones a medida en otros frameworks, como React o Astro, para garantizar una web rápida, segura y preparada para destacar en los resultados de búsqueda.'
				image='building11.webp'
				alt='Edificio arquitectónico'
				href='/servicios/freelance-optimizacion-web'
			/>
			<RenderColumnText
				title='Gestión de Redes Sociales'
				text='Impulsa la presencia digital de tu marca con nuestra gestión profesional de redes sociales en BDN Digital Studio. Creamos contenido atractivo, planificamos estrategias efectivas y gestionamos campañas publicitarias para conectar con tu audiencia ideal. Nuestro enfoque personalizado garantiza que tu marca destaque y logre resultados medibles en plataformas como Instagram, Facebook y LinkedIn.'
				image='building12.webp'
				alt='Edificio arquitectónico'
				revert
				href='/servicios/freelance-rrss'
			/>
		</div>
	);
}

interface RenderColumnTextProps {
	title: string;
	text: string;
	image: string;
	alt: string;
	revert?: boolean;
	href: string;
}
const RenderColumnText = ({
	title,
	text,
	image,
	revert = false,
	alt,
	href,
}: RenderColumnTextProps) => {
	const { isMobile } = useWindowSize();
	return (
		<div
			className={`max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 p-4 ${
				revert ? "md:[direction:rtl]" : ""
			}`}>
			<div className='md:[direction:ltr] flex flex-col justify-center'>
				<motion.div
					initial={{ x: revert ? 100 : -100, y: revert ? 50 : -50 }}
					whileInView={{ x: 0, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<h4 className='text-2xl text-default-900 font-semibold'>{title}</h4>
					<p className='mt-4'>{text}</p>
					<Button
						as={Link}
						href={href}
						color='primary'
						size='md'
						radius='sm'
						className='w-fit mt-6'
						endContent={<FaArrowRightLong />}>
						Más Detalles
					</Button>
				</motion.div>
			</div>
			<div className='flex justify-center md:justify-end'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<Image
						isBlurred
						alt={alt}
						className={`m-5 ${
							isMobile ? `translate-x-[-20px]` : "translate-x-0"
						}`}
						src={`/assets/images/${image}`}
						width={240}
						height={350}
					/>
				</motion.div>
			</div>
		</div>
	);
};
