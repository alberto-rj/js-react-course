import Image from 'next/image';
import Link from 'next/link';

import { formatCurrency } from '@/lib/format';

import { Product } from '@prisma/client';

import { Card, CardContent } from '@/components/ui/card';

import FavoriteToggleButton from '@/components/FavoriteToggleButton';

type Props = {
	products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
	return (
		<ul className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{products.map(({ name, price, image, id }) => {
				const dollarsAmount = formatCurrency(price);
				return (
					<li>
						<article
							key={id}
							className='group relative'
						>
							<Link href={`/products/${id}`}>
								<Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
									<CardContent className='p-4'>
										<div className='relative h-64 md:h-48 rounded overflow-hidden '>
											<Image
												src={image}
												alt={name}
												fill
												sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
												priority
												className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
											/>
										</div>
										<div className='mt-4 text-center'>
											<h2 className='text-lg capitalize'>{name}</h2>
											<p className='text-muted-foreground mt-2'>
												{dollarsAmount}
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
							<div className='absolute top-7 right-7 z-5'>
								<FavoriteToggleButton {...{ name, id }} />
							</div>
						</article>
					</li>
				);
			})}
		</ul>
	);
};

export default ProductsGrid;
