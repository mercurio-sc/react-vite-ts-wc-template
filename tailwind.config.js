import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            boxShadow: {
              medium: '-5px 5px 0px 0px rgba(0, 0, 0, 0.05)',
            },
          },
          colors: {
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#00369C',
            },
            secondary: {
              foreground: '#FFFFFF',
              DEFAULT: '#071842',
            },
            success: {
              foreground: '#FFFFFF',
              DEFAULT: '#3EC92B',
            },
            danger: {
              foreground: '#FFFFFF',
              DEFAULT: '#F35B69',
            },
            warning: {
              foreground: '#FFFFFF',
              DEFAULT: '#FAAD14',
            },
          },
        },
      },
    })
  ],
}
