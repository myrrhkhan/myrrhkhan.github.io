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
		<h1>Projects</h1>
		<div class="h-screen overflow-y-scroll">
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
