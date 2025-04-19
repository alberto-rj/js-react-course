import CartButton from '@/components/CartButton';
import Container from '@/components/Container';
import LinksDropdown from '@/components/LinksDropdown';
import Logo from '@/components/Logo';
import NavSearch from '@/components/NavSearch';
import ThemePicker from '@/components/ThemePicker';

function Navbar() {
	return (
		<nav className='border-b'>
			<Container className='flex flex-col sm:flex-row  sm:justify-between sm:items-center sm:flex-wrap gap-4 py-8'>
				<Logo />
				<NavSearch />
				<div className='flex gap-4 items-center '>
					<CartButton />
					<ThemePicker />
					<LinksDropdown />
				</div>
			</Container>
		</nav>
	);
}
export default Navbar;
