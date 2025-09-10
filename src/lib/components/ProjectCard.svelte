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
	let showModal = $state(false);

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % project.images.length;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
	}

	function openModal() {
		showModal = true;
		document.body.style.overflow = 'hidden'; // Prevent background scrolling
	}

	function closeModal() {
		showModal = false;
		document.body.style.overflow = ''; // Restore scrolling
	}

	function handleModalClick(event: MouseEvent) {
		// Close modal if clicking the backdrop (not the content)
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	// Close modal on Escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

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
			<div class="content-overlay" onclick={openModal}>
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
		<button class="read-more-btn" onclick={openModal}>Read More</button>
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div class="modal-backdrop" onclick={handleModalClick}>
		<div class="modal-content" class:modal-animate={showModal}>
			<button class="modal-close" onclick={closeModal}>×</button>
			<div class="modal-inner">
				<h2 class="modal-title">{project.title}</h2>
				<p class="modal-date">{project.date}</p>
				<div class="modal-labels">
					{#each project.labels as label}
						<span class="modal-label">{label}</span>
					{/each}
				</div>

				<div class="modal-summary">
					<h3>Summary</h3>
					<p>{project.summary}</p>
				</div>

				{#if project.longerNarrative}
					<div class="modal-narrative">
						<h3>Full Story</h3>
						{#each project.longerNarrative.split('\n') as paragraph}
							{#if paragraph.trim()}
								<p>{paragraph}</p>
							{/if}
						{/each}
					</div>
				{/if}

				{#if project.projectUrl}
					<a href={project.projectUrl} target="_blank" rel="noopener noreferrer" class="modal-link">
						View Project →
					</a>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	/* Existing styles... */
	.project-card {
		min-width: 80vw;
		max-width: calc(100vw - 12rem);
		flex-shrink: 0;
		scroll-snap-align: start;
	}

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

	.content-overlay {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(8px);
		border-radius: 1rem;
		padding: 1.5rem;
		break-inside: avoid;
		margin-bottom: 1rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		min-height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.content-overlay:hover {
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(12px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
		transform: translateY(-2px) scale(1.02);
	}

	.mobile-content {
		padding: 2rem 1rem;
	}

	.read-more-btn {
		background: #3b82f6;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		font-weight: 500;
		cursor: pointer;
		margin-top: 1rem;
		transition: background 0.2s ease;
	}

	.read-more-btn:hover {
		background: #2563eb;
	}

	/* Modal styles */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal-content {
		background: white;
		border-radius: 1rem;
		max-width: 90vw;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		transform: scale(0.8) rotateY(-180deg);
		opacity: 0;
		transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.modal-animate {
		transform: scale(1) rotateY(0deg);
		opacity: 1;
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: #666;
		z-index: 1001;
		width: 3rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.2s ease;
	}

	.modal-close:hover {
		background: #f3f4f6;
		color: #000;
	}

	.modal-inner {
		padding: 2rem;
		max-width: 800px;
	}

	.modal-title {
		font-size: 2rem;
		font-weight: 600;
		color: #1f2937;
		margin-bottom: 0.5rem;
	}

	.modal-date {
		color: #6b7280;
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.modal-labels {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2rem;
	}

	.modal-label {
		background: #f3f4f6;
		color: #374151;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.modal-summary {
		margin-bottom: 2rem;
	}

	.modal-summary h3,
	.modal-narrative h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #1f2937;
		margin-bottom: 1rem;
	}

	.modal-summary p,
	.modal-narrative p {
		color: #374151;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.modal-narrative {
		margin-bottom: 2rem;
	}

	.modal-link {
		display: inline-block;
		background: #3b82f6;
		color: white;
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: background 0.2s ease;
	}

	.modal-link:hover {
		background: #2563eb;
	}

	/* Hide mobile content on desktop */
	@media (min-width: 1024px) {
		.mobile-content {
			display: none;
		}

		.modal-content {
			max-width: 70vw;
		}
	}

	/* Desktop styles */
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
			grid-column: span 2;
			grid-row: span 1;
			align-self: center;
			transition: all 0.3s ease;
		}

		.desktop-masonry img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.5rem;
		}
	}

	/* Mobile modal adjustments */
	@media (max-width: 1023px) {
		.modal-backdrop {
			padding: 0;
		}

		.modal-content {
			max-width: 100vw;
			max-height: 100vh;
			border-radius: 0;
			transform: scale(0.9) translateY(100px);
		}

		.modal-animate {
			transform: scale(1) translateY(0);
		}

		.modal-inner {
			padding: 1.5rem;
		}
	}
</style>
