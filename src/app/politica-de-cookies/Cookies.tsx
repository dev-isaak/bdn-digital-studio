"use client";
import useCookies from "@/hooks/useCookies";
import CookieSettings from "../_components/Cookies/CookieSettings";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { setLocalStorage } from "@/lib/storageHelper";
import { succesToast } from "../_components/toastify";

export default function Cookies() {
	const { isSwitchEnabled, setIsSwitchEnabled } = useCookies();
	const [disabledConfigButton, setDisabledConfigButton] = useState(true);

	// Maneja el cambio de estado del switch
	const handleSwitchChange = (enabled: boolean) => {
		setIsSwitchEnabled(enabled);
		setDisabledConfigButton(!disabledConfigButton); // Deshabilita si el switch está desactivado
	};

	const handleSaveConfigCookies = () => {
		setLocalStorage("cookie_consent", isSwitchEnabled);
		setDisabledConfigButton(true);
		succesToast("Tu configuración de cookies se ha guardado.");
	};

	return (
		<>
			<CookieSettings
				isSwitchEnabled={isSwitchEnabled}
				onSwitchChange={handleSwitchChange} // Vinculamos la función personalizada
			/>
			<Button
				color='primary'
				isDisabled={disabledConfigButton}
				onPress={handleSaveConfigCookies}>
				Guardar configuración
			</Button>
		</>
	);
}
