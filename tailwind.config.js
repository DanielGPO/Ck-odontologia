/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "Helvetica", "SFMono-Regular"],
      lato: ["Lato", "sans-serif", "Helvetica", "Arial"],

      bodoni: ["Bodoni Moda"],
    },
  },
};
