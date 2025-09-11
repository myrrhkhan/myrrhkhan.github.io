import { assets, base } from '$app/paths';

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
		title:
			'From Local Flavors to Corporate Tables: Empowering Caño Martín Peña Through Economic Growth for its Restaurants',
		date: 'October 2024-July 2025',
		blurb:
			"Four-person project in the process of being published, where we spent 8 weeks in Puerto Rico connecting restaurants in the lower-income CMP community with the nearby financial district, increasing CMP's economic resilience. Completed as part of WPI's Interactive Qualifying Project (IQP) requirements.",
		summary: '',
		images: [
			{
				src: `${base}/images/iqp/IMG_4670.jpeg`,
				alt: 'Meeting community members at an artisinal market'
			},

			{
				src: `${base}/images/iqp/20250114_160941833_iOS.jpg`,
				alt: 'Milla de Oro'
			},
			{
				src: `${base}/images/iqp/20250122_225751000_iOS.jpg`,
				alt: 'Meeting with Doña Ana and her home limber business'
			},
			{
				src: `${base}/images/iqp/20250210_150019110_iOS.jpg`,
				alt: 'Flyers'
			},
			{
				src: `${base}/images/iqp/20250210_154703877_iOS.jpg`,
				alt: 'Talking to corporations'
			},
			{
				src: `${base}/images/iqp/20250210_173259632_iOS.jpg`,
				alt: 'Talking to a business'
			},
			{
				src: `${base}/images/iqp/20250214_192558151_iOS.jpg`,
				alt: 'Pitching to our middleman'
			},
			{
				src: `${base}/images/iqp/20250227_200739046_iOS.jpg`,
				alt: 'Bike tour'
			},
			{
				src: `${base}/images/iqp/20250304_201444000_iOS.jpg`,
				alt: 'Final presentation at ENLACE'
			},
			{
				src: `${base}/images/iqp/20250304_202013000_iOS.jpg`,
				alt: 'Final presentation 2'
			},
			{
				src: `${base}/images/iqp/20250304_220938296_iOS.jpg`,
				alt: 'Final presentations with the rest of our WPI IQP cohort at the La Goyco community center'
			}
		],
		labels: [
			'Figma',
			'Market Gaps',
			'Business Creation',
			'Academic Research',
			'Interviewing',
			'Stakeholder Interaction'
		],
		projectUrl: 'https://digital.wpi.edu/concern/student_works/47429f41s?locale=en',
		longerNarrative: `For eight weeks, from January to March 2025, we were in Puerto Rico working with the Corporación del Proyecto ENLACE del Caño Martín Peña to connect Caño Martín Peña restaurants to the nearby financial district (Milla de Oro, or MdO). We previously spent 8 weeks doing research and devising of methods for our project, and a few months after we completed our project, we worked on a paper to be published. Whilst in Puerto Rico, we interviewed restaurants and corporations (with ENLACE employees translating) and created an outline of a delivery system, complete with pricing and a Figma mockup. During the following summer, we were granted the opportunity to publish our IQP in a journal, something not all groups were given. We decided to write about our project as a novel example of university-community partnerships, where community organizations pitched their ideas to universities rather than vice-versa.

Thanks to this project, I am better able to conduct academic research and apply its findings in the real-world. I am now better able to interface with multiple stakeholders, recognize their problems, and create optimal solutions. I experienced firsthand the importance of understanding cultural context. I became significantly more able to market to complete strangers and get them on board. I finally increased my presentation skills, being able to present my project much more confidently by the end of the project compared to the beginning.

The Caño Martín Peña (CMP) community is a community consisting mainly of migrant workers and their descendants. The area was informally settled along the Martín Peña canal, with self-built homes that are not up to code. These residents are susceptible to displacement, especially after the planned dredging of the canal. As such, the group Caño3.7 was established, with 3 divisions:
• The G-8, a governing body for the 8 communities within CMP
• The land trust, which prevents developers from buying land in the area
• ENLACE, who we worked with, who are tasked with community outreach and increasing economic development and resilience.

ENLACE noticed how restaurants in the area did not get much clientele from the nearby financial district, despite offering cheaper options.

Our first 8 weeks consisted of academic research into CMP, similar community development initiatives, and marketing. Our next eight weeks had us interviewing restaurants, where we learned that these family-owned restaurants operated via cash and ATH Móvil, Puerto Rico's own version of Venmo, as using card was too expensive. They operated on a smaller scale and could not afford to use UberEats or DoorDash. We then interviewed corporations, who expressed interest in having cheaper catering options and cheaper options for employees. Using this info, we devised a business where companies could place their orders to a middleman, who could place those orders to the restaurants, removing the need for extra restaurant employees to handle UberEats orders. We created a pricing model that was competitive compared to UberEats and DoorDash, while still offering a significant payout to the restaurants and the middleman. We found someone in the community who already delivered food for his daughter's kitchen and would be willing to receive extra orders.

Our project, however, faced a number of difficulties. While we were interviewing restaurants, ICE raided the CMP community. Many restaurants had migrant workers who could not come into work, and more distrust within the community towards outsiders was created; we thus could not interview restaurateurs at their restaurants, losing context. ENLACE had a significant hand in ensuring our project could still go through with new protocols, and we thank them immensely for their diligent work. Secondly, we could not get our stakeholders to meet at once. Various people either had different time commitments, lost interest in the project, or did not feel comfortable expanding their restaurants just yet. We learned from our collaborators at ENLACE that our case wasn't unique--it was typical for a project to fall through due to parties constantly rescheduling meetings and eventually cancelling, either out of busyness, lack of interest, or distrust. We were still able to present our business plan and a mockup delivery website to ENLACE, who had plans on hiring someone to serve as a liaison for all of the CMP businesses and could thus continue the project.

When I started research for this project in October 2024, I only knew a little bit about Puerto Rican culture. I lacked the confidence to pitch business proposals to receptionists at corporate offices. I was usually juggling multiple different activities and classes and not providing much effort to any of them. Being able to spend time in Puerto Rico, being in situations well outside of my comfort zone, and experiencing focusing my time on just one project lent me a greater appreciation for Puerto Rican culture and increased my confidence and made me much more relaxed. Heck, when I started this project, I did not expect that I'd get over my fear of heights by the end, but thanks to many of the activities I did in Puerto Rico, I did! I've achieved quite a bit through my technical projects, but when I think about which project would help me the most in the workforce, it would have to be this one.`
	},
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
				src: `${base}/images/uav-ugv/draperAward.jpg`,
				alt: "Our poster and UAV-UGV system after presenting at Draper's office in Cambridge"
			},
			{
				src: `${base}/images/uav-ugv/DSC_0029.JPG`,
				alt: 'Our UAV flying, underside'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0038.JPG`,
				alt: 'UAV flying in woods'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0040.JPG`,
				alt: 'UAV landing onto UGV'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0051.JPG`,
				alt: 'close-up of UAV flying in woods, with AprilTag visible'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0070-2.JPG`,
				alt: 'UAV on top of UGV, on top of some rocks'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0070.JPG`,
				alt: 'UAV against white background'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0076.JPG`,
				alt: 'UGV and AprilTag on white background'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0093.JPG`,
				alt: 'UAV flying in front of stones'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0097.JPG`,
				alt: 'UAV flying in front of drainage pipe'
			},
			{
				src: `${base}/images/uav-ugv/DSC_0114.JPG`,
				alt: 'UAV perched atop a rock'
			}
		],
		labels: [
			'Stakeholder Interaction',
			'Problem-Solving',
			'C++',
			'ESP-32',
			'PlatformIO',
			'Computer Vision',
			'AprilTags',
			'WiFi Communication',
			'Electrical Design'
		]
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
				src: `${base}/images/violet/violet-demo.png`,
				alt: 'Violet app showing handwriting input and converted text output'
			},
			{
				src: `${base}/images/violet/hackathon-sticker.jpg`,
				alt: 'Photo from my first night at the hackathon'
			},
			{
				src: `${base}/images/violet/rust-code.jpg`,
				alt: 'Some of the code I was writing during the hackathon'
			}
		],
		labels: [
			'Problem-Solving',
			'Market Gaps',
			'Rust',
			'React',
			'SvelteJS',
			'Python',
			'TensorFlow',
			'AWS',
			'GitHub Actions'
		],
		projectUrl: 'https://devpost.com/software/violet-yrafct'
	}
];
