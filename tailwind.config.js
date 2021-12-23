module.exports = {
<<<<<<< HEAD
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
=======
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        animation: {
          flicker: "flicker 3s linear infinite",
        },
      },
      minWidth: (theme) => theme("width"),
      maxWidth: (theme) => theme("width"),
      minHeight: (theme) => theme("height"),
      maxHeight: (theme) => theme("height"),
    },
>>>>>>> main
  },
  plugins: [],
}
