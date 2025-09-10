<!--
	Design of site:
		- Projects and a foreach loop
		- "sticky" scrolling between projects
-->

<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';

	let projectsContainer: HTMLDivElement | undefined;

	function nextProject() {
		if (projectsContainer) {
			projectsContainer.scrollBy({
				left: projectsContainer.clientWidth * 0.8, // 80vw width
				behavior: 'smooth'
			});
		}
	}

	function prevProject() {
		if (projectsContainer) {
			projectsContainer.scrollBy({
				left: -projectsContainer.clientWidth * 0.8,
				behavior: 'smooth'
			});
		}
	}
</script>

<div id="projects">
	<div>
		<!-- Title with arrows on either side -->
		<div class="title-section">
			<button class="nav-arrow nav-arrow-left" onclick={prevProject}>←</button>
			<h1 class="text-4xl font-medium text-gray-900">My Projects</h1>
			<button class="nav-arrow nav-arrow-right" onclick={nextProject}>→</button>
		</div>

		<!-- Projects container -->
		<div class="projects-wrapper">
			<div class="projects-container" bind:this={projectsContainer}>
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.title-section {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0;
		padding-bottom: 2rem;
	}

	.projects-wrapper {
		display: flex;
		align-items: center;
		height: 100vh;
	}

	.projects-container {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		width: 100%;
		height: 100vh;
		gap: 2rem;
		padding: 0 2rem;
	}

	.nav-arrow {
		background: rgba(0, 0, 0, 0.7);
		color: white;
		border: none;
		padding: 1rem;
		border-radius: 50%;
		font-size: 1.5rem;
		cursor: pointer;
		flex-shrink: 0;
		z-index: 10;
	}

	.nav-arrow:hover {
		background: rgba(0, 0, 0, 0.9);
	}
</style>
