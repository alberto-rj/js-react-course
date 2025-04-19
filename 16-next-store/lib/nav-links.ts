type NavLink = {
	href: string;
	label: string;
};

export const navLinks: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/products', label: 'Products' },
	{ href: '/favorites', label: 'Favorites' },
	{ href: '/cart', label: 'Cart' },
	{ href: '/orders', label: 'Orders' },
];
