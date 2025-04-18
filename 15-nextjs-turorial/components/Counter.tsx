'use client';

import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState<number>(0);
	return (
		<div className='flex flex-col items-center justify-center max-w-[100px] mx-auto'>
			<p className='text-5xl font-bold'>{count}</p>
			<div className='flex gap-4 items-start'>
				<button
					onClick={() => setCount(count + 1)}
					className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'
				>
					Increment
				</button>
				<button
					onClick={() => setCount(count - 1)}
					className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'
				>
					Decrement
				</button>
				<button
					onClick={() => setCount(0)}
					className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Counter;
