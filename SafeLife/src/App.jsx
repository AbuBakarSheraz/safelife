import React, { useState, useEffect } from 'react';
import { Heart, Users, Target, Award, Phone, Mail, MapPin, Calendar, ArrowRight, Star, Activity, ShieldCheck } from 'lucide-react';

const NGOLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '300+', label: 'Registered Patients', icon: Users },
    { number: '500+', label: 'Weekly Blood Bags Target', icon: Target },
    { number: '2', label: 'Child Specialists', icon: ShieldCheck },
    { number: '3', label: 'Lab Technicians', icon: Activity }
  ];

  const services = [
    {
      title: 'Complete Lab Setup',
      description: 'State-of-the-art laboratory facilities with advanced equipment for comprehensive blood testing and analysis.',
      icon: Activity,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Specialized Medical Care',
      description: 'Expert child specialists and experienced medical professionals dedicated to thalassemia and hemophilia treatment.',
      icon: ShieldCheck,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Blood Donation Drive',
      description: 'Organized blood collection campaigns to ensure consistent supply for our patients in need.',
      icon: Heart,
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Safe Life Logo" className="h-12 w-12 rounded-full shadow-lg" />
            <div>
              <h1 className="text-white font-bold text-xl">Safe Life</h1>
              <p className="text-cyan-300 text-sm">Thalassemia & Haemophilia</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-cyan-300 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-cyan-300 transition-colors">Services</a>
            <a href="#stats" className="text-white hover:text-cyan-300 transition-colors">Impact</a>
            <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-white text-sm">Serving the Community Since Inception</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Safe Life
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-300">
              Thalassemia & Haemophilia Center
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing comprehensive care, support, and hope for patients with thalassemia and hemophilia. 
            Together, we're building a healthier future for our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <div className="h-12 w-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="h-6 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="relative">
                <div className="absoluten bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
                <img 
                  src="/ceo.jpeg" 
                  alt="Dr Tanveer Sulehra" 
                  className="relative h-72 w-72 rounded-full object-cover object-top  border-4 border-white/30 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-4">
                  <Award className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-cyan-300 text-sm font-semibold">Chief Executive Officer</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">Dr. Tanveer Sulehria</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Leading our mission with dedication, expertise, and compassion. Dr. Sulehra brings years of medical 
                  experience and unwavering commitment to improving the lives of patients with thalassemia and hemophilia.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30">
                    Medical Leadership
                  </span>
                  <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                    Community Service
                  </span>
                  <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">
                    Healthcare Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Comprehensive care and support services designed to meet the unique needs of our patients and their families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">
                Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p className="text-gray-300 text-xl">
                Ready to make a difference? Contact us to learn how you can contribute to our mission.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-300">DHQ Hospital Sargodha</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-gray-300">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-300">safelife2002@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/logo.png" alt="Safe Life Logo" className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="text-white font-bold text-lg">Safe Life</h3>
              <p className="text-cyan-300 text-sm">Thalassemia & Hemophilia</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Dedicated to saving lives and providing hope to families affected by thalassemia and hemophilia.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">Donate</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Safe Life NGO. All rights reserved. Built with ❤️ for our community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NGOLandingPage;