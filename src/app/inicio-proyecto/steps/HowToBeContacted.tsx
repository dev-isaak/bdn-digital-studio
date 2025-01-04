import FormLayout from "../FormLayout";
import { Radio, RadioGroup } from "@nextui-org/react";

export default function HowToBeContacted({ formData, setFormData }: any) {
	const handleValue = (value: string) => {
		setFormData({ ...formData, contact: value });
	};
	return (
		<FormLayout title='¿Como prefieres que nos comuniquemos contigo?'>
			<RadioGroup value={formData.contact} onValueChange={handleValue}>
				<Radio
					classNames={{
						label: "text-small",
					}}
					value='email'>
					Correo electrónico
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='whatsapp'>
					Whatsapp
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='phone'>
					Teléfono
				</Radio>
			</RadioGroup>
		</FormLayout>
	);
}
