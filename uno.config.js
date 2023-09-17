import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	presets: [
		presetUno(),
		// presetIcons({
		// 	extraProperties: { display: "inline-block", "vertical-align": "middle" },
		// }),
		presetWebFonts({
			fonts: {
				roboto: [{ name: "Roboto", weights: ["400", "700"] }],
			},
		}),
	],
	shortcuts: {
		// container: "px-4 mx-auto max-w-5xl lg:px-0",
	},
	theme: {
		colors: {
			tomato: "hsl(4, 100%, 67%)",
			dark_slate_grey: "hsl(234, 29%, 20%)",
			charcoal_grey: "hsl(235, 18%, 26%)",
			grey: "hsl(231, 7%, 60%)",
			white: "hsl(0, 0%, 100%)",
		},
	},
	transformers: [transformerVariantGroup()],
	extractors: [extractorSvelte()],
});
