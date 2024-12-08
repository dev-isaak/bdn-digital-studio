import { API_URL } from "@/lib/constants";
import {
	Button,
	Card,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/blog`,
	},
	title: `Blog | BDN Digital Studio`,
	description: `En el blog de BDN Digital Studio encontrarás todas las noticias relacionadas con el mundo digital. SEO, desarrollo web, redes sociales... ¡Y mucho más! .`,
};

const truncateText = (text: any, maxLength: any) => {
	if (!text) return "";
	return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default async function Blog() {
	// const res = await fetch(`${API_URL}/api/get-posts`, {
	// 	cache: "force-cache",
	// 	method: "GET",
	// 	headers: {
	// 		"content-type": "application/json",
	// 	},
	// });

	// const { nodes } = await res.json();
	// const posts = nodes;

	return (
		<section className='mt-28 p-2 md:px-10'>
			<h1 className='mb-4 text-center text-4xl font-semibold'>Blog</h1>
			{/* {posts.map((post: any, index: number) => (
				<Card
					key={index}
					isFooterBlurred
					className='w-[300px] h-[400px] col-span-12 sm:col-span-5 relative'>
					
					<CardHeader className='absolute z-20 top-1 flex-col items-start'>
						<h4 className='text-white font-medium text-2xl'>{post.title}</h4>
					</CardHeader>

					<div className='relative w-full h-full overflow-hidden'>
						<Image
							removeWrapper
							alt={post.featuredImage.node.altText}
							className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
							src={post.featuredImage.node.mediaItemUrl}
						/>
						<div className='absolute inset-0 bg-gray-900 opacity-40 z-10'></div>
					</div>

					<CardFooter className='absolute flex-col gap-4 bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-20 justify-between'>
						<div>
							<p className='text-black text-tiny'>
								{truncateText(post.content.replace(/(<([^>]+)>)/gi, ""), 185)}
							</p>
						</div>
						<Button
							as={Link}
							href={`/blog/${post.slug}`}
							className='text-tiny'
							color='primary'
							endContent={<FaArrowRightLong />}
							size='md'>
							Ir al post
						</Button>
					</CardFooter>
				</Card>
			))} */}
		</section>
	);
}
