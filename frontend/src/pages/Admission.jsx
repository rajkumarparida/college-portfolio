import React, { useState } from 'react';
import { CheckCircle, FileText, Calendar, AlertCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    previousSchool: '',
    marks10: '',
    stream: '',
    hostel: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const eligibility = [
    'Passed 10th board exam with minimum 50% marks (40% for SC/ST)',
    'Regular student (not private candidate)',
    'Appeared from any recognized school',
    'Age limit: No age restriction',
    'No subject restrictions',
  ];

  const documents = [
    'Original 10th board mark sheet and certificate',
    'Transfer Certificate (TC) from previous school',
    'Character Certificate from previous school',
    '6 passport-size photographs',
    'Aadhar card copy',
    'Cast Certificate (if applicable)',
    'Income Certificate (for scholarship)',
    'Medical fitness certificate',
  ];

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      desc: 'Submit filled application form with required documents',
      timeline: 'Ongoing',
    },
    {
      step: 2,
      title: 'Merit List',
      desc: 'Merit list will be displayed based on 10th marks',
      timeline: 'Monthly',
    },
    {
      step: 3,
      title: 'Document Verification',
      desc: 'Selected candidates will undergo document verification',
      timeline: 'As per notification',
    },
    {
      step: 4,
      title: 'Final Admission',
      desc: 'Final admission and class assignment',
      timeline: 'Immediate after verification',
    },
  ];

  const importantDates = [
    { event: 'Application Start', date: 'April 2024' },
    { event: 'Application Close', date: 'May 31, 2024' },
    { event: 'Merit List Notification', date: 'June 15, 2024' },
    { event: 'Document Verification', date: 'June 20-25, 2024' },
    { event: 'Classes Begin', date: 'July 1, 2024' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions Open</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Class XI & XII | PCM & PCB Streams
            </p>
            <div className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold">
              ✓ Admission Currently Open
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Streams', value: 'PCM & PCB' },
              { label: 'Classes', value: 'XI & XII' },
              { label: 'Seats Available', value: '200+' },
              { label: 'Admission', value: 'Merit-Based' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 text-center">
                <p className="text-gray-600 mb-2">{item.label}</p>
                <p className="text-3xl font-bold text-blue-700">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Eligibility Criteria"
            subtitle="Who can apply for admission?"
          />
          <div className="bg-white rounded-3xl p-12 border-2 border-blue-200">
            <ul className="space-y-4">
              {eligibility.map((criteria, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{criteria}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Required Documents"
            subtitle="Documents needed for admission process"
          />
          <div className="bg-yellow-50 border-2 border-yellow-300 p-8 rounded-2xl mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                Keep all original documents ready for document verification. Photocopies must be attested by school principal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Admission Process"
            subtitle="Step-by-step guide to get admission"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((process, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-300 h-full">
                  <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 mb-4">{process.desc}</p>
                  <p className="text-sm font-semibold text-blue-700">Timeline: {process.timeline}</p>
                </div>
                {idx < admissionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Important Dates"
            subtitle="Mark your calendar"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {importantDates.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600">
                <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="font-bold text-gray-900">{item.event}</p>
                </div>
                <p className="text-blue-700 font-bold text-lg">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="Online Application Form"
            subtitle="Fill the form below to apply"
          />
          <div className="bg-white rounded-3xl p-12 border-2 border-blue-300 shadow-lg">
            {submitted && (
              <div className="mb-8 p-6 bg-green-100 border-2 border-green-600 rounded-xl text-green-800">
                <p className="font-bold mb-2">✓ Application Submitted Successfully!</p>
                <p>We will contact you at the provided email and phone number soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
              </div>

              {/* Previous School */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Previous School Name *</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="School name and location"
                  required
                />
              </div>

              {/* Class X Marks */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Class X Percentage *</label>
                <input
                  type="number"
                  name="marks10"
                  value={formData.marks10}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="85.5"
                  min="0"
                  max="100"
                  step="0.1"
                  required
                />
              </div>

              {/* Stream Selection */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Preferred Stream *</label>
                <select
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                >
                  <option value="">Select your preferred stream</option>
                  <option value="pcm">Science PCM (Physics, Chemistry, Mathematics)</option>
                  <option value="pcb">Science PCB (Physics, Chemistry, Biology)</option>
                </select>
              </div>

              {/* Hostel */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Hostel Requirement</label>
                <select
                  name="hostel"
                  value={formData.hostel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select hostel requirement</option>
                  <option value="yes">Yes, I need hostel accommodation</option>
                  <option value="no">No, I don't need hostel</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Submit Application
              </button>

              <p className="text-center text-sm text-gray-600">
                Fields marked with * are mandatory
              </p>
            </form>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <p className="text-gray-700">
              <strong>Note:</strong> This is a preliminary registration form. Complete documentation and fee payment will be required during document verification.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Fee Structure"
            subtitle="Affordable and transparent pricing"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Tuition Fee',
                amount: '₹15,000',
                period: 'Per Year',
                description: 'Tuition and classroom instruction',
              },
              {
                category: 'Lab & Library',
                amount: '₹5,000',
                period: 'Per Year',
                description: 'Laboratory and library access',
              },
              {
                category: 'Hostel (Optional)',
                amount: '₹50,000',
                period: 'Per Year',
                description: 'Accommodation with meals',
              },
            ].map((fee, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{fee.category}</h3>
                <div className="mb-4">
                  <p className="text-4xl font-bold text-blue-700">{fee.amount}</p>
                  <p className="text-sm text-gray-600">{fee.period}</p>
                </div>
                <p className="text-gray-700">{fee.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-xl text-center">
            <p className="text-gray-700 mb-2">
              <strong>Scholarship Available!</strong> Merit-based scholarships for deserving students.
            </p>
            <p className="text-sm text-gray-600">Contact the admission office for scholarship eligibility</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our admission team for more information
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <a
              href="tel:06370230180"
              className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all backdrop-blur"
            >
              📞 Call: 06370230180
            </a>
            <a
              href="mailto:admission@chanakya.edu"
              className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-lg font-bold transition-all backdrop-blur"
            >
              ✉️ Email: info@chanakya.edu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}