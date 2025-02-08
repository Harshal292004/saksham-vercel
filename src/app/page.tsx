// app/page.tsx
"use client"
import { Hero } from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AboutUs } from "@/components/home/AboutUs";
import { ServicesSection } from "@/components/home/ServicesSection";
import { createUser } from "../../actions/user.actions";
export default function Home() {
  const handleCreate=async()=>{
    const data=await createUser({
      email_address :"malaniharshal955@gmail.com",
      username:"malaniharshal95@",
      first_name:"Harshal",
    })
    console.log(`Data is to be:${Object.keys(data)}`)
  }
  return (
    <main className="bg-gray-950 text-white p-4">
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <AboutUs></AboutUs>
      <ServicesSection></ServicesSection>
      <button onClick={handleCreate} className="p-5 text-4xl border shadow-lg shadow-white font-bold">
      Create this thing
      </button>

    </main>
  );
}