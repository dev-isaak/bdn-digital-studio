import {
	Navbar,
	NavbarMenuToggle,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
import { Logo } from "../icons/Logo";
import DesktopMenu from "./Desktop/DesktopMenu";
import MobileMenu from "./Mobile/MobileMenu";

export default function RenderNavbar() {
	return (
		<Navbar isBordered shouldHideOnScroll className='fixed'>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle />
			</NavbarContent>

			{/* Mobile Logo  */}
			<div className='sm:hidden'>
				<Logo />
			</div>

			{/* Desktop Navbar  */}
			<DesktopMenu />

			<NavbarContent justify='end'>
				<NavbarItem>
					<Button as={Link} color='secondary' href='/contacto' variant='solid'>
						Contacto
					</Button>
				</NavbarItem>
			</NavbarContent>

			{/* Mobile Navbar  */}
			<MobileMenu />
		</Navbar>
	);
}
