import { Card, CardHeader, Image } from "@nextui-org/react";
import ContactForm from "./ContactForm";

export default function Contacto() {
	return (
		<>
			<Card radius='none' className='h-96'>
				<CardHeader className='h-96 absolute flex flex-col justify-center align-middle text-center gap-10'>
					<div>
						<span className='uppercase xs:text-4xl md:text-8xl text-white font-bold'>
							Contacto
						</span>
					</div>
				</CardHeader>
				<Image
					radius='none'
					height={500}
					removeWrapper
					alt='Card background'
					className='z-0 w-full h-full object-cover'
					src='/assets/images/building4.webp'
				/>
			</Card>
			<section>
				<ContactForm />
			</section>
		</>
	);
}
