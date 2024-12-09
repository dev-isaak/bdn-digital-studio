import CardWithTopNumber from "@/app/_components/CardWithTopNumber";
import CardsBlock from "../components/CardsBlock";

export default function WhatWeOffer() {
  const nuestrosServiciosSection = [
    {
      number: "01",
      title: "Actualizaciones regulares",
      body: "<p>WordPress, junto con sus plugins y temas, requiere actualizaciones constantes para corregir errores, mejorar el rendimiento y fortalecer la seguridad.</p><h4>¿Qué hacemos?</h4><ul><li>Actualizamos WordPress a la última versión disponible.</li><li>Revisamos y actualizamos los plugins y temas sin afectar la funcionalidad del sitio.</li><li>Probamos la compatibilidad tras cada actualización para garantizar que todo funcione correctamente.</li></ul>",
    },
    {
      number: "02",
      title: "Copias de seguridad automáticas",
      body: "<p>Una copia de seguridad es tu red de seguridad en caso de que algo salga mal. En <strong>BDN Digital Studio</strong>, realizamos copias automáticas de tu sitio para asegurarnos de que nunca pierdas datos importantes.</p><h4>¿Cómo lo hacemos?</h4><ul><li>Configuramos copias de seguridad diarias, semanales o mensuales según las necesidades de tu negocio.</li><li>Almacenamos las copias en ubicaciones seguras en la nube para un acceso rápido.</li><li>Restauramos tu web rápidamente en caso de errores, fallos o ataques.</li></ul>",
    },
    {
      number: "03",
      title: "Seguridad y protección contra malware",
      body: "<p>La seguridad es una prioridad. Los sitios WordPress son objetivos comunes para ataques cibernéticos debido a su popularidad. Nuestro equipo se asegura de que tu web esté protegida en todo momento.</p><h4>Nuestras medidas de seguridad incluyen:</h4><ul><li>Instalación y configuración de firewalls.</li><li>Monitoreo constante de actividad sospechosa.</li><li>Escaneos regulares de malware y eliminación inmediata de amenazas.</li><li>Configuración de contraseñas fuertes y roles de usuario seguros.</li></ul>",
    },
    {
      number: "04",
      title: "Optimización del rendimiento",
      body: "<p>Un sitio rápido no solo mejora la experiencia del usuario, sino que también favorece tu posicionamiento SEO.</p><h4>¿Qué incluye la optimización?</h4><ul><li>Reducción del tiempo de carga mediante la compresión de imágenes y archivos.</li><li>Implementación de sistemas de caché.</li><li>Optimización de bases de datos para mejorar el rendimiento general del sitio.</li></ul>",
    },
    {
      number: "05",
      title: "Resolución de problemas técnicos",
      body: "<p>En caso de errores o fallos, nuestro equipo está disponible para solucionar cualquier problema de manera rápida y eficaz.</p><h4>¿Qué tipo de problemas resolvemos?</h4><ul><li>Páginas que no cargan o muestran errores.</li><li>Conflictos entre plugins o temas.</li><li>Enlaces rotos y problemas de navegación.</li></ul>",
    },
  ];
  return (
    <CardsBlock>
      {nuestrosServiciosSection.map((item, index) => (
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
