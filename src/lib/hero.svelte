<script lang="ts">
	export let heroUrl: string;
	export let subtitle: string = '';
</script>

<div class="hero-block" style={`--test: url("${heroUrl}")`}>
	{#if heroUrl != ''}
		<div class="hero-text">
			<h1>{subtitle}</h1>
			<img alt="hero" src={heroUrl} />
		</div>
	{/if}
</div>

<style lang="scss">
	.hero-block {
		width: 100%;
		max-width: 1920px;
		height: 40vh;
		display: flex;
		justify-content: center;
		align-items: center;
        color: green;
		margin-bottom: 4rem;
		text-align: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
            z-index: -1;
		}

		.hero-text {
			position: fixed;
			width: 100%;
			max-width: 1920px;
			height: 40vh;
			display: flex;
			justify-content: center;
			align-items: center;

			h1 {
				text-transform: uppercase;

                width: 100%;
				height: 40vh;
                max-width: 1920px;
				position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
				top: 0.1%;

				font-size: 9rem;
				line-height: normal;
				font-weight: 900;
				
                background-image: var(--test);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;

				-webkit-mask-image: var(--test);
				-webkit-mask-size: cover;
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-position: center;
				-webkit-mask-clip: text;
				mask-image: var(--test);
				mask-size: cover;
				mask-repeat: no-repeat;
				mask-position: center;
				mask-clip: text;
				-webkit-text-fill-color: transparent;

                //Make the text on the left side of the hero be white
                &::before {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        to right,
                        rgb(255, 255, 255) 0%,
                        rgb(255, 255, 255) 45%,
                        rgba(84, 229, 255, 0) 52%,
                        rgba(255, 154, 21, 0) 100%
                    );
                }
			}

			&::before {
				content: '';
				position: absolute;
				display: block;
				top: 0;
				left: 35%;
				width: 100%;
				max-width: 1248px;
				height: 100%;
				background: linear-gradient(
					to right,
					rgba(84, 229, 255, 0.526) 0%,
					rgba(255, 154, 21, 0.543) 100%
				);
                background-image: url('./stacked-waves-haikei.svg');
                background-size: cover;
			}

            &::after {
				content: '';
				position: absolute;
				display: block;
				top: 0;
				left: 35%;
				width: 100%;
				max-width: 1152px;
				height: 100%;
				background: linear-gradient(
					to right,
					rgba(84, 229, 255, 0.526) 0%,
					rgba(255, 154, 21, 0.543) 100%
				);
                background-size: cover;
                filter: blur(50px);
                border-radius: 50px;
                opacity: 0.25;
			}
		}
	}
</style>
