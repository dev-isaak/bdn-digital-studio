import Heading from "@/app/_components/Heading";
import TwoBlockGrid from "../components/TwoBlockGrid";
import { Button, Image, Link } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import HowWeWork from "./HowWeWork";
import Faq from "./Faq";
import ContactBlock from "@/app/_components/ContactBlock";

export const metadata = {
  alternates: {
    canonical: `https://bdndigitalstudio.com/servicios/freelance-desarrollo-web`,
  },
  title: `Desarrollo Web Freelance | BDN Digital Studio`,
  description: `En BDN Digital Studio, ofrecemos soluciones de desarrollo web en Barcelona, desde sitios en WordPress hasta proyectos personalizados con tecnologías como React y Astro. Creamos páginas atractivas, funcionales y adaptadas a tus necesidades. Nuestro enfoque combina diseño, rendimiento y tecnología avanzada para garantizar una presencia online de alto impacto. ¡Haz realidad tu proyecto con nosotros!`,
};

export default function WebDevelopment() {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <h1 className="uppercase text-4xl font-semibold text-gray-800">
        Desarrollo Web a Medida y en WordPress
      </h1>
      <section>
        <TwoBlockGrid
          imageURL="/assets/images/building8.webp"
          altText="Edificio arquitectónico"
        >
          <p>
            En BDN Digital Studio, somos una agencia freelance especializada en{" "}
            <strong>desarrollo web en Barcelona</strong>. Nos apasiona crear
            experiencias digitales únicas, adaptadas a las necesidades de
            nuestros clientes. Ofrecemos soluciones integrales que incluyen
            desde la <strong>creación de sitios en WordPress</strong> hasta
            proyectos de desarrollo a medida utilizando tecnologías avanzadas
            como NextJS o Astro.
          </p>
        </TwoBlockGrid>
      </section>
      <section>
        <Heading
          firstText="Cuál es nuestra función"
          secondText="Como desarrolladores web freelance"
        />
        <p>
          El desarrollo web es el proceso de diseñar, construir y mantener
          páginas web. En la actualidad, contar con un sitio web profesional ya
          no es opcional; es una necesidad. Tu página web es tu carta de
          presentación en el mundo digital y el primer lugar donde los clientes
          potenciales buscan información sobre tus productos o servicios.
        </p>
        <p>
          En <strong>BDN Digital Studio</strong>, sabemos que un sitio bien
          diseñado no solo debe verse bien, sino también ser funcional, rápido y
          estar optimizado para convertir visitantes en clientes. Por eso,
          trabajamos en proyectos que combinan diseño, rendimiento y tecnología
          de vanguardia.
        </p>
      </section>
      <div className="my-10">
        <Image
          src="/assets/images/building10.webp"
          alt="edificio arquitectónico"
          width={1200}
          height={400}
        />
      </div>
      <section>
        <Heading
          firstText="Qué te ofrecemos"
          secondText="Como agencia web freelance"
        />
        <p>
          En BDN Digital Studio, nos especializamos en las tecnologías más
          demandadas por nuestros clientes. Como agencia de desarrollo Wordpress
          creamos servicios a medida teniendo en cuenta los requisitos de
          nuestros clientes.
        </p>
        <p>
          Además, como especialistas freelance de desarrollo web trabajamos con
          tecnologías como React, NextJS o Astro para ofrecer soluciones
          completamente a medida.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4">
          <div className="p-4">
            <h3 className="text-2xl">Worpdress</h3>
          </div>
          <div className="p-4">
            <ul className="flex flex-col gap-4">
              <h4>PROS</h4>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    <strong>Rápida implementación</strong>, perfecto para sitios
                    básicos, como blogs, páginas corporativas, etc.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    Gran cantidad de <strong>temas y plugins</strong>{" "}
                    disponibles listos para usar.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    Podrás gestionar contenido sin conocimientos de
                    programación.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    <strong>Más económico </strong>para proyectos pequeños
                    debido al uso de plantillas y funcionalidades que facilitan
                    el desarrollo de la web.
                  </p>
                </div>
              </li>
              <h4>CONS</h4>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Al ser un CSM muy popular, es un objetivo común de hackers,
                    lo que requiere actualizaciones constantes para proteger el
                    sitio.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Algunos plugins y temas pueden quedarse obsoletos, lo que
                    dificulta el mantenimiento a largo plazo.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Usar plugins y/o temas de pago aumentará las facturas
                    menusales y/o anuales además que acabará sobrecargando y
                    afectando al rendimiento de la web.
                  </p>
                </div>
              </li>
            </ul>
            <Button
              className="mt-4"
              color="primary"
              variant="ghost"
              as={Link}
              href="/contacto"
            >
              ¡Lo Quiero!
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4">
          <div className="p-4">
            <h3 className="text-2xl">Desarrollo Personalizado</h3>
          </div>
          <div className="p-4">
            <ul className="flex flex-col gap-4">
              <h4>PROS</h4>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    <strong>100% flexible</strong>, se puede desarrollar
                    cualquier diseño o funcionalidad que tengas en mente.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>
                    Trabajamos con frameworks diseñados para optimizar el
                    rendimiento y la indexación en buscadores.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>Ideal para proyectos que planean escalar en el futuro.</p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <FaCheck size={20} color="green" />
                  <p>Facilidad de mantenimiento a largo plazo.</p>
                </div>
              </li>
              <h4>CONS</h4>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Requiere más tiempo de desarrollo y experiencia técnica, lo
                    que hace elevar los costos.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Más difícil de gestionar para clientes no técnicos. (Aunque
                    se pueden desarrollar interfaces de gestión amigables)
                  </p>
                </div>
              </li>
              <li>
                <div className="flex gap-4">
                  <ImCross size={20} color="red" />
                  <p>
                    Necesita actualizaciones manuales y requieren de
                    desarrolladores cualificados.
                  </p>
                </div>
              </li>
            </ul>
            <Button
              className="mt-4"
              color="primary"
              variant="ghost"
              as={Link}
              href="/contacto"
            >
              ¡Lo Quiero!
            </Button>
          </div>
        </div>
      </section>
      <section>
        <Heading
          firstText="Cómo trabajamos"
          secondText="Durante el desarrollo de tu web"
        />
        <HowWeWork />
      </section>
      <section>
        <h2 className="uppercase font-medium text-4xl text-center my-6">
          Preguntas Frecuentes
        </h2>
        <Faq />
      </section>
      <ContactBlock />
    </div>
  );
}
