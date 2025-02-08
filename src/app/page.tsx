"use client"
import { Hero } from "@/components/home/Hero"
import { FeaturesSection } from "@/components/home/FeaturesSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { AboutUs } from "@/components/home/AboutUs"

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <AboutUs />
    </main>
  )
}