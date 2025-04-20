import EmptyList from '@/components/EmptyList';
import SectionTitle from '@/components/SectionTitle';
import ProductsGrid from '@/components/ProductsGrid';

import { fetchAllProducts, fetchFeaturedProducts } from '@/lib/actions';

const FeaturedProducts = async () => {
	const products = await fetchFeaturedProducts();

	if (products.length === 0) return <EmptyList />;

	return (
		<section className='pt-24'>
			<SectionTitle text='Featured products' />
			<ProductsGrid products={products} />
		</section>
	);
};

export default FeaturedProducts;
