import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Providers from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Store',
	description: 'A nifty store built with Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<Container className='py-20'>{children}</Container>
				</Providers>
			</body>
		</html>
	);
}
