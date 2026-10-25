/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        keraton: {
          50: '#f2f8f5',
          100: '#e1eee7',
          200: '#c4ddd1',
          300: '#99c4b1',
          400: '#67a38b',
          500: '#43856e',
          600: '#326b58',
          700: '#285547',
          800: '#1b4d3e', // Heritage Mataram Emerald
          900: '#153f33',
          950: '#09231c', // Deepest Plang Night
        },
        jogja: {
          50: '#fdfbf4',
          100: '#faf4e3',
          200: '#f4e6c1',
          300: '#ecd396',
          400: '#e2ba64',
          500: '#d4af37', // Heritage Mataram Gold
          600: '#b89028',
          700: '#936e22',
          800: '#795821',
          900: '#65481f',
          950: '#39260d',
        },
        transit: {
          krl: '#dc2626',
          'krl-bg': '#fef2f2',
          yia: '#0891b2',
          'yia-bg': '#ecfeff',
          tj: '#059669',
          'tj-bg': '#ecfdf5',
          ringroad: '#d97706',
          'ringroad-bg': '#fffbeb',
          prameks: '#2563eb',
          'prameks-bg': '#eff6ff',
          damri: '#1d4ed8',
          'damri-bg': '#eff6ff',
          tb: '#0d9488',
          'tb-bg': '#f0fdfa',
        },
        paper: {
          50: '#fcfcf9',
          100: '#f8f8f3',
          200: '#efefe6',
          300: '#e4e4d6',
        },
        // Backward compatibility
        brand: {
          50: '#f2f8f5',
          100: '#e1eee7',
          200: '#c4ddd1',
          300: '#99c4b1',
          400: '#67a38b',
          500: '#43856e',
          600: '#326b58',
          700: '#285547',
          800: '#1b4d3e',
          900: '#153f33',
          950: '#09231c',
        },
        navy: {
          800: '#1b4d3e',
          900: '#153f33',
          950: '#09231c',
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      boxShadow: {
        'plang': '0 4px 0 0 #09231c, 0 10px 15px -3px rgba(9, 35, 28, 0.2)',
        'plang-sm': '0 2px 0 0 #09231c',
        'ticket': '0 2px 4px rgba(0,0,0,0.06), 0 8px 16px rgba(27,77,62,0.08)',
      }
    },
  },
  plugins: [],
};
