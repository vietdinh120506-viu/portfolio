'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ContactIcon } from '@/components/contact-icon';

export function HeroSection() {
	return (
		<section className="relative overflow-hidden min-h-[88vh] flex items-center justify-center bg-transparent">
			{/* Content */}
			<div className="container relative z-10 px-4 py-20 md:py-28 flex flex-col items-center justify-center text-center">
				<div className="max-w-4xl mx-auto flex flex-col items-center">
					{/* Title with Pop-in Bounce Animation */}
					<motion.h1
						initial={{ scale: 0.8, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 14,
						}}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-tight"
					>
						<span className="text-gradient">Phạm Thu Uyên's</span>{' '}
						<span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Portfolio</span>{' '}
						<span className="inline-block animate-bounce-gentle">✨</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto font-medium leading-relaxed"
					>
						Nơi mình chia sẻ các dự án, kỹ năng và thành tựu trong lĩnh vực kinh tế và kinh doanh quốc tế.
					</motion.p>

					{/* Action Buttons: View Projects, Download CV, and Contact Me */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						className="mt-8 md:mt-10 flex flex-wrap gap-4 justify-center items-center"
					>
						<Button size="lg" className="cartoon-btn font-heading text-base md:text-lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						<Button size="lg" variant="outline" className="cartoon-btn font-heading text-base md:text-lg" asChild>
							<Link href="#" download>
								Download CV <FileDown className="ml-2 h-5 w-5" />
							</Link>
						</Button>
						<Button size="lg" variant="secondary" className="cartoon-btn contact-wiggle font-heading text-base md:text-lg flex items-center" asChild>
							<Link href="/contact">
								Contact Me <ContactIcon size={22} className="ml-2" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}