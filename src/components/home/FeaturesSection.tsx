import {
  CircleUserRound,
  Building2,
  Sparkles,
  Lightbulb,
  ScrollText,
  TriangleAlert,
} from "lucide-react";
import Link from "next/link";

interface FeatureCard {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  href: string | null;
  requirements?: string | null;
  color: string;
}

const FEATURE_ITEMS: FeatureCard[] = [
  {
    title: "Individual Cybersecurity",
    icon: CircleUserRound,
    description: "Personalized learning and protection",
    highlights: [
      "Learn cybersecurity basics",
      "Earn rewards for completing tracks",
      "Access intelligent threat database",
    ],
    href: "/dashboard/individual",
    requirements: "Individual",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Organizational Defense",
    icon: Building2,
    description: "Advanced threat management",
    highlights: [
      "AI-powered threat prediction",
      "AI-driven data analysis",
      "AI Firewall as a Service",
      "AI Intrusion Detection System",
    ],
    href: "/dashboard/organisation",
    requirements: "Organisation",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "AI Assistance",
    icon: Sparkles,
    description: "Intelligent cybersecurity support",
    highlights: [
      "AI Firewalls",
      "AI-powered chatbots",
      "AI-driven learning tracks",
    ],
    href: null,
    requirements: null,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Intelligent Learning",
    icon: Lightbulb,
    description: "Adaptive cybersecurity education",
    highlights: [
      "Learn and earn reward tokens",
      "Progress tracking & rewards",
      "Explore cybersecurity events",
    ],
    href: "/dashboard/individual/learning-tracks",
    requirements: "Individual",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Blogging & Collaboration",
    icon: ScrollText,
    description: "Community-driven knowledge sharing",
    highlights: [
      "Share technical discussions",
      "AI-assisted writing",
      "Foster knowledge culture",
      "Community engagement",
    ],
    href: "/dashboard/individual/blogs",
    requirements: "Individual",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Threat Databases",
    icon: TriangleAlert,
    description: "Comprehensive threat intelligence",
    highlights: [
      "Comprehensive threat data",
      "AI-powered chatbot access",
      "Curated threat answers",
    ],
    href: "/dashboard/organisation/threat-database",
    requirements: "Organisation",
    color: "from-pink-500 to-rose-500",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering individuals and organizations with advanced, AI-driven
            security technologies
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURE_ITEMS.map((feature, index) => (
            <div key={index} className="relative group">
              <div
                className={`
                  absolute -inset-0.5 
                  bg-gradient-to-r ${feature.color} 
                  rounded-2xl 
                  opacity-50 
                  group-hover:opacity-100 
                  transition duration-300 
                  blur-xl
                `}
              ></div>
              <div
                className="
                  relative 
                  bg-gray-900 
                  ring-1 ring-white/10 
                  rounded-2xl 
                  p-8 
                  h-full 
                  flex 
                  flex-col 
                  transform 
                  transition 
                  duration-300 
                  hover:-translate-y-2
                "
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`
                      w-16 h-16 
                      bg-gradient-to-r ${feature.color} 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      mr-4
                    `}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-6 italic">
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="
                          text-sm 
                          text-gray-300 
                          bg-gray-800 
                          px-3 
                          py-1 
                          rounded-full 
                          inline-block 
                          mr-2 
                          mb-2
                        "
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                {feature.href && (
                  <Link
                    href={feature.href}
                    className="
                        mt-auto 
                        text-white 
                        bg-gray-800 
                        hover:bg-gray-700 
                        rounded-lg 
                        px-4 
                        py-2 
                        text-center 
                        transition
                      "
                  >
                    Explore More
                  </Link>
                )}
                {feature.requirements && (
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {feature.requirements} Access
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
