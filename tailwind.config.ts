import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {

    extend: {

      colors: {
        "merme-cream-bg": "#FFFFF3",
        "merme-orange": "#FFD18B",
        "merme-gray": "#EEEEEE",
        "merme-skyblue": "#C9EBFF",
        "merme-black": "#222222",
      },
    },
  },
  plugins: [],
}
export default config
