import FormLayout from "../FormLayout";
import { CheckboxGroup, Checkbox, Divider, Textarea } from "@nextui-org/react";

export default function WhichSections({ formData, setFormData }: any) {
	const handleValue = (value: string[] | string) => {
		if (typeof value === "string") {
			setFormData({
				...formData,
				sections: { ...formData.sections, description: value },
			});
		} else {
			setFormData({
				...formData,
				sections: { ...formData.sections, pages: value },
			});
		}
	};
	return (
		<FormLayout title='¿Qué secciones tienes pensado incluir?'>
			<p>Indícanos que </p>
			<CheckboxGroup
				value={formData.sections.pages}
				onValueChange={handleValue}
				defaultValue={["home", "privacyPolicy"]}>
				<label className='mt-6 font-semibold'>Páginas</label>
				<Divider />
				<Checkbox value='home' isDisabled>
					Inicio
				</Checkbox>
				<Checkbox value='privacyPolicy' isDisabled>
					Política de Privacidad
				</Checkbox>
				<Checkbox value='blog'>Blog</Checkbox>
				<Checkbox value='contact'>Contacto</Checkbox>
				<Checkbox value='about-us'>Sobre nosotros</Checkbox>
				<Checkbox value='shop'>Tienda</Checkbox>
				<label className='mt-6 font-semibold'>Funcionalidades</label>
				<Divider />
				<Checkbox value='users'>Login/Registro de usuarios</Checkbox>
				<Checkbox value='multiLang'>Multi-idioma</Checkbox>
			</CheckboxGroup>
			<label className='mt-6 font-semibold'>Otras</label>
			<Divider />
			<Textarea
				value={formData.sections.description}
				onValueChange={handleValue}
				placeholder='Indícanos otras páginas o funcionalidades que desees añadir'></Textarea>
		</FormLayout>
	);
}
