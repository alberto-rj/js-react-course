import Link from 'next/link';
import Image from 'next/image';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
};

const fetchTours = async (): Promise<Tour[]> => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch(url);
	const data: Tour[] = await response.json();
	return data;
};

async function ToursPage() {
	const data: Tour[] = await fetchTours();
	return (
		<section>
			<h1 className='text-3xl mb-4'>Tours</h1>
			<ul className='flex flex-wrap gap-4'>
				{data.map(({ id, name, image }) => (
					<li
						key={id}
						className='basis-52'
					>
						<Link href={`/tours/${id}`}>
							<div className='relative h-52'>
								<Image
									src={image}
									alt=''
									fill
									sizes='33vw'
									priority
									className='rounded object-cover'
								/>
							</div>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
export default ToursPage;
