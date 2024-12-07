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
					<Link color='foreground' href='/servicios/freelance-seo'>
						Posicionamiento SEO
					</Link>
				</DropdownItem>
				<DropdownItem key='seo'>
					<Link color='foreground' href='/servicios/freelance-sem'>
						Posicionamiento SEM
					</Link>
				</DropdownItem>
				<DropdownItem key='optimizacion_web'>
					<Link color='foreground' href='/servicios/freelance-optimizacion-web'>
						Optimización Web
					</Link>
				</DropdownItem>
				<DropdownItem key='mantenimiento_web'>
					<Link
						color='foreground'
						href='/servicios/freelance-mantenimiento-web'>
						Mantenimiento Web
					</Link>
				</DropdownItem>
				<DropdownItem key='gestion_rss'>
					<Link color='foreground' href='/servicios/freelance-rrss'>
						Redes Sociales
					</Link>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
