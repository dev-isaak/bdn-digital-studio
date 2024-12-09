interface EmailProps {
  resend: any;
  email: string;
  name: string;
}

export const emailToCustomerAfterContact = async ({
  resend,
  email,
  name,
}: EmailProps) => {
  try {
    const res = await resend.emails.send({
      from: "hola@bdndigitalstudio.com",
      to: [email],
      subject: "BDN Digital Studio | ¡Gracias por contactarnos!",
      html: `
    <h1>¡Hola ${name}!</h1>
    <p>Gracias por ponerte en contacto con <strong>BDN Digital Studio</strong>. Hemos recibido tu solicitud y estamos emocionados por ayudarte a dar vida a tu proyecto.</p>
    <p>Un miembro de nuestro equipo revisará tu mensaje y se pondrá en contacto contigo en las próximas 24-48 horas para entender mejor tus necesidades y discutir los siguientes pasos.</p>
    <p>Mientras tanto, si tienes alguna información adicional que te gustaría compartir, no dudes en responder a este correo.</p>
    <br>
    <p>¡Estamos aquí para hacer realidad tus ideas!</p>
    <br>
    <br>
    <p>Saludos cordiales,</p>
    <p>El equipo de <strong>BDN Digital Studio</strong></p>
    <p><a href="https://bdndigitalstudio.com">Visítanos en nuestro sitio web</a></p>
  `,
    });
    if (res.error === null) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
