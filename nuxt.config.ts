// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'magic-regexp/nuxt',
		'@nuxthq/studio',
	],
	content: {
		markdown: {
			anchorLinks: false,
		},
	},
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
			title: 'Adam Karmiński - Notes and stuff',
			meta: [
				{
					name: 'description',
					content:
						"It's my personal website. Here you can find my social profiles, articles and notes.",
				},
				{ property: 'og:title', content: "👋 I'm Adam, nice to meet you" },
				{ property: 'og:image', content: '/karminski_linkimage.jpg' },
			],
			bodyAttrs: {
				class: 'bg-background text-text font-sans dark',
			},
		},
	},
});
