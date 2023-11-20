<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
</script>

<Splide options={{ rewind: true }} aria-label="My Favorite Images">
	<SplideSlide>
		<img src="/public/image2.jpg" alt="Image 1" />
	</SplideSlide>
	<SplideSlide>
		<img src="../../public/React.png" alt="Image 2" />
	</SplideSlide>
</Splide>
