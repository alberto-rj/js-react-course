import { Input } from '@/components/ui/input';

const NavSearch = () => {
	return (
		<Input
			type='search'
			placeholder='Search product by name, price or category'
			className='max-w-xs dark:bg-muted'
		/>
	);
};

export default NavSearch;
