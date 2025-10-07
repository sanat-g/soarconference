/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        "Jersey10": ['Jersey 10', 'serif'],
      },
      colors: {
        "accent_yellow": "#F7EE2A",
        "accent_pink": "#ED1E79", 
        "accent_blue": "#07B0EF", 
        "accent_purple": "#9633AC", 
        "background_grey": "#333333",
      },
      
        backgroundSize: {
            'size-200': '200% 100%',
        },
        backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
        },
        fontSize: {
          '10xl': '10rem',
        },
        keyframes: {
          gradient: {
            '0%':{backgroundPosition: '0% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
            '50%': {backgroundPosition: '100% 50% '}
          },
        },
        animation: {
          'moving_gradient': 'gradient 8s linear infinite'
        }
    },
  },
  plugins: [],
};
