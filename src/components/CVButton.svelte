<script>
	import html2pdf from 'html2pdf'

	const downloadPDF = async () => {
		const pdfUrl = '/cv.pdf'

		const link = document.createElement('a')
		link.href = pdfUrl
		link.target = '_blank'
		link.download = 'cv.pdf'

		document.body.appendChild(link)
		link.click()

		document.body.removeChild(link)
	}
</script>

<button
	on:click={downloadPDF}
	class="mt-36 border-4 border-zinc-950 px-14 py-4 text-2xl font-semibold"
>
	Pobierz CV
</button>
