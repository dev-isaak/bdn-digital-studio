import { Form } from "@nextui-org/react";
import FormLayout from "./FormLayout";

export default function InicioProyecto() {
	return (
		<section className='bg-green-200 p-2 pt-12 min-h-screen w-full'>
			<h1 className='uppercase xs:text-4xl md:text-4xl font-bold'>
				¿Empezamos con el proyecto?
			</h1>
			<h2 className='max-w-2xl mt-4'>
				Todo proyecto tiene un comienzo y a nosotros nos gusta empezar
				recolectando algo de información que nos ayudará a aclarar que ideas
				tienes en mente.
			</h2>

			<div className='flex mt-8'>
				<div className='bg-gray-300 h-36 w-[40%]'></div>
				<div className='bg-blue-200 h-36 w-full  flex items-center justify-center'>
					<FormLayout title='¿Como prefieres que nos comuniquemos contigo?'>
						<Form></Form>
					</FormLayout>
				</div>
			</div>
		</section>
	);
}
