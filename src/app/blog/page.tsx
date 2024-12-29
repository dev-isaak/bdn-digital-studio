import {
	Button,
	Card,
	CardBody,
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
		<section className='mb-6'>
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
						className='w-[350px] h-[500px] col-span-12 sm:col-span-5 relative '>
						<CardHeader className='z-20 top-1 flex-col items-start'>
							<Image
								removeWrapper
								alt={post.featuredImage.node.altText}
								className=' w-full h-[200px] object-cover  filter grayscale'
								src={post.featuredImage.node.mediaItemUrl}
							/>
						</CardHeader>
						<CardBody>
							<h4 className='font-medium text-xl'>{post.title}</h4>
							<div className='relative w-full h-full overflow-hidden'></div>
							<p className='text-black text-tiny'>
								{truncateText(post.content.replace(/(<([^>]+)>)/gi, ""), 185)}
							</p>
						</CardBody>
						<CardFooter>
							<Button
								as={Link}
								href={`/blog/${post.slug}`}
								className=''
								color='primary'
								variant='bordered'
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
