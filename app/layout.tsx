import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BackgroundDecor } from '@/components/layout/background-decor';

export const metadata: Metadata = {
	title: "Phạm Thu Uyên's Portfolio | International Business Economics",
	description:
		'Nơi mình chia sẻ các dự án, kỹ năng và thành tựu trong lĩnh vực kinh tế và kinh doanh quốc tế.',
	keywords: [
		'Phạm Thu Uyên',
		'Portfolio',
		'International Business Economics',
		'FTU',
		'Volunteer',
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="vi" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;500;600;700;800;900&display=swap&subset=vietnamese"
				/>
				<link
					rel="shortcut icon"
					href="https://cdn-icons-png.freepik.com/256/12539/12539811.png"
					type="image/x-icon"
				/>
			</head>
			<body className="antialiased selection:bg-primary selection:text-primary-foreground">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<BackgroundDecor />
					<div className="relative min-h-screen flex flex-col">
						<Navbar />
						<main className="flex-grow pt-16">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}