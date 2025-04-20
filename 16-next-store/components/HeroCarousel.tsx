import Image from 'next/image';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const carouselImages = [
	'/images/hero1.jpg',
	'/images/hero2.jpg',
	'/images/hero3.jpg',
	'/images/hero4.jpg',
];

const HeroCarousel = () => {
	return (
		<div className='hidden lg:block'>
			<Carousel>
				<CarouselContent>
					{carouselImages.map((image, index) => {
						return (
							<CarouselItem key={index}>
								<Card>
									<CardContent className='p-2'>
										<Image
											src={image}
											alt=''
											width={384}
											height={384}
											className='w-full h-[24rem] rounded-md object-cover'
										/>
									</CardContent>
								</Card>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
