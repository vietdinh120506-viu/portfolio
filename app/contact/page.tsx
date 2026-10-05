'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
		console.log('Form submitted:', formState);
		alert('Message sent successfully!');
		setFormState({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">
							Get in Touch
						</h1>
						<p className="text-lg text-muted-foreground">
							Bạn có câu hỏi, đề xuất hợp tác hoặc dự án nghiên cứu? Hãy gửi tin nhắn cho mình nhé!
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-bold font-heading mb-6 text-primary">Contact Information</h2>
									<div className="space-y-5">
										<div className="flex items-center">
											<div className="p-2.5 rounded-full bg-primary/15 border border-primary/30 mr-3.5">
												<Phone className="h-5 w-5 text-primary" />
											</div>
											<p className="text-foreground/90 font-medium">0971812338</p>
										</div>
										<div className="flex items-center">
											<div className="p-2.5 rounded-full bg-secondary/15 border border-secondary/30 mr-3.5">
												<Mail className="h-5 w-5 text-secondary" />
											</div>
											<p className="text-foreground/90 font-medium">puyen7430@gmail.com</p>
										</div>
										<div className="flex items-center">
											<div className="p-2.5 rounded-full bg-accent/15 border border-accent/30 mr-3.5">
												<MapPin className="h-5 w-5 text-accent" />
											</div>
											<p className="text-foreground/90 font-medium">Hanoi, Vietnam</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div variants={fadeIn('left', 0.3)}>
							<div className="text-card">
								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<Input
											placeholder="Your Name / Tên của bạn"
											name="name"
											value={formState.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<Input
											type="email"
											placeholder="Your Email / Địa chỉ email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<Input
											placeholder="Subject / Tiêu đề"
											name="subject"
											value={formState.subject}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<Textarea
											placeholder="Your Message / Nội dung tin nhắn"
											name="message"
											value={formState.message}
											onChange={handleChange}
											required
											className="min-h-[140px]"
										/>
									</div>
									<Button type="submit" className="w-full cartoon-btn contact-wiggle font-heading text-lg">
										Send Message <Send className="ml-2 h-5 w-5" />
									</Button>
								</form>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}