<script lang="ts">
	export let colSize: 'xs' | 'sm' | 'md' | 'lg' = 'md';
</script>

<div class="grid colSize-{colSize}">
	<slot />
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		gap: 2rem;
		&.colSize-xs {
			grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		}
		&.colSize-sm {
			grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		}
		&.colSize-md {
			grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		}
		&.colSize-lg {
			grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
		}
	}
</style>
