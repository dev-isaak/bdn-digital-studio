"use client";
import { getLocalStorage } from "@/lib/storageHelper";
import { useEffect, useState } from "react";

export default function useCookies() {
	const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
	let storedCookieConsent;

	useEffect(() => {
		storedCookieConsent = getLocalStorage("cookie_consent", null);
		if (storedCookieConsent) setIsSwitchEnabled(true);
		else setIsSwitchEnabled(false);
	}, []);

	return { isSwitchEnabled, setIsSwitchEnabled, storedCookieConsent };
}
