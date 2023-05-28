// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'magic-regexp/nuxt',
	],
	content: {},
	googleFonts: {
		families: {
			Inter: [400, 700, 900],
		},
	},
	devServer: {
		port: 3001,
	},
	app: {
		head: {
			bodyAttrs: {
				class: 'bg-background text-text font-sans dark',
			},
		},
	},
});
