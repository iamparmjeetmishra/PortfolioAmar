import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cream': '#f0f3f0',
        'portfoliobg1': "url('/Img/Bg1.jpg')",
        'portfoliobg2': "url('/Img/Bg2.jpg')",
        'portfoliobg3': "url('/Img/Bg3.jpg')",
        'portfoliobg4': "url('/Img/Bg4.jpg')",
        'portfoliobg5': "url('/Img/Bg5.jpg')",
      },
      colors: {
        'cream' : '#f0f3f0'
      },
    },
  },
  plugins: [],
}
export default config
