import { Inter, Montserrat, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export const fontVariables = `${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable}`;

export const fontPresets = {
  inter: "inter",
  spaceGrotesk: "spaceGrotesk",
  montserrat: "montserrat"
} as const;

export type FontPreset = keyof typeof fontPresets;
