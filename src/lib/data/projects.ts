export interface ProjectData {
	title: string;
	date: string;
	blurb: string;
	summary: string;
	images: ProjectImage[];
	labels: string[];
	projectUrl?: string;
	longerNarrative?: string;
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
		longerNarrative: `Completed with 3 other students as part of WPI's year-long Major Qualifying Project. Sponsored by Draper.

We were tasked with designing and creating a system to land UAVs onto UGVs. Such systems are ideal for search-and-rescue operations, mapping, and other crucial operations, and knew that our project had the potential to save lives. In our background research, we found that many existing solutions are overcomplicated and unreliable, so we designed a passive, 3D-printed landing mechanism, ensuring the UAV could land in any orientation and that costs were low.

I enabled communication between the UAV and the UGV via two ESP-32 microcontrollers and WiFi. By creating an object-oriented codebase in C++, I ensured that it would be easy to change state machine transitions, allowing future projects to change landing detection methods with ease.

We presented our project at Draper's annual Capstone Symposium and won first place. We experienced many obstacles, including building the UAV, ensuring communication was synced properly, and designing the landing mechanism. We later learned that the project almost didn't happen because of concerns that it would be too difficult for students, so to overcome these hurdles and win first place felt incredibly accomplishing.`,
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
		labels: ['C++', 'ESP-32', 'PlatformIO', 'Computer Vision', 'AprilTags', 'WiFi Communication']
	},
	{
		title: 'Violet: Handwriting to Text Converter',
		date: 'January 2024 - Present',
		blurb:
			'Full-stack handwriting-to-text app built in 48 hours, achieving 67% accuracy and winning GoatHacks 2024 Honorable Mention.',
		summary:
			'Built complete handwriting recognition system using Rust backend, React/Svelte frontend, Python machine learning pipeline with TensorFlow, deployed on AWS with GitHub Actions CI/CD.',
		longerNarrative: `Violet is a handwriting-to-text converter that won an Honorable Mention for GoatHacks 2024. Tired of typing out my notes, I wanted to start handwriting them, as handwriting is better for memory. However, I still wanted electronic versions available, and the only handwriting-to-text solution I could find was to switch note-taking apps, or using my hefty Windows tablet that could fry an egg as soon as you heated it up. There was no universal option for all operating systems, so Violet was born.

Though I had zero experience with any of these languages and frameworks I used, I decided that building Violet would be the perfect opportunity to learn them. Svelte is a newer framework that offers a compiler, allowing for significantly less boilerplate and easier-to-read syntax compared to React, which did not have a compiler at the time. Rust is incredibly memory-safe compared to C/C++, so I wanted to learn it as I anticipate more and more companies will adopt it. Tauri is an alternative to Electron, a framework for making desktop apps using a stripped Chromium browser, makiing it easy to use the same frontend code for desktop apps and websites. Tauri uses a native webview rather than a Chromium browser, making boot times quicker.

The entire project took me two days to complete, winning me an Honorable Mention (and being the only winner who worked solo). I won a 12-pack of Celsius energy drinks, which I happily distributed to random people.`,
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
			}
		],
		labels: ['Rust', 'React', 'SvelteJS', 'Python', 'TensorFlow', 'AWS', 'GitHub Actions'],
		projectUrl: 'https://devpost.com/software/violet-yrafct'
	}
];
