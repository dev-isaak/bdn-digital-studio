import { CMS_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";
import RenderNavbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `BDN Digital Studio`,
	description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
	// openGraph: {
	// 	images: [HOME_OG_IMAGE_URL],
	// },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<head>
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
					<div className='min-h-screen'>{children}</div>
					<Footer />
				</NextUIProvider>
				<ToastContainer />
			</body>
		</html>
	);
}
