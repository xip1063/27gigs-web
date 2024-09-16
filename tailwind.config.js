/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    heading: {
      '2xl': {
        fontSize: '4.75rem',
        lineHeight: '4.75rem',
      },
      xl: {
        fontSize: '4.125rem',
        lineHeight: '4.125rem',
      },
      lg: {
        fontSize: '3.5rem',
        lineHeight: '3.5rem',
      },
      md: {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
      sm: {
        fontSize: '2.375rem',
        lineHeight: '2.5rem',
      },
      xs: {
        fontSize: '1.75rem',
        lineHeight: '1.875rem',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      height: {
        15: '3.75rem',
      },
      width: {
        15: '3.75rem',
      },
      size: {
        15: '3.75rem',
      },
      opacity: {
        inherit: 'inherit',
      },
      scale: {
        98: '.98',
        1025: '1.025',
        175: '1.75',
        200: '2.0',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: (theme) => ({}),
      fontFamily: {
        sans: [
          'Inter var',
          'Inter',
          'InterVariable',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['Hack', 'Menlo', ...defaultTheme.fontFamily.mono],
        heading: ['Degular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addVariant, matchUtilities, theme }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible'])
      matchUtilities(
        { heading: (value) => value },
        { values: theme('heading') }
      )
      addComponents({
        '.break-words': { 'word-break': 'break-word' },
        '.pause-animation': { 'animation-play-state': 'paused' },
        '.variant-numeric-normal': {
          'font-variant-numeric': 'normal',
        },
        '.variant-numeric-slashed': {
          'font-variant-numeric': 'slashed-zero',
        },
        '.variant-numeric-tabular': {
          'font-variant-numeric': 'tabular-nums',
        },
      })
      addVariant('light', 'html:not(.dark) &')
      addVariant('light', '.light &')
    }),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
