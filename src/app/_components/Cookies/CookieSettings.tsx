import { Accordion, AccordionItem, Switch } from "@nextui-org/react";

interface CookieSettingsProps {
  isSwitchEnabled: boolean; // Estado del switch
  onSwitchChange: (isEnabled: boolean) => void; // Callback para actualizar el estado
}

export default function CookieSettings({
  isSwitchEnabled,
  onSwitchChange,
}: CookieSettingsProps) {
  return (
    <Accordion variant="bordered" className="my-4">
      <AccordionItem title="Cookies técnicas" aria-label="Cookies técnicas">
        <Switch defaultSelected isDisabled />
        <p className="mt-4 text-sm">
          Las cookies técnicas son esenciales para que te puedas mover por la
          Plataforma y usar sus funciones. De manera general, estas cookies
          habilitan las diferentes funciones de la Plataforma, hacen que tu
          navegación sea más segura o aportan funcionalidades que son
          previamente solicitadas por ti. Al ser necesarias para el
          funcionamiento del sitio, estas cookies por defecto estarán activadas
          y no podrán denegarse. BDN Digital Studio puede utilizar cookies
          necesarias para guardar tu selección de las cookies en nuestro
          configurador, estabilizar tu navegación o hacerla más segura.
        </p>
      </AccordionItem>
      <AccordionItem
        title="Cookies de análisis"
        aria-label="Cookies de análisis"
      >
        {/* Controlador para cambiar el estado */}
        <Switch
          isSelected={isSwitchEnabled}
          onValueChange={(value) => onSwitchChange(value)}
        />
        <p className="mt-4 text-sm">
          Estas cookies nos permiten recopilar información anónima sobre cómo
          utilizas nuestra plataforma, ayudándonos a analizar y comprender el
          comportamiento de los usuarios para mejorar su experiencia. Utilizamos
          Google Analytics 4 (GA4) para recopilar datos como las páginas más
          visitadas, el tiempo que pasas en cada sección y las interacciones que
          realizas, todo ello de manera anónima y sin identificar personalmente
          a los usuarios. Estas cookies no son esenciales para el funcionamiento
          de la plataforma, por lo que solo se activan si das tu consentimiento
          expreso. Al rechazarlas, no se realizará este tipo de seguimiento
          analítico.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
