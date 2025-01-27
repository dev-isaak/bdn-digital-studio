"use client";
import { FaSearch } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { motion } from "motion/react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import useWindowSize from "@/hooks/useWindowSize";

export default function OurMetodology() {
	const { isMobile } = useWindowSize();

	const nuestraMetodologia = [
		{
			title: "Auditoría",
			icon: <FaBolt size={32} color='#444444' />,
			body: "<p>Antes de empezar a tomar cartas en el asunto, vamos realizar un análisis de tu web para saber en qué punto se encuentra donde vamos a poder descubrir cuáles son los puntos que vamos a trabajar.</p>",
		},
		{
			title: "Planificación",
			icon: <FaRegPaperPlane size={32} color='#444444' />,
			body: "<p>Una vez hecha la auditoría, como freelance experto en SEO, vamos a trazar una hoja de ruta con los objetivos que vamos a abordar.</p>",
			isOdd: true,
		},
		{
			title: "Búsqueda de palabras clave",
			icon: <FaSearch size={32} color='#444444' />,
			body: "<p>El keyword research es un ámbito que como agencia de marketing digital SEO trabajamos de manera personalizada para cada cliente. Hacemos un estudio de las palabras que vamos a trabajar según tu negocio y un análisis de la competencia para poder trabajar de la forma más precisa posible.</p>",
		},
		{
			title: "Reportes",
			icon: <FaRegChartBar size={32} color='#444444' />,
			body: "<p>Todo el trabajo que hacemos como agencia SEO no queda en el aire sino que generamos reportes mes a mes basados en los KPI's y en el resultados de SEO, así podemos redefinir objetivos cuando sea necesario.</p>",
			isOdd: true,
		},
	];
	return (
		<div className='flex flex-col gap-4 items-center my-6'>
			{nuestraMetodologia.map((item, index) => {
				const cardContent = (
					<>
						<CardHeader>
							{item.icon}
							<h3 className='ml-6 font-medium text-xl'>{item.title}</h3>
						</CardHeader>
						<CardBody>
							<div dangerouslySetInnerHTML={{ __html: item.body }}></div>
						</CardBody>
					</>
				);

				if (isMobile) {
					return (
						<Card
							key={index}
							className={`${
								isMobile
									? ""
									: `max-w-xl ${
											item.isOdd ? "translate-x-5" : "-translate-x-5"
										}`
							}`}>
							{cardContent}
						</Card>
					);
				}

				return (
					<motion.div
						key={index}
						initial={{ x: item.isOdd ? 400 : -400 }}
						whileInView={{ x: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}>
						<Card
							className={`max-w-xl ${
								item.isOdd ? "translate-x-5" : "-translate-x-5"
							}`}>
							{cardContent}
						</Card>
					</motion.div>
				);
			})}
		</div>
	);
}
