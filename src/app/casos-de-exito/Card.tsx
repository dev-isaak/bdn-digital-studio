"use client";
import { useRouter } from "next/navigation";

interface ICard {
	route: string;
	text: string;
	imageURL: string;
	list: string[];
}

export default function Card({ route, text, imageURL, list }: ICard) {
	const router = useRouter();

	const handleRedirection = () => {
		router.push(route);
	};

	return (
		<>
			<div
				onClick={handleRedirection}
				className={`w-full h-[500px] bg-[url("/assets/images/${imageURL}")] bg-cover bg-center cursor-pointer group relative overflow-hidden`}>
				{/* Overlay */}
				<div className='absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></div>

				{/* Texto */}
				<h3 className='text-6xl text-white absolute top-[110%] left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out group-hover:top-1/2 group-hover:-translate-y-1/2'>
					{text}
				</h3>
			</div>
			<h4 className='font-semibold'>{text}</h4>
			{list.map((item, index) => (
				<p className='font-light' key={index}>
					{item}
				</p>
			))}
		</>
	);
}
