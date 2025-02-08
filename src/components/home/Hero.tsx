"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { UserPlus, LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const router= useRouter()
  const handleRouteChange=({href="/"}:{href:string})=>{
    router.push(href)
  }
  useEffect(() => {
    // Check if animation has been seen in this session
    const lastAnimationTime = localStorage.getItem('lastHeroAnimation');
    const currentTime = Date.now();

    // Function to trigger animation
    const triggerAnimation = () => {
      setIsVisible(true);
      setAnimationKey(prev => prev + 1);
      localStorage.setItem('lastHeroAnimation', currentTime.toString());
    };

    // Trigger animation if:
    // 1. No previous animation time exists, or
    // 2. More than 50 seconds have passed since last animation
    if (!lastAnimationTime || 
        (currentTime - parseInt(lastAnimationTime, 10) > 50000)) {
      triggerAnimation();

      // Set up interval to repeat animation every 50 seconds
      const intervalId = setInterval(triggerAnimation, 50000);

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          key={animationKey}
          className="text-7xl font-extrabold mb-6"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {['S', 'A', 'K', 'S', 'H', 'A', 'M'].map((letter, index) => (
            <motion.span 
              key={`${animationKey}-${index}`}
              className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Innovative technology solutions designed to protect critical sectors against advanced threats. They offer proactive defense mechanisms to ensure robust security in the digital landscape.
        </p>
        <div className="flex justify-center space-x-4">
            <button onClick={()=>{handleRouteChange({href:'/sign-up'})}} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition flex items-center">
              <UserPlus className="mr-2" /> Sign Up
            </button>
       
          
            <button onClick={()=>{handleRouteChange({href:'/sign-in'})}} className="border border-gray-600 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition flex items-center">
              <LogIn className="mr-2" /> Login
            </button>
        </div>
      </div>
    </section>
  );
};