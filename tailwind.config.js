import plugin from 'tailwindcss/plugin'; // Make sure the plugin is imported

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Configure your file paths
  theme: {
    extend: {
      colors: {
        'left-bottom': '#ffffff', // Replace with your left-bottom color
        'right-bottom': '#999999', // Replace with your right-bottom color
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.custom-border': {
          borderWidth: '4px',
          borderStyle: 'solid',
          borderTopColor: 'var(--left-bottom)', // Use CSS variable for dynamic colors
          borderLeftColor: 'var(--left-bottom)',
          borderRightColor: 'var(--right-bottom)',
          borderBottomColor: 'var(--right-bottom)',
        },
      });
    }),
  ],
};
