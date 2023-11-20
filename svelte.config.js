import { vitePreprocess } from '@astrojs/svelte'

export default {
	preprocess: vitePreprocess()
}

const config = {
	kit: {
		vite: {
			optimizeDeps: {
				include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
			}
		}
	}
}
