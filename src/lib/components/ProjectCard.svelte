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
