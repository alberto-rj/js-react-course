import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from './type';

function Component() {
  const {
    isPending,
    isError,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1 className='mb-1'>Products</h1>
      {products.map(({ id, title }) => (
        <p
          key={id}
          className='mb-1'
        >
          {title}
        </p>
      ))}
    </div>
  );
}

export default Component;
