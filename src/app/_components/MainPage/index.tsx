import CarousselTitle from "../CarousselTitle";
import ContactBlock from "../ContactBlock";
import AnimatedHeroText from "./AnimatedHeroText";
import AnimatedTitle from "./AnimatedTitle";
import Faqs from "./Faqs";
import Purpose from "./Purpose";
import Services from "./Services";
import FirstSection from "./Value";

export default function MainPage() {
	return (
		<div>
			<header>
				{/* 
				<section className='flex flex-col md:flex-row w-full h-screen bg-primary top-0'>
					<AnimatedTitle />
					<AnimatedHeroText />
				</section>
				*/}
				<video
					autoPlay
					className='w-full h-full'
					muted
					loop
					playsInline
					poster='hero-poster.jpg'>
					<source src='/assets/videos/HOLA-HEADER.mp4' type='video/mp4' />
					Tu navegador no soporta videos.
				</video>
			</header>
			<div className='m-auto max-w-7xl px-4 flex flex-col gap-10 my-10'>
				<h1 className='text-6xl'>
					Agencia de creación de páginas web profesionales - Desarrollo y diseño
					web SEO
				</h1>
				<p>
					Somos expertos en soluciones digitales para impulsar tu negocio en
					línea. Ofrecemos servicios de desarrollo web, diseño web creativo,
					optimización de WordPress y estrategias SEO personalizadas para
					mejorar tu visibilidad en internet. ¡Haz crecer tu presencia online
					con nosotros!
				</p>
				<section>
					<FirstSection />
				</section>
				<section>
					<Purpose />
				</section>
				<section className='overflow-hidden '>
					<CarousselTitle title='servicios' />
					<Services />
				</section>
				<section>
					<ContactBlock />
				</section>
				<section>
					<Faqs />
				</section>
			</div>
		</div>
	);
}
