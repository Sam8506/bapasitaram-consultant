"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:info@bapasitaram.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;
  };
  const services = [
    {
      title: "Structural Engineering",
      description:
        "Advanced structural analysis and design solutions for complex infrastructure projects.",
      icon: "🏗️",
      features: [
        "Seismic Analysis",
        "Foundation Design",
        "Load Calculations",
        "Steel & Concrete Structures",
      ],
    },
    {
      title: "Civil Engineering",
      description:
        "Comprehensive civil engineering services from concept to completion.",
      icon: "🌉",
      features: [
        "Site Development",
        "Transportation Design",
        "Water Resources",
        "Urban Planning",
      ],
    },
    {
      title: "Project Management",
      description:
        "Expert project oversight ensuring delivery on time and within budget.",
      icon: "📊",
      features: [
        "Planning & Scheduling",
        "Cost Control",
        "Quality Assurance",
        "Risk Management",
      ],
    },
    {
      title: "MEP Design",
      description:
        "Integrated mechanical, electrical, and plumbing design solutions.",
      icon: "⚡",
      features: [
        "HVAC Systems",
        "Electrical Distribution",
        "Plumbing Design",
        "Fire Protection",
      ],
    },
  ];

  const projects = [
    {
      name: "Industrial Complex Development",
      type: "Structural",
      year: "2026",
    },
    { name: "Highway Infrastructure Upgrade", type: "Civil", year: "2023" },
    { name: "Commercial Tower Design", type: "MEP", year: "2024" },
    {
      name: "Residential Community Planning",
      type: "Project Management",
      year: "2023",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "25+", label: "Expert Engineers" },
  ];

  return (
    <main className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-navy-100/20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl font-bold"
          >
            <span className="text-navy-800">Bapasitaram</span>
            <span className="text-gold-500 ml-2">Consultant</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center gap-8 font-body"
          >
            <a
              href="#services"
              className="text-navy-700 hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-navy-700 hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-navy-700 hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-navy-800 text-white rounded-none hover:bg-gold-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-navy-200/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-300/20 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-navy-900 mb-6 leading-tight">
              Engineering
              <br />
              <span className="text-gold-600">Excellence</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-xl md:text-2xl text-navy-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming visions into reality through innovative engineering
            solutions and unwavering commitment to precision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#services"
              className="px-10 py-5 bg-navy-800 text-white rounded-none font-body font-semibold text-lg hover:bg-gold-600 transition-all duration-300 shadow-luxury hover:shadow-2xl transform hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-transparent border-2 border-navy-800 text-navy-800 rounded-none font-body font-semibold text-lg hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-navy-600 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gold-500">Services</span>
            </h2>
            <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  <h3 className="font-display text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-body text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div
                    className={`grid grid-cols-2 gap-3 transition-all duration-500 ${activeService === index ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}
                  >
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Featured <span className="text-gold-600">Projects</span>
            </h2>
            <p className="font-body text-xl text-navy-600 max-w-3xl mx-auto">
              Showcasing our commitment to engineering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-navy-50 to-slate-50 border-l-4 border-gold-500 p-8 hover:shadow-luxury transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="font-body text-sm font-semibold text-gold-600 uppercase tracking-wider">
                    {project.type}
                  </div>
                  <div className="font-body text-sm text-navy-400">
                    {project.year}
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {project.name}
                </h3>

                <div className="w-12 h-1 bg-gold-500 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-32 bg-gradient-to-br from-slate-100 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold text-navy-900 mb-8">
                Building the <span className="text-gold-600">Future</span>
              </h2>

              <div className="space-y-6 font-body text-lg text-navy-600 leading-relaxed">
                <p>
                  Bapasitaram Consultant stands at the forefront of engineering
                  innovation, delivering world-class solutions that shape the
                  infrastructure of tomorrow.
                </p>

                <p>
                  With over 15 years of excellence in the industry, our team of
                  expert engineers combines technical expertise with creative
                  problem-solving to tackle the most complex engineering
                  challenges.
                </p>

                <p>
                  We believe in sustainable development, precision engineering,
                  and building lasting relationships with our clients through
                  transparency and excellence.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-none">
                  ISO 9001 Certified
                </div>
                <div className="px-6 py-3 bg-gold-600 text-white font-semibold rounded-none">
                  Award Winning
                </div>
                <div className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-none">
                  Sustainable Solutions
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-navy-200 to-gold-200 rounded-none">
                <div className="absolute inset-8 border-4 border-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-display text-7xl font-bold text-navy-900 mb-4">
                      15+
                    </div>
                    <div className="font-body text-xl text-navy-700 font-semibold">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500 opacity-20 animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-500 opacity-20 animate-float"
                style={{ animationDelay: "1s" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-navy-900">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build <span className="text-gold-500">Together</span>
            </h2>
            <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our team
              today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4 font-body text-slate-300">
                    <div className="flex items-start gap-4">
                      <div className="text-gold-500 text-xl">📍</div>
                      <div>
                        <div className="font-semibold text-white">Address</div>
                        <div>ADDRESS</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-gold-500 text-xl">📧</div>
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <div>info@bapasitaram.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-gold-500 text-xl">📞</div>
                      <div>
                        <div className="font-semibold text-white">Phone</div>
                        <div>+91 90999 07345</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 font-body text-slate-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-white font-semibold">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white font-semibold">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-white font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 transition-colors font-body"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Your Message"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 transition-colors resize-none font-body"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold-600 text-white font-semibold hover:bg-gold-500 transition-colors duration-300 font-body text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-2xl font-bold">
              <span className="text-black">Bapasitaram</span>
              <span className="text-gold-500 ml-2">Consultant</span>
            </div>

            <div className="font-body text-slate-400">
              © 2026 Bapasitaram Consultant. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-gold-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-gold-500 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-gold-500 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
