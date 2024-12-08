export default function CardsBlock({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='flex flex-wrap gap-10 justify-around'>{children}</div>;
}
