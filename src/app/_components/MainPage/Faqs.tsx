import RenderAccordion from "../RenderAccordion";

export default function Faqs() {
	const faqData = [
		{
			question: "¿Cómo están hechas vuestras páginas web?",
			answer: `
        Dependerá del tipo de proyecto que quieras! La mayor parte de ellas las hacemos en WordPress, la plataforma de gestión de contenidos más utilizada en el mundo, pero 
        también trabajamos con Astro si queremos tener más control en el proyecto.
      `,
		},
		{
			question: "¿Qué pasa si no me gusta el diseño o quiero hacer cambios?",
			answer: `
        ¡No te preocupes si no te gusta el diseño!
        Ponemos mucha atención antes de empezar a desarrollar para entender bien cómo te gustaría que fuera tu diseño, si no conseguimos captar al 100% el diseño que tenías en mente, podrás pedirnos todos los ajustes que quieras.
        No descansaremos hasta que no quedes 100% satisfecho!
      `,
		},
		{
			question: "¿Cómo os hago el pago de la web?",
			answer: `
        Para ponernos en marcha con tu nueva página tendrás que hacer un primer pago de entre el 10% y el 50% del precio total del proyecto.
        Podrás hacer el pago con tarjeta o transferencia bancaria.
      `,
		},
		{
			question: "¿Podré editar los contenidos de la web?",
			answer: `
        Sí! Si quieres añadir fotos, textos, nuevos apartados, lo que sea, vas a poder hacerlo. ¡Nosotros te enseñaremos!
      `,
		},
		{
			question: "¿En cuánto tiempo tendré la página web online?",
			answer: `
    Si se trata de una página web estándar, nos comprometemos a entregarla en un máximo de 20 días a partir de que recibamos toda la información necesaria.
    Este plazo es estimado y puede variar según el caso. También dependerá de tu disponibilidad y de lo rápido que podamos resolver cualquier duda o recibir los datos que necesitemos.
  `,
		},
		{
			question:
				"Mi página web va a ser distinta a las típicas webs ¿Podréis ayudarme?",
			answer: `
      ¡Claro que sí! De hecho es lo que más nos gusta, proyectos que se salen de lo habitual.
        Sea lo que sea que tengas en mente, escucharemos tu caso y te propondremos la mejor solución o alternativa.
      `,
		},
		{
			question: "Os hacéis cargo del hosting, dominio y las cuentas de email?",
			answer: `
        Por supuesto. Tanto si no tienes nada, como si tienes que hacer una migración, nosotros nos haremos cargo para que no tengas que preocuparte.
      `,
		},
		{
			question: "¿Hay algún problema si no soy autónomo ni empresa?",
			answer: `
        Claro que no, puedes tener tu página web igualmente!
      `,
		},
	];

	return <RenderAccordion data={faqData} />;
}
