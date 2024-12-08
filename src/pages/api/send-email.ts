import { emailToCustomerAfterContact } from '@/app/emails/emailToCustomerAfterContact';
import { emailToStudioAfterContact } from '@/app/emails/emailToStudioAfterContact';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend';

type ResponseData = {
  message: string
}

const RESEND_API_KEY = process.env.RESEND_API_KEY

const resend = new Resend(RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { name, lastname, email, message, telf, web } = req.body;

  const studioEmailPromise = emailToStudioAfterContact({
    resend,
    name,
    lastName: lastname,
    message,
    phone: telf,
    companyName: web,
    email,
  });


  const customerEmailPromise = emailToCustomerAfterContact({ resend, email, name });

  try {
    const results = await Promise.all([studioEmailPromise, customerEmailPromise]);
    res.status(200).json({ message: 'Message sent' })
    return results.every((result) => result === true);
  } catch (error) {
    console.log("Error enviando correos:", error);
    return false
  }
}
