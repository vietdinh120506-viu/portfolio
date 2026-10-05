'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { HeroSection } from '@/components/home/hero-section';
import { AboutPreview } from '@/components/home/about-preview';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { SkillsPreview } from '@/components/home/skills-preview';
import { ContactPreview } from '@/components/home/contact-preview';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-background"
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<motion.div
								className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full shadow-[0_0_15px_#ff599c]"
								animate={{ rotate: 360 }}
								transition={{
									repeat: Infinity,
									duration: 0.9,
									ease: "linear"
								}}
							/>
							<motion.p
								className="mt-5 text-xl font-heading font-bold text-gradient flex items-center gap-2"
								animate={{
									scale: [1, 1.05, 1],
								}}
								transition={{
									repeat: Infinity,
									duration: 1.2
								}}
							>
								<span>Đang tải Portfolio...</span>
								<span className="animate-bounce-gentle">✨</span>
							</motion.p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{!isLoading && (
				<>
					<HeroSection />
					<AboutPreview />
					<ProjectsPreview />
					<SkillsPreview />
					<ContactPreview />
				</>
			)}
		</>
	);
}