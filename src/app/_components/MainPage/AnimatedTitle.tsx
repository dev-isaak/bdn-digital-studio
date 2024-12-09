"use client";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

const oswald = Oswald({ subsets: ["latin"] });

export default function AnimatedTitle() {
	const { isMobile } = useWindowSize();

	return (
		<div
			className={`${oswald.className} flex-grow-2 relative md:flex-grow md:ml-8`}>
			<h1 className='absolute top-[20vh] left-1 md:bottom-[calc(3vw+1em)] md:top-[20vh] md:left-2 text-white-light text-[28vw] md:text-[calc(7vw+5vh)] font-medium leading-none tracking-wider font-oswald'>
				{!isMobile ? (
					<>
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
							Éxito
						</motion.div>
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
					</>
				) : (
					<>
						<div>Éxito</div>
						<div>Futuro</div>
						<span className='text-white-strong'>Digital</span>
					</>
				)}
			</h1>
		</div>
	);
}
