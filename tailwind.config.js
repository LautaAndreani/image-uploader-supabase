module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#FAFAFB',
      cardBg: '#FFFFFF',
      uploadBg: '#F6F8FB',
      textUpload: '#BDBDBD',
      primary: '#4F4F4F',
      secondary: '#828282',
      border: '#97BEF4',
      button: '#2F80ED',
      loadingBg: '#F2F2F2',
      borderLink: '#E0E0E0',
      sendFile: '#FF8C32',
    },
    extend: {
      keyframes: {
        loading: {
          from: { marginLeft: '-50%' },
          to: { marginLeft: '100%' },
        },
      },
      animation: {
        loading: 'loading 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
