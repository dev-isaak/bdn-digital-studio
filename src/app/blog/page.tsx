import {
	Button,
	Card,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getPosts } from "./data";
import { WordPressPostProps } from "@/interfaces/wp_post";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
	alternates: {
		canonical: `https://bdndigitalstudio.com/blog`,
	},
	title: `Blog | BDN Digital Studio`,
	description: `En el blog de BDN Digital Studio encontrarás todas las noticias relacionadas con el mundo digital. SEO, desarrollo web, redes sociales... ¡Y mucho más! .`,
};

const truncateText = (text: string, maxLength: number) => {
	if (!text) return "";
	return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default async function BackupBlog() {
	const posts = await getPosts();

	return (
		<section>
			<div className='relative h-[300px] md:h-[450px] bg-primary text-white mb-6'>
				<h1
					className={`${oswald.className} absolute bottom-2 md:bottom-6 left-2 md:left-6 mb-4 text-center text-8xl md:text-[200px] font-semibold`}>
					Blog.
				</h1>
			</div>
			<div className='flex justify-center sm:justify-between gap-6 flex-wrap p-2 md:max-w-[1000px] m-auto'>
				{posts.map((post: WordPressPostProps, index: number) => (
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
				))}
			</div>
		</section>
	);
}
