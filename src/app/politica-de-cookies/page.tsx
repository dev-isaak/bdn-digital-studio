export default function PoliticaDeCookies() {
	return (
		<main className='mt-20 p-2 pb-8 md:px-8'>
			<h1 className='font-semibold text-4xl my-2'>Política de Cookies</h1>
			<p>
				<strong>BDN Digital Studio</strong> informa acerca del uso de las
				cookies en su página web:{" "}
				<a className='underline' href='https://www.bdndigitalstudio.com'>
					www.bdndigitalstudio.com
				</a>
			</p>

			<h2 className='font-semibold text-xl my-2'>¿Qué son las cookies?</h2>
			<p>
				Las cookies son archivos que se pueden descargar en su equipo a través
				de las páginas web. Son herramientas esenciales para la prestación de
				numerosos servicios en línea. Permiten, entre otros, almacenar y
				recuperar información sobre los hábitos de navegación de los usuarios y
				mejorar los servicios ofrecidos.
			</p>

			<h2 className='font-semibold text-xl my-2'>Tipos de cookies</h2>
			<p>Las cookies se pueden clasificar según diferentes criterios:</p>

			<h3 className='font-medium text-lg my-2'>
				1. Según la entidad que las gestione:
			</h3>
			<ul className='m-4 flex flex-col gap-2'>
				<li>
					<strong>Cookies propias:</strong> Enviadas desde un equipo o dominio
					gestionado por el propio editor del sitio web.
				</li>
				<li>
					<strong>Cookies de terceros:</strong> Enviadas desde un equipo o
					dominio gestionado por una entidad externa al editor.
				</li>
			</ul>

			<h3 className='font-medium text-lg my-2'>
				2. Según el tiempo de almacenamiento:
			</h3>
			<ul className='m-4 flex flex-col gap-2'>
				<li>
					<strong>Cookies de sesión:</strong> Recogen y almacenan datos mientras
					el usuario navega en una página web. Se eliminan al cerrar el
					navegador.
				</li>
				<li>
					<strong>Cookies persistentes:</strong> Permanecen almacenadas en el
					dispositivo del usuario durante un periodo definido, incluso después
					de cerrar el navegador.
				</li>
			</ul>

			<h3 className='font-medium text-lg my-2'>3. Según su finalidad:</h3>
			<ul className='m-4 flex flex-col gap-2'>
				<li>
					<strong>Cookies técnicas:</strong> Permiten la navegación y el uso de
					las funciones básicas de un sitio web, como acceder a áreas seguras o
					recordar productos en un carrito de compra.
				</li>
				<li>
					<strong>Cookies de personalización:</strong> Permiten al usuario
					navegar con características predefinidas según criterios como idioma o
					región.
				</li>
				<li>
					<strong>Cookies de análisis:</strong> Ayudan a medir y analizar el
					comportamiento de los usuarios en el sitio web. Estas cookies se usan
					para mejorar los servicios ofrecidos. En{" "}
					<strong>BDN Digital Studio</strong>, solo utilizamos cookies de este
					tipo, proporcionadas por Google Analytics (GA4).
				</li>
				<li>
					<strong>Cookies publicitarias:</strong> Gestionan de forma eficaz los
					espacios publicitarios en una página web.
				</li>
				<li>
					<strong>Cookies de publicidad comportamental:</strong> Recogen
					información sobre los hábitos de navegación del usuario para mostrar
					anuncios personalizados.
				</li>
				<li>
					<strong>Cookies de redes sociales externas:</strong> Facilitan la
					interacción con plataformas como Facebook, Twitter o LinkedIn.
				</li>
			</ul>

			<h2 className='font-semibold text-xl my-2'>
				Cookies utilizadas por BDN Digital Studio
			</h2>
			<p>
				En <strong>BDN Digital Studio</strong>, únicamente utilizamos cookies de
				análisis proporcionadas por Google Analytics (GA4). Estas cookies nos
				permiten entender cómo los usuarios interactúan con nuestro sitio web y
				optimizar su experiencia de navegación. La información recopilada es
				anónima y se utiliza exclusivamente para mejorar nuestros servicios.
			</p>

			<h2 className='font-semibold text-xl my-2'>
				Desactivación y eliminación de cookies
			</h2>
			<p>
				Puede permitir, bloquear o eliminar las cookies instaladas en su equipo
				a través de la configuración de su navegador. Al desactivar las cookies,
				es posible que algunos servicios no funcionen correctamente.
			</p>
			<ul className='m-4 flex flex-col gap-2'>
				<li>
					<a
						className='underline'
						href='https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies'
						target='_blank'>
						Microsoft Edge o Internet Explorer
					</a>
				</li>
				<li>
					<a
						className='underline'
						href='https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencias'
						target='_blank'>
						Mozilla Firefox
					</a>
				</li>
				<li>
					<a
						className='underline'
						href='https://support.google.com/chrome/answer/95647?hl=es'
						target='_blank'>
						Google Chrome
					</a>
				</li>
				<li>
					<a
						className='underline'
						href='https://support.apple.com/es-es/guide/safari/sfri11471/mac'
						target='_blank'>
						Safari
					</a>
				</li>
				<li>
					<a
						className='underline'
						href='https://help.opera.com/en/latest/web-preferences/#cookies'
						target='_blank'>
						Opera
					</a>
				</li>
			</ul>

			<h2 className='font-semibold text-xl my-2'>
				Aceptación de la Política de Cookies
			</h2>
			<p>
				Al acceder a{" "}
				<a className='underline' href='https://www.bdndigitalstudio.com'>
					www.bdndigitalstudio.com
				</a>
				, usted acepta el uso de cookies. Mostraremos un aviso informativo en la
				parte inferior de la página web donde podrá:
			</p>
			<ul className='m-4 flex flex-col gap-2'>
				<li>
					<strong>Aceptar cookies:</strong> No volverá a ver el aviso en 180
					días.
				</li>
				<li>
					<strong>Rechazar Cookies:</strong> Rechazará todas las cookies de
					terceros y ocultará el aviso durante 180 días.
				</li>
				<li>
					<strong>Modificar configuración:</strong> Podrá obtener más
					información y ajustar la configuración de su navegador.
				</li>
			</ul>
			<h2 className='font-semibold text-xl my-2'>Configuración de Cookies</h2>
		</main>
	);
}
