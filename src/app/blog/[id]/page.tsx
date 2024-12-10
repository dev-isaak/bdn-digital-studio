import { Button, Card, CardHeader, Image, Link } from "@nextui-org/react";
import ContactBlock from "../../_components/ContactBlock";
import { WordPressPostProps } from "../../../interfaces/wp_post";
import { getPost } from "../data";
import { Metadata } from "next";

interface ParamsProps {
	params: {
		id: string;
	};
}

export async function generateMetadata(
	{ params }: ParamsProps,
	parent: Promise<Metadata>
): Promise<Metadata> {
	const post = await getPost(params.id);
	if (!post)
		return {
			title: `Página no encontrada | BDN Digital Studio`,
		};

	return {
		alternates: {
			canonical: `https://bdndigitalstudio.com/blog/${params.id}`,
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

export default async function Page({ params }: ParamsProps) {
	const slug = params.id;
	const post = await getPost(slug);
	if (!post) {
		return <RenderPaginaNoEncontrada />;
	}
	const {
		title,
		content,
		featuredImage: {
			node: { altText, mediaItemUrl },
		},
	} = post;

	return (
		<>
			<Card radius='none' className='h-96 relative'>
				<div className='absolute inset-0 bg-black opacity-50 z-10'></div>

				<CardHeader className='h-96 absolute flex flex-col justify-center align-middle text-center gap-10 z-20'>
					<div>
						<h1 className='uppercase xs:text-4xl md:text-4xl text-white font-bold'>
							{title}
						</h1>
					</div>
				</CardHeader>

				<Image
					radius='none'
					height={500}
					removeWrapper
					alt={altText}
					className='z-0 w-full h-full object-cover'
					src={mediaItemUrl}
				/>
			</Card>

			<section>
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

const RenderPaginaNoEncontrada = () => {
	return (
		<section className='mt-28 text-center font-semibold'>
			<h1 className='text-4xl mb-6'>
				No se ha encontrado el post que buscabas.
			</h1>
			<Button color='primary' as={Link} href='/blog'>
				Ir al blog
			</Button>
		</section>
	);
};
