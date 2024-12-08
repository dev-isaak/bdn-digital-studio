"use client";
import React from "react";
import {
	Button,
	Card,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from "@nextui-org/react";
import { wpquery } from "@/app/services/wordpress";
import { errorToast } from "@/app/_components/toastify";

const truncateText = (text: any, maxLength: any) => {
	if (!text) return "";
	return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const getPosts = async () => {
	const {
		posts: { nodes },
	} = await wpquery({
		query: `
query GetPosts {
  posts {
    nodes {
      id
      slug
      title
      author {
        node {
          name
        }
      }
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
}
  `,
	});
	return nodes;
};

export default function Blog() {
	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		getPosts()
			.then((posts) => setPosts(posts))
			.catch((e) =>
				errorToast(
					"No se han podido recuperar los post. Prueba de nuevo más tarde."
				)
			);
	}, []);

	return (
		<section className='mt-28 p-2 md:px-10'>
			<h1 className='mb-4 text-center text-4xl font-semibold'>Blog</h1>
			{posts.map((post: any) => (
				<Card
					isFooterBlurred
					className='w-[300px] h-[400px] col-span-12 sm:col-span-5'>
					<CardHeader className='absolute z-10 top-1 flex-col items-start'>
						{/* <p className="text-tiny text-white/60 uppercase font-bold">{post.title}</p> */}
						<h4 className='text-black font-medium text-2xl'>{post.title}</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt={post.featuredImage.node.altText}
						className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
						src={post.featuredImage.node.mediaItemUrl}
					/>
					<CardFooter className='absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
						<div>
							<p className='text-black text-tiny'>
								{truncateText(post.content.replace(/(<([^>]+)>)/gi, ""), 100)}
							</p>
						</div>
						<Button
							as={Link}
							href={`/blog/${post.slug}`}
							className='text-tiny'
							color='primary'
							radius='full'
							size='sm'>
							Ir al post
						</Button>
					</CardFooter>
				</Card>
			))}
		</section>
	);
}
