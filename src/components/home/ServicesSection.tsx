import { 
    Code, 
    Shield, 
    Brain, 
    Database, 
    Network, 
    Cpu 
  } from 'lucide-react';
  import Link from 'next/link';
  
  interface ServiceItem {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    technologies: string[];
    href: string | null;
    requirements?: string | null;
  }
  
  const TECH_SERVICES: ServiceItem[] = [
    {
      title: "Web Development",
      icon: Code,
      description: "Comprehensive web technologies",
      technologies: [
        "Next.js",
        "TypeScript", 
        "MongoDB",
        "Blockchain"
      ],
      href: "/services/web-development",
      requirements: "Full Stack"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Advanced protection strategies",
      technologies: [
        "AI Firewalls", 
        "Intrusion Detection", 
        "Midnight", 
        "Ethereum"
      ],
      href: "/services/security",
      requirements: "Enterprise"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "Intelligent AI technologies",
      technologies: [
        "Spacy", 
        "TensorFlow", 
        "Scikit-learn", 
        "Gen AI"
      ],
      href: "/services/machine-learning",
      requirements: "Advanced"
    },
    {
      title: "Data Technologies",
      icon: Database,
      description: "Advanced data management",
      technologies: [
        "MongoDB", 
        "AI Analytics", 
        "Blockchain DB", 
        "Insights"
      ],
      href: "/services/data-tech",
      requirements: "Data-Driven"
    },
    {
      title: "Network Solutions",
      icon: Network,
      description: "Robust network infrastructure",
      technologies: [
        "Cloud Integration", 
        "Secure Networking", 
        "Scalable Arch", 
        "Optimization"
      ],
      href: "/services/network",
      requirements: "Enterprise"
    },
    {
      title: "Computing Power",
      icon: Cpu,
      description: "High-performance computing",
      technologies: [
        "Distributed Computing", 
        "AI Acceleration", 
        "Edge Computing", 
        "Quantum Prep"
      ],
      href: "/services/computing",
      requirements: "Advanced"
    }
  ];
  
  export const ServicesSection = () => {
    return (
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies powering innovative cybersecurity solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-blue-600 mr-4 group-hover:text-blue-700 transition" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.technologies.map((tech, techIndex) => (
                    <li 
                      key={techIndex} 
                      className="text-gray-600 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 mr-2 rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
                {service.href && (
                  <Link 
                    href={service.href} 
                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Explore More
                  </Link>
                )}
                {service.requirements && (
                  <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {service.requirements} Access
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };