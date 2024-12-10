import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function WhyUs() {
  const porqueElegirnosSection = [
    {
      number: "01",
      title: "Equipo especializado",
      body: "<p>Somos una agencia freelance expertos en WordPress y en frameworks modernos como React y Astro, lo que nos permite ofrecer soluciones adaptadas a cualquier tecnología.</p>",
    },
    {
      number: "02",
      title: "Enfoque integral",
      body: "<p>Velocidad, responsividad, SEO... Optimizamos cada aspecto de tu sitio para garantizar resultados tangibles.</p>",
    },
    {
      number: "03",
      title: "Resultados medibles",
      body: "<p>Utilizamos herramientas avanzadas de análisis de rendimiento para medir el impacto de nuestras optimizaciones.</p>",
    },
    {
      number: "04",
      title: "Soporte continuo",
      body: "<p>Una vez optimizada tu web, seguimos trabajando contigo para mantener y mejorar continuamente su rendimiento.</p>",
    },
  ];
  return (
    <CardsBlock>
      {porqueElegirnosSection.map((item, index) => (
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
