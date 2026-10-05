'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { projects } from '@/lib/constants';
import { staggerContainer, fadeInScale } from '@/lib/motion';

export function ProjectsPreview() {
	// Only show the first 3 projects in the preview
	const previewProjects = projects.slice(0, 3);

	return (
		<section className="py-16 md:py-24 bg-muted/15">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="Explore the volunteer programs and events I have joined, from community service to admissions and career orientation fairs."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
				>
					{previewProjects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="flex"
						>
							<Card className="flex flex-col h-full card-gradient relative">
								<div className="relative h-48 w-full overflow-hidden rounded-t-[1.35rem]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										loading="lazy"
										className="object-cover rounded-t-[1.35rem]"
										style={{ objectPosition: project.objectPosition || 'center 30%' }}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<CardContent className="flex-grow p-6">
									<h3 className="font-heading font-bold text-xl mb-2 text-foreground">{project.title}</h3>
									<p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>
								<CardFooter className="p-6 pt-0 mt-auto flex justify-start relative z-10">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="cartoon-btn inline-flex items-center justify-center h-9 px-4 text-xs md:text-sm font-bold rounded-full border-2 border-primary/60 bg-card/90 text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-200 cursor-pointer select-none"
									>
										<ExternalLink className="h-4 w-4 mr-2" />
										Xem thêm
									</a>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-10">
					<Button asChild className="cartoon-btn font-heading">
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}