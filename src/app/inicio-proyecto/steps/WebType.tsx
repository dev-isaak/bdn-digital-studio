import FormLayout from "../FormLayout";
import { Textarea } from "@nextui-org/react";

export default function WebType({ formData, setFormData }: any) {
	const handleValue = (value: string) => {
		setFormData({ ...formData, whatYouHaveInMind: value });
	};
	return (
		<FormLayout title='¿Qué tipo de web tienes en mente?'>
			<p>
				Cuéntanos brevemente en qué tipo de web estás interesado (ecommerce,
				landing page, etc.) ¡Cuántos más detalles nos des mejor!
			</p>
			<Textarea
				value={formData.whatYouHaveInMind}
				onValueChange={handleValue}
				variant='flat'
				className='max-w-xl'
				label='Descripción'
			/>
		</FormLayout>
	);
}
