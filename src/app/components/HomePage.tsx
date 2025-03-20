// src/components/HomePage.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import Navbar from './Navbar';

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll visibility for back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Update active section based on scroll position
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#003566] text-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#001d3d] py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#ffd60a]">Hello, I'm Mukhlis Kadir</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8">Software Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
            I specialize in creating dynamic web applications and crafting intelligent chatbots, whether AI-driven, live chat, or rule-based, to deliver exceptional user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#ffd60a] hover:bg-[#ffc300] text-[#000814] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#ffd60a] text-[#ffd60a] hover:bg-[#ffd60a] hover:text-[#000814] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-[#003566]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-[#ffd60a]">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#ffd60a]">
                <Image
                  src="/images/profile1.jpg"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <p className="text-lg mb-6">
                I'm a passionate software developer with expertise in building high-quality web  applications and chatbot development. With 2+ years of experience in the industry, I specialize in creating responsive, user-friendly interfaces using modern technologies.
              </p>
              <p className="text-lg mb-6">
                My journey in software development began during my studies as Information Systems Engineering at Universiti Teknologi Mara(UiTM), where I discovered my passion for creating intuitive and efficient solutions to complex problems. Since then, I've been honing my skills and expanding my knowledge in various areas of software development.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-[#ffd60a] font-bold mb-2">Front End</h3>
                  <p>HTML, CSS, React, Next.js</p>
                </div>
                <div>
                  <h3 className="text-[#ffd60a] font-bold mb-2">Back End</h3>
                  <p>Laravel,Node.js, FastAPI,</p>
                </div>
                <div>
                  <h3 className="text-[#ffd60a] font-bold mb-2">Languages</h3>
                  <p>PHP, JavaScript, TypeScript, Python, Java, jQuery, Langchain</p>
                </div>
                <div>
                  <h3 className="text-[#ffd60a] font-bold mb-2">Other</h3>
                  <p>Kubernetes, Docker, CI/CD, Git, Jaspersoft Studio</p>
                </div>
              </div>
              <button
                onClick={() => window.open("/files/resume.pdf", "_blank")}
                className="bg-[#ffd60a] hover:bg-[#ffc300] text-[#000814] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-[#001d3d]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-[#ffd60a]">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-[#000814] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/picture1.jpeg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#ffd60a]">Chatbot Development</h3>
                <p className="mb-4">
                  A full-featured chatbot platform either rule-based or AI-driven, with natural language processing, using Retrieval-Augmented Generation(RAG).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">PHP</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Live Helper Chat</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Langchain</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#ffd60a] hover:underline">Demo</a>
                  <a href="#" className="text-[#ffd60a] hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#000814] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/sales.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#ffd60a]">Sales Management System</h3>
                <p className="mb-4">
                  A web application for managing sales, inventory, and customer data. Features include user authentication, product catalog, and order processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">PHP</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Laravel</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Tailwind CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#ffd60a] hover:underline">Demo</a>
                  <a href="#" className="text-[#ffd60a] hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#000814] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/service.jpg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#ffd60a]">Service Request System</h3>
                <p className="mb-4">
                  Allow user to request services, track the status of their requests. The system will automatically assign the request to the right person based on the type of service requested.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Livewire</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">AlpineJS</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  <span className="bg-[#003566] px-2 py-1 rounded text-sm">eCharts</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#ffd60a] hover:underline">Demo</a>
                  <a href="#" className="text-[#ffd60a] hover:underline">GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#003566]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In <span className="text-[#ffd60a]">Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6 text-lg">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just want to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-[#ffd60a] mr-4 text-xl" />
                  <a href="mailto:m.mukhliskadir@gmail.com" className="hover:text-[#ffd60a] transition-colors">m.mukhliskadir@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-[#ffd60a] mr-4 text-xl" />
                  <a href="https://github.com/mukhliskadir" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd60a] transition-colors">github.com/mukhliskadir</a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-[#ffd60a] mr-4 text-xl" />
                  <a href="https://linkedin.com/in/mukhliskadir" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd60a] transition-colors">linkedin.com/in/mukhliskadir</a>
                </div>
                {/* <div className="flex items-center">
                  <FaTwitter className="text-[#ffd60a] mr-4 text-xl" />
                  <a href="https://twitter.com/janedoe" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffd60a] transition-colors">twitter.com/janedoe</a>
                </div> */}
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#000814] border border-[#001d3d] rounded-lg focus:outline-none focus:border-[#ffd60a]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#000814] border border-[#001d3d] rounded-lg focus:outline-none focus:border-[#ffd60a]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#000814] border border-[#001d3d] rounded-lg focus:outline-none focus:border-[#ffd60a]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#ffd60a] hover:bg-[#ffc300] text-[#000814] font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000814] py-8 px-4">
        <div className="container mx-auto text-center">
          {/* <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-white hover:text-[#ffd60a] transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-[#ffd60a] transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-[#ffd60a] transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="mailto:hello@janedoe.dev" className="text-white hover:text-[#ffd60a] transition-colors">
              <FaEnvelope className="text-2xl" />
            </a>
          </div> */}
          <p>&copy; {new Date().getFullYear()} mkdir.my | All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#ffd60a] hover:bg-[#ffc300] text-[#000814] p-4 rounded-full shadow-lg transition-all duration-300 z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}