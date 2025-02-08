import { Code, Target, Rocket, Globe, Award } from "lucide-react";
import Link from "next/link";

const TEAM_MEMBERS = [
  {
    name: "Harshal Malani",
    linkedin: "https://linkedin.com/in/harshalmalani",
  },
  {
    name: "Aman Tembhare",
    linkedin: "https://linkedin.com/in/amantembhare",
  },
  {
    name: "Hemraj Ghanchi",
    linkedin: "https://linkedin.com/in/hemrajghanchi",
  },
  {
    name: "Abhijeet Mate",
    linkedin: "https://linkedin.com/in/abhijeetmate",
  },
];

export const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Saksham Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pioneering AI-Driven Cybersecurity Solutions for the Digital Age
          </p>
        </div>

        {/* Company Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Target className="w-12 h-12 text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Saksham, we are committed to transforming cybersecurity through
              innovative AI technologies. Our mission is to empower individuals
              and organizations with intelligent, proactive security solutions
              that adapt and learn in real-time.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Rocket className="w-12 h-12 text-green-500" />
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We envision a world where cybersecurity is proactive, intelligent,
              and accessible. By leveraging cutting-edge AI and machine
              learning, we aim to create security solutions that are one step
              ahead of emerging digital threats.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Meet Our Innovative Team
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 transform transition hover:-translate-y-2 flex flex-col items-center"
              >
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="text-white hover:text-blue-500 transition text-xl font-semibold"
                >
                  {member.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 rounded-2xl p-12 text-center">
          <div className="flex justify-center space-x-12">
            <div>
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-white">10+</h4>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div>
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-white">5</h4>
              <p className="text-gray-400">Industry Awards</p>
            </div>
            <div>
              <Code className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-white">50K+</h4>
              <p className="text-gray-400">Lines of Secure Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
