import EmailToCustomerAfterContact from "../../../react-email-starter/emails/emailToCustomerAfterContact";

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
      react: EmailToCustomerAfterContact({ userName: name })
    });
    if (res.error === null) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
