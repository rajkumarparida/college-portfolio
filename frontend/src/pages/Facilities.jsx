import React, { useState } from 'react';
import { Beaker, BookOpen, Microscope, Monitor, Users, Zap } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState(0);

  const facilities = [
    {
      id: 0,
      icon: Microscope,
      name: 'Biology Laboratory',
      description: 'Well-equipped laboratory with microscopes, slides, and specimens for advanced biology practical training',
      features: [
        'Advanced compound microscopes with digital imaging',
        'Specimen preservation and preparation kits',
        'Dissection tools and surgical instruments',
        'Charts, models, and 3D diagrams',
        'Safety equipment and first-aid kits',
        'Capacity: 40+ students per batch',
      ],
      image: '🔬',
    },
    {
      id: 1,
      icon: Beaker,
      name: 'Chemistry Laboratory',
      description: 'Modern chemistry lab with complete apparatus and chemicals for all board-level experiments and practicals',
      features: [
        'Burettes, pipettes, and volumetric apparatus',
        'Complete set of reagents and chemicals',
        'Distillation and extraction equipment',
        'Safety cabinets and ventilation systems',
        'Digital pH meters and balances',
        'Capacity: 40+ students per batch',
      ],
      image: '⚗️',
    },
    {
      id: 2,
      icon: Zap,
      name: 'Physics Laboratory',
      description: 'Physics lab equipped with precision instruments for mechanics, electricity, optics, and thermodynamics experiments',
      features: [
        'Precision meters and measuring instruments',
        'Electrical circuits and components',
        'Optics bench and optical instruments',
        'Mechanical apparatus and pulleys',
        'Sonometer and tuning forks',
        'Capacity: 40+ students per batch',
      ],
      image: '⚛️',
    },
    {
      id: 3,
      icon: BookOpen,
      name: 'Central Library',
      description: 'Comprehensive library with 5000+ books, journals, and reference materials for science students',
      features: [
        '5000+ textbooks and reference materials',
        'Scientific journals and magazines',
        'Board exam previous year papers',
        'Competitive exam preparation books',
        'Free Wi-Fi and reading rooms',
        'Extended hours: 7 AM - 6 PM daily',
      ],
      image: '📚',
    },
    {
      id: 4,
      icon: Monitor,
      name: 'Smart Classrooms',
      description: 'Digital-enabled classrooms with interactive boards, projectors, and online learning resources',
      features: [
        'Interactive smart boards (65" display)',
        'High-definition projectors',
        'Audio-visual presentation systems',
        'LMS (Learning Management System) access',
        'Online lecture recording facility',
        'Student strength: 35-40 per class',
      ],
      image: '💻',
    },
    {
      id: 5,
      icon: Users,
      name: 'Examination Hall',
      description: 'Well-designed examination center with all facilities for board exams and internal assessments',
      features: [
        'Spacious seating arrangement',
        'Proper ventilation and lighting',
        'Invigilator supervision system',
        'Emergency exit provisions',
        'Separate boys and girls sections',
        'Capacity: 200+ students simultaneously',
      ],
      image: '🏛️',
    },
  ];

  const amenities = [
    {
      icon: '🚰',
      name: 'Water & Sanitation',
      desc: 'Pure drinking water, clean toilets, and hand-washing facilities',
    },
    {
      icon: '🎲',
      name: 'Recreation Area',
      desc: 'Sports ground, volleyball, badminton, and outdoor play facilities',
    },
    {
      icon: '⚕️',
      name: 'Medical Facility',
      desc: 'First-aid room with trained staff and emergency medical support',
    },
    {
      icon: '🅿️',
      name: 'Parking',
      desc: 'Dedicated parking area for students and staff vehicles',
    },
    {
      icon: '☕',
      name: 'Cafeteria',
      desc: 'Healthy snacks and meals at affordable prices',
    },
    {
      icon: '🔒',
      name: 'CCTV Security',
      desc: '24/7 surveillance for campus safety and security',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              State-of-the-art infrastructure for enhanced learning experience
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Laboratory & Learning Spaces"
            subtitle="World-class facilities for science education"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Facility List */}
            <div className="lg:col-span-1 space-y-3">
              {facilities.map((facility, idx) => {
                const Icon = facility.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFacility(idx)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
                      activeFacility === idx
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{facility.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Facility Details */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-3xl border-2 border-blue-200">
                <div className="text-7xl mb-6">{facilities[activeFacility].image}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {facilities[activeFacility].name}
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {facilities[activeFacility].description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-600 uppercase">Key Features:</p>
                  {facilities[activeFacility].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Campus Amenities"
            subtitle="Everything you need for comfortable learning"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{amenity.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Facilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Hostel Facilities"
            subtitle="Safe, comfortable, and study-friendly accommodation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '👦',
                name: 'Boys Hostel',
                features: [
                  'Separate dormitory for boys',
                  'Well-furnished rooms with beds',
                  'Individual lockers and wardrobes',
                  'Study tables and reading lights',
                  'Nutritious meals (vegetarian & non-veg)',
                  'Supervision by male warden',
                  '24/7 security and CCTV',
                  'Laundry and housekeeping services',
                ],
              },
              {
                icon: '👧',
                name: 'Girls Hostel',
                features: [
                  'Separate dormitory for girls',
                  'Well-furnished rooms with beds',
                  'Individual lockers and wardrobes',
                  'Study tables and reading lights',
                  'Nutritious meals (vegetarian & non-veg)',
                  'Supervision by female warden',
                  '24/7 security and CCTV',
                  'Laundry and housekeeping services',
                ],
              },
            ].map((hostel, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border-2 border-blue-200">
                <div className="text-6xl mb-6">{hostel.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{hostel.name}</h3>
                <div className="space-y-3">
                  {hostel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Infrastructure */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Technology & Digital Learning"
            subtitle="Connected campus for modern education"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Speed Internet',
                desc: 'Campus-wide Wi-Fi connectivity with 100 Mbps bandwidth',
                icon: '📡',
              },
              {
                title: 'Digital Library',
                desc: 'Online access to e-books, journals, and research materials',
                icon: '📖',
              },
              {
                title: 'LMS Platform',
                desc: 'Learning Management System for online assignments and tests',
                icon: '💾',
              },
              {
                title: 'Smart Boards',
                desc: 'Interactive displays in all classrooms for engaging learning',
                icon: '🖥️',
              },
              {
                title: 'Video Conferencing',
                desc: 'Guest lectures and online classes via Zoom/Google Meet',
                icon: '📹',
              },
              {
                title: 'Mobile App',
                desc: 'College app for attendance, marks, and announcements',
                icon: '📱',
              },
            ].map((tech, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-center">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our Campus</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take a virtual tour or visit us in person to see our state-of-the-art facilities
          </p>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center border-2 border-gray-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🏫</div>
              <p className="text-gray-600">Virtual Campus Tour Coming Soon</p>
              <p className="text-sm text-gray-500 mt-2">Schedule a visit or join our online campus tour</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="tel:06370230180" className="btn-primary">
              Schedule Visit
            </a>
            <button className="btn-secondary">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a campus visit or contact us for detailed facility tour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all">
              Enquire Now
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