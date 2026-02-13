import React, { useState } from 'react';
import { BookOpen, Zap, Users, Target, CheckCircle, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('pcm');

  const streams = {
    pcm: {
      name: '+2 Science (PCM)',
      fullName: 'Physics, Chemistry, Mathematics',
      description: 'Perfect for aspiring engineers and technologists',
      icon: '⚛️',
      subjects: [
        { name: 'Physics', hours: 'Class XI & XII' },
        { name: 'Chemistry', hours: 'Class XI & XII' },
        { name: 'Mathematics', hours: 'Class XI & XII' },
      ],
      careers: ['Engineering', 'Technology', 'Research', 'Architecture', 'Physics', 'Mathematics'],
      features: [
        'Lab-intensive curriculum with regular practicals',
        'Problem-solving focused teaching methodology',
        'JEE & competitive exam preparation',
        'Weekly test series and mock exams',
        'Advanced mathematics concepts',
      ],
    },
    pcb: {
      name: '+2 Science (PCB)',
      fullName: 'Physics, Chemistry, Biology',
      description: 'Ideal for future doctors, researchers, and life scientists',
      icon: '🧬',
      subjects: [
        { name: 'Physics', hours: 'Class XI & XII' },
        { name: 'Chemistry', hours: 'Class XI & XII' },
        { name: 'Biology', hours: 'Class XI & XII' },
      ],
      careers: ['Medical', 'Dentistry', 'Nursing', 'Pharmacy', 'Research', 'Veterinary'],
      features: [
        'Comprehensive biology practicals and dissection exercises',
        'Medical entrance exam (NEET) focused curriculum',
        'Lab safety and scientific methodology training',
        'Regular assessments and performance tracking',
        'Guest lectures from medical professionals',
      ],
    },
  };

  const curriculum = [
    {
      class: 'Class XI',
      duration: '1 Year',
      focus: 'Foundation building with conceptual clarity',
    },
    {
      class: 'Class XII',
      duration: '1 Year',
      focus: 'Advanced topics with competitive exam preparation',
    },
  ];

  const academicFeatures = [
    {
      icon: Award,
      title: 'Expert Faculty',
      desc: 'Experienced teachers with postgraduate qualifications and regular professional development',
    },
    {
      icon: BookOpen,
      title: 'Updated Curriculum',
      desc: 'CHSE-aligned syllabus with latest educational standards and modern teaching methods',
    },
    {
      icon: Zap,
      title: 'Smart Classrooms',
      desc: 'Digital learning environment with projectors, interactive boards, and online resources',
    },
    {
      icon: Target,
      title: 'Regular Assessments',
      desc: 'Weekly tests, monthly exams, and mock board papers to track progress and improve performance',
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      desc: 'Limited students per section ensuring personalized attention and doubt-clearing sessions',
    },
    {
      icon: Award,
      title: 'Counseling Support',
      desc: 'Academic and career counseling, aptitude assessment, and guidance for entrance exams',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Academics</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              CHSE-Affiliated Curriculum with 100% Result Rate
            </p>
          </div>
        </div>
      </section>

      {/* Stream Selection */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Science Streams"
            subtitle="Choose your path to success"
          />

          {/* Tab Buttons */}
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {['pcm', 'pcb'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab === 'pcm' ? '⚛️ PCM Stream' : '🧬 PCB Stream'}
              </button>
            ))}
          </div>

          {/* Stream Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Stream Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-200">
                <div className="text-6xl mb-6">{streams[activeTab].icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{streams[activeTab].name}</h2>
                <p className="text-xl text-gray-600 mb-4">{streams[activeTab].fullName}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{streams[activeTab].description}</p>
              </div>

              {/* Subjects */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Subjects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {streams[activeTab].subjects.map((subject, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                      <div className="text-3xl font-bold text-blue-700 mb-2">0{idx + 1}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{subject.name}</h4>
                      <p className="text-sm text-gray-600">{subject.hours}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="space-y-3">
                  {streams[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <CheckCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Career Paths */}
            <div className="bg-gradient-to-br from-indigo-700 to-blue-700 p-8 rounded-2xl text-white h-fit sticky top-32">
              <h3 className="text-2xl font-bold mb-6">Career Paths</h3>
              <div className="space-y-3">
                {streams[activeTab].careers.map((career, idx) => (
                  <div key={idx} className="flex items-center gap-3 pb-3 border-b border-blue-500/30">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <p className="font-medium">{career}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-white text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-50 transition-all">
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Class Structure"
            subtitle="Two-year comprehensive program"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
                <div className="text-5xl font-bold text-blue-700 mb-4">{item.class}</div>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Duration:</span> {item.duration}
                </p>
                <p className="text-gray-700 mb-6">{item.focus}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Conceptual learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Practical training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Regular assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Board exam preparation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Academic Highlights"
            subtitle="Excellence through comprehensive support"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    <Icon className="w-7 h-7 text-blue-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Schedule */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Daily Schedule"
            subtitle="Structured learning for optimal results"
          />
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
              {[
                { time: '8:00 - 8:30 AM', activity: 'Assembly & Morning Session' },
                { time: '8:30 - 10:00 AM', activity: 'First Session (Theory)' },
                { time: '10:00 - 10:15 AM', activity: 'Break & Refreshment' },
                { time: '10:15 - 11:45 AM', activity: 'Second Session (Theory)' },
                { time: '11:45 - 1:15 PM', activity: 'Third Session (Lab/Practical)' },
                { time: '1:15 - 2:00 PM', activity: 'Lunch Break' },
                { time: '2:00 - 3:30 PM', activity: 'Fourth Session (Revision/Tests)' },
                { time: '3:30 - 5:00 PM', activity: 'Fifth Session & Doubt Classes' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-blue-50 transition-all">
                  <div className="text-blue-700 font-bold text-lg mb-2">{item.time}</div>
                  <div className="text-gray-700 font-medium">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Board Exam Preparation"
            subtitle="Strategic approach to achieve 100% results"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Assessment Strategy</h3>
              {[
                'Weekly Unit Tests - Cover 1-2 chapters per test',
                'Monthly Exams - Full syllabus assessment',
                'Mock Board Papers - Real exam simulation',
                'Semester Assessments - Comprehensive evaluation',
                'Pre-Board Exams - Final preparation 3 months before board',
                'Board Exam Orientation - Last-minute tips and guidance',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Award className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Competitive Exam Support</h3>
              {[
                'JEE (Main & Advanced) - Engineering entrance preparation',
                'NEET - Medical and health science entrance exam',
                'BITSAT - Birla Institute entrance test',
                'AIIMS - Medical entrance examination',
                'Scholarship Exams - Financial aid preparation',
                'State Level Exams - OJEE and other state exams',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                  <Award className="w-6 h-6 text-indigo-700 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Excel Academically?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful students who achieved their dreams at Chanakya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all">
              Apply Now
            </Link>
            <a href="tel:06370230180" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Call: 06370230180
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}