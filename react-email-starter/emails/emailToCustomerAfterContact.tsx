import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";
import FooterEmail from "./components/Footer";

interface NotionMagicLinkEmailProps {
	userName?: string;
}

export const EmailToCustomerAfterContact = ({
	userName,
}: NotionMagicLinkEmailProps) => (
	<Html>
		<Head />
		<Preview>BDN Digital Studio | ¡Gracias por contactarnos!</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					alt='Imagen de cabecera'
					width='90%'
					height='200'
					src='https://pantalla-digital.com/wp-content/uploads/2025/01/Group-96-1.png'
					style={image}
				/>
				<Heading style={h1}>
					¡Hola {userName}, gracias por contactarnos!
				</Heading>
				<Text style={text}>
					Gracias por ponerte en contacto con nosotros. Hemos recibido tu
					solicitud y estamos emocionados por ayudarte a dar vida a tu proyecto.
					Un miembro de nuestro equipo revisará tu mensaje y se pondrá en
					contacto contigo en las próximas 24-48 horas para entender mejor tus
					necesidades y discutir los siguientes pasos. Mientras tanto, si tienes
					alguna información adicional que te gustaría compartir, no dudes en
					responder a este correo. ¡Estamos aquí para hacer realidad tus ideas!
				</Text>
				<FooterEmail />
			</Container>
		</Body>
	</Html>
);

export default EmailToCustomerAfterContact;

const image = {
	borderRadius: "10px",
	margin: "auto",
};

const main = {
	backgroundColor: "#ffffff",
};

const container = {
	paddingLeft: "12px",
	paddingRight: "12px",
	margin: "0 auto",
};

const h1 = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 10px 0",
	padding: "0",
};

const text = {
	color: "#333",
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
	fontSize: "14px",
	margin: "24px 0",
};
