<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { TextFragment } from '../graphql';

	export let content: TextFragment;
	console.log({ textContent: content });
</script>

<div class="text_block">
	{#if content.heading}
		<h2>{content.heading}</h2>
	{/if}

	{#if content.text?.markdown}
		<SvelteMarkdown source={content.text?.markdown} />
	{/if}
</div>
