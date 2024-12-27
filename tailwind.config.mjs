import defaultTheme from "tailwindcss/defaultTheme"
import flowbite from "flowbite-react/tailwind"


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', flowbite.content()],
  safelist: [
    {
      pattern: /col-start-(1|2|3|4|5)/,
      variants: ['sm']
    },
    {
      pattern: /bg-(red|green|blue)-(50|100|200|300)/,
      variants: ['hover']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    flowbite.plugin()
  ],
  darkMode: 'false'
}
