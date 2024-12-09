import { useEffect, useState } from "react";

export default function useWindowSize() {
	const [isMobile, setIsMobile] = useState<boolean>();

	useEffect(() => {
		if (window.innerWidth < 700) setIsMobile(true);
		else setIsMobile(false);
	}, [window.innerWidth]);

	return { isMobile };
}
