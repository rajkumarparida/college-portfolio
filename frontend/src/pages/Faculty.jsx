import React, { useState } from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function Faculty() {
  const [activeSubject, setActiveSubject] = useState('physics');

  const facultyData = {
    physics: [
      {
        id: 1,
        name: 'Dr. Vikram Kumar Singh',
        qualification: 'M.Sc. Physics, Ph.D.',
        experience: '15 years',
        specialization: 'Classical Mechanics & Thermodynamics',
        subjects: ['Mechanics', 'Heat & Thermodynamics', 'Electromagnetism'],
        bio: 'Experienced physics educator with passion for making complex concepts simple and interesting.',
        awards: ['Best Teacher Award 2022', 'Science Excellence Award 2023'],
      },
      {
        id: 2,
        name: 'Prof. Arjun Nath Panda',
        qualification: 'M.Sc. Physics',
        experience: '12 years',
        specialization: 'Optics & Modern Physics',
        subjects: ['Light & Optics', 'Modern Physics', 'Waves'],
        bio: 'Dedicated to hands-on learning and experimental physics demonstrations.',
        awards: ['Innovation in Teaching Award 2021'],
      },
      {
        id: 3,
        name: 'Mrs. Priya Sharma',
        qualification: 'M.Sc. Physics, B.Ed.',
        experience: '10 years',
        specialization: 'Electricity & Magnetism',
        subjects: ['Current Electricity', 'Magnetism', 'Electromagnetic Induction'],
        bio: 'Known for clear explanations and student-friendly teaching approach.',
        awards: ['Innovation in Teaching Award 2021'],
      },
    ],
    chemistry: [
      {
        id: 4,
        name: 'Dr. Rajesh Kumar Mishra',
        qualification: 'M.Sc. Chemistry, Ph.D.',
        experience: '14 years',
        specialization: 'Organic & Inorganic Chemistry',
        subjects: ['Organic Chemistry', 'Inorganic Chemistry', 'Chemical Bonding'],
        bio: 'Expert in reaction mechanisms with a talent for visual problem-solving.',
        awards: ['Chemistry Excellence Award 2023', 'Innovation in Labs 2022'],
      },
      {
        id: 5,
        name: 'Prof. Neha Verma',
        qualification: 'M.Sc. Chemistry',
        experience: '11 years',
        specialization: 'Physical Chemistry',
        subjects: ['Thermodynamics', 'Kinetics', 'Equilibrium'],
        bio: 'Passionate about numerical problem-solving and concept clarity.',
        awards: ['Best Educator Award 2021'],
      },
      {
        id: 6,
        name: 'Mr. Ashok Rao',
        qualification: 'M.Sc. Chemistry, B.Ed.',
        experience: '9 years',
        specialization: 'Analytical & Applied Chemistry',
        subjects: ['Qualitative Analysis', 'Quantitative Analysis', 'Lab Safety'],
        bio: 'Emphasizes practical learning and safe laboratory practices.',
        awards: ['Innovation in Teaching Award 2021'],
      },
    ],
    biology: [
      {
        id: 7,
        name: 'Dr. Anjali Iyer',
        qualification: 'M.Sc. Biology, Ph.D.',
        experience: '13 years',
        specialization: 'Molecular Biology & Genetics',
        subjects: ['Molecular Biology', 'Genetics', 'Evolution'],
        bio: 'Research-oriented teacher with extensive knowledge of latest biological discoveries.',
        awards: ['Science Educator Award 2023', 'Research Excellence 2022'],
      },
      {
        id: 8,
        name: 'Prof. Sanjay Kumar Biswas',
        qualification: 'M.Sc. Biology',
        experience: '12 years',
        specialization: 'Human Physiology & Anatomy',
        subjects: ['Anatomy', 'Physiology', 'Medical Science'],
        bio: 'Medical background helps explain concepts with real-world healthcare examples.',
        awards: ['Innovation in Biology Labs 2021'],
      },
      {
        id: 9,
        name: 'Mrs. Divya Tiwari',
        qualification: 'M.Sc. Biology, B.Ed.',
        experience: '10 years',
        specialization: 'Ecology & Botany',
        subjects: ['Ecology', 'Botany', 'Environmental Science'],
        bio: 'Passionate about field work and ecological awareness.',
        awards: ['Innovation in Teaching Award 2021'],
      },
    ],
    mathematics: [
      {
        id: 10,
        name: 'Dr. Suresh Chandra Das',
        qualification: 'M.Sc. Mathematics, Ph.D.',
        experience: '16 years',
        specialization: 'Calculus & Complex Numbers',
        subjects: ['Calculus', 'Complex Numbers', 'Vectors'],
        bio: 'Master of conceptual clarity and problem-solving strategies.',
        awards: ['Mathematics Educator Award 2023', 'Excellence in Teaching 2022'],
      },
      {
        id: 11,
        name: 'Prof. Mohan Reddy',
        qualification: 'M.Sc. Mathematics',
        experience: '13 years',
        specialization: 'Algebra & Linear Algebra',
        subjects: ['Algebra', 'Matrices', 'Determinants'],
        bio: 'Specialist in competitive exam mathematics and advanced problem-solving.',
        awards: ['Best Teacher Award 2021'],
      },
      {
        id: 12,
        name: 'Mr. Ravi Shankar',
        qualification: 'M.Sc. Mathematics, B.Ed.',
        experience: '11 years',
        specialization: 'Trigonometry & Geometry',
        subjects: ['Trigonometry', 'Coordinate Geometry', '3D Geometry'],
        bio: 'Uses visual aids and geometric models for conceptual understanding.',
        awards: ['Innovation in Teaching Award 2021'],
      },
    ],
  };

  const subjects = [
    { key: 'physics', label: 'Physics Faculty', icon: '⚛️' },
    { key: 'chemistry', label: 'Chemistry Faculty', icon: '⚗️' },
    { key: 'biology', label: 'Biology Faculty', icon: '🧬' },
    { key: 'mathematics', label: 'Mathematics Faculty', icon: '📐' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experienced educators dedicated to student excellence
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Meet Our Expert Teachers"
            subtitle="Qualified, experienced, and passionate about education"
          />

          {/* Subject Tabs */}
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {subjects.map((subject) => (
              <button
                key={subject.key}
                onClick={() => setActiveSubject(subject.key)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeSubject === subject.key
                    ? 'bg-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {subject.icon} {subject.label}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData[activeSubject].map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24 relative">
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center text-4xl shadow-lg">
                      {teacher.subjects[0] === 'Mechanics' ? '⚛️' :
                       teacher.subjects[0] === 'Organic Chemistry' ? '⚗️' :
                       teacher.subjects[0] === 'Molecular Biology' ? '🧬' : '📐'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-16 px-6 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{teacher.name}</h3>
                  <p className="text-sm text-center text-gray-600 mb-4">{teacher.qualification}</p>

                  <div className="space-y-3 mb-6 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{teacher.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{teacher.specialization}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">
                        {teacher.subjects.join(', ')}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 italic border-t pt-4">
                    "{teacher.bio}"
                  </p>

                  {teacher.awards.length > 0 && (
                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <p className="text-xs font-bold text-yellow-800 mb-2">Awards & Recognition:</p>
                      <ul className="space-y-1">
                        {teacher.awards.map((award, idx) => (
                          <li key={idx} className="text-xs text-yellow-700 flex items-center gap-2">
                            <span className="text-yellow-600">⭐</span> {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Our Faculty Excels"
            subtitle="Characteristics that make us different"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Highly Qualified',
                desc: 'All faculty members are postgraduates with specializations in their respective fields',
              },
              {
                icon: '⏱️',
                title: 'Rich Experience',
                desc: '10-16+ years of teaching experience with proven track record of student success',
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'Regular adoption of new teaching methodologies and educational technology',
              },
              {
                icon: '🤝',
                title: 'Student-Centric',
                desc: 'Patient and approachable, available for individual doubts and guidance sessions',
              },
              {
                icon: '🏆',
                title: 'Award Winners',
                desc: 'Multiple teachers recognized with teaching excellence and innovation awards',
              },
              {
                icon: '📚',
                title: 'Continuous Learning',
                desc: 'Regular professional development and participation in academic workshops',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Support Team"
            subtitle="Administrative and support staff backing our faculty"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: 'Principal',
                count: '1',
                responsibility: 'Overall academic and administrative leadership',
              },
              {
                role: 'Vice Principal',
                count: '1',
                responsibility: 'Co-curricular activities and discipline management',
              },
              {
                role: 'Lab Assistants',
                count: '3',
                responsibility: 'Lab preparation and student practical supervision',
              },
              {
                role: 'Administrative Staff',
                count: '5',
                responsibility: 'Records, admission, and office management',
              },
            ].map((staff, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <div className="text-5xl font-bold text-blue-700 mb-4">{staff.count}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{staff.role}</h3>
                <p className="text-gray-700">{staff.responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Teaching Approach"
            subtitle="Innovative methods for effective learning"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Methods</h3>
              <ul className="space-y-4">
                {[
                  'Interactive classroom discussions and debates',
                  'Concept-mapping and visualization techniques',
                  'Regular practical demonstrations and experiments',
                  'Problem-solving and peer learning groups',
                  'Digital presentations and online resources',
                  'Mock exams and regular assessments',
                ].map((method, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Support</h3>
              <ul className="space-y-4">
                {[
                  'Individual doubt-clearing sessions',
                  'Personal academic guidance and mentoring',
                  'Career counseling and aptitude assessment',
                  'Competitive exam preparation support',
                  'Learning disability accommodations',
                  'Parental feedback and progress updates',
                ].map((support, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{support}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Learn Under Expert Guidance</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experienced faculty is ready to guide you to academic success
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