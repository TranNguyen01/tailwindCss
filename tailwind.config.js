module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        620: "620px",
        520: "520px",
      },
      spacing: {
        "37r": "37rem",
        20: "5rem",
      },
      translate: {
        "3/5": "60%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
