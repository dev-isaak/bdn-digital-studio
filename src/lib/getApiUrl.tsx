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
		// Verifica si headers() está disponible en el contexto
		try {
			const headersList = headers();
			const host = headersList.get("host");
			const protocol = isProduction ? "https" : "http";
			return `${protocol}://${host}`;
		} catch (error) {
			// En caso de que no sea posible obtener los headers, retorna la URL por defecto
			return isProduction
				? "https://bdndigitalstudio.com"
				: "http://localhost:3000";
		}
	}

	// En el cliente, asumimos que usamos rutas relativas
	return "";
}

export const API_URL = getApiUrl();
