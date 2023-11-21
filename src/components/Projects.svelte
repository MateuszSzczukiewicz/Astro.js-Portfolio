<script>
	import FirstProjectSVG from '@components/FirstProjectSVG.svelte'
	import SecondProject from '@components/SecondProject.svelte'
</script>

<section class="bg-purple-100">
	<article class="mx-auto flex h-full w-10/12 flex-col py-20">
		<h1 class="mb-10 text-center text-5xl font-bold xl:mb-0 xl:mr-44 xl:self-end xl:text-7xl">
			L.A. Yachting
		</h1>
		<div class="items-center justify-center xl:flex xl:flex-row">
			<a class="mx-auto my-10 mb-10 mr-auto w-[50rem]" href="https://la-yachting.com">
				<img
					class="mb-10 rounded-2xl object-cover xl:mb-0"
					src="/yachting.png"
					alt="Screenshot L.A. Yachting"
				/>
			</a>
			<FirstProjectSVG />
		</div>
		<p class="mx-auto mt-10 max-w-prose bg-purple-200 p-6 text-2xl">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias amet assumenda autem
			debitis eligendi est eum exercitationem harum hic ipsum, iusto labore magnam natus quia quis
			rem sed, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
			maiores porro possimus quae tempore? Asperiores at et eveniet laudantium minus omnis optio
			quam reiciendis similique, tempore ullam veritatis. Rerum, soluta!
		</p>
	</article>
</section>
<section class="bg-blue-100">
	<article class="mx-auto flex h-full w-10/12 flex-col py-20">
		<h1 class="mb-10 text-center text-5xl font-bold xl:mb-0 xl:mr-44 xl:self-end xl:text-7xl">
			BookFreak
		</h1>
		<div class="items-center justify-center xl:flex xl:flex-row">
			<a class="mx-auto my-10 mr-auto w-[50rem] xl:mx-0" href="https://bookfreak.vercel.app/">
				<img
					class="mb-10 rounded-2xl object-cover xl:mb-0"
					src="/BookFreak.png"
					alt="Screenshot L.A. Yachting"
				/>
			</a>
			<SecondProject />
		</div>
		<p class="mx-auto mt-10 max-w-prose bg-blue-200 p-6 text-2xl">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias amet assumenda autem
			debitis eligendi est eum exercitationem harum hic ipsum, iusto labore magnam natus quia quis
			rem sed, tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
			maiores porro possimus quae tempore? Asperiores at et eveniet laudantium minus omnis optio
			quam reiciendis similique, tempore ullam veritatis. Rerum, soluta!
		</p>
	</article>
</section>
