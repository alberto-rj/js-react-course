import { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
	title: 'Next.js Project',
	description: 'A Next.js project with TypeScript and TailwindCSS.',
	keywords: 'Next.js, Typescript, TailwindCSS',
	authors: [
		{ name: 'Alberto', url: 'alberto.com' },
		{ name: 'Peter', url: 'peter.com' },
	],
	twitter: {
		card: 'summary_large_image',
		title: 'Next.js Project',
		description: 'A Next.js project with TypeScript and TailwindCSS.',
		site: 'nextjsproject.dev',
		creator: 'https://github.com/alberto-rj',
	},
};

const inconsolata = Inconsolata({ weight: ['300', '400'], subsets: ['latin'] });

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className={inconsolata.className}>
				<div className='min-h-screen max-w-6xl mx-auto px-8 py-8'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
