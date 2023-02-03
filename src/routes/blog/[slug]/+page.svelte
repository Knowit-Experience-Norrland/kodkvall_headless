<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { blog } = data;
</script>

{#if !blog}
	<p>This post has no data</p>
{:else}
	<h1>
		{blog.title}
	</h1>
	<p class="preamble">
		{blog.preamble}
	</p>
	<div class="content">
		<p>
			{blog.text.markdown}
		</p>
	</div>
	<div class="author">
		<p>Author: {blog.createdBy?.name}</p>
	</div>
{/if}
