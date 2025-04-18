import Link from 'next/link';

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
