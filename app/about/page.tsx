'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="relative z-10 order-2 lg:order-1 space-y-5">
						<h1 className="text-4xl md:text-5xl font-bold font-heading leading-[1.3] pb-1 text-gradient">
							About Phạm Thu Uyên
						</h1>

						{/* Giới thiệu */}
						<div className="text-card">
							<p className="text-base sm:text-lg text-foreground/95 leading-relaxed font-normal">
								Mình là sinh viên và nhà nghiên cứu trẻ chuyên ngành <strong className="text-primary font-bold">Kinh tế Đối ngoại (International Business Economics)</strong>.
								Với đam mê sâu sắc về thương mại toàn cầu, phân tích thị trường vĩ mô và chuỗi cung ứng quốc tế, mình luôn nỗ lực kết hợp tư duy định lượng với tầm nhìn chiến lược thực tiễn.
							</p>
						</div>

						{/* Hành trình & Định hướng */}
						<div className="text-card space-y-3">
							<h2 className="text-xl sm:text-2xl font-bold font-heading text-accent">Hành trình & Định hướng</h2>
							<p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
								Trong suốt quá trình học tập và tham gia các cuộc thi giải quyết tình huống kinh doanh (Business Case), mình đã tích lũy kinh nghiệm phân tích dữ liệu xuất nhập khẩu, đánh giá rủi ro tỷ giá và nghiên cứu các hiệp định thương mại tự do thế hệ mới như CPTPP, EVFTA.
							</p>
						</div>

						{/* 4 Stats Cards */}
						<div className="grid grid-cols-2 gap-4 pt-2">
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

						<Button className="mt-4 cartoon-btn font-heading text-base" asChild>
							<a href="#" download>
								Download CV <ArrowDownCircle className="ml-2 h-5 w-5" />
							</a>
						</Button>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.3)}
						className="order-1 lg:order-2 relative w-full max-w-[420px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden border-2 border-border/80 cartoon-card-shadow bg-gradient-to-b from-[#ffe6f0] via-[#fff9e6] to-[#f0fff8]"
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
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold font-heading mb-3 text-primary">Học vấn & Bằng cấp</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Cử nhân Kinh tế Đối ngoại tại Đại học Ngoại Thương (FTU), duy trì thành tích  xuất sắc và tham gia nhiều hoạt động học thuật trên trường.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold font-heading mb-3 text-accent">Kinh nghiệm thực tiễn</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Tham gia phân tích thị trường xuất nhập khẩu, tối ưu chuỗi cung ứng logistics tại doanh nghiệp và hỗ trợ đề tài nghiên cứu kinh tế quốc tế.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold font-heading mb-3 text-secondary">Kỹ năng cốt lõi</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									Thành thạo công cụ mô hình hóa kinh tế lượng (STATA, Python, Power BI), đàm phán hợp đồng Incoterms và ngoại ngữ lưu loát (IELTS 8.0, HSK 5).
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}