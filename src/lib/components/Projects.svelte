<!--
	Design of site:
		- Projects and a foreach loop
		- "sticky" scrolling between projects
-->

<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '$lib/data/projects';

	let { limit }: { limit?: number } = $props();

	let displayedProjects = $derived(limit ? projects.slice(0, limit) : projects);
	let hasMore = $derived(limit !== undefined && projects.length > limit);
</script>

<div id="projects">
	<div>
		<h1 class="m-4 text-4xl font-medium text-gray-900">My Projects</h1>
		<div class="mx-20 h-screen overflow-x-scroll">
			{#each displayedProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
		{#if hasMore}
			<p>
				<a href="/projects">See all {projects.length} projects</a>
			</p>
		{/if}
	</div>
</div>
