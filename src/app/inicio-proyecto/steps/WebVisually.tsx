import FormLayout from "../FormLayout";
import { Checkbox, CheckboxGroup, Divider, Form } from "@nextui-org/react";

export default function WebVisually({ formData, setFormData }: any) {
	const handleValue = (value: string[]) => {
		setFormData({ ...formData, colorAndTypography: value });
	};
	return (
		<FormLayout title='¿Cómo te gustaría que los usuarios perciban tu marca cuando visiten el sitio?'>
			<CheckboxGroup
				value={formData.colorAndTypography}
				onValueChange={handleValue}>
				<label className='mt-6 font-semibold'>Estilo Visual</label>
				<Divider />
				<Checkbox value='modern'>Moderna</Checkbox>
				<Checkbox value='classic'>Clásica</Checkbox>
				<Checkbox value='minimalist'>Minimalista</Checkbox>
				<Checkbox value='fun'>Divertida</Checkbox>
				<Checkbox value='professional'>Profesional</Checkbox>
				<Checkbox value='serious'>Seria</Checkbox>

				<label className='mt-6 font-semibold'>Valores Éticos</label>
				<Divider />
				<Checkbox value='ethical'>Ética o sostenible</Checkbox>
				<Checkbox value='handcrafted'>Artesanal</Checkbox>

				<label className='mt-6 font-semibold'>Percepción Emocional</label>
				<Divider />
				<Checkbox value='welcoming'>Acogedora</Checkbox>
				<Checkbox value='close'>Cercana</Checkbox>
				<Checkbox value='dynamic'>Dinámica</Checkbox>
				<Checkbox value='youthful'>Juvenil</Checkbox>
				<Checkbox value='inspiring'>Inspiradora</Checkbox>
				<Checkbox value='adventurous'>Aventurera</Checkbox>

				<label className='mt-6 font-semibold'>Sensación de Marca</label>
				<Divider />
				<Checkbox value='elegant'>Elegante</Checkbox>
				<Checkbox value='luxurious'>Lujosa</Checkbox>
				<Checkbox value='sophisticated'>Sofisticada</Checkbox>
				<Checkbox value='innovative'>Innovadora</Checkbox>
				<Checkbox value='technological'>Tecnológica</Checkbox>
			</CheckboxGroup>
		</FormLayout>
	);
}
