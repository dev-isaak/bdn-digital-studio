"use client";
import {
	NavbarItem,
	Link,
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "../../icons/ChevronDown";

export default function DropDownDesktop() {
	return (
		<Dropdown>
			<NavbarItem>
				<DropdownTrigger>
					<Button
						disableRipple
						className='p-0 bg-transparent data-[hover=true]:bg-transparent text-base text-gray-850'
						radius='sm'
						variant='light'
						endContent={<ChevronDown fill='currentColor' size={16} />}>
						Servicios
					</Button>
				</DropdownTrigger>
			</NavbarItem>
			<DropdownMenu
				aria-label='Servicios BDN Digital Studio'
				className='w-[250px]'
				itemClasses={{
					base: "gap-4",
				}}>
				<DropdownItem key='seo'>
					<Link
						color='foreground'
						href='/servicios/freelance-seo'
						className='w-full'>
						Posicionamiento SEO
					</Link>
				</DropdownItem>
				<DropdownItem key='sem'>
					<Link
						color='foreground'
						href='/servicios/freelance-sem'
						className='w-full'>
						Posicionamiento SEM
					</Link>
				</DropdownItem>
				<DropdownItem key='desarrollo_web'>
					<Link
						color='foreground'
						href='/servicios/freelance-desarrollo-web'
						className='w-full'>
						Desarrollo Web
					</Link>
				</DropdownItem>
				<DropdownItem key='optimizacion_web'>
					<Link
						color='foreground'
						href='/servicios/freelance-optimizacion-web'
						className='w-full'>
						Optimización Web
					</Link>
				</DropdownItem>
				<DropdownItem key='mantenimiento_web' className='w-full'>
					<Link
						color='foreground'
						href='/servicios/freelance-mantenimiento-web'
						className='w-full'>
						Mantenimiento Web
					</Link>
				</DropdownItem>
				<DropdownItem key='gestion_rss'>
					<Link
						color='foreground'
						href='/servicios/freelance-rrss'
						className='w-full'>
						Redes Sociales
					</Link>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
