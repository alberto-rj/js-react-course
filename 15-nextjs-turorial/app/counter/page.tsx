import { useState } from 'react';
import Counter from '@/components/Counter';

export default function CounterPage() {
	return (
		<section>
			<h1 className='text-2xl'>Counter Page</h1>
			<Counter />
		</section>
	);
}
