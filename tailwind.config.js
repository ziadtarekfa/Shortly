module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        primary: '#2BD1D1',
        lightPurple: '#4B406B',
        darkPurple: '#3A3053'
      },
      backgroundImage: {
        'bg-boost': "url('../../public/assets/bg-boost-desktop.svg')"
      }
    }
  },
  plugins: [],
}
