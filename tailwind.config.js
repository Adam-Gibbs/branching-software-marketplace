module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    fontFamily: {
      body: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      heading:
        '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      sans: '"DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      body: "#F1F5FB",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      body: "#15181C",
    }),
    extend: {
      colors: {
        green: {
          main: "#30A51B",
          highlight: "#3CCE22",
          light: "#E9F5E7",
        },
        red: {
          main: "#E53935",
          light: "#FDEEEC",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
