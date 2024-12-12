import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import RenderNavbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import BannerCookies from "./_components/Cookies/Banner";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `BDN Digital Studio`,
	description: `En BDN Digital Studio somos expertos en desarrollo web, optimización WordPress, SEO, SEM, Redes Sociales y mucho más. Creamos soluciones digitales personalizadas para potenciar tu presencia online.`,
	openGraph: {
		description:
			"En BDN Digital Studio somos expertos en desarrollo web, optimización WordPress, SEO, SEM, Redes Sociales y mucho más. Creamos soluciones digitales personalizadas para potenciar tu presencia online.",
		tags: "BDN Digital Studio, desarrollo web, mantenimiento WordPress, optimización web, SEO, diseño web, agencia digital",
		title:
			"BDN Digital Studio | Desarrollo Web SEO, SEM, Redes Sociales y Optimización Wordpress",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<head>
				<GoogleTagManager gtmId='GTM-WG467S22' />
				<link rel='shortcut icon' href='/favicon/favicon.ico' />
				<meta name='msapplication-TileColor' content='#000000' />
				<meta
					name='msapplication-config'
					content='/favicon/browserconfig.xml'
				/>
				<meta name='theme-color' content='#000' />
			</head>
			<body className={inter.className}>
				<NextUIProvider>
					<RenderNavbar />
					<div className='min-h-screen overflow-hidden'>{children}</div>
					<Footer />
				</NextUIProvider>
				<ToastContainer />
				<BannerCookies />
			</body>
		</html>
	);
}
