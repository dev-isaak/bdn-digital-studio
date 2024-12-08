export default function ServiciosLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='min-h-screen mt-20 p-2 max-w-6xl m-auto'>{children}</div>
	);
}
