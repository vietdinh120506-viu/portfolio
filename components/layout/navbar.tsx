'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ContactIcon } from '@/components/contact-icon';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-background/95 backdrop-blur-md border-b-2 border-border/80 shadow-[0_4px_12px_rgba(9,3,18,0.5)]' : 'bg-transparent'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center gap-6 md:gap-10">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							whileHover={{ scale: 1.06 }}
							className="font-bold text-2xl font-heading text-gradient flex items-center gap-1.5 cursor-pointer"
						>
							<span>Portfolio</span>
							<span className="animate-wave text-xl inline-block" title="Xin chào!">🌸</span>
						</motion.div>
					</Link>
					<nav className="hidden md:flex items-center gap-1.5 lg:gap-4">
						{siteConfig.mainNav.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`nav-link text-sm lg:text-base font-semibold transition-all hover:text-primary ${
									pathname === item.href ? 'text-primary active' : 'text-muted-foreground'
								}`}
							>
								{item.title}
							</Link>
						))}
					</nav>
				</div>

				{/* Mobile menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col p-6 bg-card border-l-2 border-border">
							<div className="flex items-center justify-between mb-8">
								<Link href="/" className="flex items-center space-x-2">
									<span className="font-bold text-2xl font-heading text-gradient flex items-center gap-2">
										Portfolio <span className="animate-wave">🌸</span>
									</span>
								</Link>
							</div>
							<nav className="flex flex-col gap-3">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`px-3 py-2 rounded-xl text-base font-semibold transition-colors hover:text-primary hover:bg-primary/10 ${
											pathname === item.href ? 'text-primary bg-primary/20' : 'text-muted-foreground'
										}`}
									>
										{item.title}
									</Link>
								))}
							</nav>
							<div className="mt-auto pt-4">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" className="w-full justify-between cartoon-btn">
											Social Links
											<ChevronDown className="h-4 w-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end" className="bg-card border-2 border-border">
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
												GitHub
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
												LinkedIn
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
												Twitter
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop actions */}
				<div className="hidden md:flex items-center gap-4">
					<Link href="/contact">
						<Button className="contact-wiggle cartoon-btn font-heading text-sm font-bold flex items-center">
							Contact Me <ContactIcon size={20} className="ml-2" />
						</Button>
					</Link>
				</div>
			</div>
		</motion.header>
	);
}