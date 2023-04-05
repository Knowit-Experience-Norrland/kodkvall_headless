<script lang="ts">
	import type { ImageFragment } from '../graphql';

	export let content: ImageFragment;
</script>

<div class="image_block">
	<img src={content.image.url} alt="" />
</div>
