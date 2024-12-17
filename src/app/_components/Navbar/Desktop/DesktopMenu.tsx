import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
} from "@nextui-org/react";
import { Logo } from "../../icons/LogoBlack";
import DropDownDesktop from "./DropDownDesktop";

export default function DesktopMenu() {
	return (
		<NavbarContent className='hidden sm:flex gap-6' justify='center'>
			<NavbarBrand>
				<Logo />
			</NavbarBrand>

			<NavbarItem>
				<Link color='foreground' href='/'>
					Inicio
				</Link>
			</NavbarItem>
			<DropDownDesktop />
			<NavbarItem>
				<Link color='foreground' href='/blog'>
					Blog
				</Link>
			</NavbarItem>
		</NavbarContent>
	);
}
