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
	import ProjectContent from './ProjectContent.svelte';

	interface Props {
		project: ProjectData;
	}

	let { project }: Props = $props();
	let currentImageIndex = $state(0);

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % project.images.length;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
	}
</script>

<div class="project-card">
	<div>
		<!-- Mobile: Single image with navigation -->
		<div class="mobile-image-container">
			{#if project.images.length > 0}
				<img
					src={project.images[currentImageIndex].src}
					alt={project.images[currentImageIndex].alt}
				/>
				<button onclick={prevImage}>←</button>
				<button onclick={nextImage}>→</button>
				<div>
					{#each project.images as _, index}
						<button
							class:active={index === currentImageIndex}
							onclick={() => (currentImageIndex = index)}>•</button
						>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Desktop: All images + content in masonry -->
		<div class="desktop-masonry">
			<div class="content-overlay">
				<ProjectContent {project} />
			</div>
			{#each project.images as image}
				<img src={image.src} alt={image.alt} />
			{/each}
		</div>
	</div>

	<!-- Mobile: Content below images -->
	<div class="mobile-content">
		<ProjectContent {project} />
	</div>
</div>

<style>
	/* Old: scroll-snap-align-start */
	.project-card {
		min-width: 80vw; /* Make sure this isn't too large */
		max-width: calc(100vw - 12rem);
		flex-shrink: 0;
		scroll-snap-align: start;
	}
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

	.content-overlay {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(8px);
		border-radius: 1rem;
		padding: 1.5rem;
		break-inside: avoid;
		margin-bottom: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		/* Make it take more vertical space like 2 images */
		min-height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.content-overlay:hover {
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(12px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
		transform: translateY(-2px);
	}

	/* Mobile content (below images) */
	.mobile-content {
		padding: 2rem 1rem;
	}

	/* Hide mobile content on desktop */
	@media (min-width: 1024px) {
		.mobile-content {
			display: none;
		}
	}

	/* Desktop styles (lg+ breakpoint: 1024px) */
	@media (min-width: 1024px) {
		.mobile-image-container {
			display: none;
		}
		.desktop-masonry {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
			grid-auto-rows: minmax(150px, auto);
		}
		.content-overlay {
			margin-top: 1rem;
			grid-column: span 2; /* Spans exactly 2 columns horizontally */
			grid-row: span 1; /* Single row height */
			align-self: center;
			transition: all 0.3s ease;
		}

		.desktop-masonry img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.5rem;
		} /* Desktop positioning over gallery
		@media (min-width: 1024px) {
			.content-overlay {
				position: absolute;
				top: 50%;
				left: 2rem;
				transform: translateY(-50%);
				max-width: 800px;
				z-index: 10;
			}
		}
		*/
	}
</style>
