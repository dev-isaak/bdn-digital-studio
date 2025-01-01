import FormLayout from "../FormLayout";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function HostingAndDomain({ formData, setFormData }: any) {
	const handleValue = (value: string) => {
		setFormData({ ...formData, hostingAndDomain: value });
		console.log("cambio", { ...formData, hostingAndDomain: value });
	};

	return (
		<FormLayout title='¿Tienes hosting y dominio ya contratado?'>
			<RadioGroup value={formData.hostingAndDomain} onValueChange={handleValue}>
				<Radio
					classNames={{
						label: "text-small",
					}}
					value='have-nothing'>
					No tengo ni hosting ni dominio
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='have-hosting'>
					Tengo hosting
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='have-domain'>
					Tengo dominio
				</Radio>

				<Radio
					classNames={{
						label: "text-small",
					}}
					value='have-hosting-and-domain'>
					Tengo hosting y dominio
				</Radio>
			</RadioGroup>
		</FormLayout>
	);
}
