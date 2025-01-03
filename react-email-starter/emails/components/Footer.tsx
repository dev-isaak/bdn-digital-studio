import { Img, Link, Section, Text } from "@react-email/components";
import { FaLinkedin } from "react-icons/fa";

export const FooterEmail = () => {
	return (
		<Section>
			<table style={{ width: "100%", textAlign: "center" }}>
				<tr>
					<td>
						<Img
							src='https://pantalla-digital.com/wp-content/uploads/2024/12/Group-77.png'
							width={50}
							height={50}
							style={{ margin: "auto" }}
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
							<Img
								style={{ margin: "auto" }}
								alt='Linkedin logo'
								width='32'
								height='32'
								src='https://pantalla-digital.com/wp-content/uploads/2025/01/vecteezy_linkedin-logo-png-linkedin-logo-transparent-png-linkedin_23986569.png'
							/>
						</Link>
					</td>
				</tr>
			</table>
		</Section>
	);
};
export default FooterEmail;
