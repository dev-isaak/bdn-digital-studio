import ContactBlock from "../ContactBlock";
import AnimatedTitle from "./AnimatedTitle";
import Faqs from "./Faqs";
import Services from "./Services";
import FirstSection from "./Value";

export default function MainPage() {
	return (
		<div>
			<header>
				<div className='flex flex-col md:flex-row w-full h-screen bg-primary top-0'>
					{/* Left Section */}
					<AnimatedTitle />
					{/* Right Section */}
					<div className='relative flex-grow md:flex-grow-1'>
						<h4 className='absolute bottom-0 right-0 md:right-[10vw] h-[200px] md:border-l border-t md:border-t-0 border-white-light pr-4 md:px-6 text-white-light text-sm md:text-lg'>
							Entre las metas de tu empresa <br />y las expectativas de tus
							clientes.
						</h4>
					</div>
				</div>
			</header>
			<div className='m-auto max-w-7xl px-4 flex flex-col gap-10 my-10'>
				<section>
					<FirstSection />
				</section>
				<section className='overflow-hidden '>
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
