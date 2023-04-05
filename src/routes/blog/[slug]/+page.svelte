<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Grid from '$lib/grid.svelte';
	import dayjs from 'dayjs';
	import { formatDate } from '$lib/format';

	export let data: PageData;
	export let form: ActionData;

	const { blog, comments } = data;
	const author = blog?.createdBy;
</script>

<div class="blog">
	{#if !blog}
		<h1>Not found</h1>
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
		<div class="comments">
			<h2>Comments</h2>
			<div class="list">
				{#if comments.length === 0}
					<p class="no_comments">No comments at them moment</p>
				{/if}
				{#each comments as comment}
					<div class="comment">
						<div class="date_created">{formatDate(comment.createdAt)}</div>
						<p>
							{comment.text}
						</p>
					</div>
				{/each}
			</div>
		</div>
		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}
		<form method="POST">
			<input type="text" value={blog.id} name="blogId" class="hidden" />
			<label for="new_comment">Comment on this blogpost</label>
			<textarea name="text" id="new_comment" cols="30" rows="10" />
			<button type="submit">Submit</button>
		</form>
	{/if}
</div>

<style lang="scss">
	.hidden {
		opacity: 0;
		position: absolute;
		top: -9999;
		left: -9999;
	}
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

	.comments {
		margin: 3rem 0;

		.list {
			border-top: 2px solid;
			border-bottom: 2px solid;
		}

		.no_comments {
			margin: 1rem 0;
		}

		.comment {
			border-bottom: 2px solid $clr-current-line;

			&:last-of-type {
				border: none;
			}

			.date_created {
				margin-top: 1.5rem;
				color: $clr-comment;
			}

			p {
				margin: 0.5rem 0 1.5rem;
			}
		}
	}

	.error {
		color: $clr-red;
	}

	form {
		position: relative;
		display: flex;
		flex-direction: column;

		label {
			margin-bottom: 0.225rem;
		}

		textarea {
			@include box;
			padding: 1rem;
			border: none;
		}

		button {
			cursor: pointer;
			width: min-content;
			padding: 1rem;
			background-color: $clr-pink;
			margin-top: 1rem;
			border: none;
			@include box;
			transition: all 0.2s linear;

			&:hover {
				background-color: $clr-bg-0-hover;
				transform: scale(1.1);
				background-color: $clr-cyan;
			}
		}
	}
</style>
