export const siteConfig = {
	name: "Phạm Thu Uyên's Portfolio",
	description:
		'Nơi mình chia sẻ các dự án, kỹ năng và thành tựu trong lĩnh vực kinh tế và kinh doanh quốc tế.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:contact@phamthuuyen.com',
		phone: 'tel:+84971812338',
	},
};

export type Project = {
	title: string;
	description: string;
	image: string;
	objectPosition?: string;
	tags: string[];
	link: string;
};

export const projects: Project[] = [
	{
		title: 'Chương trình tình nguyện "Mùa Gió Ấm 2026" (FORUM)',
		description:
			'Chương trình tình nguyện mang hơi ấm đến cộng đồng, do FORUM tổ chức.',
		image: '/images/mua-gio-am-2026.jpg',
		objectPosition: 'center 60%',
		tags: ['Tình nguyện', 'Cộng đồng', 'Làm việc nhóm', 'FORUM'],
		link: 'https://www.facebook.com/share/p/1J6NXoBDCR/?mibextid=wwXIfr',
	},
	{
		title: 'Ngày hội Tư vấn Tuyển sinh - Hướng nghiệp 2025',
		description:
			'Tham gia chương trình tư vấn tuyển sinh và hướng nghiệp dành cho học sinh, kết nối các bạn với thông tin ngành học và định hướng tương lai.',
		image: '/images/ngay-hoi-tuyen-sinh-2025.jpg',
		objectPosition: 'center 70%',
		tags: ['Tư vấn tuyển sinh', 'Hướng nghiệp', 'Truyền thông', 'Làm việc nhóm'],
		link: 'https://www.facebook.com/share/1FGoywk9zr/?mibextid=wwXIfr',
	},
	{
		title: 'Bách Khoa Open Day 1 & 2',
		description:
			'Tham gia sự kiện Open Day, giới thiệu chương trình và giao lưu cùng các bạn học sinh tại gian hàng.',
		image: '/images/bach-khoa-open-day.jpg',
		objectPosition: 'center 50%',
		tags: ['Open Day', 'Sự kiện', 'Giao tiếp', 'Làm việc nhóm'],
		link: 'https://www.facebook.com/share/195LLp8Umo/?mibextid=wwXIfr',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Business Economics',
		field: 'International Business Economics',
		institution: 'Foreign Trade University (FTU)',
		location: 'Hanoi, Vietnam',
		startDate: 'Sep 2024',
		endDate: 'Present',
		gpa: '3.85/4.0',
		achievements: [
			'Outstanding Student Volunteer - "Mùa Gió Ấm 2026" Program (FORUM)',
			'Certificate of Merit - Admissions Counseling & Career Orientation Fair 2025',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Literature',
		institution: 'Le Hong Phong High School for the Gifted',
		location: 'NamDinh, Vietnam',
		startDate: 'Sep 2021',
		endDate: 'Jun 2024',
		gpa: '9.6/10',
		achievements: [
			'Second prize in the National High School Competition for the Gifted in Literature',
			'National Youth Leadership & Debating Award',
			'8.0 IELTS level',
		],
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'International Trade Law & Incoterms', level: 9, category: 'technical' },
	{ name: 'Global Market Research & Strategy', level: 9, category: 'technical' },
	{ name: 'Supply Chain & Trade Logistics', level: 8, category: 'technical' },
	{ name: 'Macroeconomic Analysis & Forecasting', level: 8, category: 'technical' },
	{ name: 'Financial Valuation & Pricing Models', level: 7, category: 'technical' },

	// Software Skills
	{ name: 'Excel & Advanced Financial Modeling', level: 9, category: 'software' },
	{ name: 'Power BI & Tableau Data Viz', level: 8, category: 'software' },
	{ name: 'STATA & Econometric Tools', level: 8, category: 'software' },
	{ name: 'Python for Business Analytics', level: 7, category: 'software' },
	{ name: 'SPSS Statistics', level: 8, category: 'software' },
	{ name: 'ERP & Trade Operations (SAP / Odoo)', level: 7, category: 'software' },

	// Soft Skills
	{ name: 'Strategic Negotiation & Pitching', level: 9, category: 'soft' },
	{ name: 'Cross-Cultural Communication', level: 9, category: 'soft' },
	{ name: 'Problem Solving & Case Analysis', level: 9, category: 'soft' },
	{ name: 'Agile Project Management', level: 8, category: 'soft' },
	{ name: 'Public Speaking & Presentation', level: 8, category: 'soft' },

	// Languages
	{ name: 'Vietnamese (Native)', level: 10, category: 'language' },
	{ name: 'English (IELTS 8.0 - Professional)', level: 9, category: 'language' },
	{ name: 'Chinese (HSK 5 - Business Proficient)', level: 7, category: 'language' },
];