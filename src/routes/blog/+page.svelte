<script lang="ts">
	import Grid from '$lib/grid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	// methods
	const handleClick = (link: string) => {
		window.location.href = link;
	};
</script>

<div>
	<h1>Blog</h1>
	{#if data?.blogs?.length === 0}
		<p>No blogs at this time</p>
	{/if}
	<Grid>
		{#each data?.blogs as blog}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="post" on:click={() => handleClick(`/blog/${blog.slug}`)}>
				<h2>
					{blog.title}
				</h2>
				<p>
					{blog.preamble}
				</p>
				<span>{blog.publishedAt}</span>
			</div>
		{/each}
	</Grid>
</div>

<style lang="scss">
	.post {
		cursor: pointer;
	}
</style>
