import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface CardProps {
	number: string;
	title: string;
	text: string;
}

export default function CardWithTopNumber({ number, title, text }: CardProps) {
	return (
		<Card shadow='none' className='max-w-[400px] h-[220px]'>
			<CardHeader className='flex gap-3'>
				<div className='flex flex-col'>
					<p className='text-xl'>{number}</p>
					<h4 className='uppercase text-2xl text-default-900 font-semibold'>
						{title}
					</h4>
				</div>
			</CardHeader>
			<CardBody>
				<div dangerouslySetInnerHTML={{ __html: text }}></div>
			</CardBody>
		</Card>
	);
}
