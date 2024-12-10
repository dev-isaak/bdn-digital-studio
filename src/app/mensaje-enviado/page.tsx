"use client";
import { Button } from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";
import { useRouter } from "next/navigation";

export default function MensajeEnviado() {
	const router = useRouter();
	const { width, isMobile } = useWindowSize();
	const height = isMobile ? 1000 : 1500;

	const handleRedirect = () => {
		router.replace("/");
	};

	return (
		<section className='flex flex-col mt-40 justify-center text-center items-center gap-4'>
			<Confetti width={width} height={height} />
			<FaCheckCircle size={100} color='green' />
			<h1 className='font-bold text-xl'>Mensaje enviado</h1>
			<p className='text-xl'>
				Hemos recibido tu mensaje. ¡Pronto nos pondremos en contacto contigo!
			</p>
			<Button color='primary' variant='bordered' onPress={handleRedirect}>
				Volver a la página de inicio
			</Button>
		</section>
	);
}
