export interface ProjectData {
	title: string;
	date: string;
	blurb: string;
	summary: string;
	images: ProjectImage[]; // Changed from single image
	labels: string[];
	projectUrl?: string;
	readMoreUrl?: string;
}

export interface ProjectImage {
	src: string;
	alt: string;
	caption?: string;
}

export const projects: ProjectData[] = [
	{
		title: 'UAV-UGV Collaboration System',
		date: 'August 2024 - May 2025',
		blurb:
			'Award-winning autonomous drone landing system achieving 93% success rate, expanding UAV battery life by 50x for search-and-rescue operations.',
		summary:
			'Developed C++ firmware for ESP-32 microcontrollers with integrated gyroscope sensors via PlatformIO. Designed system with 4-person team to reliably and autonomously land and charge a drone onto a ground vehicle via AprilTags. Won 1st place at Draper Capstone Symposium and reached finals at WPI Project Presentation Showcase.',
		images: [
			{
				src: '/images/uav-ugv/draperAward.jpg',
				alt: "Our poster and UAV-UGV system after presenting at Draper's office in Cambridge"
			},
			{
				src: '/images/uav-ugv/DSC_0029.JPG',
				alt: 'Our UAV flying, underside'
			},
			{
				src: '/images/uav-ugv/DSC_0038.JPG',
				alt: 'UAV flying in woods'
			},
			{
				src: '/images/uav-ugv/DSC_0040.JPG',
				alt: 'UAV landing onto UGV'
			},
			{
				src: '/images/uav-ugv/DSC_0051.JPG',
				alt: 'close-up of UAV flying in woods, with AprilTag visible'
			},
			{
				src: '/images/uav-ugv/DSC_0070-2.JPG',
				alt: 'UAV on top of UGV, on top of some rocks'
			},
			{
				src: '/images/uav-ugv/DSC_0070.JPG',
				alt: 'UAV against white background'
			},
			{
				src: '/images/uav-ugv/DSC_0076.JPG',
				alt: 'UGV and AprilTag on white background'
			},
			{
				src: '/images/uav-ugv/DSC_0093.JPG',
				alt: 'UAV flying in front of stones'
			},
			{
				src: '/images/uav-ugv/DSC_0097.JPG',
				alt: 'UAV flying in front of drainage pipe'
			},
			{
				src: '/images/uav-ugv/DSC_0114.JPG',
				alt: 'UAV perched atop a rock'
			}
		],
		labels: ['C++', 'ESP-32', 'PlatformIO', 'Computer Vision', 'AprilTags', 'WiFi Communication'],
		readMoreUrl: '/projects/draper-uav-ugv'
	},
	{
		title: 'Violet: Handwriting to Text Converter',
		date: 'January 2024 - Present',
		blurb:
			'Full-stack handwriting-to-text app built in 48 hours, achieving 67% accuracy and winning GoatHacks 2024 Honorable Mention.',
		summary:
			'Built complete handwriting recognition system using Rust backend, React/Svelte frontend, Python machine learning pipeline with TensorFlow, deployed on AWS with GitHub Actions CI/CD.',
		images: [
			{
				src: '/images/violet/violet-demo.png',
				alt: 'Violet app showing handwriting input and converted text output'
			},
			{
				src: '/images/violet/hackathon-sticker.jpg',
				alt: 'Photo from my first night at the hackathon'
			},
			{
				src: '/images/violet/rust-code.jpg',
				alt: 'Some of the code I was writing during the hackathon'
			},
			{
				src: '/images/violet/violet-demo.jpg',
				alt: 'Violet app showing handwriting input and converted text output'
			}
		],
		labels: ['Rust', 'React', 'SvelteJS', 'Python', 'TensorFlow', 'AWS', 'GitHub Actions'],
		projectUrl: 'https://devpost.com/software/violet-yrafct'
	}
];
