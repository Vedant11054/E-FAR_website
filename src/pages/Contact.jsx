import { useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "info" });

    try {
      const res = await fetch("https://e-far-website-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ message: data.msg || "Something went wrong!", type: "error" });
      }
    } catch (error) {
      console.error(error);
      setStatus({ message: "Server error. Try again later.", type: "error" });
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#0B0B0B', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #0B0B0B 100%)'
      }}
    >
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{ 
          padding: '120px 0',
          background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)'
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4991B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ 
              color: '#D4991B',
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold'
            }}
          >
            Get in
            <span 
              className="block text-brand-white"
              style={{ color: '#FFFFFF' }}
            >
              Touch
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
            }}
          >
            Ready to join the electric revolution? We'd love to hear from you! 
            Reach out for collaborations, sponsorships, or any queries about our Formula Bharat journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20"
        style={{ 
          padding: '80px 0',
          background: 'linear-gradient(180deg, #1A1A1A 0%, #0B0B0B 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div 
              className="bg-brand-dark border border-brand-orange/20 rounded-2xl p-8 shadow-2xl"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(212, 153, 27, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                padding: '48px'
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#FFFFFF' }}
              >
                Send us a Message
              </h2>
              
              <p 
                className="text-lg mb-8"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Have a question about our team, want to collaborate, or interested in sponsoring? 
                We'd love to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block font-medium mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-brand-orange/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300"
                      style={{
                        backgroundColor: '#0B0B0B',
                        border: '1px solid rgba(212, 153, 27, 0.3)',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '12px 16px'
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block font-medium mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full border border-brand-orange/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300"
                      style={{
                        backgroundColor: '#0B0B0B',
                        border: '1px solid rgba(212, 153, 27, 0.3)',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '12px 16px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block font-medium mb-2"
                    style={{ color: '#FFFFFF' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your inquiry, collaboration ideas, or sponsorship interest..."
                    required
                    className="w-full border border-brand-orange/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange resize-none transition-all duration-300"
                    style={{
                      backgroundColor: '#0B0B0B',
                      border: '1px solid rgba(212, 153, 27, 0.3)',
                      color: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '12px 16px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange text-brand-white font-bold py-4 px-8 rounded-lg hover:bg-brand-orange/80 transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{
                    backgroundColor: '#D4991B',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Send Message
                  <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                {status.message && (
                  <div 
                    className={`mt-4 p-4 rounded-lg text-center font-medium ${
                      status.type === "success" ? "bg-green-500/20 text-green-400" :
                      status.type === "error" ? "bg-red-500/20 text-red-400" :
                      "bg-brand-blue/20 text-brand-blue"
                    }`}
                    style={{
                      backgroundColor: status.type === "success" ? 'rgba(34, 197, 94, 0.2)' : 
                                     status.type === "error" ? 'rgba(239, 68, 68, 0.2)' : 
                                     'rgba(0, 163, 224, 0.2)',
                      color: status.type === "success" ? '#4ADE80' : 
                             status.type === "error" ? '#F87171' : '#00A3E0'
                    }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div 
                className="bg-brand-dark border border-brand-orange/20 rounded-2xl p-8 shadow-2xl"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(212, 153, 27, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  padding: '48px'
                }}
              >
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: '#FFFFFF' }}
                >
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 153, 27, 0.2)' }}
                    >
                      <FaEnvelope className="w-5 h-5" style={{ color: '#D4991B' }} />
                    </div>
                    <div>
                      <p 
                        className="font-medium"
                        style={{ color: '#FFFFFF' }}
                      >
                        Email Us
                      </p>
                      <p 
                        className="text-brand-orange"
                        style={{ color: '#D4991B' }}
                      >
                        eformulaashwariders@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(0, 163, 224, 0.2)' }}
                    >
                      <FaMapMarkerAlt className="w-5 h-5" style={{ color: '#00A3E0' }} />
                    </div>
                    <div>
                      <p 
                        className="font-medium"
                        style={{ color: '#FFFFFF' }}
                      >
                        Location
                      </p>
                      <p 
                        className="text-brand-blue"
                        style={{ color: '#00A3E0' }}
                      >
                        M/S VNCENT PALLOTTI COLLAGE OF ENGINEERING
                        WARDHA ROAD, GAVSI, MANAPUR, Nagpur, Maharashtra, 441108
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 153, 27, 0.2)' }}
                    >
                      <FaClock className="w-5 h-5" style={{ color: '#D4991B' }} />
                    </div>
                    <div>
                      <p 
                        className="font-medium"
                        style={{ color: '#FFFFFF' }}
                      >
                        Response Time
                      </p>
                      <p 
                        className="text-brand-orange"
                        style={{ color: '#D4991B' }}
                      >
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ color: '#FFFFFF' }}
                  >
                    Follow Our Journey
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/eformula_ashwariders/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-15 h-15 flex items-center justify-center rounded-full bg-brand-orange/20 hover:bg-brand-orange transition-all duration-300 shadow-lg hover:scale-110"
                      style={{ backgroundColor: 'rgba(212, 153, 27, 0.2)' }}
                    >
                      <FaInstagram className="w-5 h-5" style={{ color: '#D4991B' }} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/e-formula-ashwa-riders-6642ba233"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-blue/20 hover:bg-brand-blue transition-all duration-300 shadow-lg hover:scale-110"
                      style={{ backgroundColor: 'rgba(0, 163, 224, 0.2)' }}
                    >
                      <FaLinkedin className="w-5 h-5" style={{ color: '#00A3E0' }} />
                    </a>
                    <a
                      href="https://youtube.com/@e-formulaashwariders7948"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-orange/20 hover:bg-brand-orange transition-all duration-300 shadow-lg hover:scale-110"
                      style={{ backgroundColor: 'rgba(212, 153, 27, 0.2)' }}
                    >
                      <FaYoutube className="w-5 h-5" style={{ color: '#D4991B' }} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div 
                className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-brand-orange/20"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 153, 27, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=SVPCET&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20"
        style={{ 
          padding: '80px 0',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0B0B0B 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="bg-brand-dark border border-brand-orange/30 rounded-2xl p-12"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid rgba(212, 153, 27, 0.3)',
              borderRadius: '16px',
              padding: '48px'
            }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#FFFFFF' }}
            >
              Ready to Join the Electric Revolution?
            </h2>
            
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Whether you're interested in sponsoring our team, collaborating on projects, 
              or joining our Formula Bharat journey, we're excited to connect with you!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@efar.team"
                className="inline-flex items-center justify-center bg-brand-orange text-brand-white font-bold py-4 px-8 rounded-lg hover:bg-brand-orange/80 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#D4991B',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaEnvelope className="w-4 h-4 mr-2" />
                Email Us Directly
              </a>
              
              <a
                href="https://www.instagram.com/eformula_ashwariders/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border-2 border-brand-blue text-brand-blue font-bold py-4 px-8 rounded-lg hover:bg-brand-blue hover:text-brand-white transition-all duration-300"
                style={{
                  border: '2px solid #00A3E0',
                  color: '#00A3E0',
                  fontWeight: 'bold',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <FaInstagram className="w-4 h-4 mr-2" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}