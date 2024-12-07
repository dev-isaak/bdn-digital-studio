import { Resend } from "resend";
import { emailToCustomerAfterContact } from "../emails/emailToCustomerAfterContact";
import { emailToStudioAfterContact } from "../emails/emailToStudioAfterContact";

// const isDev = import.meta.env.DEV
//TEST
// @ts-ignore
// const RESEND_API_KEY = isDev ? import.meta.env.RESEND_API_KEY : Deno.env.get("RESEND_API_KEY")
const RESEND_API_KEY = process.env.RESEND_API_KEY

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async ({ formData }: any): Promise<boolean> => {
  const { name, lastName, email, message, phone, companyName } = formData;

  const studioEmailPromise = emailToStudioAfterContact({
    resend,
    name,
    lastName,
    message,
    phone,
    companyName,
    email,
  });

  const customerEmailPromise = emailToCustomerAfterContact({ resend, email, name });

  try {
    const results = await Promise.all([studioEmailPromise, customerEmailPromise]);
    return results.every((result) => result === true);
  } catch (error) {
    console.log("Error enviando correos:", error);
    return false
  }
};

