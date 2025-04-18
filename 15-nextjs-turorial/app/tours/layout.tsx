type Props = {
	children: React.ReactNode;
};

const ToursLayout = ({ children }: Props) => {
	return (
		<>
			<div className='py-4 px-8 bg-neutral-700 text-neutral-100'>
				Tours Header
			</div>
			{children}
		</>
	);
};

export default ToursLayout;
