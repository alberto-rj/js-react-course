import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const NavSearch = () => {
	return (
		<Label
			htmlFor='search-product-input'
			className='max-w-sm w-full'
		>
			<Input
				id='search-product-input'
				type='search'
				placeholder='Search product by name, price or category'
				className='dark:bg-muted'
			/>
			<span className='sr-only'>Searn product</span>
		</Label>
	);
};

export default NavSearch;
