"use client";
import { Image } from "@nextui-org/react";
import { Oswald } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

const oswald = Oswald({ subsets: ["latin"] });
export default function NobiliPage() {
	const { scrollYProgress } = useScroll();
	const { isMobile } = useWindowSize();

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? [0, 0] : [-120, 0]
	);
	const ySecond = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? [0, 0] : [150, -100]
	);
	return (
		<>
			<div className='w-full h-[100vh] bg-cover bg-left overflow-hidden'>
				<div
					className='absolute inset-0 bg-cover bg-left'
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
			</div>
			<div className='w-full pb-10 bg-gradient-to-b from-[#a1bca9] to-black '>
				<motion.div
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
				</motion.div>
				<div className='p-2 pt-16 md:pt-32 flex flex-col md:flex-row justify-around items-center gap-0'>
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
				</div>
			</div>
		</>
	);
}
