import TwoBlockCard from "../components/TwoBlockCard";

export default function OurServices() {
  const serviciosSection = [
    {
      title: "Estrategia personalizada de contenido",
      text: "Creación y planificación de contenido adaptado a tu negocio y audiencia. Publicaciones que informan, entretienen y convierten.",
    },
    {
      title: "Gestión de comunidades (Community Management)",
      text: "Interactuamos con tus seguidores para responder consultas, resolver problemas y fomentar un ambiente positivo en tus redes sociales.",
    },
    {
      title: "Publicidad en redes sociales (Social Ads)",
      text: "Diseñamos y ejecutamos campañas publicitarias para aumentar el alcance, generar conversiones y maximizar tu retorno de inversión.",
    },
    {
      title: "Monitoreo y análisis de resultados",
      text: "Seguimiento de métricas clave para optimizar continuamente el rendimiento de tus redes y alcanzar tus objetivos estratégicos.",
    },
  ];
  return (
    <>
      {serviciosSection.map((item, index) => (
        <TwoBlockCard key={index} title={item.title} text={item.text} />
      ))}
    </>
  );
}
