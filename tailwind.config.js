/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        2: '2px',
        30: '30px',
        55: '55rem',
        70: '70px',
        90: '90rem',
        100: '100px',
        250: '250px',
        650: '650px'
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
        50: '50vh',
        60: '60vh',
        65: '65rem',
        87: '87vh'
      },
      margin: {
        1: '1%',
        3: '-3rem',
        22: 'revert',
        30: '30rem',
        0.5: '0.5rem',
        0.9: '0.9rem',
        1.1: '1.1rem'
      },
      padding: {
        5: '5%'
      },
      top: {
        28: '-28px'
      },
      gap: {
        1: '1rem'
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
        sss: '0.35rem',
        ss: '0.60rem',
        '11xl': '150px',
        '7xl': '5rem',
        '9xl': '7rem',
        '13xl': '13rem'
      },
      borderRadius: {
        default: '40%',
        half: '50%',
        small: '30px',
        large: '100px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      gridTemplateColumns: {
        3: 'repeat(3, minmax(0, 4rem))'
      },
      gridTemplateRows: {
        2: 'repeat(2, minmax(0, 1.5rem))'
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(0)'
          },
          '25%': {
            transform: 'translate(-30px)'
          },
          '75%': {
            transform: 'translate(30px)'
          },
          '100%': {
            transform: 'translate(0)'
          }
        },
        toAppear: {
          from: {
            transform: 'translateX(-300px)'
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1'
          }
        },
        girar: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        stopAppear: 'toAppear 0s forwards',
        toAppear: 'toAppear 7s ease-in-out forwards',
        toAppearPlus: 'toAppear 11s ease-in-out forwards',
        shake: 'shake 6s ease-in-out infinite',
        shakeHover: 'shake 1s ease-in-out infinite',
        mainShake: 'shake 12s cubic-bezier(0.36, 0, 0.66, -0.56) 5s infinite',
        girar: 'girar 1s linear infinite'
      },
      screens: {
        gm: '920px',
        '3xl': '2180px',
        '4xl': '3100px'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
