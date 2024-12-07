"use client";
import {
	Accordion,
	AccordionItem,
	Listbox,
	ListboxItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function DropDownMobile() {
	return (
		<div style={{ marginLeft: "-10px", marginTop: "8px" }}>
			<Accordion itemClasses={{ title: "text-lg" }}>
				<AccordionItem key='1' aria-label='Servicios' title='Servicios'>
					<Listbox>
						<ListboxItem>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-seo'>
								Posicionamiento SEO
							</Link>
						</ListboxItem>
						<ListboxItem className='mt-4'>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-sem'>
								Posicionamiento SEM
							</Link>
						</ListboxItem>
						<ListboxItem className='mt-4'>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-desarrollo-web'>
								Desarrollo Web
							</Link>
						</ListboxItem>
						<ListboxItem className='mt-4'>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-optimizacion-web'>
								Optimización Web
							</Link>
						</ListboxItem>
						<ListboxItem className='mt-4'>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-mantenimiento-web'>
								Mantenimiento Web
							</Link>
						</ListboxItem>
						<ListboxItem className='mt-4'>
							<Link
								className='w-full text-base'
								color='foreground'
								href='/servicios/freelance-rrss'>
								Redes Sociales
							</Link>
						</ListboxItem>
					</Listbox>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
