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
	let currentImageIndex = 0;

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % project.images.length;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
	}
</script>

<!-- individual card -->
<div>
	<!-- content section -->
	<div>
		<h1>{project.title}</h1>
		<h3>{project.date}</h3>
		<p>{project.blurb}</p>
		<!-- dropdown menu with summary -->
		<!-- labels -->
		<div></div>
		<a href={project.projectUrl}>Project Link</a>
	</div>
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
</div>

<style>
	/* Mobile (default) styles */
	.desktop-masonry {
		display: none;
	}

	.mobile-image-container {
		position: relative;
		display: block;
	}

	.mobile-image-container img {
		width: 100%;
		height: auto;
		aspect-ratio: 4/3;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	/* Navigation arrows for mobile */
	.mobile-image-container button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 0.5rem;
		border-radius: 50%;
		font-size: 1.125rem;
		cursor: pointer;
	}

	.mobile-image-container button:first-of-type {
		left: 1rem;
	}

	.mobile-image-container button:nth-of-type(2) {
		right: 1rem;
	}

	/* Dots indicator */
	.mobile-image-container > div:last-child {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.mobile-image-container > div:last-child button {
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
			display: block;
			columns: 2;
			column-gap: 1rem;
		}

		.desktop-masonry img {
			width: 100%;
			height: auto;
			break-inside: avoid;
			margin-bottom: 1rem;
			border-radius: 0.5rem;
			object-fit: cover;
		}
	}
</style>
