// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: "Noto Sans",
			cssVariable: "--font-noto-sans",
			provider: fontProviders.google(),
			weights: [400, 600],
			styles: ["normal"],
			subsets: ["latin"],
			fallbacks: ["sans-serif"],
		},
	],
	vite: {
		plugins: [tailwindcss({})],
	},
});
