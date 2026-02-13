import React from 'react';
import { Trophy, TrendingUp, Star, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function Results() {
  const yearlyResults = [
    { year: '2024', passPercentage: 100, totalStudents: 280, distinction: 95, firstClass: 140, secondClass: 45 },
    { year: '2023', passPercentage: 100, totalStudents: 265, distinction: 88, firstClass: 130, secondClass: 47 },
    { year: '2022', passPercentage: 100, totalStudents: 252, distinction: 82, firstClass: 125, secondClass: 45 },
    { year: '2021', passPercentage: 100, totalStudents: 238, distinction: 75, firstClass: 115, secondClass: 48 },
  ];

  const toppers = [
    {
      rank: 1,
      name: 'Priya Mohapatra',
      stream: 'PCB',
      percentage: 94.8,
      marks: 474,
      achievements: ['NEET Qualified', 'State Rank - 3', 'District Topper'],
    },
    {
      rank: 2,
      name: 'Akshay Singh',
      stream: 'PCM',
      percentage: 93.5,
      marks: 467,
      achievements: ['JEE Main Qualified', 'State Rank - 7', 'District Second'],
    },
    {
      rank: 3,
      name: 'Divya Patro',
      stream: 'PCB',
      percentage: 92.7,
      marks: 463,
      achievements: ['AIIMS Qualified', 'State Rank - 5', 'District Topper (Biology)'],
    },
  ];

  const achievements = [
    { icon: Trophy, title: '100% Result Rate', desc: 'Consistent pass rate for 10+ years', color: 'text-yellow-600' },
    { icon: Star, title: '95% Distinction', desc: 'Students scoring 60% and above', color: 'text-blue-600' },
    { icon: Award, title: '500+ Success Stories', desc: 'Students in top colleges and universities', color: 'text-green-600' },
    { icon: TrendingUp, title: 'Improving Every Year', desc: 'Consistent improvement in results and placements', color: 'text-indigo-600' },
  ];

  const careersData = [
    { institute: 'AIIMS', count: 8, stream: 'PCB' },
    { institute: 'JIPMER', count: 5, stream: 'PCB' },
    { institute: 'NIT Rourkela', count: 12, stream: 'PCM' },
    { institute: 'BITS Pilani', count: 6, stream: 'PCM' },
    { institute: 'Delhi University', count: 25, stream: 'PCB' },
    { institute: 'IIT Madras', count: 3, stream: 'PCM' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Results</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              100% Result Rate with Consistent Excellence Year After Year
            </p>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Achievement Highlights"
            subtitle="Excellence reflected in numbers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all text-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100`}>
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yearly Results */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Year-wise Results"
            subtitle="100% Pass Rate with Improving Performance"
          />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-bold">Year</th>
                  <th className="px-6 py-4 text-left font-bold">Total Students</th>
                  <th className="px-6 py-4 text-left font-bold">Pass %</th>
                  <th className="px-6 py-4 text-left font-bold">Distinction (≥60%)</th>
                  <th className="px-6 py-4 text-left font-bold">First Class (50-60%)</th>
                  <th className="px-6 py-4 text-left font-bold">Second Class</th>
                </tr>
              </thead>
              <tbody>
                {yearlyResults.map((result, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <td className="px-6 py-4 font-bold text-blue-700">{result.year}</td>
                    <td className="px-6 py-4 text-gray-700">{result.totalStudents}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                        {result.passPercentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">{result.distinction}</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">{result.firstClass}</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">{result.secondClass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="2024 Academic Toppers"
            subtitle="Stars who excelled in board exams"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((topper, idx) => (
              <div key={idx} className={`rounded-3xl overflow-hidden border-2 ${idx === 0 ? 'border-yellow-400 shadow-2xl transform scale-105' : idx === 1 ? 'border-gray-300 shadow-xl' : 'border-orange-300 shadow-lg'}`}>
                {/* Medal Badge */}
                <div className={`text-center py-6 ${idx === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : idx === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400' : 'bg-gradient-to-r from-orange-400 to-orange-500'} text-white`}>
                  <div className="text-5xl mb-2">{idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}</div>
                  <p className="text-xl font-bold">Rank {topper.rank}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{topper.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">Stream: <span className="font-semibold">{topper.stream}</span></p>

                  {/* Percentage & Marks */}
                  <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-200">
                    <p className="text-gray-600 text-sm mb-2">Marks Obtained</p>
                    <p className="text-4xl font-bold text-blue-700 mb-4">{topper.marks}/500</p>
                    <p className="text-gray-600 text-sm">Percentage: <span className="font-bold text-blue-700">{topper.percentage}%</span></p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <p className="text-sm font-bold text-gray-700 mb-3">Key Achievements:</p>
                    <ul className="space-y-2">
                      {topper.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Placement */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Student Placements in Top Institutes"
            subtitle="Where our students study"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersData.map((career, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{career.institute}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-sm">
                    {career.count}+
                  </span>
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">Stream:</span> {career.stream}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Trends */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Performance Analysis"
            subtitle="Consistent improvement and excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Pass Rate Trend',
                stats: [
                  { year: '2021', value: 100 },
                  { year: '2022', value: 100 },
                  { year: '2023', value: 100 },
                  { year: '2024', value: 100 },
                ],
              },
              {
                title: 'Distinction Rate',
                stats: [
                  { year: '2021', value: 75 },
                  { year: '2022', value: 82 },
                  { year: '2023', value: 88 },
                  { year: '2024', value: 95 },
                ],
              },
            ].map((chart, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{chart.title}</h3>
                <div className="space-y-6">
                  {chart.stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">{stat.year}</span>
                        <span className="font-bold text-blue-700">{stat.value}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${stat.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Testimonial */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Story</h3>
            </div>
            <blockquote className="text-xl text-gray-700 italic text-center mb-6">
              "Chanakya College transformed my life. With dedicated teachers, excellent facilities, and supportive environment, I achieved 94.8% and got selected in AIIMS Delhi. It's not just about academics but holistic development."
            </blockquote>
            <p className="text-center font-bold text-blue-700">
              — Priya Mohapatra, Class XII PCB (2024) | AIIMS Qualified
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Achieve Excellence?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our college and become part of our success story
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