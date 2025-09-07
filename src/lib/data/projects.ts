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
				src: '/images/projects/draper/drone-landing-sequence.jpg',
				alt: 'Drone approaching UGV landing platform with AprilTag visible'
			},
			{
				src: '/images/projects/draper/esp32-circuit.jpg',
				alt: 'ESP-32 microcontroller with gyroscope sensors and wiring'
			},
			{
				src: '/images/projects/draper/team-presentation.jpg',
				alt: 'Team presenting at Draper Capstone Symposium'
			},
			{
				src: '/images/projects/draper/landing-mechanism.jpg',
				alt: '3D-printed landing mechanism on ground vehicle'
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
				src: '/images/projects/violet/app-interface.jpg',
				alt: 'Violet app showing handwriting input and converted text output'
			},
			{
				src: '/images/projects/violet/architecture-diagram.png',
				alt: 'System architecture showing Rust backend, ML pipeline, and frontend'
			},
			{
				src: '/images/projects/violet/hackathon-demo.jpg',
				alt: 'Team demonstrating Violet at GoatHacks 2024'
			}
		],
		labels: ['Rust', 'React', 'SvelteJS', 'Python', 'TensorFlow', 'AWS', 'GitHub Actions'],
		projectUrl: 'https://devpost.com/software/violet-yrafct'
	}
];
