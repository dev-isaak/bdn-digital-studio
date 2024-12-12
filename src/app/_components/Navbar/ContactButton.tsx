"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Button, Link } from "@nextui-org/react";

export default function ContactButton() {
	return (
		<Button
			as={Link}
			color='secondary'
			href='/contacto'
			variant='solid'
			onClick={() =>
				sendGTMEvent({ event: "contact_menu_clicked", value: "contacto" })
			}>
			Contacto
		</Button>
	);
}
