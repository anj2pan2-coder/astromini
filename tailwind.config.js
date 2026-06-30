/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // warm ink ramp — extracted from screenshot
        ink: {
          950: '#0c0a08',
          900: '#111009',   // near-black for borders & headings
          800: '#231f1a',
          700: '#332d26',   // body text
          600: '#4d4438',
          500: '#72685e',   // muted/placeholder
          400: '#9b9187',
          300: '#c0b9b0',
          200: '#d9d3cb',   // hairline divider
          100: '#e8e2db',
          50:  '#f3ede7',
        },
        // orange-red accent — exact from screenshot search button
        brand: {
          700: '#c43d10',
          600: '#e84d1b',   // primary CTA — the orange from screenshot
          500: '#f06535',
          400: '#f58560',
          200: '#f9c4aa',
          100: '#fce0d2',
          50:  '#fff0ea',
        },
        // salmon icon chip color from category tiles
        salmon: {
          DEFAULT: '#f5b49a',
          light:   '#fad5c5',
          dark:    '#e8967a',
        },
        // page surfaces
        paper:  '#ece4d4',   // exact warm beige from screenshot
        card:   '#ffffff',
        sunken: '#e5ddd0',
      },
      boxShadow: {
        // hard offset shadows — exactly as in screenshot (no blur)
        'hard-xs':     '2px 2px 0 #111009',
        'hard-sm':     '4px 4px 0 #111009',   // matches card shadow in screenshot
        'hard-md':     '5px 5px 0 #111009',
        'hard-lg':     '7px 7px 0 #111009',
        'hard-accent': '4px 4px 0 #e84d1b',
      },
      borderRadius: {
        xs:   '4px',
        sm:   '8px',
        md:   '12px',   // card/input radius from screenshot
        lg:   '14px',
        xl:   '18px',
        pill: '999px',
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
}
