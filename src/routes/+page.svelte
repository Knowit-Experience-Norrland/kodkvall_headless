<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import type { PageData } from './$types';
	import Blocks from '$lib/Blocks.svelte';
	export let data: PageData;

	const hasData = data?.portfolio != undefined;
	const { subtitle, content, hero } = data?.portfolio || {};
</script>

{#if hasData}
	<Hero heroUrl={hero?.url || ''} subtitle={subtitle || ''} />
	<Blocks {content} />
{:else}
	<h1>Could not get data from hygraph</h1>
{/if}
