import { HeartIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

type Props = {
	id: string;
	name: string;
};

const FavoriteToggleButton = ({ name, id }: Props) => {
	return (
		<Button
			size='icon'
			variant='outline'
			className='p-2 cursor-pointer'
		>
			<span className='sr-only'>{`Add ${name} to favorites`}</span>
			<HeartIcon
				aria-hidden={true}
				focusable={false}
			/>
		</Button>
	);
};

export default FavoriteToggleButton;
