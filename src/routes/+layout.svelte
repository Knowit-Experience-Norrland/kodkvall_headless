<script lang="ts">
	import Header from '$lib/header.svelte';
</script>
<svelte:head>
	<title>Headless</title>
	<meta
		name="description"
		content="This site aims to demonstrate a static webklient getting data from a headless CMS at buildtime"
	/>
</svelte:head>

<div class="container">
	<Header />
	<slot />
</div>

<style lang="scss">
	@import '@fontsource/fira-mono';
	:global {
		:root {
			font-family: $font-body;
			color: $clr-text;
			box-sizing: border-box;
			scroll-behavior: smooth;
			background-color: $clr-bg-1;
			@include text-sm;
			@media screen and (min-width: $media-sm) {
				@include text-base;
			}
		}
		body {
			min-height: 100vh;
			margin: 0;
			contain: paint;
		}

		a {
			color: $clr-link;
			text-decoration: underline;

			&:hover {
				color: $clr-purple;
				text-decoration: none;
			}
		}

		h1 {
			@include text-2xl;
			margin-top: 0;
			margin-bottom: 1.25rem;
			@media screen and (min-width: $media-sm) {
				@include text-3xl;
				margin-bottom: 1.5rem;
			}
		}

		h2 {
			@include text-xl;
			margin: $m-xl;
			@media screen and (min-width: $media-sm) {
				@include text-2xl;
				margin: $m-2xl;
			}
		}

		h3 {
			@include text-lg;
			margin: $m-lg;
			@media screen and (min-width: $media-sm) {
				@include text-xl;
				margin: $m-xl;
			}
		}

		h4 {
			@include text-md;
			margin: $m-md;
			@media screen and (min-width: $media-sm) {
				@include text-lg;
				margin: $m-lg;
			}
		}

		p {
			@include text-base;
			margin: $m-base;
			@media screen and (min-width: $media-sm) {
				@include text-md;
				margin: $m-md;
			}
		}
		.container {
			width: calc(100% - 2rem);
			max-width: $page-width;
			margin: 0 auto;
		}

		.preamble {
			@include text-md;

			@media screen and (min-width: $media-sm) {
				font-size: 1.25rem;
				line-height: 1.813rem;
				letter-spacing: -0.01em;
			}
		}
	}
</style>
