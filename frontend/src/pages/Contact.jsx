import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'OM, Shanti Nagar, Khallikot, Panditagaon, Odisha 761030',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '06370230180',
      link: 'tel:06370230180',
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@chanakya.edu',
      link: 'mailto:info@chanakya.edu',
      color: 'text-red-600',
    },
    {
      icon: Clock,
      title: 'Timing',
      details: 'Mon - Sat: 8:00 AM - 5:00 PM | Sun: Closed',
      color: 'text-purple-600',
    },
  ];

  const departments = [
    {
      name: 'Academic Office',
      phone: '06370230180',
      email: 'academics@chanakya.edu',
      description: 'Admission, classes, and academic matters',
    },
    {
      name: 'Hostel Office',
      phone: '06370230181',
      email: 'hostel@chanakya.edu',
      description: 'Hostel accommodation and facilities',
    },
    {
      name: 'Principal Office',
      phone: '06370230182',
      email: 'principal@chanakya.edu',
      description: 'General inquiries and official matters',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're here to answer any questions you have
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-white`}>
                    <Icon className={`w-7 h-7 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.details}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Visit Us"
            subtitle="Find our location on the map"
          />
          <div className="rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5563046486!2d84.5276!3d19.4658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19f1234567890d%3A0x1234567890abcdef!2sKhallikot%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <p className="text-gray-700">
              <strong>Google Maps Code:</strong> J35X+M6 Khallikot, Odisha | 
              <strong className="ml-4">Rating:</strong> 4.3⭐ (38 Reviews)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionTitle
                title="Send us a Message"
                subtitle="We'll get back to you as soon as possible"
                centered={false}
              />
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border-2 border-blue-200">
                {submitted && (
                  <div className="mb-6 p-6 bg-green-100 border-2 border-green-600 rounded-xl text-green-800">
                    <p className="font-bold mb-2">✓ Message Sent Successfully!</p>
                    <p>We'll contact you shortly. Thank you for reaching out!</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white"
                        placeholder="10-digit number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white"
                        required
                      >
                        <option value="">Select subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="hostel">Hostel Information</option>
                        <option value="academics">Academic Details</option>
                        <option value="facilities">Facilities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white"
                      placeholder="Your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </button>

                  <p className="text-center text-sm text-gray-600">
                    Fields marked with * are mandatory
                  </p>
                </form>
              </div>
            </div>

            {/* Department Contacts */}
            <div>
              <SectionTitle
                title="Department Contacts"
                subtitle="Direct lines to departments"
                centered={false}
              />
              <div className="space-y-4">
                {departments.map((dept, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Phone:</span>{' '}
                        <a href={`tel:${dept.phone}`} className="text-blue-600 hover:text-blue-800">
                          {dept.phone}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-800">
                          {dept.email}
                        </a>
                      </p>
                      <p className="text-gray-600 italic pt-2 border-t">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is the admission process?',
                a: 'Admission is based on merit using Class X marks. Fill the application form, submit documents, and wait for merit list notification.',
              },
              {
                q: 'Are hostels mandatory?',
                a: 'No, hostels are optional. Both day scholars and hostel students are welcome. Day scholars get transport facility.',
              },
              {
                q: 'What are the streams offered?',
                a: 'We offer PCM (Physics, Chemistry, Mathematics) and PCB (Physics, Chemistry, Biology) for Class XI & XII.',
              },
              {
                q: 'What is the fee structure?',
                a: 'Tuition fee is ₹15,000/year. Lab & library fees are ₹5,000/year. Hostel is ₹50,000/year (optional).',
              },
              {
                q: 'Do you provide scholarship?',
                a: 'Yes, merit-based scholarships are available for deserving students. Contact the admission office for details.',
              },
              {
                q: 'What is your result rate?',
                a: '100% result rate for 10+ years. We also have excellent placements in top universities and institutes.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <h4 className="text-lg font-bold text-gray-900">{faq.q}</h4>
                </div>
                <p className="text-gray-700 ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-8">Stay updated with latest news and announcements</p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'Facebook', icon: '📘', url: '#' },
              { name: 'Instagram', icon: '📷', url: '#' },
              { name: 'Twitter', icon: '𝕏', url: '#' },
              { name: 'YouTube', icon: '▶️', url: '#' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl hover:bg-blue-700 hover:text-white transition-all"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Visit us in person or give us a call. We're always happy to help!
          </p>
          <a
            href="tel:06370230180"
            className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all"
          >
            📞 Call Now: 06370230180
          </a>
        </div>
      </section>
    </div>
  );
}