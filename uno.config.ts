import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		// ...
	],
	shortcuts: {
		ellipsis: 'truncate',
		'flex-center': 'flex items-center',
		'flex-middle': 'flex justify-center items-center',
	},
})
