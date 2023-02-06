<div class="header">
	<ul class="container">
		<li>
			<a class="btn" href="/">Home</a>
		</li>
		<li>
			<a class="btn" href="/blog">Blog</a>
		</li>
	</ul>
</div>

<style lang="scss">
	.header {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
		//linear gradient bg

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: radial-gradient(circle, $clr-bg-0 0%, $clr-bg-1 100%);
			z-index: -1;
			filter: blur(5px);
		}

		ul {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-gap: 2rem;
			justify-items: center;
			list-style: none;
			padding: 0;
		}

		li {
			width: 75%;
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
		}

		a {
			text-decoration: none;
			color: #fff;
			width: 100%;
		}

		.btn {
			position: relative;
			cursor: pointer;
			@include box;
			padding: 1rem;
			background-color: $clr-bg-0;
			transition: transform 0.2s;
			overflow: hidden;
			&:hover {
				background-color: $clr-bg-0-hover;
				transform: scale(1.025);
			}
		}
	}
</style>
