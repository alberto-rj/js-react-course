import Link from 'next/link';

import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Logo = () => {
	return (
		<Button
			size='icon'
			asChild
		>
			<Link href='/'>
				<Code
					aria-hidden={true}
					className='size-6 text-white'
				/>
				<span className='sr-only'>Next Store - Home</span>
			</Link>
		</Button>
	);
};

export default Logo;
