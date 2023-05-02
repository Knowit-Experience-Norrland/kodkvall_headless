<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import type { PageData } from './$types';
	import Blocks from '$lib/Blocks.svelte';
	export let data: PageData;

	const hasData = data?.page != undefined;
	const { subtitle, content, hero } = data?.page || {};
</script>

{#if hasData}
	<Hero heroUrl={hero?.url || ''} subtitle={subtitle || ''} />
	<Blocks {content} />
{:else}
	<h1>Could not get data from hygraph</h1>
{/if}
