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
				<section className='flex flex-col md:flex-row w-full h-screen bg-primary top-0'>
					{/* Left Section */}
					<AnimatedTitle />
					{/* Right Section */}
					<AnimatedHeroText />
				</section>
			</header>
			<div className='m-auto max-w-7xl px-4 flex flex-col gap-10 my-10'>
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
