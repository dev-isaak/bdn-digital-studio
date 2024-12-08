export default function TwoBlockCard({
	title,
	text,
}: {
	title: string;
	text: string;
}) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
			<div className='p-4'>
				<h3 className='text-2xl'>{title}</h3>
			</div>
			<div className='p-4'>
				<p>{text}</p>
			</div>
		</div>
	);
}
