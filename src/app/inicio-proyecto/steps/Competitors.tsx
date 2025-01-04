import FormLayout from "../FormLayout";
import { Textarea } from "@nextui-org/react";

export default function Competitors({ formData, setFormData }: any) {
	const handleValue = (value: string) => {
		setFormData({ ...formData, competitors: value });
	};
	return (
		<FormLayout title='¿Quiénes son vuestros competidores?'>
			<p>
				{" "}
				Conocer a vuestros competidores nos ayuda a identificar puntos fuertes y
				áreas de mejora en vuestro sector. Esto nos permitirá crear una
				estrategia diferenciadora para vuestra marca y diseñar una experiencia
				única que destaque frente a ellos.
			</p>
			<Textarea
				value={formData.competitors}
				onValueChange={handleValue}
				placeholder='Indícanos las páginas de tus competidores, o nombre en su defecto'></Textarea>
		</FormLayout>
	);
}
