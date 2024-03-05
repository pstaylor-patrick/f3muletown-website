import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from './src/colors.json';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: colors,
      fontFamily: {
        sans: [
          '"Roboto", "Helvetica Neue", sans-serif',
          ...defaultTheme.fontFamily.sans,
        ],
        blackops: ['"BlackOps"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
