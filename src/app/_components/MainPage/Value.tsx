import CardWithTopNumber from "../CardWithTopNumber";
import Heading from "../Heading";

export default function FirstSection() {
  return (
    <div>
      <Heading
        firstText="propuesta de valor"
        secondText="qué nos hace únicos"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 m-auto">
          <CardWithTopNumber
            number="01"
            title="dedicación"
            text="Concentramos todos nuestros recursos en un solo proyecto, garantizando atención personalizada y soluciones completamente a medida para cada cliente."
          />
        </div>
        <div className="p-4 m-auto">
          <CardWithTopNumber
            number="02"
            title="desarrollo"
            text="Potenciamos el desarrollo digital de tu negocio con estrategias que convierten ideas en experiencias web impactantes."
          />
        </div>
        <div className="p-4 m-auto">
          <CardWithTopNumber
            number="03"
            title="éxito"
            text="Impulsamos tu negocio hacia el éxito digital con soluciones que transforman oportunidades en resultados rentables."
          />
        </div>
      </div>
    </div>
  );
}
