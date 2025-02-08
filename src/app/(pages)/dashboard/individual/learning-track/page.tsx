"use client"
import React, { useState } from 'react';
import { BookOpen, Trophy, Star, Users, ArrowRight, Clock, Sparkles, Target, Shield, MessageCircle, Send, Heart } from 'lucide-react';

function page() {
  const [activeTrack, setActiveTrack] = useState(0);

  const courses = [
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn the basics of cybersecurity and protect yourself online",
      duration: "4 weeks",
      students: 1234,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c0f58b?auto=format&fit=crop&q=80&w=400",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Advanced Threat Detection",
      description: "Master the art of identifying and preventing cyber threats",
      duration: "6 weeks",
      students: 856,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=400",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Security Best Practices",
      description: "Implementation of security measures in daily operations",
      duration: "3 weeks",
      students: 2156,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Cybersecurity Lead at Infosys",
      content: "These courses provided deep insights into modern cybersecurity challenges. Highly recommended for professionals looking to stay ahead of emerging threats.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228058?auto=format&fit=crop&q=80&w=100",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Network Security Architect",
      content: "An exceptional learning platform that bridges theoretical knowledge with practical cybersecurity skills. The course content is comprehensive and cutting-edge.",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=100",
      rating: 5
    }
  ];

  const communityHighlights = [
    {
      title: "Active Discussions",
      icon: MessageCircle,
      value: "24/7",
      description: "Join live discussions with experts",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Global Community",
      icon: Users,
      value: "10K+",
      description: "Members from 150+ countries",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Daily Updates",
      icon: Send,
      value: "100+",
      description: "Security alerts and tips",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Sparkles className="h-12 w-12 mb-4 animate-pulse text-yellow-400" />
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Learning Dashboard
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Your journey to cybersecurity excellence starts here. Master the skills that matter.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Learning Tracks</h2>
              <p className="text-gray-400">Choose your path to mastery</p>
            </div>
            <button className="flex items-center px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                onMouseEnter={() => setActiveTrack(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  style={{ background: `linear-gradient(to bottom right, ${course.color})` }}
                ></div>
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500/20 p-4 rounded-xl">
                  <BookOpen className="h-8 w-8 text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400">Courses Completed</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
              </div>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-4 rounded-xl">
                  <Trophy className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400">Certificates Earned</p>
                  <p className="text-3xl font-bold">4</p>
                </div>
              </div>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500/20 p-4 rounded-xl">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400">Achievement Points</p>
                  <p className="text-3xl font-bold">2,450</p>
                </div>
              </div>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full border-2 border-indigo-500 p-0.5"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#0088cc]/20 to-[#0088cc]/5 rounded-3xl p-8 border border-[#0088cc]/20">
            <div className="text-center mb-12">
              <Send className="h-12 w-12 text-[#0088cc] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Join Our Telegram Community</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Connect with fellow cybersecurity enthusiasts, get instant updates, and access exclusive resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {communityHighlights.map((highlight, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`bg-gradient-to-br ${highlight.color} p-4 rounded-xl`}>
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{highlight.title}</h3>
                      <p className="text-2xl font-bold text-[#0088cc]">{highlight.value}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://t.me/your_community"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#0088cc] rounded-full hover:bg-[#0088cc]/90 transition-all transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5 mr-2" />
                Join Our Telegram Community
              </a>
              <p className="mt-4 text-gray-400">
                <span className="inline-flex items-center">
                  <Heart className="h-4 w-4 text-red-500 mr-2" />
                  Join 10,000+ members already learning together
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;