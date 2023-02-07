<script lang="ts">
	export let heroUrl: string;
	export let subtitle: string = '';
</script>

<div class="hero-block" style={`--hero-url: url("${heroUrl}")`}>
	{#if heroUrl != ''}
		<div class="hero-text">
			<h1>{subtitle}</h1>
			<img alt="hero" src={heroUrl} />
		</div>
	{/if}
</div>

<style lang="scss">
	.hero-block {
		width: 100vw;
    	margin-left: calc(50% - 50vw);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
        color: green;
		margin-bottom: -2rem;
		margin-top: -2rem;
		text-align: center;

		img {
			width: 100%;
			height: 100%;
			max-height: 540px;
			@media screen and (min-width: 1921px) {
				max-height: 50vh;
			}
			object-fit: cover;
            z-index: -1;
		}

		.hero-text {
			width: 100%;
			max-width: 1920px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));

			h1 {
				text-transform: uppercase;
                width: 100%;
				height: 100%;
				max-width: 1920px;
				position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
				top: 0.1%;

				font-size: 9rem;
				line-height: normal;
				font-weight: 900;
				
                background-image: var(--hero-url);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
				
				//Make the text clip the bg image
				-webkit-mask-image: var(--hero-url);
				-webkit-mask-size: cover;
				-webkit-mask-repeat: no-repeat;
				-webkit-mask-position: center;
				-webkit-mask-clip: text;
				mask-image: var(--hero-url);
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

			//Add a interesting background to the text
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
                background-image: url('/images/stacked-waves-haikei.svg');
                background-size: cover;
				opacity: 0.92;

				@media screen and (max-width: 500px) {
					left: 30%;
				}
			}

			//Add a slight glowing effect to the text + image
            &::after {
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
                background-size: cover;
                filter: blur(50px);
                border-radius: 50px;
                opacity: 0.25;

				@media screen and (max-width: 500px) {
					left: 30%;
				}
			}
		}
	}
</style>
