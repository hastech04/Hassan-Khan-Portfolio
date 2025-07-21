import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

interface ContactProps {
  theme: 'dark' | 'light';
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const serviceID = 'service_hsh800m';
  const templateID = 'template_uy1z7ad';
  const publicKey = 'PVZtsh2XSyGROMtZI';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: 'teal'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.personal.location,
      href: '#',
      color: 'orange'
    }
  ];

  return (
    <section id="contact" className={`py-20 px-6 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900' : 'bg-gradient-to-br from-white via-blue-50 to-teal-50'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to start your next project? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                teal: 'from-teal-500 to-teal-600',
                orange: 'from-orange-500 to-orange-600'
              };
              return (
                <a key={index} href={info.href} className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-700/30 hover:bg-gray-700/50' : 'bg-gray-100/50 hover:bg-gray-100/80'}`}>
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[info.color as keyof typeof colorClasses]} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{info.label}</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{info.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className={`p-8 rounded-2xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl space-y-6`}>
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                submitStatus === 'success'
                  ? theme === 'dark' ? 'bg-green-500/10 border border-green-500/20 text-green-300' : 'bg-green-50 border border-green-200 text-green-700'
                  : theme === 'dark' ? 'bg-red-500/10 border border-red-500/20 text-red-300' : 'bg-red-50 border border-red-200 text-red-700'
              }`}>
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </>
                )}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full p-3 rounded border bg-gray-200"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full p-3 rounded border bg-gray-200"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              required
              className="w-full p-3 rounded border bg-gray-200"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              required
              className="w-full p-3 rounded border bg-gray-200"
              rows={5}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded hover:scale-105 transition"
            >
              {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" /><span>Send Message</span></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
