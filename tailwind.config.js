module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: "DM Serif Display",
      secondary: "Jost",
      tertiary: 'Barlow Condensed',

     
    },
    backgroundImage: {
      hero: "url('/src/assets/img/room.jpg')",
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
      },
    },
  },
  plugins: [],
};
