import { Button, Card, CardHeader, Image, Link } from "@nextui-org/react";

export default function ContactBlock() {
	return (
		<Card className='h-96'>
			<CardHeader className='h-96 absolute flex flex-col justify-center align-middle text-center gap-10'>
				<div>
					<h2 className='text-2xl text-white font-bold'>
						No te quedes con la duda <br />{" "}
					</h2>
					<span className='uppercase text-4xl md:text-8xl text-white font-bold'>
						Contáctanos
					</span>
				</div>
				<Button
					size='lg'
					variant='shadow'
					color='secondary'
					as={Link}
					href='/contacto'>
					Contactar
				</Button>
			</CardHeader>
			<Image
				removeWrapper
				alt='Card background'
				className='z-0 w-full h-full object-cover'
				src='/assets/images/building4.webp'
			/>
		</Card>
	);
}
