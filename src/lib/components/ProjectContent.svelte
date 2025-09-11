<script lang="ts">
	import type { ProjectData } from '$lib/data/projects';

	interface Props {
		project: ProjectData;
	}

	let { project }: Props = $props();
</script>

<div class="project-content">
	<h1 class="text-2xl font-medium text-gray-900">{project.title}</h1>
	<h3 class="mb-4 text-sm text-gray-500">{project.date}</h3>
	<p class="mb-6 text-lg text-gray-700">{project.blurb}</p>

	<div class="mb-6 flex flex-wrap gap-2">
		{#each project.labels as label}
			<span class="justify-center rounded-full bg-gray-100 px-2 py-1 text-xs">{label}</span>
		{/each}
	</div>

	{#if project.projectUrl}
		<a href={project.projectUrl} class="underline">Project Link</a>
	{/if}
</div>

<style>
	.project-content h1 {
		margin-bottom: 0.5rem;
	}
</style>
