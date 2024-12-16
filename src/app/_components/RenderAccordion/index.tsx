"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Heading from "../Heading";

interface DataList {
	question: string;
	answer: string;
}
interface RenderAccordionProps {
	data: DataList[];
}

export default function RenderAccordion({ data }: RenderAccordionProps) {
	return (
		<div className='m-auto max-w-3xl'>
			<Heading firstText="FAQ's" secondText='Preguntas Frecuentes' />
			<Accordion
				variant='light'
				selectionMode='single'
				className='mt-4'
				itemClasses={{ title: "text-gray-900 font-medium" }}>
				{data.map((data, index: number) => (
					<AccordionItem
						key={index}
						title={data.question}
						aria-label={data.question}>
						<p className='ml-4'>{data.answer}</p>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
