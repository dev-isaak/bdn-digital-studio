import { headers } from "next/headers";

/**
 * Construye la URL base para el servidor o cliente.
 * Usa las cabeceras en el servidor para determinar el host.
 */
export function getApiUrl() {
	// Detecta si estamos en producción
	const isProduction = process.env.NODE_ENV === "production";

	// En el servidor, usamos las cabeceras para obtener el host
	if (typeof window === "undefined") {
		const headersList = headers();
		const host = headersList.get("host");
		const protocol = isProduction ? "https" : "http";
		return `${protocol}://${host}`;
	}

	// En el cliente, asumimos que usamos rutas relativas
	return "";
}

export const API_URL = getApiUrl();
