import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
	const numItemsInCart = 9;
	return (
		<Button
			asChild
			variant='outline'
			size='icon'
			className='flex justify-center items-center relative'
		>
			<Link href='/cart'>
				<ShoppingCart
					aria-hidden={true}
					focusable={false}
				/>
				<span className='sr-only'>
					Shopping cart - {`${numItemsInCart} items`}
				</span>
				<span
					aria-hidden={true}
					className='absolute -top-3 -right-3 bg-primary text-white rounded-full size-6 flex items-center justify-center text-xs'
				></span>
			</Link>
		</Button>
	);
};

export default CartButton;
