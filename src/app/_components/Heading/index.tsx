import React from "react";

interface HeadingProps {
	firstText: string;
	secondText: string;
}

export default function Heading({ firstText, secondText }: HeadingProps) {
	return (
		<h2 className='font-extralight text-2xl mb-4'>
			{firstText}{" "}
			<span className='block uppercase font-[500] text-4xl'>{secondText}</span>
		</h2>
	);
}
