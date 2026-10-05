'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push('/');
		}, 3000);
		return () => clearTimeout(timer);
	}, [router]);

	return (
		<div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
			<motion.div
				initial={{ scale: 0.8, opacity: 0, y: 20 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				transition={{ type: 'spring', stiffness: 260, damping: 15 }}
				className="text-center max-w-md mx-auto p-8 rounded-3xl border-2 border-border/80 cartoon-card-shadow bg-card"
			>
				<div className="text-6xl md:text-7xl font-bold font-heading text-gradient mb-2">
					404
				</div>
				<div className="text-4xl mb-4 animate-bounce-gentle">
					✨ 🌸 💫
				</div>
				<h2 className="text-2xl font-bold font-heading mb-2 text-foreground">
					Trang không tồn tại
				</h2>
				<p className="text-muted-foreground mb-6 text-sm leading-relaxed">
					Đường dẫn này đã được chuyển đổi hoặc không tồn tại. Đang tự động chuyển về Trang chủ...
				</p>
				<Button asChild className="cartoon-btn font-heading">
					<Link href="/">
						<Home className="h-4 w-4 mr-2" /> Về Trang chủ ngay
					</Link>
				</Button>
			</motion.div>
		</div>
	);
}
