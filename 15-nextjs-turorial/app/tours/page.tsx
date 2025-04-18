import Link from 'next/link';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
};

const fetchTours = async (): Promise<Tour[]> => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const response = await fetch(url);
	const data: Tour[] = await response.json();
	return data;
};

async function ToursPage() {
	const data: Tour[] = await fetchTours();
	return (
		<section>
			<h1 className='text-3xl mb-4'>Tours</h1>
			<ul>
				{data.map(({ id, name }) => (
					<li key={id}>
						<Link
							className='text-blue-700 underline hover:no-underline hover:text-blue-900'
							href={`/tours/${id}`}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
export default ToursPage;
