/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        slackside: ["SlackSide", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-hero-bg-image": "url('/images/profile-pic.png')",
      },
    },
    colors: {
      kwhite: "#e5e7de",
      kgreen: "#0b3536",
      kred: "#f54123",
    },
  },
  plugins: [],
};
