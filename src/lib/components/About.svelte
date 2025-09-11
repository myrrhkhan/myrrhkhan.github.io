<!--
	mt-36: margin 36
	px py pb are padding
-->
<script>
	import { base } from '$app/paths';
</script>

<div class="px-8 py-16 sm:py-20">
	<h1 class="text-3xl font-medium lg:text-[10rem]">I'm Myrrh</h1>
	<h3 class="text-xl font-medium">(pronounced "Mir", he/him/his)</h3>
	<div class="relative min-h-screen">
		<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
				<div class="flex flex-col gap-10">
					<div class="relative">
						<div class="rounded-full blur-3xl"></div>
						<img
							class="relative z-10 mx-auto h-auto w-full max-w-sm rounded-t-full rounded-b-full shadow-lg"
							width={1440}
							height={1800}
							src="{base}/images/headshots/cinque-terre.JPG"
							alt="Portrait of myself in Cinque Terre, Italy"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-10">
					<div class="text-primary-950/70 dark:text-primary-200/70 space-y-8">
						<p class="text-2xl font-semibold">
							A software engineer and roboticist who builds innovative solutions to real-world
							problems.
						</p>
						<p class="text-lg sm:text-xl">
							Driven by curiosity and a desire to push boundaries, I prioritize collaboration and
							cultural awareness to creating award-winning products that help everyone, all while
							being able to learn on the fly and deliver under tight deadlines.
						</p>
						<p class="text-lg sm:text-xl">
							My time as a student at WPI saw me create a number of projects. From training a
							handwriting-to-text converter for my personal note-taking, to architecting and
							implementing a delivery system for one of Puerto Rico's poorest communities, to
							constructing a UAV-UGV collaboration system with the potential to save lives, I
							broadened my horizons and sought to create an impact beyond the realms of a computer
							science classroom.
						</p>
						<p class="text-lg sm:text-xl">
							After having graduated (in just 3 years) and having completed my internship at MARi, I
							am now seeking full-time employment, where I can continue tackling critical problems
							with groundbreaking solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
