<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Grid from '$lib/grid.svelte';
	import dayjs from 'dayjs';

	export let data: PageData;
	const { blog } = data;
	const author = blog?.createdBy;
</script>

<div class="blog">
	{#if !blog}
		<p>This post has no data</p>
	{:else}
		<h1>
			{blog.title}
		</h1>
		<span class="published">Published: {dayjs(blog.publishedAt).format('YYYY-MM-DD HH:mm')}</span>
		<p class="preamble">
			{blog.preamble}
		</p>
		<div class="content">
			<SvelteMarkdown source={blog.text.markdown} />
		</div>
		{#if author?.name && author?.picture}
			<div class="author">
				<Grid colSize="xs">
					<img src={author.picture} alt="author avatar" />
					<div class="info">
						<h2>Author</h2>
						<p>{author.name}</p>
					</div>
				</Grid>
			</div>
		{/if}
	{/if}
</div>

<style lang="scss">
	h1 {
		margin-bottom: 0.225rem;
	}
  .published {
    color: $clr-cyan;
  }
	.author {
		@include box;
		margin-top: 3rem;
		background-color: $clr-bg-0;
		padding: 2rem;
		width: auto;
		max-width: 25rem;

		.info {
			h2 {
				margin: 0;
			}
			p {
				color: $clr-green;
				margin-top: 0.225rem;
			}
		}

		img {
			@include box;
		}
	}
</style>
