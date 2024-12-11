import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
	return (
		<section className='mt-28 text-center font-semibold'>
			<h1 className='text-4xl mb-6'>
				No se ha encontrado la página que buscabas.
			</h1>
			<Button color='primary' as={Link} href='/'>
				Volver a la página principal
			</Button>
		</section>
	);
}
