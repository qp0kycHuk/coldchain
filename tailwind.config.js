const elementsSizes = {
  xs: '24px',
  sm: '32px',
  base: '60px',
  lg: '70px',
  xl: '80px',
}

const headingStyles = {
  fontWeight: '500',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: 420 + 29.98 + 'px',
      sm: 580 + 29.98 + 'px',
      md: 992 + 29.98 + 'px',
      lg: 1366 + 'px',
    },
    container: {
      xs: 420 + 'px',
      sm: 580 + 'px',
      md: 992 + 'px',
      lg: 1230 + 'px',
    },
    colors: {
      primary: {
        DEFAULT: '#6B21C4',
      },
      sec: {
        DEFAULT: '#CE9B44',
      },
      blue: {
        DEFAULT: '#2980b9',
      },
      red: {
        DEFAULT: '#c0392b',
      },
      green: {
        DEFAULT: '#27ae60',
      },
      yellow: {
        DEFAULT: '#f39c12',
      },
      gray: {
        DEFAULT: '#121212',
      },
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      base: 'var(--font-base)',
      alt: 'var(--font-alt)',
    },
    zIndex: [0, 321, 322, 323, 324, 325, 326, 327, 328, 329, 'auto'],
    extend: {
      inputSize: elementsSizes,
      btnSize: elementsSizes,
      backgroundColor: {
        l1: 'var(--bg1)',
        l2: 'var(--bg2)',
        l3: 'var(--bg3)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: headingStyles,
            h2: headingStyles,
            h3: headingStyles,
            h4: headingStyles,
            h5: headingStyles,
            h6: headingStyles,
            b: headingStyles,
            strong: headingStyles,
          },
        },
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
      },
      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.1xl': ['1.5625rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@qpokychuk/tailwind-button-plugin')({
      lightColorOpacity: 0.05,
      lightColorOpacityHover: 0.1,
      // withFocusStyles: true,
    }),
    require('@qpokychuk/tailwind-ratio-plugin'),
    require('./tailwind.form.js'),
  ],
}
