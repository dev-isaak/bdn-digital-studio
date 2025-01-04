import FormLayout from "../FormLayout";
import { Radio, RadioGroup } from "@nextui-org/react";

export default function WebPreferences({ formData, setFormData }: any) {
	const handleValue = (value: string) => {
		setFormData({ ...formData, colorAndTypography: value });
	};
	return (
		<FormLayout title='¿Tienes alguna preferencia en cuanto a colores y tipografías?'>
			<RadioGroup
				value={formData.colorAndTypography}
				onValueChange={handleValue}>
				<Radio
					classNames={{
						label: "text-small",
					}}
					value='onlyColors'>
					Sé los colores que voy a usar
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='onlyTypography'>
					Sé la tipografía que voy a usar
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='colorAndTypography'>
					¡Tengo los colores y tipografía!
				</Radio>
			</RadioGroup>
		</FormLayout>
	);
}
