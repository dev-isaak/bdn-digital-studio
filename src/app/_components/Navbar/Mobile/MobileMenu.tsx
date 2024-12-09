import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import DropDownMobile from "./DropDownMobile";

export default function MobileMenu() {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link className="w-full mt-2" color="foreground" href="/" size="lg">
          Inicio
        </Link>
      </NavbarMenuItem>
      <DropDownMobile />
      <NavbarMenuItem>
        <Link className="w-full mt-2" color="foreground" href="/blog" size="lg">
          Blog
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
}
