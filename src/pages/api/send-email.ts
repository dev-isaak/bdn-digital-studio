import { emailToCustomerAfterContact } from "@/app/emails/emailToCustomerAfterContact";
import { emailToStudioAfterContact } from "@/app/emails/emailToStudioAfterContact";
import type { NextApiRequest, NextApiResponse } from "next";
import formData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgun = new Mailgun(formData);

type ResponseData = {
  message: string;
};

console.log(process.env.MAILGUN_API_KEY)

const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere', url: 'https://api.eu.mailgun.net' });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { name, lastname, email, description, telf, web } = req.body;

  const studioEmailPromise = emailToStudioAfterContact({
    mg,
    name,
    lastName: lastname,
    description,
    phone: telf,
    companyName: web,
    email,
  });

  const customerEmailPromise = emailToCustomerAfterContact({
    mg,
    email,
    name,
  });

  try {
    const results = await Promise.all([
      studioEmailPromise,
      customerEmailPromise,
    ]);
    res.status(200).json({ message: "Message sent" });
    return results.every((result) => result === true);
  } catch (error) {
    console.log("Error enviando correos:", error);
    return false;
  }
}
