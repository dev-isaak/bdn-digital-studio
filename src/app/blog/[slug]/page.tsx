import { Card, CardHeader, Image } from "@nextui-org/react";
import ContactBlock from "../../_components/ContactBlock";
import { WordPressPostProps } from "../../../interfaces/wp_post";
import { getPost } from "../data";

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { slug: string };
// }) {
// 	const post: WordPressPostProps = await getPost(params.slug);

// 	return {
// 		alternates: {
// 			canonical: `https://bdndigitalstudio.com/blog/${params.slug}`,
// 		},
// 		title: `${post.title} | BDN Digital Studio`,
// 		description: post.seo?.metaDesc || "Blog | BDN Digital Studio",
// 		openGraph: {
// 			title: post.title,
// 			description: post.seo?.metaDesc || "Blog | BDN Digital Studio",
// 			images: [
// 				{
// 					url: post.featuredImage?.node?.mediaItemUrl || "",
// 					alt: post.featuredImage?.node?.altText || "Imagen del header",
// 				},
// 			],
// 		},
// 	};
// }

interface ParamsProps {
	params: {
		slug: string;
	};
}

export default async function Page({ params }: ParamsProps) {
	const slug = params.slug;
	const {
		title,
		content,
		featuredImage: {
			node: { altText, mediaItemUrl },
		},
	}: WordPressPostProps = await getPost(slug);

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
