<script lang="ts">
	import type { ContentFragment } from '../graphql';
	import Image from './Image.svelte';
	import Text from './Text.svelte';

	export let content: ContentFragment[] = [];
</script>

{#each content as block}
	{#if block.__typename === 'Text'}
		<Text content={block} />
	{/if}
	{#if block.__typename === 'Image'}
		<Image content={block} />
	{/if}
{/each}
