import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function HowWeWork() {
  const comoTrabajamosSection = [
    {
      number: "01",
      title: "Consultoría inicial",
      body: "<p><strong>BDN Digital Studio</strong> se pondrá en contacto contigo por el medio que hayas elegido. Nos explicarás cuáles son tus objetivos, trazamos un plan y diseñamos una <strong>estrategia personalizada</strong> para tu proyecto.</p>",
    },
    {
      number: "02",
      title: "Diseño",
      body: "<p>Nos ponemos manos a la obra. Como <strong>agencia de diseño web profesional</strong>, nos tomamos muy en serio el diseño de tu web para que refleje la <strong>identidad única de tu marca</strong>. En unos días te pasaremos un diseño, haremos los retoques necesarios y saltaremos al siguiente paso.</p>",
    },
    {
      number: "03",
      title: "Desarrollo",
      body: "<p>Una vez se aprueba el diseño, empezamos con el <strong>desarrollo web</strong> del sitio según los requisitos estipulados. ¡No te preocupes! Te iremos informando del estado de tu proyecto en todo momento para que estés al día.</p>",
    },
    {
      number: "04",
      title: "Optimización SEO y performance",
      body: "<p>El último paso es pulir tu <strong>página web</strong> al máximo. Optimizamos la web para que pueda ser fácilmente encontrada por los motores de búsqueda y mejoramos su <strong>rendimiento y velocidad</strong> para ofrecer la mejor experiencia al usuario.</p>",
    },
    {
      number: "05",
      title: "Formación y soporte",
      body: "<p>Te enseñamos a gestionar tu <strong>web profesional</strong> a través de una formación online. Te deseamos buena suerte en esta nueva aventura. Por nuestra parte, estaremos disponibles para resolver cualquier problema o duda que te surja, ofreciendo un <strong>soporte técnico confiable</strong>.</p>",
    },
  ];
  return (
    <CardsBlock>
      {comoTrabajamosSection.map((item, index) => (
        <CardWithTopNumber
          key={index}
          number={item.number}
          title={item.title}
          text={item.body}
        />
      ))}
    </CardsBlock>
  );
}
