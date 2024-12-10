import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Image } from "@nextui-org/react";
import WhyUs from "./WhyUs";
import ContactBlock from "@/app/_components/ContactBlock";
import Faq from "./Faq";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/servicios/freelance-optimizacion-web`,
	},
	title: `Optimización Web Freelance | BDN Digital Studio`,
	description: `Aumenta la velocidad y la eficiencia de tu sitio con nuestro servicio de optimización WordPress. En BDN Digital Studio, ajustamos plugins, temas y configuraciones para maximizar el rendimiento. Además, trabajamos con soluciones a medida en otros frameworks, como React o Astro, para garantizar una web rápida, segura y preparada para destacar en los resultados de búsqueda.`,
};

export default function WebOptimizacion() {
	return (
		<div className='flex flex-col gap-10 mb-10'>
			<h1 className='uppercase text-4xl font-semibold text-gray-800'>
				Optimización de Sitios Web
			</h1>
			<section>
				<TwoBlockGrid
					imageURL='/assets/images/building11.webp'
					altText='Edificio arquitectónico'>
					<p>
						En <strong>BDN Digital Studio</strong>, sabemos que un sitio web
						rápido y eficiente es clave para el éxito digital. No importa si tu
						web está creada en <strong>WordPress</strong> o con otros frameworks
						como <strong>React</strong> o <strong>Astro</strong>, nuestra
						experiencia en optimización garantiza que tu página cargue más
						rápido, sea más segura y ofrezca una mejor experiencia a tus
						usuarios.
					</p>
					<p>
						La <strong>optimización web</strong> no solo mejora el rendimiento
						técnico, sino que también influye directamente en tu posicionamiento
						en motores de búsqueda y en las conversiones de tu sitio. En este
						artículo, te explicamos cómo podemos ayudarte a llevar tu página al
						siguiente nivel.
					</p>
				</TwoBlockGrid>
			</section>
			<section>
				<Heading
					firstText='La importancia'
					secondText='De la optimización web'
				/>
				<p>
					Un sitio web lento o mal optimizado puede perjudicar tu negocio de
					diversas formas, especialmente ahora que los{" "}
					<strong>Core Web Vitals</strong> son un factor clave para el
					rendimiento en línea:
				</p>
				<ul className='flex flex-col gap-2 my-4 ml-4'>
					<li>
						<strong>Experiencia del usuario:</strong> Los usuarios abandonan
						páginas que tardan más de 3 segundos en cargar. Los{" "}
						<strong>Core Web Vitals</strong> miden aspectos críticos como la
						carga (Largest Contentful Paint - LCP), la interactividad (First
						Input Delay - FID) y la estabilidad visual (Cumulative Layout Shift
						- CLS), asegurando que los visitantes disfruten de una experiencia
						fluida.
					</li>
					<li>
						<strong>SEO:</strong> Google prioriza en sus resultados los sitios
						que cargan rápido y ofrecen una navegación fluida. Esto incluye un
						buen desempeño en los <strong>Core Web Vitals</strong>, que se han
						convertido en un criterio importante en los algoritmos de
						posicionamiento.
					</li>
					<li>
						<strong>Conversión:</strong> Una página optimizada no solo retiene
						usuarios, sino que también aumenta las posibilidades de que los
						visitantes se conviertan en clientes. Mejorar métricas como el LCP y
						el CLS reduce la frustración y fomenta la confianza del usuario.
					</li>
					<li>
						<strong>Reputación:</strong> Un sitio rápido y estable refuerza la
						percepción de profesionalismo y confiabilidad de tu marca, factores
						clave para atraer y fidelizar clientes.
					</li>
				</ul>
				<p>
					En <strong>BDN Digital Studio</strong>, entendemos que cada
					milisegundo cuenta. Por eso, ofrecemos soluciones personalizadas para
					optimizar cada aspecto de tu sitio web, incluyendo mejoras en los{" "}
					<strong>Core Web Vitals</strong>. Ya sea optimizando imágenes,
					ajustando el código o implementando una infraestructura de servidor
					más eficiente, trabajamos para garantizar que tu sitio no solo cumpla,
					sino que supere los estándares actuales.
				</p>
				<p>
					No importa la tecnología en la que esté desarrollado tu sitio web, en{" "}
					<strong>BDN Digital Studio</strong> nos especializamos en crear
					experiencias rápidas, confiables y enfocadas en el éxito de tu
					negocio.
				</p>
			</section>
			<div className='my-10'>
				<Image
					src='/assets/images/building7.webp'
					alt='edificio arquitectónico'
					width={1200}
					height={400}
				/>
			</div>
			<section>
				<Heading
					firstText='Nuestros servicios'
					secondText='en el campo de la optimización web'
				/>
				<p>
					En BDN Digital Studio, abarcamos todo el proceso de optimización,
					desde la mejora de la velocidad de carga hasta la implementación de
					prácticas avanzadas de SEO técnico. Aquí te detallamos cómo podemos
					ayudarte:
				</p>
				<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
					<div className='p-4'>
						<h3 className='text-2xl'>Optimización de WordPress</h3>
					</div>
					<div className='p-4'>
						<p>
							Si tu web está basada en <strong>WordPress</strong>, te ofrecemos
							una solución completa que incluye:
						</p>
						<ul>
							<li>
								Optimización de plugins y temas para reducir el consumo de
								recursos.
							</li>
							<li>
								Configuración de sistemas de caché para acelerar la carga de
								páginas.
							</li>
							<li>Compresión de imágenes y archivos multimedia.</li>
							<li>Eliminación de scripts y código innecesario.</li>
						</ul>
						<p>
							Sabemos que WordPress puede ser tan eficiente como lo permitan las
							configuraciones. Por eso, nos aseguramos de que tu web esté
							optimizada al máximo.
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
					<div className='p-4'>
						<h3 className='text-2xl'>
							Optimización de webs con frameworks modernos
						</h3>
					</div>
					<div className='p-4'>
						<p>
							Además de WordPress, trabajamos con frameworks como{" "}
							<strong>React</strong>, <strong>Astro</strong> y{" "}
							<strong>Next.js</strong>. Para estos desarrollos a medida,
							ofrecemos:
						</p>
						<ul>
							<li>
								Optimización del renderizado del lado del cliente y del
								servidor.
							</li>
							<li>
								Reducción de tiempos de carga mediante el uso de técnicas como
								lazy loading.
							</li>
							<li>Optimización del código CSS y JavaScript.</li>
						</ul>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
					<div className='p-4'>
						<h3 className='text-2xl'>Mejora del rendimiento técnico</h3>
					</div>
					<div className='p-4'>
						<p>
							Realizamos auditorías exhaustivas para identificar cuellos de
							botella que puedan estar afectando el rendimiento de tu web.
							Algunos de los aspectos que mejoramos incluyen:
						</p>
						<ul>
							<li>
								Velocidad de carga: Reducimos el tiempo que tarda tu página en
								mostrarse a los usuarios.
							</li>
							<li>
								Optimización de bases de datos: Eliminamos datos innecesarios y
								optimizamos consultas.
							</li>
							<li>
								Compresión de archivos: Implementamos GZIP para reducir el
								tamaño de los archivos transmitidos.
							</li>
						</ul>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
					<div className='p-4'>
						<h3 className='text-2xl'>SEO técnico</h3>
					</div>
					<div className='p-4'>
						<p>
							La optimización no solo se trata de velocidad; también incluye
							asegurarse de que los motores de búsqueda puedan rastrear e
							indexar tu sitio correctamente:
						</p>
						<ul>
							<li>Implementación de etiquetas meta optimizadas.</li>
							<li>Corrección de errores de indexación.</li>
							<li>Optimización del mapa del sitio (XML sitemap).</li>
							<li>Uso correcto de etiquetas H1, H2, etc.</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<Heading
					firstText='Por qué elegir BDN Digital Studio'
					secondText='Para la optimnización de tu web'
				/>
				<p>
					En BDN Digital Studio, combinamos experiencia técnica con un enfoque
					personalizado para garantizar que tu web no solo cumpla, sino supere
					tus expectativas.
				</p>
				<WhyUs />
			</section>
			<section>
				<h2 className='uppercase font-medium text-4xl text-center my-6'>
					Preguntas Frecuentes
				</h2>
				<Faq />
			</section>
			<ContactBlock />
		</div>
	);
}
