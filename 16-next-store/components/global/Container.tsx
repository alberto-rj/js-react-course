import { cn } from '@/lib/utils';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Container = ({ children, className }: Props) => {
	return (
		<div className={cn('max-w-6xl xl:max-w-7xl mx-auto px-8', className)}>
			{children}
		</div>
	);
};

export default Container;
