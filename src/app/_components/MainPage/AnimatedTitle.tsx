"use client";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });

export default function AnimatedTitle() {
	return (
		<div
			className={`${oswald.className} flex-grow-2 relative md:flex-grow md:ml-8`}>
			<h1 className='absolute top-[20vh] left-1 md:bottom-[calc(3vw+1em)] md:top-auto md:left-2 text-white-light text-[16vw] md:text-[calc(7vw+5vh)] leading-none tracking-wider font-oswald'>
				<motion.div
					initial={{ x: "-100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						// delay: 0.2,
					}}
					whileInView={{ x: 0 }}
					viewport={{ once: false, amount: 0.5 }}>
					Éxito
				</motion.div>
				<motion.div
					initial={{ x: "-100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						// delay: 0.4,
					}}
					whileInView={{ x: 0 }}
					viewport={{ once: false, amount: 0.5 }}>
					Futuro
				</motion.div>
				<span className='text-white-strong'>
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
						Digital
					</motion.div>
				</span>
			</h1>
		</div>
	);
}
