<script lang="ts">
	import Grid from '$lib/grid.svelte';
	import dayjs from 'dayjs';
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
			{@const url = `/blog/${blog.slug}`}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="post" on:click={() => handleClick(url)}>
				<h2>
					<a href={url}>
						{blog.title}
					</a>
				</h2>
				<div class="text">
					<p>
						{blog.preamble}
					</p>
				</div>
				<p class="date">Published: {dayjs(blog.publishedAt).format('YYYY-MM-DD HH:mm')}</p>
			</div>
		{/each}
	</Grid>
</div>

<style lang="scss">
	.post {
		cursor: pointer;
		@include box;
		padding: 2rem;
		background-color: $clr-bg-0;
		transition: transform 0.2s;

		&:hover {
			background-color: $clr-bg-0-hover;
			transform: scale(1.025);
		}

		h2 {
			margin-top: 0;
      @include text-xl;
		}

		.text {
			position: relative;
			max-height: 12rem;
			min-height: 12rem;
			overflow: hidden;

			&:before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: linear-gradient(transparent 150px, $clr-bg-0);
			}
		}

		p {
			margin: 0;
			display: -webkit-box;
			-webkit-line-clamp: 7;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.date {
      color: $clr-cyan;
      font-weight: bold;
			margin-top: 0.5rem;
		}
	}
</style>
