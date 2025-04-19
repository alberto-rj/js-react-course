import Link from 'next/link';

import Image from 'next/image';

import mapsImage from '@/images/maps.jpg';

type Props = {
	params: {
		slug: string;
	};
};

const page = ({ params: { slug } }: Props) => {
	return (
		<div>
			<h1 className='text-6xl'>Page placeholder</h1>
			<p>Slug: {slug}</p>
			<section className='flex gap-4 mt-4'>
				{/* local image */}
				<div className='max-w-52 max-h-52 overflow-hidden rounded'>
					<Image
						src={mapsImage}
						alt='Maps'
						width={208}
						height={208}
						className='object-cover size-full'
					/>
				</div>
				{/* remote image */}
				<div></div>
			</section>
			<Link
				href='/tours'
				className='text-blue-700 underline hover:no-underline hover:text-blue-900'
			>
				Back to tours
			</Link>
		</div>
	);
};

export default page;
