import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import DropDownMobile from "./DropDownMobile";
import { Logo } from "../../icons/LogoBlack";

export default function MobileMenu() {
	return (
		<NavbarMenu>
			<NavbarMenuItem>
				{/* Mobile Logo  */}
				<div className='sm:hidden justify-self-end'>
					<Logo />
				</div>
				<Link className='w-full mt-6' color='foreground' href='/' size='lg'>
					Inicio
				</Link>
			</NavbarMenuItem>
			<DropDownMobile />
			<NavbarMenuItem>
				<Link
					className='w-full mt-2'
					color='foreground'
					href='/casos-de-exito'
					size='lg'>
					Casos de éxito
				</Link>
			</NavbarMenuItem>
			<NavbarMenuItem>
				<Link className='w-full mt-2' color='foreground' href='/blog' size='lg'>
					Blog
				</Link>
			</NavbarMenuItem>
		</NavbarMenu>
	);
}
