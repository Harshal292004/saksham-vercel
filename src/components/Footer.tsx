import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Send, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';

const SOCIAL_LINKS = [
  { 
    icon: Twitter, 
    href: "https://twitter.com/saksham", 
    color: "hover:text-blue-400" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/company/saksham", 
    color: "hover:text-blue-600" 
  },
  { 
    icon: Github, 
    href: "https://github.com/saksham-platform", 
    color: "hover:text-gray-500" 
  }
];

const QUICK_LINKS = [
  { 
    title: "Quick Access", 
    links: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Features", href: "/features" },
      { name: "Dashboard", href: "/dashboard" }
    ]
  },
  { 
    title: "Resources", 
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Learning Tracks", href: "/learning" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-500 p-3 rounded-full">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              TechEdu Platform
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Bridging technology and education to empower the next generation of innovators. 
            Our mission is to transform learning through cutting-edge technological solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((social, index) => (
              <Link 
                key={index} 
                href={social.href} 
                target="_blank"
                className={`
                  text-gray-400 
                  transition 
                  ${social.color} 
                  hover:scale-110
                `}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8">
          {QUICK_LINKS.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-6 text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="
                        text-gray-400 
                        hover:text-blue-500 
                        transition 
                        flex 
                        items-center 
                        space-x-2
                      "
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">
            Contact Us
          </h4>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span className="text-gray-400">
                Silicon Valley, California, USA
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="text-gray-400">
                support@techedu.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <span className="text-gray-400">
                +1 (650) 123-4567
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500">
          {new Date().getFullYear()} TechEdu Platform. All rights reserved. 
          <span className="ml-4 text-sm text-gray-600">
            Powered by Innovation, Driven by Education
          </span>
        </p>
      </div>
    </footer>
  );
};