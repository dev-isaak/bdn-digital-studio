import TwoBlockCard from "../components/TwoBlockCard";

export default function OurServices() {
  const content = [
    {
      title: "Gestión de Google Ads",
      text: "Diseñamos y gestionamos campañas en Google Ads para ayudarte a aparecer en los primeros resultados de búsqueda. Desde anuncios de búsqueda hasta remarketing, abarcamos todos los formatos para maximizar tu visibilidad.",
    },
    {
      title: "Optimización de campañas",
      text: "Monitorizamos y optimizamos tus campañas activas para mejorar su rendimiento. Ajustamos pujas, palabras clave y creatividades para asegurar que obtengas el mejor retorno posible.",
    },
    {
      title: "Análisis y reportes",
      text: "Proporcionamos reportes detallados con métricas clave como CTR, conversiones y ROI, para que tengas una visión clara del impacto de tus campañas.",
    },
  ];
  return (
    <>
      {content.map((item, index) => (
        <TwoBlockCard key={index} title={item.title} text={item.text} />
      ))}
    </>
  );
}
