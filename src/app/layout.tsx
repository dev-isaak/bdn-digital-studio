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
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#000' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />
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
