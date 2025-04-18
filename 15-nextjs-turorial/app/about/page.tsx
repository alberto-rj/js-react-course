import Link from 'next/link';

const AboutPage = () => {
	return (
		<div>
			<h1 className='text-7xl'>About Me</h1>
			<p>Hello! This is my about page.</p>
			<Link
				href='/'
				className='text-xl text-blue-500 inline-block mt-8'
			>
				Go to Home Page
			</Link>
		</div>
	);
};

export default AboutPage;
