import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function AtreveteSection() {
  const atreveteSection = [
    {
      number: "01",
      title: "Aumenta el tráfico orgánico de calidad",
      body: 'Con una estrategia SEO bien ejecutada, tu página web atraerá visitantes que realmente están interesados en tus productos o servicios. <strong>No se trata solo de más tráfico, sino de tráfico relevante</strong>. Por ejemplo, si tienes un negocio de consultoría, optimizamos tu sitio para palabras clave como "consultoría empresarial" o "estrategias de negocios", asegurando que quienes lleguen a tu página busquen exactamente lo que ofreces.',
    },
    {
      number: "02",
      title: "Mejora la visibilidad de tu marca",
      body: "El SEO coloca tu negocio frente a una audiencia más amplia. En <strong>BDN Digital Studio</strong>, no solo trabajamos para posicionarte en Google, sino para <strong>consolidar tu presencia</strong> en todo el ecosistema digital. Aparecer consistentemente en los resultados de búsqueda genera confianza y reconocimiento en tu marca.",
    },
    {
      number: "03",
      title: "Generación constante de clientes potenciales",
      body: "El SEO no solo atrae visitas; también convierte esas visitas en clientes potenciales. Implementamos estrategias como contenido optimizado y llamadas a la acción (CTAs) para guiar a los usuarios en su viaje de compra. En otras palabras, <strong>optimizamos tu sitio para que trabaje como una máquina generadora de leads.</strong>",
    },
    {
      number: "04",
      title: "Reducción de costos publicitarios",
      body: "Una de las grandes ventajas del SEO es que, a diferencia de la publicidad pagada, <strong>los resultados son duraderos</strong>. Aunque el SEO requiere una inversión inicial, el tráfico que genera a largo plazo es gratuito, lo que reduce significativamente tus costos de adquisición de clientes.",
    },
    {
      number: "05",
      title: "Mejora de la experiencia del usuario",
      body: "Un sitio web optimizado para SEO también mejora la navegación del usuario. <strong>En BDN Digital Studio</strong>, revisamos aspectos como: <ul>	<li>Velocidad de carga.</li><li>Diseño responsive (compatible con dispositivos móviles).</li><li>Estructura clara y lógica del contenido.</li></ul>			Esto no solo favorece tu posicionamiento, sino que también aumenta el tiempo que los usuarios pasan en tu sitio y las conversiones.",
    },
  ];
  return (
    <CardsBlock>
      {atreveteSection.map((item, index) => (
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
