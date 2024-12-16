"use client";
import { motion } from "framer-motion";

export default function CarousselTitle({ title }: { title: string }) {
	// Variantes de animación para el movimiento infinito
	const marqueeVariants = {
		animate: {
			x: ["0%", "-100%"], // Desde fuera de la pantalla a la izquierda hasta fuera de la pantalla a la derecha
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 20, // Duración del loop en segundos
					ease: "linear",
				},
			},
		},
	};

	return (
		<div className='cursor-default h-60 md:h-72 transition-all duration-500 text-[#efefef] hover:text-gray-600'>
			<div className='absolute left-0 w-full overflow-hidden '>
				{/* Contenedor de la animación sin clases en motion.div */}
				<motion.div variants={marqueeVariants} animate='animate'>
					{/* Contenedor con las clases y flex-direction horizontal */}
					<div className='flex flex-row whitespace-nowrap gap-20'>
						{/* Replicamos el texto varias veces para dar el efecto de loop */}
						{[...Array(5)].map((_, index) => (
							<h2
								key={index}
								className='uppercase font-extrabold text-9xl md:text-[200px] px-4 flex-shrink-0'>
								{title}
							</h2>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
