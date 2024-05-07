const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Mono', defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'li::marker': {
              color: '#c7c7c7',
            },
            a: {
              backgroundColor: '#282828',
              color: '#c7c7c7',
              borderRadius: theme('borderRadius.md'),
              textDecorationColor: '#c7c7c7',
              padding: theme('spacing.1'),
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: '#c7c7c7',
              backgroundColor: '#282828',
              paddingLeft: theme('spacing.4'),
              paddingRight: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
              fontWeight: '400',
              paddingTop: theme('spacing.2'),
              paddingBottom: theme('spacing.2'),
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
            'blockquote em': {
              color: '#c7c7c7',
            },
            'blockquote p': {
              margin: 0,
            },
            hr: {
              borderColor: '#282828',
            },
            code: {
              backgroundColor: '#282828',
              borderRadius: theme('borderRadius.md'),
              padding: theme('spacing.1'),
              fontWeight: '400',
              color: '#c7c7c7',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
