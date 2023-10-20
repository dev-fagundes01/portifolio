/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        2: '2px',
        30: '30px',
        70: '70px',
        100: '100px',
        250: '250px',
        650: '650px',
        55: '55rem',
        90: '90rem'
      },
      width: {
        3: '30rem',
        18: '4.25rem',
        30: '30vw',
        40: '40vw',
        50: '50vw',
        60: '60vw'
      },
      height: {
        65: '65rem',
        50: '50vh',
        60: '60vh'
      },
      margin: {
        30: '30rem',
        22: 'revert'
      },
      padding: {
        5: '5%'
      },
      letterSpacing: {
        wide: '5px',
        widest: '5rem'
      },
      lineHeight: {
        nd: '0px'
      },
      fontSize: {
        0: '0px',
        '11xl': '150px',
        nx: '0.4rem',
        xx: '0.6rem',
        '7xl': '5rem',
        '9xl': '7rem',
        '13xl': '13rem'
      },
      borderRadius: {
        default: '40%',
        half: '50%',
        small: '30px',
        large: '100px'
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-30px)' },
          '75%': { transform: 'translate(30px)' },
          '100%': { transform: 'translate(0)' }
        },
        girar: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        shake: 'shake 4s ease-in-out infinite',
        shakeHover: 'shake 1s ease-in-out infinite',
        girar: 'girar 1s linear infinite'
      },
      screens: {
        '3xl': '2180px',
        '4xl': '3100px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: []
}
