interface emailProps {
  mg: any;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  description: string;
  seo: string
  sem: string
  webDesign: string
  wordpressDevelopment: string,
  customDevelopment: string,
  webMaintenance: string,
  webOptimization: string,
  rrss: string
}

export const emailToStudioAfterContact = async ({
  mg,
  name,
  lastName,
  email,
  phone,
  companyName,
  description,
  seo,
  sem,
  webDesign,
  wordpressDevelopment,
  customDevelopment,
  webMaintenance,
  webOptimization,
  rrss
}: emailProps) => {
  try {
    const res = await mg.messages.create('bdndigitalstudio.com', {
      from: "BDN Digital Studio <hola@bdndigitalstudio.com>",
      to: ["isaac.montenegro1992@gmail.com", "hola@bdndigitalstudio.com"],
      subject: "BDN Digital Studio | Formulario de contacto",
      html: `
  <p><strong>Name</strong>: ${name} ${lastName}</p>
  <p><strong>Email</strong>: ${email}</p>
  <p><strong>Phone</strong>: ${phone}</p>
  <p><strong>Company Name</strong>: ${companyName ? companyName : '-'}</p>
  <p><strong>Interested in:</strong></p>
  <ul>
  <li>SEO: ${seo ? seo : '-'}</li>
  <li>SEM: ${sem ? sem : '-'}</li>
  <li>Web Design: ${webDesign ? webDesign : '-'}</li>
  <li>Wordpress Development: ${wordpressDevelopment ? wordpressDevelopment : '-'}</li>
  <li>Custom Development: ${customDevelopment ? customDevelopment : '-'}</li>
  <li>Web Maintenance: ${webMaintenance ? webMaintenance : '-'}</li>
  <li>Web Optimization: ${webOptimization ? webOptimization : '-'}</li>
  <li>RRSS: ${rrss ? rrss : '-'}</li>
  </ul>
  <p><strong>Message</strong>: ${description}</p>
  `,
    });
    if (res.error === null) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
