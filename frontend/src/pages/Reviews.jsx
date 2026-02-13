import React, { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);

  const reviews = [
    {
      author: 'Priya Mohapatra',
      role: 'Class XII PCB (2024)',
      achievement: 'NEET Qualified - AIIMS Delhi',
      rating: 5,
      text: 'Chanakya College completely transformed my life. The faculty here is extremely dedicated and supportive. The academic environment is so conducive that you naturally push yourself to excel. Special mention to the comprehensive study materials and regular practice tests. I got 94.8% and selected in AIIMS. Highly recommended!',
      verified: true,
    },
    {
      author: 'Akshay Singh',
      role: 'Class XII PCM (2024)',
      achievement: 'JEE Main Qualified - NIT Rourkela',
      rating: 5,
      text: 'The PCM curriculum here is world-class. Teachers explain every concept from basics with beautiful diagrams and demonstrations. The lab facilities are top-notch and helped me understand practical applications. Admission guidance was instrumental in my JEE preparation. Best decision to join Chanakya!',
      verified: true,
    },
    {
      author: 'Divya Patro',
      role: 'Class XII PCB (2023)',
      achievement: 'AIIMS Qualified - All India Rank 5',
      rating: 5,
      text: 'I came here with mediocre grades, but the teachers believed in me and pushed me to achieve my best. They provided individual attention and customized study plans. The hostel environment was supportive and motivating. Its not just about marks; they shape you as a person. Grateful forever!',
      verified: true,
    },
    {
      author: 'Rishav Kumar',
      role: 'Class XI Student',
      achievement: 'Pursuing PCM',
      rating: 5,
      text: 'Great college with excellent infrastructure. The teachers are very helpful and always available for doubt classes. The practical labs are well-equipped and the study environment is fantastic. My parents are very satisfied with the college and the progress I am making. Highly appreciated!',
      verified: true,
    },
    {
      author: 'Sneha Das',
      role: 'Class XII PCB (2023)',
      achievement: '92% | Delhi University',
      rating: 5,
      text: 'The best part about Chanakya is the holistic development approach. They focus not just on academics but also personality development. The hostels are comfortable, food is good, and the warden staff is caring. I made lifelong friends here. Excellent college!',
      verified: true,
    },
    {
      author: 'Arjun Patel',
      role: 'Class XII PCM (2023)',
      achievement: 'BITS Pilani Admission',
      rating: 5,
      text: 'Outstanding faculty and facilities. The teachers have industry experience and relate concepts to real-world applications. Regular test series and mock exams prepared us perfectly for board and competitive exams. The college truly cares about student success. I owe my success to Chanakya College!',
      verified: true,
    },
  ];

  const stats = [
    { label: 'Average Rating', value: 4.3, total: 5 },
    { label: 'Total Reviews', value: '38+', total: '' },
    { label: 'Verified Students', value: '100%', total: '' },
    { label: 'Recommendation Rate', value: '99%', total: '' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Student Reviews</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hear from our successful students and parents
            </p>
            <div className="mt-8">
              <div className="inline-block">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={32}
                        className="fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold">4.3</p>
                    <p className="text-sm text-blue-100">Based on 38+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 text-center">
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                {stat.total && <p className="text-sm text-gray-600 mt-1">out of {stat.total}</p>}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all"
            >
              + Share Your Review
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="What Students Say"
            subtitle="Real stories from our successful students"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-sm font-semibold text-blue-700 mt-1">
                    🎯 {review.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Rating Breakdown"
            subtitle="Distribution of student ratings"
          />
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { stars: 5, count: 35, percentage: 92 },
              { stars: 4, count: 3, percentage: 8 },
              { stars: 3, count: 0, percentage: 0 },
              { stars: 2, count: 0, percentage: 0 },
              { stars: 1, count: 0, percentage: 0 },
            ].map((rating, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-24">
                  <div className="flex gap-1">
                    {[...Array(rating.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <p className="font-bold text-gray-900">{rating.count}</p>
                  <p className="text-xs text-gray-600">{rating.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-12 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Share Your Review</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Your Role *</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none" required>
                    <option value="">Select your role</option>
                    <option value="student">Current Student</option>
                    <option value="alumni">Alumni</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Rating *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-yellow-400 hover:bg-yellow-50"
                      >
                        <Star size={20} className="mx-auto" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Review *</label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="Share your experience..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-all"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of a successful institution with 100% results and happy students
          </p>
          <a
            href="/admission"
            className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}