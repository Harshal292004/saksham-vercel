"use client"
import '@/lib/styles/navbar.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { archivo_black } from "@/lib/fonts";
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS,  NAVBAR_CONTAINER_VARIANTS, NAVBAR_MOBILE_VARIANTS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
const Navbar = () => {
  const router = useRouter();
  const user={}
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    darkMode 
      ? htmlElement.classList.add('dark')
      : htmlElement.classList.remove('dark');
  }, [darkMode]);


  const navItems = NAV_ITEMS({ isIndividual:  false });

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={NAVBAR_CONTAINER_VARIANTS}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className={`${archivo_black.className} text-2xl text-gray-800 dark:text-gray-200`}
          >
            SAKSHAM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-600 dark:text-gray-300"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={NAVBAR_MOBILE_VARIANTS}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <div className="mobile-menu-top">
                  <Link
                    href="/"
                    className={`${archivo_black.className} text-2xl text-gray-800 dark:text-gray-200`}
                  >
                    SAKSHAM
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mobile-menu-links">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mobile-menu-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mobile-menu-bottom">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="dark-mode-toggle"
                  >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;