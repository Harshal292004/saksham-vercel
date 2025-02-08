import { Geist, Geist_Mono ,Archivo_Black,Space_Grotesk } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo_black= Archivo_Black({
    variable: "--font-archivo-black",
    weight:['400'],
    subsets:['latin']
});



const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export {geistMono,geistSans,archivo_black,spaceGrotesk}