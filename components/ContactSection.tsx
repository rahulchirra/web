
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants'; 

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    console.log('Form data submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <SectionWrapper 
      id={SectionId.Contact} 
      title="Get In Touch" 
      className="bg-gradient-to-br from-[#222629] via-[#2A2E31] to-[#222629]"
    >
      <div className="max-w-2xl mx-auto bg-[#2A2E31]/60 p-8 sm:p-10 rounded-xl shadow-2xl border border-[#474B4F]/50">
        <p className="text-center text-slate-300 mb-6 text-lg">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out!
        </p>
        
        <div className="text-center text-slate-300 mb-10 space-y-2">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#86C232] hover:text-[#61892F] underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="text-[#86C232] hover:text-[#61892F] underline">{PERSONAL_INFO.phone}</a></p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-4 bg-[#86C232]/20 border border-[#86C232]/50 text-slate-100 rounded-lg">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-[#474B4F]/50 border border-[#6B6E70] rounded-lg text-slate-100 focus:ring-2 focus:ring-[#86C232] focus:border-[#86C232] transition-all duration-200 placeholder-[#6B6E70]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-[#474B4F]/50 border border-[#6B6E70] rounded-lg text-slate-100 focus:ring-2 focus:ring-[#86C232] focus:border-[#86C232] transition-all duration-200 placeholder-[#6B6E70]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 bg-[#474B4F]/50 border border-[#6B6E70] rounded-lg text-slate-100 focus:ring-2 focus:ring-[#86C232] focus:border-[#86C232] transition-all duration-200 placeholder-[#6B6E70]"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#86C232] to-[#61892F] hover:from-[#61892F] hover:to-[#474B4F] text-[#222629] font-semibold py-3.5 px-6 rounded-lg shadow-md hover:shadow-[#86C232]/30 transform hover:scale-105 transition-all duration-300 text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#222629]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
        <div className="mt-12 text-center">
            <p className="text-[#6B6E70]">Connect with me on:</p>
            <div className="flex justify-center items-center space-x-6 mt-4">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#6B6E70] hover:text-[#86C232] transform hover:scale-110 transition-all duration-200"
                >
                  LinkedIn
                </a>
                {PERSONAL_INFO.githubUrl && (
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link text-[#6B6E70] hover:text-[#86C232] transform hover:scale-110 transition-all duration-200 inline-flex items-center"
                    aria-label="View my GitHub profile"
                  >
                    <img
                      src="https://img.icons8.com/?size=20&id=13930&format=png&color=6B6E70"
                      alt=""
                      className="icon-default w-5 h-5 mr-1.5"
                      width="20"
                      height="20"
                    />
                    <img
                      src="https://img.icons8.com/?size=20&id=13930&format=png&color=86C232"
                      alt=""
                      className="icon-hover w-5 h-5 mr-1.5"
                      width="20"
                      height="20"
                    />
                    GitHub
                  </a>
                )}
                <a href="#" className="text-[#6B6E70] hover:text-[#86C232] transform hover:scale-110 transition-all duration-200">Twitter / X (Placeholder)</a>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;