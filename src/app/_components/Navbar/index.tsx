import {
	Navbar,
	NavbarMenuToggle,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { Logo } from "../icons/LogoBlack";
import DesktopMenu from "./Desktop/DesktopMenu";
import MobileMenu from "./Mobile/MobileMenu";
import ContactButton from "./ContactButton";

export default function RenderNavbar() {
	return (
		<Navbar isBordered shouldHideOnScroll className='md:fixed'>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle />
			</NavbarContent>

			{/* Mobile Logo  */}
			{/* <div className='sm:hidden'>
				<Logo />
			</div> */}

			{/* Desktop Navbar  */}
			<DesktopMenu />

			<NavbarContent justify='end'>
				<NavbarItem>
					<ContactButton />
				</NavbarItem>
			</NavbarContent>

			{/* Mobile Navbar  */}
			<MobileMenu />
		</Navbar>
	);
}
