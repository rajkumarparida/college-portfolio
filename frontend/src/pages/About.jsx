import React from 'react';
import { Award, Target, Heart, Zap, Users, BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      desc: 'Pursuit of academic excellence through rigorous teaching and continuous improvement',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Target,
      title: 'Integrity',
      desc: 'Upholding moral values and ethical standards in all academic and personal endeavors',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Heart,
      title: 'Compassion',
      desc: 'Creating a supportive environment where every student feels valued and respected',
      color: 'from-pink-400 to-red-600',
    },
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Embracing modern teaching methodologies and technology for enhanced learning',
      color: 'from-yellow-400 to-orange-600',
    },
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Foundation',
      desc: 'Chanakya Junior Science College established with vision to provide quality education',
    },
    {
      year: '2016',
      title: '100% Result',
      desc: 'Achieved 100% result rate for the first time, establishing academic excellence',
    },
    {
      year: '2018',
      title: 'Hostel Facility',
      desc: 'Opened separate boys and girls hostels with modern amenities and supervision',
    },
    {
      year: '2021',
      title: 'Digital Campus',
      desc: 'Upgraded to smart classrooms and digital learning management system',
    },
    {
      year: '2023',
      title: '500+ Students',
      desc: 'Milestone of educating 500+ students across all streams',
    },
    {
      year: '2024',
      title: '4.3 Rating',
      desc: '4.3 star rating with 38+ reviews from satisfied parents and students',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About CHANAKYA</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              A decade of excellence in higher secondary education, shaping future leaders and innovators
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be a leading institution that empowers young minds with knowledge, skills, and values,
                    nurturing them into responsible citizens and future leaders capable of contributing to
                    society's progress and global development.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-indigo-700" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To provide high-quality +2 science education through innovative teaching methods,
                    state-of-the-art facilities, and dedicated faculty, ensuring 100% success rate while
                    fostering holistic development and career readiness among all students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="Principles that guide every decision and action"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Journey"
            subtitle="A decade of continuous growth and excellence"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                      <div className="text-4xl font-bold text-blue-700 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-blue-700 rounded-full border-4 border-white shadow-lg mt-3"></div>
                  </div>

                  {/* Empty space */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why CHANAKYA */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose CHANAKYA?"
            subtitle="What sets us apart from other institutions"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: '100% Result Rate',
                desc: 'Consistent 100% pass rate with excellent grades, backed by rigorous preparation and comprehensive support systems.',
              },
              {
                icon: '👨‍🏫',
                title: 'Expert Faculty',
                desc: 'Experienced teachers with regular professional development, guest lectures from subject experts, and personalized attention.',
              },
              {
                icon: '🔬',
                title: 'Modern Labs',
                desc: 'Fully equipped physics, chemistry, and biology laboratories for hands-on learning and practical skill development.',
              },
              {
                icon: '📚',
                title: 'Comprehensive Library',
                desc: 'Extensive collection of reference books, journals, and digital resources supporting competitive exam preparation.',
              },
              {
                icon: '🏠',
                title: 'Safe Hostels',
                desc: 'Separate boys and girls hostels with nutritious meals, study-friendly environment, and round-the-clock supervision.',
              },
              {
                icon: '🎯',
                title: 'Career Guidance',
                desc: 'Dedicated career counseling, competitive exam coaching, and personality development programs for holistic growth.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Principal's Message</h3>
                <p className="text-blue-100 text-sm">Dr. Principal Name, M.Sc., Ph.D.</p>
              </div>
            </div>
            <p className="text-lg text-blue-50 leading-relaxed mb-6">
              "At Chanakya Junior Science College, we believe that education transcends beyond textbooks.
              Our commitment is to nurture young minds with not just academic knowledge, but also develop
              their character, critical thinking, and problem-solving abilities."
            </p>
            <p className="text-lg text-blue-50 leading-relaxed">
              "Every student has unlimited potential. Our dedicated faculty, world-class infrastructure,
              and supportive environment empower students to achieve their dreams. Join us in this journey
              of transformation and excellence."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards your bright future. Secure your admission today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="btn-primary">
              Apply Now →
            </Link>
            <a href="tel:06370230180" className="btn-secondary">
              Call: 06370230180
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}