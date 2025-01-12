"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import { Oswald } from "next/font/google";
import { Image } from "@nextui-org/react";

const oswald = Oswald({ subsets: ["latin"] });

export default function ContentProduct() {
	const { scrollYProgress } = useScroll();
	const { isMobile } = useWindowSize();

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? [0, 0] : [-120, 350]
	);
	const ySecond = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? [0, 0] : [50, -500]
	);
	return (
		<>
			{/* <motion.div
				initial={{ x: "-100%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				whileInView={{ x: 0 }}
				viewport={{ once: false, amount: 0.5 }}>
				<div className='flex items-center gap-2 mt-[-50px] md:mt-[-130px] ml-4 absolute'>
					<div className='text-white font-thin text-[1.8rem] leading-[1.8rem] md:text-[6rem] md:leading-[5rem] lg:text-[4rem] lg:leading-[4.5rem]'>
						<p>Servicio</p>
						<p>Técnico</p>
					</div>
					<p
						className={`${oswald.className} text-[4rem] md:text-[8rem] lg:text-[10rem] bg-gradient-radial from-[#ffffff] to-[#b6b6b6] inline-block text-transparent bg-clip-text z-10`}>
						NOBILI
					</p>
				</div>
			</motion.div> */}
			{/* <div className='p-2 pt-16 md:pt-32 flex flex-col md:flex-row justify-around items-center gap-0'>
				<motion.div style={{ translateY: ySecond }}>
					<Image
						alt='captura de página web de servicio técnico nobili'
						src='/assets/images/nobili1.png'
						className='rounded-none rounded-t-lg md:rounded-lg'
						width={600}
					/>
				</motion.div>
				<motion.div style={{ translateY: y }}>
					<Image
						width={600}
						alt='captura de página web de servicio técnico nobili'
						src='/assets/images/nobili2.png'
						className='rounded-none rounded-b-lg md:rounded-lg'
					/>
				</motion.div>
			</div> */}
			<div className='max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32'>
				{/* Imágenes */}
				<div className='order-2 md:order-1 p-2'>
					<Image
						alt='captura de página web de servicio técnico nobili'
						src='/assets/images/nobili1.png'
						className='rounded-none'
						width={600}
					/>
					<Image
						width={600}
						alt='captura de página web de servicio técnico nobili'
						src='/assets/images/nobili2.png'
						className='rounded-none'
					/>
				</div>

				{/* Texto */}
				<div className='order-1 md:order-2 text-white max-w-[600px]'>
					<div className='md:absolute md:h-[900px] max-w-[550px]'>
						<div className='md:sticky md:top-8 p-2'>
							<h3 className='text-lg font-medium'>Sencillez y eficacia</h3>
							<p>
								Con un enfoque minimalista, eliminamos todas las distracciones
								innecesarias para resaltar lo verdaderamente importante: un
								formulario intuitivo y altamente eficiente que se centra en
								resolver directamente las necesidades de nuestro cliente. Este
								formulario no solo recopila la información clave de manera
								rápida y sencilla, sino que también envía los datos por correo
								de forma automática.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className='absolute right-0 bottom-0'>
				<Image
					alt='hojas'
					src='/assets/images/group089.png'
					width={400}
					className='rounded-none'
				/>
			</div> */}
		</>
	);
}
