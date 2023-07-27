/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(../img/wave-white.png)',
        'wave-pattern-dots': 'url(../img/wave-pattern-dots.png)',
        'character-mario': "url(../img/character-l.png)",
        'wave-pink': "url(../img/wave-pink.png)",
        'yellow-dots': "url(../img/pattern-yellow-dots.png)"
      })
    },
  },
  plugins: [],
}

