import { Image } from "@nextui-org/react";
import Heading from "@/app/_components/Heading";
import ContentProduct from "./ContentProduct";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/casos-de-exito/nobili`,
	},
	title: `Nobili - Casos de éxito | BDN Digital Studio`,
	description: `En esta sección, descubre cómo BDN Digital Studio ayudó a Nobili, líder en la fabricación de grifería, a mejorar su presencia online con un diseño web funcional y atractivo. A través de soluciones personalizadas y tecnología avanzada, transformamos su sitio web en una herramienta eficaz para conectar con sus clientes. Conoce los detalles de este caso de éxito y cómo podemos llevar tu proyecto al siguiente nivel.`,
};

export default function NobiliPage() {
	return (
		<>
			<Image
				radius='none'
				src='/assets/images/nobili-header.webp'
				width='100%'
				height='100%'
				alt='fondo con letras grandes de nobili y un grifo de diseño'
			/>
			{/* <div className='w-full h-[80vh] md:h-[100vh] bg-cover overflow-hidden'>
				<div
					className='absolute inset-0 bg-cover bg-center'
					style={{
						backgroundImage: `
						linear-gradient(to bottom left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 90%), 
						url('/assets/images/respiro_banner_2.2400x0.jpg')
					`,
					}}
				/>
				<div className='w-full h-full flex justify-center xl:justify-start'>
					<Image
						alt='imagen de ordenador con fondo de imagen de página web de nobili'
						src='/assets/images/group86.png'
						className='rounded-none top-[24%] '
					/>
					<Image
						alt='imagen de movil con fondo de imagen de página web de nobili'
						src='/assets/images/group87.png'
						className='rounded-none transform hover:scale-110 transition-all duration-500 ease-in-out right-[60%] top-[40%]'
					/>
				</div>
			</div> */}
			<div className='w-full py-10 bg-[#0d0d0d]'>
				<ContentProduct />
			</div>
			<div className='max-w-2xl m-auto py-8 px-2'>
				<Heading firstText='El cliente' secondText='Minimalismo italiano' />
				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						Nobili, lider en fabricación de grifería para baños y cocina, que
						combina innovación, experiencia y atención al detalle durante más de
						60 años.
					</p>
					<p>
						Sus colecciones se destacan por una identidad estilística única, un
						alto estándar en diseño y calidad de producción, así como una
						atención especial a la ergonomía y la eficiencia funcional.
					</p>
				</div>
				<div className='mt-6'></div>
				<Heading firstText='Objetivos' secondText='Claros y alcanzables' />
				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						El principal objetivo fue desarrollar una plataforma funcional y
						accesible que permita a los usuarios encontrar y comunicarse
						fácilmente con la empresa en caso de una avería. Además, se buscó
						garantizar una experiencia de usuario intuitiva, manteniendo la
						identidad visual de la marca y su reputación de excelencia.
					</p>
				</div>
			</div>
			<Image
				alt='imagen de diseño de nobili'
				src='/assets/images/sole_amb_esterno_01-1.1920x0.jpg'
				className='rounded-none'
			/>
			<div className='max-w-2xl m-auto py-8 px-2'>
				<Heading firstText='Proceso' secondText='Estrategia y ejecución' />
				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						El desarrollo se realizó en varias etapas, comenzando con la
						investigación y el análisis de los requisitos del cliente.
						Posteriormente, se definió una arquitectura adecuada para garantizar
						escalabilidad, se crearon prototipos para validar el diseño, y se
						implementaron las funcionalidades requeridas, seguidas de pruebas
						exhaustivas para asegurar la calidad.
					</p>
				</div>
				<div className='mt-6'></div>
				<Heading firstText='El proyecto' secondText='Sencillo y directo' />
				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						Atendiendo a los requerimientos específicos del cliente, hemos
						trabajado en estrecha colaboración con su equipo desde el inicio del
						proyecto, con el objetivo de proporcionar una solución efectiva a su
						problema principal: garantizar que sus clientes puedan encontrarlos
						y comunicarse con ellos de manera rápida y sencilla en caso de una
						avería.
					</p>
					<p>
						Para mantener la coherencia visual y reforzar la identidad de la
						marca, se ha respetado la línea de diseño corporativa establecida en
						su página principal. Esto incluye la implementación de un encabezado
						limpio y profesional, junto con un formulario optimizado que cuenta
						únicamente con los campos necesarios para cumplir con los objetivos
						definidos.
					</p>
				</div>
			</div>
			<div className='w-full flex justify-center'>
				<Image
					alt='collage de imagenes de grifería de diseño'
					src='/assets/images/group95.png'
					className='rounded-none'
				/>
			</div>
			<div className='max-w-2xl m-auto py-8 px-2'>
				<Heading firstText='Próximos pasos' secondText='Mejoras continuas' />

				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						Estamos comprometidos con el mantenimiento y la mejora continua del
						sistema, asegurándonos de que evolucione junto con las necesidades
						del cliente y sus usuarios. Las próximas etapas incluirán la
						integración de nuevas funciones, la optimización continua del
						rendimiento y SEO local para que los clientes puedan encontrar
						fácilmente la página de contacto.
					</p>
				</div>
				<Heading firstText='Resultados' secondText='Impacto positivo' />
				<div className='max-w-xl m-auto'>
					<p className='mb-4'>
						Como resultado del proyecto, se logró una plataforma intuitiva que
						ha mejorado significativamente la interacción con los usuarios
						finales. El cliente reporta una mayor eficiencia en la resolución de
						problemas y una mejor experiencia para sus clientes, lo que refuerza
						la confianza en su marca.
					</p>
				</div>
			</div>
		</>
	);
}
