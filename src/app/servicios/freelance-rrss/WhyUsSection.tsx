import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function WhyUsSection() {
  const beneficiosSection = [
    {
      number: "01",
      title: "Mayor interacción con tu audiencia",
      body: "Una buena gestión de redes sociales crea una conexión genuina con tus seguidores. Desde contenido atractivo hasta respuestas personalizadas, trabajamos para que tu audiencia se sienta escuchada y valorada.",
    },
    {
      number: "02",
      title: "Incremento de la visibilidad de tu marca",
      body: "Con publicaciones estratégicas y campañas diseñadas para captar la atención, posicionamos tu negocio frente a un público más amplio, aumentando el reconocimiento y alcance de tu marca.",
    },
    {
      number: "03",
      title: "Fidelización de clientes",
      body: "A través de interacciones constantes y contenido relevante, ayudamos a fortalecer las relaciones con tus clientes actuales, convirtiéndolos en embajadores de tu marca.",
    },
    {
      number: "04",
      title: "Ahorro de tiempo y recursos",
      body: "Delegar la gestión de tus redes sociales a expertos te permite centrarte en otros aspectos importantes de tu negocio, mientras nosotros nos encargamos de maximizar tu presencia digital.",
    },
    {
      number: "05",
      title: "Análisis y resultados medibles",
      body: "Generamos reportes periódicos para que conozcas el rendimiento de tus campañas y el crecimiento de tus redes, ajustando estrategias para alcanzar tus objetivos.",
    },
  ];
  return (
    <CardsBlock>
      {beneficiosSection.map((item, index) => (
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
