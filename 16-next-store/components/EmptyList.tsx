import { cn } from '@/lib/utils';

type Props = {
	heading?: string;
	className?: string;
};

const EmptyList = ({ heading = 'No items found.', className }: Props) => (
	<h2 className={cn('text-xl', className)}>{heading}</h2>
);

export default EmptyList;
