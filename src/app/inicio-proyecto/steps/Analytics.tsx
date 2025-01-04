import FormLayout from "../FormLayout";
import { Checkbox, CheckboxGroup, Textarea } from "@nextui-org/react";

export default function Analytics({ formData, setFormData }: any) {
	const handleValue = (value: string[] | string) => {
		if (typeof value === "string") {
			setFormData({
				...formData,
				analytics: { ...formData.analytics, description: value },
			});
		} else {
			setFormData({
				...formData,
				analytics: { ...formData.analytics, tools: value },
			});
		}
	};
	return (
		<FormLayout title='¿Quieres incluir analíticas en el sitio?'>
			<p>
				Las analíticas te permiten comprender mejor el comportamiento de los
				usuarios en tu sitio web, ayudándote a optimizar la experiencia y medir
				el impacto de tus estrategias.
			</p>
			<CheckboxGroup
				value={formData.analytics.tools}
				onValueChange={handleValue}>
				<Checkbox value='no'>No</Checkbox>
				<Checkbox value='googleAnalytics'>Google Analytics</Checkbox>
				<Checkbox value='linkedinAnalytics'>LinkedIn Analytics</Checkbox>
				<Checkbox value='facebookAnalytics'>Facebook Analytics</Checkbox>
				<Checkbox value='salesforce'>Salesforce</Checkbox>
				<Checkbox value='hubspot'>HubSpot</Checkbox>
				<Checkbox value='adobeAnalytics'>Adobe Analytics</Checkbox>
				<Checkbox value='other'>Otros</Checkbox>
			</CheckboxGroup>
			<Textarea
				placeholder='Especifica otras herramientas'
				value={formData.analytics.description}
				onValueChange={handleValue}></Textarea>
		</FormLayout>
	);
}
