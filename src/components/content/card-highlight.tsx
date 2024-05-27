import React from 'react';

import Image from 'next/image';
import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { bayon } from '@/styles/fonts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const CardHighlight = ({ className }: { className?: string }) => {
	return (
		<section
			className={cn(
				'col-span-1 sm:col-span-2 w-full mx-auto px-0 xl:px-4',
				screenBreakpoints + ' ' + className
			)}
		>
			<Card className="relative w-full min-h-[500px] rounded-none xl:rounded-xl overflow-hidden border-none">
				<Image
					src="/images/test.jpg"
					alt="Test Image"
					fill
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
					}}
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<div className="absolute bottom-0 px-4 py-4">
					<CardHeader className="pb-0 px-0">
						<CardTitle
							className={`${bayon.variable} text-background-100 font-display tracking-widest text-4xl`}
						>
							Abaca Festival
						</CardTitle>
					</CardHeader>
					<CardContent className="p-0 mt-4 md:w-[70%]">
						<CardDescription className="text-background-100 text-lg">
							Bato, one of Catanduanes&apos; eleven municipalities, is
							graced with natural beauty and agricultural prosperity.
							However, over time, it faced challenges from natural
							disasters. Despite devastation and hardship, the
							townspeople held onto hope. Through devotion to its
							patron saint, St. John the Baptist, Bato received renewed
							abundance and blessings. Abaca emerged as a key industry,
							while cacao added sweetness to meals. Its agricultural
							wealth, nourished by St. John&apos;s rains, yields
							bountiful harvests.
						</CardDescription>
					</CardContent>
					<div className="w-fit bg-yellow-primary rounded-full py-1 px-3 my-4">
						<p
							className={`text-background-100 ${bayon.variable} text-background-100 font-display tracking-widest text-base`}
						>
							JUNE 23-24
						</p>
					</div>
				</div>
			</Card>
		</section>
	);
};

export default CardHighlight;
