"use client";
import { useEffect, useState } from "react";

export default function useWindowSize() {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		// Verificar si estamos en un entorno del cliente
		const handleResize = () => {
			if (typeof window !== "undefined") {
				setIsMobile(window.innerWidth < 700);
			}
		};

		// Configurar el tamaño inicial
		handleResize();

		// Añadir un listener para cambios en el tamaño de la ventana
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { isMobile };
}
