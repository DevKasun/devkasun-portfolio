/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		eextend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'home-hero-bg-image': "url('/images/profile-pic.png')",
			},
		},
		colors: {
			'kwhite': '#FFFFFF',
			'kgray': '#525252',
			'kblack': '#020202',
		}
	},
	plugins: [],
}
