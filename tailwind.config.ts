import colors from 'tailwindcss/colors';

export default {
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system']
		},
		extend: {
			colors: {
				'background': colors.gray[900],
				'background-deep': colors.gray[950],
				'text': colors.gray[50],
				'text-weak': colors.gray[300],
				'text-primary': colors.emerald[500],
				'text-primary-hover': colors.emerald[600]
			},
		},
	},
	plugins: [ require('@tailwindcss/typography') ],
	content: [
		`./components/**/*.{vue,js,ts}`,
		`./layouts/**/*.vue`,
		`./pages/**/*.vue`,
		`./composables/**/*.{js,ts}`,
		`./plugins/**/*.{js,ts}`,
		`./utils/**/*.{js,ts}`,
		`./App.{js,ts,vue}`,
		`./app.{js,ts,vue}`,
		`./Error.{js,ts,vue}`,
		`./error.{js,ts,vue}`,
		`./app.config.{js,ts}`,
		`./nuxt.config.{js,ts}`,
	],
};
