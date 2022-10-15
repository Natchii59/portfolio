/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.900'),
            maxWidth: '100%',
            lineHeight: '1.5rem',
            p: {
              textIndent: '1.25rem',
              marginTop: '0',
              marginBottom: '0.75rem',
              textAlign: 'justify'
            },
            a: {
              color: theme('colors.zinc.900'),
              textDecorationColor: theme('colors.orange.400'),
              textUnderlineOffset: '2px',
              '&:hover': {
                color: theme('colors.orange.400')
              }
            },
            h3: {
              color: theme('colors.zinc.900'),
              fontWeight: 500,
              marginTop: '1.25rem',
              marginBottom: '0.5rem'
            },
            ul: {
              paddingLeft: '1.25rem',
              '& > li': {
                paddingLeft: '0'
              }
            },
            li: {
              margin: '0',
              '&::marker': {
                color: theme('colors.zinc.900')
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.zinc.300'),
            a: {
              color: theme('colors.zinc.300'),
              '&:hover': {
                color: theme('colors.orange.400')
              }
            },
            h3: {
              color: theme('colors.zinc.300')
            },
            li: {
              '&::marker': {
                color: theme('colors.zinc.300')
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography')
  ]
}
