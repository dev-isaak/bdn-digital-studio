import React from "react";

interface HeadingProps {
	firstText: string;
	secondText: string;
}

export default function Heading({ firstText, secondText }: HeadingProps) {
	return (
		<h2 className='uppercase font-medium text-4xl'>
			{firstText}
			<span className=' capitalize block font-light text-2xl mb-4'>
				{secondText}
			</span>
		</h2>
	);
}
