/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          clin: '#579D67',
          light: '#268C8C',
          base: '#155B5B',
          dark: '#0A2E2E',
        },
        accent: {
          light: '#F2C4B3',
          base: '#D97D65',
          dark: '#B35A45',
        },
        background: '#F6F5F7',
        shape: '#EDE9F2',
        gray: {
          100: '#ADADAD',
          200: '#949494',
          300: '#666666',
          400: '#3D3D3D',
          500: '#1D1D1D',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter Display"', '"Inter"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(10, 46, 46, 0.08)',
        soft: '0 20px 60px -20px rgba(10, 46, 46, 0.18)',
        elevated: '0 30px 80px -30px rgba(10, 46, 46, 0.35)',
        ring: '0 0 0 1px rgba(255,255,255,0.6) inset, 0 30px 80px -30px rgba(10, 46, 46, 0.35)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(21,91,91,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,91,91,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(80% 60% at 50% 0%, rgba(38,140,140,0.15), transparent 60%)',
        'mesh-eco':
          'radial-gradient(circle at 20% 20%, rgba(87,157,103,0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(38,140,140,0.30), transparent 50%), radial-gradient(circle at 50% 90%, rgba(217,125,101,0.25), transparent 55%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 11s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-pan': 'gradientPan 12s ease infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
