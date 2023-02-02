<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const hasData = data?.portfolio != undefined;
	const { title, subtitle } = data?.portfolio || {};
</script>

{#if hasData}
	<h1>{title}</h1>
	<p class="preamble">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
	<h2>{subtitle}</h2>
	<p>This is some text</p>
{:else}
	<h1>Could not get data from hygraph</h1>
{/if}
