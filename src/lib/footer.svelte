<footer>
	<p>Visit <a href="https://kit.svelte.dev/">kit.svelte.dev</a> to learn more about sveltekit</p>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background: $clr-bg-0;
		margin-top: auto;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
			bottom: 0;
		}
	}
</style>
