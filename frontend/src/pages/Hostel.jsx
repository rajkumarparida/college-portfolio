import React, { useState } from 'react';
import { Users, Utensils, BookOpen, Heart, Shield, Wifi } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function Hostel() {
  const [activeHostel, setActiveHostel] = useState('boys');

  const hostelData = {
    boys: {
      name: 'Boys Hostel',
      icon: '👦',
      capacity: '150+',
      warden: 'Mr. Rajesh Kumar (Warden)',
      features: [
        'Spacious dormitory rooms (4-6 beds per room)',
        'Well-maintained furniture and bedding',
        'Individual lockers for personal items',
        'Study tables with reading lights',
        'Attached bathrooms on each floor',
        'Hot water availability 24/7',
        'Common room with TV and recreational facilities',
        'Laundry services (weekly)',
      ],
      rules: [
        'Check-in by 8:00 PM on weekdays',
        'Lights out at 10:00 PM during academic year',
        'No alcohol or tobacco allowed',
        'No overnight guests without permission',
        'Maintenance of discipline and hygiene',
        'Participation in hostel activities',
        'Compliance with college rules and regulations',
      ],
      meals: [
        '7:30 AM - Breakfast (Tea/Coffee, Bread, Vegetables)',
        '12:30 PM - Lunch (Rice, Dal, Vegetables, Salad)',
        '4:00 PM - Tea/Coffee with Snacks',
        '7:30 PM - Dinner (Rice, Dal, Vegetables, Accompaniments)',
        'Special meals on festivals and celebrations',
        'Vegetarian options available for all meals',
      ],
    },
    girls: {
      name: 'Girls Hostel',
      icon: '👧',
      capacity: '100+',
      warden: 'Mrs. Priya Singh (Warden)',
      features: [
        'Comfortable dormitory rooms (3-4 beds per room)',
        'Quality furniture and linens',
        'Individual storage lockers',
        'Dedicated study areas per room',
        'Private bathrooms on each floor',
        'Hot water service 24/7',
        'Common recreation and study rooms',
        'Weekly laundry and housekeeping services',
      ],
      rules: [
        'Check-in by 8:00 PM on weekdays',
        'Lights out at 10:00 PM during academic year',
        'Zero tolerance for alcohol or substance abuse',
        'Visitor guidelines strictly enforced',
        'Active participation in hostel activities',
        'Maintenance of room cleanliness and discipline',
        'Adherence to college and hostel code of conduct',
      ],
      meals: [
        '7:30 AM - Breakfast (Tea/Coffee, Toast, Vegetables)',
        '12:30 PM - Lunch (Rice, Dal, Vegetables, Salad)',
        '4:00 PM - Tea/Coffee with Snacks',
        '7:30 PM - Dinner (Rice, Dal, Vegetables, Side dishes)',
        'Festival celebrations with special meals',
        'Vegetarian and special dietary options available',
      ],
    },
  };

  const amenities = [
    { icon: Utensils, title: 'Nutritious Meals', desc: '4 meals daily with balanced nutrition' },
    { icon: BookOpen, title: 'Study Rooms', desc: 'Silent study halls for academic focus' },
    { icon: Heart, title: 'Medical Support', desc: 'First-aid and health care services' },
    { icon: Shield, title: '24/7 Security', desc: 'CCTV and security personnel' },
    { icon: Wifi, title: 'Internet', desc: 'High-speed Wi-Fi in all rooms' },
    { icon: Users, title: 'Activities', desc: 'Sports and cultural programs' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hostel Facilities</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Safe, comfortable, and supportive accommodation for away-from-home students
            </p>
          </div>
        </div>
      </section>

      {/* Hostel Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Hostels"
            subtitle="Separate, safe, and well-maintained accommodations"
          />

          {/* Hostel Tabs */}
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            <button
              onClick={() => setActiveHostel('boys')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeHostel === 'boys'
                  ? 'bg-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👦 Boys Hostel
            </button>
            <button
              onClick={() => setActiveHostel('girls')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                activeHostel === 'girls'
                  ? 'bg-indigo-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              👧 Girls Hostel
            </button>
          </div>

          {/* Hostel Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Overview */}
            <div className="lg:col-span-2 space-y-8">
              <div className={`bg-gradient-to-br ${activeHostel === 'boys' ? 'from-blue-50 to-blue-100' : 'from-indigo-50 to-indigo-100'} p-12 rounded-3xl border-2 ${activeHostel === 'boys' ? 'border-blue-300' : 'border-indigo-300'}`}>
                <div className="text-6xl mb-6">{hostelData[activeHostel].icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{hostelData[activeHostel].name}</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-600 mb-2">Capacity</p>
                    <p className="text-3xl font-bold text-blue-700">{hostelData[activeHostel].capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Warden</p>
                    <p className="text-lg font-semibold text-gray-900">{hostelData[activeHostel].warden}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Room & Facilities</h3>
                <div className="space-y-3">
                  {hostelData[activeHostel].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hostel Rules & Discipline</h3>
                <div className="space-y-3">
                  {hostelData[activeHostel].rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <Shield className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Meals & Info */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${activeHostel === 'boys' ? 'from-blue-600 to-blue-700' : 'from-indigo-600 to-indigo-700'} p-8 rounded-2xl text-white`}>
                <h3 className="text-2xl font-bold mb-6">Daily Meal Schedule</h3>
                <div className="space-y-3">
                  {hostelData[activeHostel].meals.map((meal, idx) => (
                    <div key={idx} className={`pb-3 ${idx !== hostelData[activeHostel].meals.length - 1 ? 'border-b border-blue-400/30' : ''}`}>
                      <p className="font-semibold">{meal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4">Quick Info</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Check-in</p>
                    <p className="font-semibold">By 8:00 PM (Weekdays)</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-gray-600">Check-out</p>
                    <p className="font-semibold">As per college calendar</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-gray-600">Fees</p>
                    <p className="font-semibold">Affordable & transparent</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-gray-600">Medical</p>
                    <p className="font-semibold">24/7 First-aid facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Premium Amenities"
            subtitle="Everything students need for comfortable living"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-7 h-7 text-blue-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel Life */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Hostel Life & Activities"
            subtitle="More than just accommodation - a home away from home"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Cultural Activities',
                items: [
                  'Annual hostel fest and celebrations',
                  'Cultural programs on national holidays',
                  'Inter-hostel competitions',
                  'Music and art events',
                  'Talent hunt and creative pursuits',
                ],
              },
              {
                title: 'Sports & Recreation',
                items: [
                  'Indoor games (Chess, Carrom, Table Tennis)',
                  'Outdoor sports facilities',
                  'Inter-hostel tournaments',
                  'Fitness and wellness programs',
                  'Movie nights and entertainment',
                ],
              },
              {
                title: 'Academic Support',
                items: [
                  'Quiet study zones',
                  'Group study facilities',
                  'Library access',
                  'Internet for research',
                  'Doubt-clearing sessions',
                ],
              },
              {
                title: 'Personal Development',
                items: [
                  'Leadership workshops',
                  'Personality development programs',
                  'Community service activities',
                  'Guest lectures',
                  'Career guidance sessions',
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Hostel Family</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience safe, supportive, and comfortable accommodation with peer support and guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admission" className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all">
              Apply for Hostel
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