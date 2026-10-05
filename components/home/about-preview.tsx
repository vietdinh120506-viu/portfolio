'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="A passionate student and analyst dedicated to international business, global commerce, and economic development."
				/>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="order-1 lg:order-1 relative w-full max-w-[420px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden border-2 border-border/80 cartoon-card-shadow bg-gradient-to-b from-[#ffe6f0] via-[#fff9e6] to-[#f0fff8]"
					>
						<Image
							src="/images/about-me.jpg"
							alt="Phạm Thu Uyên"
							fill
							loading="lazy"
							className="object-cover transition-transform duration-300 hover:scale-105"
							style={{ objectPosition: 'center 45%' }}
							sizes="(max-width: 768px) 100vw, 420px"
						/>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="order-2 lg:order-2 flex flex-col justify-center"
					>
						<h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gradient">
							International Business Economics Specialist
						</h3>
						<div className="text-card mb-6">
							<p className="text-foreground/95 leading-relaxed text-sm sm:text-base">
								I'm a dedicated student in International Business Economics with a passion for global markets,
								strategic trade negotiations, and economic growth. My academic journey has equipped me with
								strong analytical acumen, econometric tools, and a deep understanding of international commerce
								principles applied to real-world business challenges.
							</p>
						</div>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-heading font-bold text-primary">Education</h4>
									<p className="text-sm text-muted-foreground font-medium">B.S. International Business</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-heading font-bold text-accent">Experience</h4>
									<p className="text-sm text-muted-foreground font-medium">1+ Internship</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-heading font-bold text-secondary">Projects</h4>
									<p className="text-sm text-muted-foreground font-medium">3+ Projects</p>
								</CardContent>
							</Card>
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-heading font-bold text-[#ff8ab8]">Awards</h4>
									<p className="text-sm text-muted-foreground font-medium">3+ Academic Recognition</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild className="self-start cartoon-btn font-heading">
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}