import { Separator } from '@/components/ui/separator';

type Props = {
	text: string;
};

const SectionTitle = ({ text }: Props) => {
	return (
		<div className='text-3xl font-medium tracking-wider capitalize mb-8'>
			<h2>{text}</h2>
			<Separator />
		</div>
	);
};

export default SectionTitle;
