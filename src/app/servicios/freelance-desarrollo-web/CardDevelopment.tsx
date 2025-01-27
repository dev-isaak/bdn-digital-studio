"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaCheck } from "react-icons/fa";

type dataType = {
	title: string;
	list: string[];
	buttonText: string;
	buttonHref: string;
};

export default function CardDevelopment() {
	const cardWhatWeDoData: dataType[] = [
		{
			title: "Diseño y desarrollo de landing pages",
			list: [
				"Definimos a tu audiencia objetivo",
				"Diseñamos una página de aterrizaje atractiva",
				"Creamos contenido persuasivo",
				"Monitoreamos y probamos la página",
			],
			buttonText: "Saber más",
			buttonHref: "#",
		},
		{
			title: "Diseño y desarrollo de páginas web",
			list: [
				"Creamos tu página web para hacerte visible en todo el mundo",
				"Tantos menús y secciones como necesites",
				"Funcionalidades que se adapten a tu negocio",
				"Preparamos tu web para SEO",
			],
			buttonText: "Contactar",
			buttonHref: "/contacto",
		},
		{
			title: "Creación de tiendas online",
			list: [
				"Woocommerce",
				"Shopify",
				"Creamos contenido persuasivo",
				"Tantos productos como necesites",
				"Estrategias de venta",
			],
			buttonText: "Saber más",
			buttonHref: "#",
		},
	];
	return (
		<>
			{cardWhatWeDoData.map((item, index) => (
				<motion.div
					key={index}
					initial={{ y: 100 }}
					whileInView={{ y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<div className='flex flex-col justify-between w-[350px] h-full shadow-sm py-4 p-2 rounded-md bg-white'>
						<h3 className='uppercase text-xl font-semibold mb-4'>
							{item.title}
						</h3>
						<div className='flex flex-col gap-4'>
							{item.list.map((listItem, index2) => (
								<div key={index2} className='flex items-center gap-4'>
									<FaCheck
										className='fill-green-700 w-4 h-4 flex-shrink-0'
										style={{ verticalAlign: "middle" }}
									/>
									<p className='my-0 text-base leading-none flex-shrink'>
										{listItem}
									</p>
								</div>
							))}
						</div>
						<div className='my-4 mt-6'>
							<a
								href={item.buttonHref}
								className='w-fit bg-primary text-white p-2 rounded-md'>
								{item.buttonText}
							</a>
						</div>
					</div>
				</motion.div>
			))}
		</>
	);
}
