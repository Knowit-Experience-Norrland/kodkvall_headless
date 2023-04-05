<script lang="ts">
	import type { ContentFragment } from '../graphql';
	import Image from './Image.svelte';
	import Text from './Text.svelte';

	export let contents: ContentFragment[];
</script>

{#each contents as content}
	{#if content.__typename === 'Text'}
		<Text {content} />
	{/if}
	{#if content.__typename === 'Image'}
		<Image {content} />
	{/if}
{/each}
