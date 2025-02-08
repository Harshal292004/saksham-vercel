// app/page.tsx
"use client"
import { useEffect, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AboutUs } from "@/components/home/AboutUs";
import { ServicesSection } from "@/components/home/ServicesSection";
export default function Home() {
  return (
    <main className="bg-gray-950 text-white p-4">
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <AboutUs></AboutUs>
      <ServicesSection></ServicesSection>
      <button  className="p-5 text-4xl border shadow-lg shadow-white font-bold">Create this thing</button>

    </main>
  );
}