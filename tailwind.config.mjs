/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  safelist: [
    'bg-white',
    'bg-black',
    'text-white',
    'text-black',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.indigo.300'),
            '--tw-prose-links': theme('colors.indigo.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-code': theme('colors.purple.200'),
            '--tw-prose-quote-border': theme('colors.purple.600'),
            '--tw-prose-pre-bg': theme('colors.gray.950'),
            '--tw-prose-pre-code': theme('colors.purple.100'),
          },
        },
      }),
      animation: {
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
};
