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
		<h1 class="m-4 text-4xl font-medium text-gray-900">My Projects</h1>
		<!-- Remove the centered arrows div -->

		<!-- New wrapper for arrows + container -->
		<div class="projects-wrapper">
			<button class="nav-arrow nav-arrow-left" onclick={prevProject}>←</button>
			<div class="projects-container" bind:this={projectsContainer}>
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
			<button class="nav-arrow nav-arrow-right" onclick={nextProject}>→</button>
		</div>
	</div>
</div>

<style>
	.projects-wrapper {
		display: flex;
		align-items: center;
		gap: 2rem;
		height: 100vh;
	}

	.projects-container {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		flex: 1; /* Takes remaining space between arrows */
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
		flex-shrink: 0; /* Prevents arrows from shrinking */
		z-index: 10;
	}

	.nav-arrow:hover {
		background: rgba(0, 0, 0, 0.9);
	}
</style>
