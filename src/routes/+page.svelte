<script lang="ts">
	import Header from '$lib/header.svelte';
import Hero from '$lib/hero.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const hasData = data?.portfolio != undefined;
	const { title, subtitle, content, hero } = data?.portfolio || {};
</script>

{#if hasData}
	<Hero heroUrl={hero?.url || ''}/>
	<Header />
	<h1>{title}</h1>
	<h2>{subtitle}</h2>
	<p class="preamble" />
{:else}
	<h1>Could not get data from hygraph</h1>
{/if}
