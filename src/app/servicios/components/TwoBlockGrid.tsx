import { Button, Image, Link } from "@nextui-org/react";

interface TwoBlockGridProps {
	children: React.ReactNode;
	imageURL: string;
	altText: string;
}

export default function TwoBlockGrid({
	children,
	imageURL,
	altText,
}: TwoBlockGridProps) {
	return (
		<div className='grid max-w-[900px] mx-auto grid-cols-1 gap-6 p-4 md:grid-cols-2'>
			<div className='p-4 rounded flex flex-col justify-between'>
				<>{children}</>
				<Button
					className='mt-6'
					color='primary'
					variant='ghost'
					as={Link}
					href='/contacto'>
					¿Hablamos?
				</Button>
			</div>
			<div className='p-4 rounded flex justify-center'>
				<Image src={imageURL} alt={altText} width={250} height={300} />
			</div>
		</div>
	);
}
