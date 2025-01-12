import { Divider } from "@nextui-org/react";
import { Logo } from "../icons/LogoWhite";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
	const legalRoutes = [
		{
			text: "Política de privacidad",
			href: "/politica-de-privacidad",
		},
		{
			text: "Política de cookies",
			href: "/politica-de-cookies",
		},
	];

	const servicesRoutes = [
		{
			text: "Posicionamiento SEO",
			href: "/servicios/freelance-seo",
		},
		{
			text: "Posicionamiento SEM",
			href: "/servicios/freelance-sem",
		},
		{
			text: "Desarrollo web",
			href: "/servicios/freelance-desarrollo-web",
		},
		{
			text: "Optimización web",
			href: "/servicios/freelance-optimizacion-web",
		},
		{
			text: "Mantenimiento web",
			href: "/servicios/freelance-mantenimiento-web",
		},
		{
			text: "Gestión de redes sociales",
			href: "/servicios/freelance-rrss",
		},
	];

	return (
		<footer
			className={`w-full bg-gray-800
			 flex justify-center items-center`}>
			<div className='w-full bg-transparent flex flex-col items-center'>
				<a
					id='logo'
					href='/'
					className='text-white-light no-underline transition-all duration-300 hover:text-white-strong text-xl font-semibold mt-4'>
					<Logo />
				</a>
				<div className='my-4 max-w-lg m-auto px-4'>
					<h3 className='text-white-light font-semibold text-left'>
						Servicios
					</h3>
					<Divider className='bg-white-light mb-4' />
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						{servicesRoutes.map((route, index) => (
							<a
								key={index}
								href={route.href}
								className='text-white-light text-left no-underline transition-all duration-300 hover:text-white-strong hover:underline'>
								{route.text}
							</a>
						))}
					</div>
				</div>
				<div className='mt-6 flex gap-4'>
					<a
						href='https://www.linkedin.com/company/bdn-digital-studio'
						target='_blank'>
						<FaLinkedin color='white' size={24} />
					</a>
					<a
						href='https://www.instagram.com/bdn_digital_studio'
						target='_blank'>
						<FaInstagram color='white' size={24} />
					</a>
				</div>

				<div className='mt-4 mb-4 flex justify-center gap-4'>
					{legalRoutes.map((route) => (
						<a
							key={route.href}
							href={route.href}
							className='text-white-light no-underline uppercase text-xs hover:text-white-strong'>
							{route.text}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
