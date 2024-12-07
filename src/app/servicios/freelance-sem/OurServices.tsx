export default function OurServices() {
	const content = [
		{
			title: "Gestión de Google Ads",
			text: "Diseñamos y gestionamos campañas en Google Ads para ayudarte a aparecer en los primeros resultados de búsqueda. Desde anuncios de búsqueda hasta remarketing, abarcamos todos los formatos para maximizar tu visibilidad.",
		},
		{
			title: "Optimización de campañas",
			text: "Monitorizamos y optimizamos tus campañas activas para mejorar su rendimiento. Ajustamos pujas, palabras clave y creatividades para asegurar que obtengas el mejor retorno posible.",
		},
		{
			title: "Análisis y reportes",
			text: "Proporcionamos reportes detallados con métricas clave como CTR, conversiones y ROI, para que tengas una visión clara del impacto de tus campañas.",
		},
	];
	return (
		<>
			{content.map((item, index) => (
				<div
					key={index}
					className='grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-6 p-4'>
					<div className='p-4'>
						<h3 className='text-2xl'>{item.title}</h3>
					</div>
					<div className='p-4'>
						<p>{item.text}</p>
					</div>
				</div>
			))}
		</>
	);
}
