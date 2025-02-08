import { Users, LayoutDashboard,CircleUserRound,Building2,Sparkles,Lightbulb,ScrollText,TriangleAlert } from 'lucide-react';

const NAVBAR_CONTAINER_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      type: "tween",
      ease: "easeOut"
    }
  }
};

const NAVBAR_MENU_ITEM_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};




const NAVBAR_MOBILE_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "100vh",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const NAV_ITEMS = ({ isIndividual = true }: { isIndividual: boolean }) => [
  { 
    href: '/', 
    label: 'Home', 
    icon: null,
  },
  { 
    href: '/about', 
    label: 'About', 
    icon: null,
  },
  { 
    href: '/services', 
    label: 'Services', 
    icon: Users,
  },
  {
    href: isIndividual ? '/dashboard/individual' : '/dashboard/organisation',
    label: 'Dashboard',
    icon: LayoutDashboard    
  }
];

import { FeatureCard } from '../../types';
const FEATURE_ITEMS:Array<FeatureCard> = [
  {
      title: "Individual",
      icon: CircleUserRound,
      highlights: [
          "Learn cybersecurity basics.",
          "Earn rewards for completing expert-created learning tracks.",
          "Access a intelligent threat database."
      ],
      details:"",
      href:"dashboard/individual",
      requirements:"Individual"
  },
  {
      title: "Organisation",
      icon: Building2,
      highlights: [
          "AI-powered threat prediction.",
          "AI-driven data analysis.",
          "AI Firewall as a Service.",
          "AI Intrusion Detection System."
      ],
      details:"",
      href:"dashboard/organisation",
      requirements:"Organisation"
  },
  {
      title: "AI Assistance",
      icon: Sparkles,
      highlights: [
          "AI Firewalls.",
          "AI-powered chatbots.",
          "AI-driven learning tracks."
      ],
      details:"",
      href:null,
      requirements:null
  },
  {
      title: "Intelligent Learning",
      icon: Lightbulb,
      highlights: [
          "Learn and earn reward tokens",
          "Progress tracking & rewards.",
          "Explore cybersecurity events."
      ],
      details:"",
      href:"dashboard/individual/learning-tracks",
      requirements:"Individual"

    },
  {
      title: "Blogging & Collaboration",
      icon: ScrollText,
      highlights: [
          "Share technical discussions.",
          "AI-assisted writing.",
          "Foster a culture of knowledge",
          "Community engament and assistance"
      ],
      details:"",
      href:"dashboard/individual/blogs",
      requirements:"Individual"

  },
  {
      title: "Threat Databases",
      icon: TriangleAlert,
      highlights: [
          "Comprehensive threat data.",
          "AI-powered chatbot access.",
          "Ask questions get curated answers."
      ],
      details:"",
      href:"dashboard/organisation/threat-database",
      requirements:"Organisation"
  }
];

export { NAV_ITEMS, NAVBAR_CONTAINER_VARIANTS, NAVBAR_MENU_ITEM_VARIANTS, NAVBAR_MOBILE_VARIANTS ,FEATURE_ITEMS};
