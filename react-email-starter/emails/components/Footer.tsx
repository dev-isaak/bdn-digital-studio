import { Img, Link, Section, Text } from "@react-email/components";
import { FaLinkedin } from "react-icons/fa";

export const FooterEmail = () => {
	return (
		<Section>
			<table style={{ width: "100%", textAlign: "center" }}>
				<tr>
					<td
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}>
						<Img
							src='https://pantalla-digital.com/wp-content/uploads/2024/12/Group-77.png'
							width={50}
							height={50}
						/>
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
						<Link href='https://www.linkedin.com/company/bdn-digital-studio'>
							<FaLinkedin color='#111111' size={24} />
						</Link>
					</td>
				</tr>
			</table>
		</Section>
	);
};
export default FooterEmail;
