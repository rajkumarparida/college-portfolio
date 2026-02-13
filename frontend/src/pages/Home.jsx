import React from 'react';
import { Zap, Heart, Users, Target } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import StreamCard from '../components/StreamCard';
import FacilityCard from '../components/FacilityCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Disciplined Campus',
      desc: 'Structured environment fostering excellence and character development',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      desc: 'Experienced teachers with guest lecturers from premier institutions',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      desc: 'Personality development & career guidance programs',
    },
    {
      icon: Target,
      title: 'Regular Tests',
      desc: 'Weekly assessments to track progress and ensure mastery',
    },
  ];

  const streams = [
    {
      icon: '⚛️',
      name: '+2 Science (PCM)',
      fullName: 'Physics, Chemistry, Mathematics',
      description: 'Perfect for aspiring engineers and technologists',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      careers: ['Engineering', 'Technology', 'Research', 'Architecture'],
    },
    {
      icon: '🧬',
      name: '+2 Science (PCB)',
      fullName: 'Physics, Chemistry, Biology',
      description: 'Ideal for future doctors and life scientists',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      careers: ['Medicine', 'Dentistry', 'Research', 'Pharmacy'],
    },
  ];

  const topFacilities = [
    {
      icon: '🔬',
      title: 'Modern Laboratories',
      description: 'State-of-the-art physics, chemistry, and biology labs',
      features: ['Advanced equipment', 'Practical training', 'Safety standards'],
    },
    {
      icon: '📚',
      title: 'Central Library',
      description: '5000+ books and digital resources for learning',
      features: ['Reference materials', 'Journals', 'Online access'],
    },
    {
      icon: '💻',
      title: 'Smart Classrooms',
      description: 'Digital-enabled learning environment',
      features: ['Interactive boards', 'Online platform', 'Projectors'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Preview */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="About Our College"
                subtitle="Excellence in Higher Secondary Education"
                centered={false}
              />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Chanakya Junior Science College is a premier institution offering quality
                higher secondary education for Class 11 & 12. Affiliated to CHSE Odisha, we
                pride ourselves on our 100% result rate and holistic approach to education.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">CHSE Affiliated</h4>
                    <p className="text-sm text-gray-600">Recognized by Council of Higher
                      Secondary Education, Odisha</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Two Science Streams</h4>
                    <p className="text-sm text-gray-600">PCM (Physics, Chemistry, Math) & PCB
                      (Physics, Chemistry, Biology)</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary inline-block">
                Learn More →
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col justify-center items-center">
                  <div className="text-6xl mb-6">🏫</div>
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Building Future Leaders
                  </h3>
                  <p className="text-center text-gray-600 text-sm">
                    Since 2014, we've been shaping bright minds and nurturing talents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose Chanakya?"
            subtitle="Excellence through dedicated teaching and comprehensive support"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition-all">
                    <Icon size={24} className="text-blue-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Streams Preview - Using StreamCard Component */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Science Streams Offered"
            subtitle="Choose the right stream for your future"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {streams.map((stream, idx) => (
              <StreamCard
                key={idx}
                icon={stream.icon}
                name={stream.name}
                fullName={stream.fullName}
                description={stream.description}
                subjects={stream.subjects}
                careers={stream.careers}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/academics" className="btn-primary">
              Explore Academics →
            </Link>
          </div>
        </div>
      </section>

      {/* Top Facilities - Using FacilityCard Component */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Top Facilities"
            subtitle="Modern infrastructure for quality learning"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topFacilities.map((facility, idx) => (
              <FacilityCard
                key={idx}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                features={facility.features}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/facilities" className="btn-secondary">
              View All Facilities →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Using CTASection Component */}
      <CTASection 
        title="Ready to Transform Your Future?"
        subtitle="Admission is open for Class 11 & 12. Limited seats available. Apply now!"
        primaryText="Apply Now"
        primaryLink="/admission"
        secondaryText="Call: 06370230180"
        secondaryLink="tel:06370230180"
      />
    </div>
  );
}