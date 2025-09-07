<!--
	Individual projects
		- mobile: start with picture. below is blurb, then can expand with whole story
		- sliding gallery of photos underneath that blurb (or maybe as background)
		- user clicks right or left arrows to iterate through projects
		- labels on top, can add filters
		- desktop: all photos associated with the project are a collage
		- to the left (like left with extra space horizontally mid-center vertically):
			- blurb with background (color can be chosen later)
			- expansion to below, text box can be expanded and collage rearranges
		- gallery all around
		- scroll up and down between projects, like a sticky scroll. i envision
				a quick scroll swipes up to next project with a sort of solar system design language
		- sliding gallery is automatic, in desktop, collage rotates photos

-->

<script lang="ts">
	import type { ProjectData } from '$lib/data/projects';

	interface Props {
		project: ProjectData;
	}

	let { project }: Props = $props();

	// Mobile image navigation state
	let currentImageIndex = $state(0);

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % project.images.length;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
	}
</script>

<!-- individual card -->
<div class="scroll-snap-align-start relative min-h-screen">
	<!-- images section -->
	<div>
		{#if project.images.length > 0}
			<!-- Mobile: Single image with navigation -->
			<div class="mobile-image-container">
				<img
					src={project.images[currentImageIndex].src}
					alt={project.images[currentImageIndex].alt}
				/>

				<!-- Navigation arrows (only visible on mobile) -->
				<button onclick={prevImage}>←</button>
				<button onclick={nextImage}>→</button>

				<!-- Dots indicator -->
				<div>
					{#each project.images as _, index}
						<button
							class:active={index === currentImageIndex}
							onclick={() => (currentImageIndex = index)}>•</button
						>
					{/each}
				</div>
			</div>

			<!-- Desktop: All images in masonry -->
			<div class="desktop-masonry">
				{#each project.images as image}
					<img src={image.src} alt={image.alt} />
				{/each}
			</div>
		{/if}
	</div>
	<!-- content section -->
	<div class="grid lg:grid-cols-5 lg:gap-8">
		<h1 class="text-2xl font-medium text-gray-900">{project.title}</h1>
		<h3 class="mb-4 text-sm text-gray-500">{project.date}</h3>
		<p class="mb-6 text-lg text-gray-700">{project.blurb}</p>
		<!-- dropdown menu with summary -->
		<!-- labels -->
		<div class="mb-6 flex flex-wrap gap-2">
			{#each project.labels as label}
				<p class="justify-center rounded-full bg-gray-100 px-2 py-1 text-xs">{label}</p>
			{/each}
		</div>
		{#if typeof project.projectUrl !== 'undefined'}
			<a href={project.projectUrl}>Project Link</a>
		{/if}
	</div>
</div>

<style>
	/* Mobile (default) styles */
	.desktop-masonry {
		display: none;
	}

	.mobile-image-container {
		position: relative;
		/* 
			this means it starts in its normal position, 
			then additional attributes like, left, etc. 
			move it from that position
			we're not doing anything with that though so idk why
		 */
		/* equivalent of \n: newline */
		display: block;
	}

	.mobile-image-container img {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: 0.5rem; /* rounded corners */
	}

	.mobile-image-container > div:last-child button {
		/* buttons in last div */
		position: static;
		transform: none;
		background: rgba(0, 0, 0, 0.3);
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		padding: 0;
		font-size: 0;
	}

	.mobile-image-container > div:last-child button.active {
		background: rgba(0, 0, 0, 0.7);
	}

	/* Desktop styles (lg+ breakpoint: 1024px) */
	@media (min-width: 1024px) {
		.mobile-image-container {
			display: none;
		}
		.desktop-masonry {
			display: block; /* newline */
			columns: 4;
			column-gap: 1rem;
			/* column-gap: 0; */
		}

		.desktop-masonry img {
			width: 100%;
			height: auto;
			break-inside: avoid; /* avoid page break */
			margin-bottom: 1rem;
			border-radius: 0.5rem;
			object-fit: cover;
		}
	}
</style>
