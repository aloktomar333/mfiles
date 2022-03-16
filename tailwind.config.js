module.exports = {
  purge: {
    enabled: true,
    content: [ 
      './*.html',
    ]
  },
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
    },
  },
  plugins: [],
}