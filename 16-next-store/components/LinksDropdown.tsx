import Link from 'next/link';

import { AlignLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { navLinks } from '@/lib/nav-links';

function LinksDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='flex gap-4 max-w-[100px]'
				>
					<AlignLeft
						aria-hidden='true'
						className='size-6 '
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-40'
				align='start'
				sideOffset={10}
			>
				{navLinks.map(({ href, label }) => {
					return (
						<DropdownMenuItem key={label}>
							<Link
								href={href}
								className='w-full'
							>
								{label}
							</Link>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
