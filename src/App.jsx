import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const App = () => {
  // State for the contact form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to track form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset status

    // IMPORTANT: Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint URL.
    // To get this URL, sign up at Formspree.io and create a new form.
    // It will look something like this: 'https://formspree.io/f/your_unique_id'
    const formspreeEndpoint = 'https://formspree.io/f/mwpqygka';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        console.error('Form submission failed.');
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(true);
    }
  };
  
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-900 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-cyan-400">Gaurav</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          {/* Reverting to a mid-level scale for the profile picture */}
          <div className="mx-auto w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-cyan-500 animate-fade-in transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/80 hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]">
            <img 
              src="profile.jpg" 
              alt="Gaurav's Profile" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          {/* Reverting the heading text back to its original, larger size */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
            Hello, I'm <span className="text-cyan-400">Gaurav</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            A passionate web developer who builds clean, modern, and user-friendly digital experiences.
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
          >
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-4">
            I am a dedicated developer with a passion for turning ideas into reality through code. My expertise lies in building responsive, efficient, and visually appealing websites and applications. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg">
            When I'm not coding, I enjoy problem-solving, exploring new tech, and contributing to open-source projects. I believe in creating solutions that are not just functional, but also provide an exceptional user experience.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e262c?q=80&w=2800&auto=format&fit=crop" 
                alt="Project 1 Thumbnail" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
                <p className="text-slate-400 mb-4">
                  A full-stack e-commerce site with user authentication, a shopping cart, and secure payment processing.
                </p>
                <a href="#" className="text-cyan-400 font-medium hover:underline flex items-center">
                  View Project &rarr;
                </a>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
              <img 
                src="https://images.unsplash.com/photo-1554415707-657297297e25?q=80&w=2940&auto=format&fit=crop" 
                alt="Project 2 Thumbnail" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Weather Dashboard</h3>
                <p className="text-slate-400 mb-4">
                  A responsive web application that fetches and displays real-time weather data for any city in the world.
                </p>
                <a href="#" className="text-cyan-400 font-medium hover:underline flex items-center">
                  View Project &rarr;
                </a>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-slate-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20">
              <img 
                src="https://images.unsplash.com/photo-1628126305615-0d057778b776?q=80&w=2835&auto=format&fit=crop" 
                alt="Project 3 Thumbnail" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Interactive To-Do App</h3>
                <p className="text-slate-400 mb-4">
                  A JavaScript-based task manager with drag-and-drop functionality and local storage persistence.
                </p>
                <a href="#" className="text-cyan-400 font-medium hover:underline flex items-center">
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Get in Touch</h2>
          <div className="bg-slate-950 p-8 rounded-lg shadow-xl border border-slate-800">
            <p className="text-slate-400 text-center mb-6">
              I'm always excited to connect with new people and discuss potential projects.
            </p>
            {submissionStatus === 'success' ? (
              <div className="text-center text-green-400 text-xl font-bold">
                Thank you for your message! I'll get back to you shortly.
              </div>
            ) : submissionStatus === 'error' ? (
              <div className="text-center text-red-400 text-xl font-bold">
                Oops! Something went wrong. Please try again.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-slate-200 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-slate-200 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="mt-1 block w-full rounded-md bg-slate-800 border-slate-700 text-slate-200 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-2"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-sm font-medium rounded-full text-slate-900 bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex justify-center mt-8 space-x-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Gaurav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
