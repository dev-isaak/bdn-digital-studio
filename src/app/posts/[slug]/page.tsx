export default async function Post({ params }: Params) {
	return (
		<main>
			<h1>Esto es un post de {params.slug}</h1>
		</main>
	);
}

type Params = {
	params: {
		slug: string;
	};
};
