import ContactBlock from "@/app/_components/ContactBlock";
import { Card, CardHeader, Image } from "@nextui-org/react";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const slug = params.slug;
	const res = await fetch(
		`http://localhost:3000/api/get-post?slug=${encodeURIComponent(slug)}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	const { post } = await res.json();

	return {
		alternates: {
			canonical: `https://bdndigitalstudio.com/blog/${slug}`,
			languages: {
				"en-US": "/en-US",
				"de-DE": "/de-DE",
			},
		},
		title: `${post.title} | BDN Digital Studio`,
		description: post.seo?.metaDesc || "Blog | BDN Digital Studio",
		openGraph: {
			title: post.title,
			description: post.seo?.metaDesc || "Blog | BDN Digital Studio",
			images: [
				{
					url: post.featuredImage?.node?.mediaItemUrl || "",
					alt: post.featuredImage?.node?.altText || "Imagen del header",
				},
			],
		},
	};
}

export default async function Page({ params }: any) {
	const slug = params.slug;
	const res = await fetch(
		`http://localhost:3000/api/get-post?slug=${encodeURIComponent(slug)}`,
		{
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		}
	);
	let {
		post: {
			content,
			title,
			featuredImage: {
				node: { altText, mediaItemUrl },
			},
		},
	} = await res.json();
	// console.log(", respuesta: ", post.content);

	return (
		<>
			<Card radius='none' className='h-96 relative'>
				{/* Overlay con opacidad */}
				<div className='absolute inset-0 bg-black opacity-50 z-10'></div>

				{/* Contenido del encabezado */}
				<CardHeader className='h-96 absolute flex flex-col justify-center align-middle text-center gap-10 z-20'>
					<div>
						<h1 className='uppercase xs:text-4xl md:text-4xl text-white font-bold'>
							{title}
						</h1>
					</div>
				</CardHeader>

				{/* Imagen de fondo */}
				<Image
					radius='none'
					height={500}
					removeWrapper
					alt={altText}
					className='z-0 w-full h-full object-cover'
					src={mediaItemUrl}
				/>
			</Card>

			<section className=''>
				<div>
					<div
						id='blog-post'
						dangerouslySetInnerHTML={{ __html: content }}></div>
				</div>
			</section>
			<section className='max-w-[1000px] my-6 md:my-10 mx-1 md:m-auto'>
				<ContactBlock />
			</section>
		</>
	);
}

interface PostProps {
	title: string;
	content: string;
	featuredImage: {
		node: {
			mediaItemUrl: string;
			altText: string;
		};
	};
}
