interface IFormLayout {
	children: React.ReactNode;
	title: string;
}

export default function FormLayout({ children, title }: IFormLayout) {
	return (
		<div className='bg-slate-200 w-[300px]  rounded-lg p-2'>
			<h3>{title}</h3>
			{children}
		</div>
	);
}
