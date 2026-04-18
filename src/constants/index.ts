import type {
	BlogPost,
	DockApp,
	FinderNode,
	FinderLocation,
	GalleryItem,
	LocationType,
	LocationsMap,
	NavIcon,
	NavLink,
	SafariBookmark,
	SocialLink,
	TechStackCategory,
	WindowConfig,
} from '#types';

/**
 * Top-nav link labels and their window targets.
 */
const navLinks = [
	{
		id: 1,
		name: 'Projects',
		type: 'finder',
	},
	{
		id: 3,
		name: 'Contact',
		type: 'contact',
	},
	{
		id: 4,
		name: 'Resume',
		type: 'resume',
	},
] satisfies NavLink[];

/**
 * Status/action icons shown in the top nav.
 */
const navIcons = [
	{
		id: 1,
		type: 'status',
		img: '/icons/wifi.svg',
	},
	{
		id: 2,
		type: 'status',
		img: '/icons/search.svg',
	},
	{
		id: 3,
		type: 'status',
		img: '/icons/user.svg',
	},
	{
		id: 4,
		type: 'theme',
		img: '/icons/mode.svg',
	},
] satisfies NavIcon[];

/**
 * Dock icon config. `id` must map to a window key when `canOpen` is true.
 */
const dockApps = [
	{
		id: 'finder',
		name: 'Portfolio',
		icon: 'finder.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'safari',
		name: 'Articles',
		icon: 'safari.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'photos',
		name: 'Certifications',
		icon: 'photos.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: 'contact.png',
		canOpen: true,
		showOnMobile: true,
	},
	{
		id: 'terminal',
		name: 'Skills',
		icon: 'terminal.png',
		canOpen: true,
		showOnMobile: false,
	},
	{
		id: 'trash',
		name: 'Archive',
		icon: 'trash.png',
		canOpen: false,
		showOnMobile: false,
	},
] satisfies DockApp[];

/**
 * Article cards shown in the Safari/Articles window.
 */
const blogPosts = [
	{
		id: 1,
		date: 'Feb 1, 2026',
		title: 'Interning at Abreonix: Building a Full Production Website for a Cyber Security Institute',
		image: 'https://www.abreonix.in/HomeCarousel/Image-1.jpg',
		link: 'https://abreonix.in/',
	},
	{
		id: 2,
		date: 'Dec 20, 2025',
		title: 'Building an ERP + Student Monitoring System for CITN Computer Institute',
		image: 'https://www.citn.in/_next/image?url=%2FHomeBanner%2Fmob11.png&w=1200&q=75',
		link: 'https://citn.in/',
	},
] satisfies BlogPost[];

/**
 * Curated bookmarks shown in Safari bookmark menus.
 */
const safariBookmarks = [
	{
		id: 1,
		category: 'Portfolio',
		title: "Devansh's GitHub",
		url: 'https://github.com/amphitter',
	},
	{
		id: 2,
		category: 'Portfolio',
		title: "Devansh's LinkedIn",
		url: 'https://www.linkedin.com/in/amphitter/',
	},
	{
		id: 3,
		category: 'Projects',
		title: 'Team Eklavya',
		url: 'https://teameklavya.xyz/',
	},
	{
		id: 4,
		category: 'Content',
		title: 'Latest Post',
		url: blogPosts[0]?.link ?? 'https://github.com/amphitter',
	},
	{
		id: 5,
		category: 'Learning',
		title: 'Coursera',
		url: 'https://www.coursera.org',
	},
	{
		id: 6,
		category: 'Learning',
		title: 'Great Learning Academy',
		url: 'https://www.mygreatlearning.com/academy',
	},
	{
		id: 7,
		category: 'Social',
		title: 'GitHub',
		url: 'https://github.com/amphitter',
	},
	{
		id: 8,
		category: 'Social',
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/amphitter/',
	},
] satisfies SafariBookmark[];

/**
 * Tech stack grouped by category.
 * Updated to reflect full MERN + AI/ML + cloud skillset from resume.
 */
const techStack = [
	{
		category: 'Languages',
		items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'R', 'SQL'],
	},
	{
		category: 'Frontend',
		items: ['React.js', 'Next.js', 'TailwindCSS', 'ShadCN/UI', 'HTML', 'CSS'],
	},
	{
		category: 'Backend',
		items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Prisma'],
	},
	{
		category: 'Database',
		items: ['MongoDB', 'PostgreSQL', 'SQL'],
	},
	{
		category: 'AI / ML',
		items: ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'scikit-learn', 'OpenCV', 'face_recognition'],
	},
	{
		category: 'Data',
		items: ['Power BI', 'Data Analytics', 'Data Visualization', 'Pandas', 'NumPy'],
	},
	{
		category: 'Tools',
		items: ['Git', 'GitHub', 'VS Code', 'Streamlit', 'Docker (basic)'],
	},
	{
		category: 'Cloud & DevOps',
		items: ['AWS (learning)', 'Vercel', 'Linux', 'GIS Technology'],
	},
	{
		category: 'Soft Skills',
		items: ['Team Leadership', 'Hackathons', 'Public Speaking', 'Project Management', 'Community Outreach'],
	},
] satisfies TechStackCategory[];

/**
 * Social links with icon and accent color.
 */
const socials = [
	{
		id: 1,
		text: 'Github',
		icon: '/icons/github.svg',
		bg: '#f4656b',
		link: 'https://github.com/amphitter',
	},
	{
		id: 2,
		text: 'LinkedIn',
		icon: '/icons/linkedin.svg',
		bg: '#05b6f6',
		link: 'https://www.linkedin.com/in/amphitter/',
	},
	{
		id: 3,
		text: 'Twitter/X',
		icon: '/icons/twitter.svg',
		bg: '#ff866b',
		link: 'https://x.com/',
	},
	{
		id: 4,
		text: 'Email',
		icon: '/icons/atom.svg',
		bg: '#4bcb63',
		link: 'mailto:devanshsinghr00@gmail.com',
	},
] satisfies SocialLink[];

/** Certification cards shown in Photos and Finder > Photos. */
const ISSUER_URLS = {
	'Abreonix Cyber Security': 'https://abreonix.in',
	'HackWithIndia': 'https://hackwithindia.com',
	'IIT Bombay Techfest': 'https://techfest.org',
	'KPMG (Forage)': 'https://www.theforage.com',
	'J.P. Morgan (Forage)': 'https://www.theforage.com',
	'Accenture Nordics (Forage)': 'https://www.theforage.com',
	'Coursera': 'https://www.coursera.org',
	'LinkedIn Learning': 'https://www.linkedin.com/learning',
	'Unstop': 'https://unstop.com',
	'IIT Guwahati': 'https://www.iitg.ac.in',
	'NSUT': 'https://www.nsut.ac.in',
	'IIT Delhi': 'https://home.iitd.ac.in',
	'IIIT Delhi': 'https://www.iiitd.ac.in',
	'BML Munjal University': 'https://www.bmu.edu.in',
	'DTU': 'https://www.dtu.ac.in',
	'Great Learning': 'https://www.mygreatlearning.com',
	'TechXNinjas': 'https://techxninjas.com',
	'WebForge': 'https://webforge.in',
	'IFQM': 'https://ifqm.org',
} as const;

/** Certification cards shown in Photos and Finder > Photos. */
const GALLERY_IMAGES = [
	{
		title: 'Certificate of Internship – Web Development',
		issuer: 'Abreonix Cyber Security',
		issuerUrl: ISSUER_URLS['Abreonix Cyber Security'],
		category: 'Internship',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500433/Abreonix_Intern_bqkhpu.jpg',
	},
	
	{
		title: 'Robotics Workshop – Robomina',
		issuer: 'IIT Bombay Techfest',
		issuerUrl: ISSUER_URLS['IIT Bombay Techfest'],
		category: 'Workshop',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500423/Techfest_Workshop_sdlige.jpg',
	},
	{
		title: 'Data Analytics Consulting Virtual Internship',
		issuer: 'KPMG (Forage)',
		issuerUrl: ISSUER_URLS['KPMG (Forage)'],
		category: 'Data',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500395/KPMG_hukpu1.jpg',
	},
	{
		title: 'Software Engineering Job Simulation',
		issuer: 'J.P. Morgan (Forage)',
		issuerUrl: ISSUER_URLS['J.P. Morgan (Forage)'],
		category: 'Software Engineering',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500383/JPMorgon_a2uphm.jpg',
	},
	{
		title: 'Developer Job Simulation',
		issuer: 'Accenture Nordics (Forage)',
		issuerUrl: ISSUER_URLS['Accenture Nordics (Forage)'],
		category: 'Software Engineering',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500432/Accenture_wwmq8e.jpg',
	},
	{
		title: 'Career Essentials in Data Analysis by Microsoft and LinkedIn',
		issuer: 'LinkedIn Learning',
		issuerUrl: ISSUER_URLS['LinkedIn Learning'],
		category: 'Data',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500385/Career_Essential_in_DA_lnb0ig.jpg',
	},
	{
		title: 'Business Analysis & Process Management',
		issuer: 'Coursera',
		issuerUrl: ISSUER_URLS['Coursera'],
		category: 'Business',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500408/Business_Analysis_Process_Management_h3tcit.jpg',
	},
	{
		title: 'Python Programming Certificate',
		issuer: 'Coursera',
		issuerUrl: ISSUER_URLS['Coursera'],
		category: 'Programming',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500411/Python_Fundamentals_i9qw8g.jpg',
	},
	{
		title: 'National Space Hackathon 2025',
		issuer: 'IIT Delhi',
		issuerUrl: ISSUER_URLS['IIT Delhi'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500390/National_Space_Hackathon_tl2cji.jpg',
	},
	{
		title: 'Convolve 3.0 – Pan IIT AI/ML Hackathon',
		issuer: 'IIT Guwahati',
		issuerUrl: ISSUER_URLS['IIT Guwahati'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500423/Convolve_3.0_qiktmy.jpg',
	},
	{
		title: "Hack for Impact – E Summit'25",
		issuer: 'IIIT Delhi',
		issuerUrl: ISSUER_URLS['IIIT Delhi'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500431/E-Summit_25_igz1sv.jpg',
	},
	{
		title: 'CTRL ALT HACK – SpaceCon 2025',
		issuer: 'NSUT',
		issuerUrl: ISSUER_URLS['NSUT'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500419/CTRL_ALT_HACK_zcgb3v.jpg',
	},
	{
		title: 'Web-a-Thon – SpaceCon 2025',
		issuer: 'NSUT',
		issuerUrl: ISSUER_URLS['NSUT'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500423/Web-a-Thon_h1fk1l.jpg',
	},
	{
		title: "Hack-a-Pirate – Oblivion'25",
		issuer: 'NSUT',
		issuerUrl: ISSUER_URLS['NSUT'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500433/Hack-a-Pirate_obwfce.jpg',
	},
	{
		title: "EcoVision – Bizmark'25",
		issuer: 'DTU',
		issuerUrl: ISSUER_URLS['DTU'],
		category: 'Competition',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500429/EcoVision_ojivj4.jpg',
	},
	{
		title: 'Hacked 3.0',
		issuer: 'BML Munjal University',
		issuerUrl: ISSUER_URLS['BML Munjal University'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500434/Hacked_3.0_fzj7zp.jpg',
	},
	{
		title: 'AI for Quality Hackathon – IFQM Conclave',
		issuer: 'IFQM',
		issuerUrl: ISSUER_URLS['IFQM'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500385/AI_for_Quality_q0ws2f.jpg',
	},
	{
		title: 'Paranox 2.0 Hackathon',
		issuer: 'TechXNinjas',
		issuerUrl: ISSUER_URLS['TechXNinjas'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500396/Paranox_2.0_wi4smh.jpg',
	},
	{
		title: 'Build with India',
		issuer: 'HackWithIndia',
		issuerUrl: ISSUER_URLS['HackWithIndia'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500383/Build_With_India_ngfyfn.jpg',
	},
	{
		title: 'SnowHackIPEC',
		issuer: 'HackShastra',
		issuerUrl: 'https://unstop.com',
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500414/SnowHackIPEC_pyc3wm.jpg',
	},
	{
		title: 'NationBuilding Case Study Competition 2025',
		issuer: 'Unstop',
		issuerUrl: ISSUER_URLS['Unstop'],
		category: 'Competition',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500415/NationBuilding_jwrtpg.jpg',
	},
	{
		title: "CodeForge'25",
		issuer: 'WebForge',
		issuerUrl: ISSUER_URLS['WebForge'],
		category: 'Hackathon',
		imageUrl:
			'https://res.cloudinary.com/dmqor22c5/image/upload/q_auto/f_auto/v1776500411/CodeForge_25_dtxbo6.jpg',
	},
] as const;

/**
 * Finder icon positions for photos root.
 */
const GALLERY_POSITIONS = [
	'top-10 left-10',
	'top-10 left-56',
	'top-56 left-10',
	'top-56 left-56',
] as const;

/**
 * Gallery image tiles for the Photos window.
 */
const gallery = GALLERY_IMAGES.map((img, index) => ({
	id: index + 1,
	title: img.title,
	issuer: img.issuer,
	issuerUrl: img.issuerUrl,
	category: img.category,
	img: img.imageUrl,
})) satisfies GalleryItem[];

/** Avatar URL shown in the Contact window. */
const CONTACT_AVATAR_URL =
	'https://avatars.githubusercontent.com/u/145259402?s=400&u=e1e09df378ddbdbe16b41d7411790d1012a64a53&v=4';

/** Primary email shown in the Contact window. */
const CONTACT_EMAIL = 'devanshsinghr00@gmail.com';

export {
	blogPosts,
	CONTACT_AVATAR_URL,
	CONTACT_EMAIL,
	dockApps,
	gallery,
	navIcons,
	navLinks,
	safariBookmarks,
	socials,
	techStack,
};

/**
 * Finder root: Work projects and related assets.
 * Updated with CITN, Abreonix, Team Eklavya, CyberSentinel, and Face Recognition projects.
 */
const WORK_LOCATION = {
	id: 1,
	type: 'work',
	name: 'Work',
	icon: '/icons/work.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		// ▶ Project 1 – CITN Computer Institute (Freelance ERP + Website)
		{
			id: 5,
			name: 'CITN Institute – ERP & Website',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-8 left-12',
			windowPosition: 'top-[5.25rem] right-8',
			children: [
				{
					id: 1,
					name: 'CITN Institute.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Freelance project: designed and built the full website for CITN Institute – Best Computer Institute in Asola Fatehpur Beri, South Delhi.',
						'Delivered an integrated ERP + Student Monitoring System covering admissions, attendance tracking, fee management, and progress reports.',
						'The student-oriented monitoring dashboard gives educators real-time visibility into individual and batch performance.',
						'Built with a modern full-stack approach (React.js, Node.js, MongoDB) ensuring a scalable, maintainable, and mobile-friendly platform.',
					],
				},
				{
					id: 5,
					name: 'citn.in',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://citn.in/',
					position: 'top-10 right-20',
				},
			],
		},

		// ▶ Project 2 – Abreonix Cyber Security (Internship Website)
		{
			id: 6,
			name: 'Abreonix – Internship Project',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-8 left-72',
			windowPosition: 'top-[17.75rem] right-8',
			children: [
				{
					id: 1,
					name: 'Abreonix Internship.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 right-10',
					description: [
						'3-month Web Development Internship (Feb 2026) at Abreonix Cyber Security – an MCA Registered, NIELIT Authorized institute.',
						'Built and deployed the production website for Abreonix, covering course listings, admissions, and institute information.',
						'Gained hands-on experience in responsive design, SEO-friendly markup, and real-world client collaboration in a professional environment.',
						'Received a Certificate of Internship recognizing contributions to the live production deployment.',
					],
				},
				{
					id: 2,
					name: 'abreonix.in',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://abreonix.in',
					position: 'top-20 left-20',
				},
				{
					id: 5,
					name: 'Certificate.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://drive.google.com/file/d/1ayol4RRoEBbVzFezfoVdqYIvkYRYKRB9/view',
					position: 'top-40 left-20',
				},
			],
		},

		// ▶ Project 3 – Team Eklavya (ERP + SaaS Event Platform)
		{
			id: 7,
			name: 'Team Eklavya – Event Platform',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-36 left-12',
			windowPosition: 'top-[30.25rem] right-8',
			children: [
				{
					id: 1,
					name: 'Team Eklavya.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'Team Eklavya is a community-driven event hosting platform combining ERP and SaaS architecture.',
						'Features a complete authentication system, event ticketing, attendee management, and organizer dashboard.',
						'Built with a modern full-stack (Next.js, Node.js, MongoDB/PostgreSQL) for scalability and production readiness.',
						'Live at teameklavya.xyz – a real-world deployment demonstrating end-to-end product ownership from design to launch.',
					],
				},
				{
					id: 2,
					name: 'teameklavya.xyz',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://teameklavya.xyz/',
					position: 'top-10 right-20',
				},
			],
		},

	

		// ▶ Project 5 – CyberSentinel (Vulnerability Scanner)
		{
			id: 9,
			name: 'CyberSentinel – Vulnerability Scanner',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-64 left-12',
			windowPosition: 'top-[17.75rem] left-8',
			children: [
				{
					id: 1,
					name: 'CyberSentinel.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'CyberSentinel is a cybersecurity-focused web application that detects vulnerabilities like phishing and malware.',
						'Modular architecture with a React.js frontend and an AI-powered backend for real-time threat analysis.',
						'Designed to make web application defence accessible with an intuitive UI and actionable security reports.',
						'Demonstrates applied knowledge of cybersecurity principles, AI threat modelling, and modern full-stack design.',
					],
				},
				{
					id: 5,
					name: 'cybercentinel-pearl.vercel.app',
					icon: '/images/safari.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://cybersentinel-pearl.vercel.app/',
					position: 'top-10 right-20',
				},
			],
		},

	/**	// ▶ Project 6 – Face Recognition Attendance System
		{
			id: 10,
			name: 'Face Recognition Attendance',
			icon: '/images/folder.png',
			kind: 'folder',
			scope: 'nested',
			position: 'top-64 left-72',
			windowPosition: 'top-[17.75rem] left-8',
			children: [
				{
					id: 1,
					name: 'Face Recognition Attendance.txt',
					icon: '/images/txt.png',
					kind: 'file',
					fileType: 'txt',
					position: 'top-5 left-10',
					description: [
						'AI-powered attendance tracking system using OpenCV and face_recognition for real-time identification.',
						'Captures live camera feed, verifies faces against enrolled profiles, and logs attendance automatically.',
						'Built with Python, delivering a practical and robust solution for classroom and office use cases.',
						'Demonstrates expertise in computer vision, real-time video processing, and applied machine learning.',
					],
				},
				{
					id: 5,
					name: 'Source Code.url',
					icon: '/images/plain.png',
					kind: 'file',
					fileType: 'url',
					href: 'https://github.com/amphitter',
					position: 'top-10 right-20',
				},
			],
		}, **/

		
	],
} as const satisfies FinderLocation;

/**
 * Finder root: About me content.
 * Updated with full resume, internships, CITN freelance, and Team Eklavya.
 */
const ABOUT_LOCATION = {
	id: 2,
	type: 'about',
	name: 'About me',
	icon: '/icons/info.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'about-me.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-10 left-10',
			subtitle:
				"B.Tech AI & DS · Full-Stack & ML Developer · Associate Founder @ Team Sankalp · Student Placement Coordinator @ GITM",
			image: 'https://avatars.githubusercontent.com/u/amphitter',
			description: [
				"I'm Devansh Singh, a B.Tech student in Artificial Intelligence & Data Science at Global Institute of Technology & Management (Gurugram University), passionate about using technology to drive real-world impact.",
				"I build full-stack web applications with React.js, Next.js, Node.js, and Express.js, and develop AI/ML solutions using TensorFlow, scikit-learn, OpenCV, and Python — bridging intelligent systems with production-grade software.",
				"As a freelance developer, I built the complete website and ERP + Student Monitoring System for CITN Institute (South Delhi), and interned at Abreonix Cyber Security (MCA Registered, NIELIT Authorized) where I developed their production website.",
				"I serve as Student Placement Coordinator at GITM, Associate Founder & Outreach Lead at Team Sankalp, and built Team Eklavya — a live ERP + SaaS event hosting platform at teameklavya.xyz.",
				"I am a GSoC '25 Contributor, Innovation Awardee at Glitter Idea Hackathon, and Champion at Innoverse'36, with 15+ hackathon participations at top IITs and Delhi universities including IIT Delhi, IIT Guwahati, NSUT, IIIT Delhi, DTU, and BML Munjal.",
			],
		},
		{
			id: 2,
			name: 'highlights.txt',
			icon: '/images/txt.png',
			kind: 'file',
			fileType: 'txt',
			position: 'top-10 left-52',
			subtitle: 'Core Competencies · Achievements · Current Focus',
			description: [
				"Core stack: React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, TailwindCSS, ShadCN/UI, FastAPI, Streamlit, Python, JavaScript, TypeScript, C++.",
				"AI/ML: TensorFlow, scikit-learn, OpenCV, face_recognition, NLP, Machine Learning, Deep Learning, Data Analytics, Power BI, Pandas, NumPy.",
				"Hackathon highlights: Code4Cause 2.0 (NSUT), National Space Hackathon (IIT Delhi), Convolve 3.0 (IIT Guwahati), SpaceCon 2025, Hack for Impact (IIIT Delhi), Hacked 3.0 (BML Munjal), AI for Quality (IFQM), and 10+ more.",
				"Virtual internships: KPMG Data Analytics Consulting, J.P. Morgan Software Engineering, Accenture Developer (all via Forage).",
				"Currently expanding into AWS, microservices, and Prisma for production-grade AI-integrated full-stack systems; building open-source on GitHub @amphitter.",
			],
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root: Resume files.
 */
const RESUME_LOCATION = {
	id: 3,
	type: 'resume',
	name: 'Resume',
	icon: '/icons/file.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'Resume.pdf',
			icon: '/images/pdf.png',
			kind: 'file',
			fileType: 'pdf',
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root: Certifications / Photos gallery.
 */
const PHOTOS_LOCATION = {
	id: 4,
	type: 'photos',
	name: 'Certifications',
	icon: '/icons/file.svg',
	kind: 'folder',
	scope: 'root',
	children: GALLERY_IMAGES.map((certificate, index) => ({
		id: index + 1,
		name: certificate.title,
		subtitle: certificate.issuer,
		issuerUrl: certificate.issuerUrl,
		category: certificate.category,
		icon: '/images/image.png',
		kind: 'file',
		fileType: 'img',
		position: GALLERY_POSITIONS[index % GALLERY_POSITIONS.length],
		imageUrl: certificate.imageUrl,
	})),
} as const satisfies FinderLocation;

/**
 * Finder root: Trash items (non-openable by default).
 */
const TRASH_LOCATION = {
	id: 5,
	type: 'trash',
	name: 'Trash',
	icon: '/icons/trash.svg',
	kind: 'folder',
	scope: 'root',
	children: [
		{
			id: 1,
			name: 'trash1.png',
			icon: '/images/image.png',
			kind: 'file',
			fileType: 'img',
			position: 'top-10 left-10',
			imageUrl: '/images/trash-1.png',
		},
		{
			id: 2,
			name: 'trash2.png',
			icon: '/images/image.png',
			kind: 'file',
			fileType: 'img',
			position: 'top-40 left-80',
			imageUrl: '/images/trash-2.png',
		},
	],
} as const satisfies FinderLocation;

/**
 * Finder root map by location key.
 */
export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
	photos: PHOTOS_LOCATION,
	trash: TRASH_LOCATION,
} as const satisfies LocationsMap;

interface HomeItemRef {
	location: LocationType;
	path: number[];
}

/**
 * Desktop shortcut references – shows the 6 most prominent projects.
 * Updated to feature CITN, Abreonix, Team Eklavya, Real Estate ML, CyberSentinel, and Face Recognition.
 */
const homeItemRefs = [
	{ location: 'work', path: [5] },   // CITN ERP & Website
	{ location: 'work', path: [6] },   // Abreonix Internship
	{ location: 'work', path: [7] },   // Team Eklavya
	{ location: 'work', path: [9] },   // CyberSentinel
	{ location: 'work', path: [10] },  // Face Recognition Attendance
] satisfies HomeItemRef[];

const resolveHomeItem = ({
	location,
	path,
}: HomeItemRef): FinderNode | null => {
	let current: FinderNode = locations[location];

	for (const nodeId of path) {
		if (current.kind !== 'folder') return null;
		const next: FinderNode | undefined = current.children.find(
			(child: FinderNode) => child.id === nodeId,
		);
		if (!next) return null;
		current = next;
	}

	return current;
};

/** Curated Finder nodes rendered as desktop shortcuts on Home. */
export const homeItems = homeItemRefs
	.map((ref, index) => {
		const item = resolveHomeItem(ref);
		if (!item) {
			console.warn('Invalid home item reference', { index, ref });
		}
		return item;
	})
	.filter((item): item is FinderNode => item !== null);

/**
 * Baseline z-index for unfocused windows.
 */
const INITIAL_Z_INDEX = 1000;

/**
 * Initial window state for all supported window ids.
 */
const WINDOW_CONFIG: WindowConfig = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };