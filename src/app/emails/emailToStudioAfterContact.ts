
interface emailProps {
  resend: any,
  name: string;
  lastName: string,
  email: string,
  phone: string,
  companyName: string,
  message: string
}

export const emailToStudioAfterContact = async ({ resend, name, lastName, email, phone, companyName, message }: emailProps) => {
  try {
    const res = await resend.emails.send({
      from: "hola@bdndigitalstudio.com",
      to: ["isaac.montenegro1992@gmail.com", "hola@bdndigitalstudio.com"],
      subject: "BDN Digital Studio | Formulario de contacto",
      html: `
  <p><strong>Name</strong>: ${name} ${lastName}</p>
  <p><strong>Email</strong>: ${email}</p>
  <p><strong>Phone</strong>: ${phone}</p>
  <p><strong>Company Name</strong>: ${companyName}</p>
  <p><strong>Message</strong>: ${message}</p>
  `,
    });
    if (res.error === null) return true

  } catch (error) {
    console.log(error)
    return false
  }

}