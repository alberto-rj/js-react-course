import { PrismaClient } from '@prisma/client';

import products from '@/prisma/products.json';

const prisma = new PrismaClient();

async function main() {
	for (const product of products) {
		await prisma.product.create({
			data: product,
		});
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (error) => {
		console.error(error);
		await prisma.$disconnect();
		process.exit(1);
	});
