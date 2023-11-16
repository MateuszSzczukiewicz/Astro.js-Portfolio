<script>
	export let url, text
</script>

<li
	class="cursor-pointer transition after:mt-1 after:block after:h-1 after:w-0 after:bg-zinc-800 after:content-[''] hover:after:w-full"
>
	<a href={url} class="cursor-pointer text-2xl font-semibold">{text}</a>
</li>

<!--/* Style 3: Just animate the :after element's width from 0 to 100% */-->

<!--.menu3 li:after {-->
<!--	content: "";-->
<!--	position: absolute;-->
<!--	width: 0%;-->
<!--	height: 1px;-->
<!--	display: block;-->
<!--	transition: all 0.3s ease;-->
<!--	bottom: 25%;-->
<!--}-->
<!--.menu3 li:hover::after {-->
<!--	width: 100%;-->
<!--	height: 1px;-->
<!--	background-color: #fff;-->
<!--}-->
