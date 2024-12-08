export default function Footer() {
	const legalRoutes = [
		{
			text: "Política de privacidad",
			href: "/politica-de-privacidad",
		},
		{
			text: "Política de cookies",
			href: "/politica-de-cookies",
		},
	];

	return (
		<footer
			className={`w-full bg-gray-800
			 flex justify-center items-center`}>
			<div className='w-full bg-transparent text-center'>
				<h2 className='mt-4 text-white'>
					<a
						id='logo'
						href='/'
						className='text-white-light no-underline transition-all duration-300 hover:text-white-strong'>
						BDN Digital Studio
					</a>
				</h2>
				<div className='mt-16 mb-4 flex justify-center gap-4'>
					{legalRoutes.map((route) => (
						<a
							key={route.href}
							href={route.href}
							className='text-white-light no-underline uppercase text-xs hover:text-white-strong'>
							{route.text}
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
