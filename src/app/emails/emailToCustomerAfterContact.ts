import EmailToCustomerAfterContact from "../../../react-email-starter/emails/emailToCustomerAfterContact";
import { render } from "@react-email/render";

interface EmailProps {
  mg: any;
  email: string;
  name: string;
}

export const emailToCustomerAfterContact = async ({
  mg,
  email,
  name,
}: EmailProps) => {
  const htmlContent = await render(EmailToCustomerAfterContact({ userName: name }))
  try {
    const res = await mg.messages.create('bdndigitalstudio.com', {
      from: "BDN Digital Studio <hola@bdndigitalstudio.com>",
      to: [email],
      subject: "BDN Digital Studio | ¡Gracias por contactarnos!",
      html: htmlContent
    });
    if (res.error === null) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
