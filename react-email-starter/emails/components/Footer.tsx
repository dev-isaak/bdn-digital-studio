import { Section, Text } from "@react-email/components";

export const FooterEmail = () => {
	return (
		<Section>
			<table style={{ width: "100%", textAlign: "center" }}>
				<tr>
					<td>
						<Text
							style={{
								fontSize: "14px",
								fontWeight: "bold",
								color: "#333",
								marginTop: "15px",
								marginBottom: "0px",
							}}>
							BDN Digital Studio
						</Text>
						<Text style={{ fontSize: "13px", color: "#666", margin: "0 0 " }}>
							Éxito, Futuro, Digital
						</Text>
					</td>
				</tr>
				<tr>
					<td>
						<Text
							style={{
								fontSize: "13px",
								fontWeight: "bold",
								color: "#666",
								margin: "0 0",
							}}>
							hola@bdndigitalstudio.com
						</Text>
						<Text
							style={{
								fontSize: "13px",
								fontWeight: "bold",
								color: "#666",
								margin: "0 0",
							}}>
							+34 691 264 308
						</Text>
					</td>
				</tr>
			</table>
		</Section>
	);
};
export default FooterEmail;
