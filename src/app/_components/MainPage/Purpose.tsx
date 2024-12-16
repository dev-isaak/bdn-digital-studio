"use client";
import { Image } from "@nextui-org/react";
import Heading from "../Heading";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

export default function Purpose() {
	const { scrollYProgress } = useScroll();
	const { isMobile } = useWindowSize();

	const y = useTransform(scrollYProgress, [0, 1], [250, -600]);
	const ySecond = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? [250, -600] : [550, -900]
	);

	const RenderDiv = ({
		children,
		x,
	}: {
		children: React.ReactNode;
		x: number;
	}) => {
		return isMobile ? (
			<div>{children}</div>
		) : (
			<motion.div
				initial={{ x }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}>
				{children}
			</motion.div>
		);
	};

	return (
		<div>
			<Heading
				firstText='Tenemos algo para ti'
				secondText='Vamos a construir tu futuro digital'
			/>
			<div className='flex flex-wrap justify-center'>
				<div className='mt-6 flex flex-col gap-4 max-w-lg m-auto'>
					<RenderDiv x={-400}>
						<p>
							Imagina esto: <strong>tienes una visión</strong>. Un negocio, una
							marca, un sueño que quieres llevar más allá. Tal vez estás
							empezando o llevas años en el mercado, pero algo no encaja. No
							tienes página web o la que tienes parece obsoleta o poco
							funcional. El tráfico que llega desde Google apenas mueve la
							aguja. Las redes sociales son un rompecabezas imposible de
							mantener. ¿Te suena familiar?
						</p>
						<p>
							Es como tener un edificio a medio construir. El terreno está ahí,
							las bases son sólidas, pero cada día que pasa sin completar la
							estructura es una oportunidad perdida. Los clientes caminan por la
							acera, ven el letrero, pero no entran. Te preguntas:{" "}
							<strong>
								¿qué estoy haciendo mal? ¿cómo puedo captar su atención y
								convertir esas miradas en acción?
							</strong>
						</p>
						<p>
							En BDN Digital Studio, entendemos tus frustraciones porque hemos
							trabajado con personas como tú. Sabemos lo difícil que es sentir
							que tu negocio tiene potencial, pero no cuenta con la presencia
							digital adecuada para reflejarlo. Y aquí es donde entra nuestra
							especialidad.
						</p>
					</RenderDiv>
				</div>
				<motion.div style={{ translateY: y }}>
					<Image
						src='/assets/images/building14.webp'
						width={250}
						height={350}
						alt='Imagen de un edificio arquitectónico'
					/>
				</motion.div>
			</div>

			<div className='mt-16'>
				<Heading
					firstText='De la idea al diseño'
					secondText='Construyendo tu presencia digital'
				/>
				<div className='flex flex-wrap justify-center mt-6'>
					<motion.div style={{ translateY: ySecond }}>
						<Image
							src='/assets/images/building15.webp'
							width={250}
							height={350}
							alt='Imagen de un edificio arquitectónico'
						/>
					</motion.div>
					<div className='mt-6 flex flex-col gap-4 max-w-lg m-auto'>
						<RenderDiv x={400}>
							<p>
								Nos gusta pensar en nuestra labor como la de un{" "}
								<strong>arquitecto</strong>. Tal como el diseño de un edificio
								comienza con un plano sólido, en BDN Digital Studio empezamos
								escuchándote para empezar a diseñar los planos. Necesitamos
								entender qué sueñas, cómo quieres que se vea tu marca y, sobre
								todo, cómo quieres que se sienta para quienes la visiten.
							</p>

							<h3 className='uppercase font-medium text-xl my-6'>
								En qué te vamos a ayudar
							</h3>
							<ul className='flex flex-col gap-4'>
								<li>
									<strong>Páginas web que no convierten:</strong> Tu sitio
									actual podría ser el equivalente a un edificio sin puertas.
									Diseñamos páginas web funcionales y atractivas que invitan a
									tus clientes a quedarse y tomar acción.
								</li>
								<li>
									<strong>Falta de visibilidad en Google:</strong> Si tu negocio
									no aparece en los primeros resultados, es como construir un
									rascacielos en medio del desierto. Con SEO y SEM, te ponemos
									en el mapa digital para que tus clientes te encuentren
									primero.
								</li>
								<li>
									<strong>Redes sociales desordenadas o inactivas:</strong>{" "}
									Gestionamos tus perfiles para que cada post sea un ladrillo
									más en la construcción de tu reputación.
								</li>
								<li>
									<strong>Diseño que no conecta:</strong> Una fachada genérica
									no atrae a nadie. Crearemos un diseño único que hable
									directamente a tu audiencia.
								</li>
							</ul>
						</RenderDiv>
					</div>
				</div>
			</div>
		</div>
	);
}
