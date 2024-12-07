import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function MensajeEnviado() {
	return (
		<section className='flex flex-col mt-40 justify-center text-center items-center gap-4'>
			<FaCheckCircle size={100} color='green' />
			<h1 className='font-bold text-4xl'>Mensaje enviado</h1>
			<p className='text-xl'>
				Hemos recibido tu mensaje. ¡Pronto nos pondremos en contacto contigo!
			</p>
			<Button color='primary' variant='bordered' as={Link} href='/'>
				Volver a la página de inicio
			</Button>
		</section>
	);
}
