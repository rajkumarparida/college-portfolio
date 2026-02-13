import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewCard({ 
  author = "Student Name",
  role = "Class XII PCB",
  achievement = "Achievement",
  rating = 5,
  text = "Review text here",
  verified = true
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
      {/* Rating */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        {verified && (
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
            ✓ Verified
          </span>
        )}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="border-t pt-4">
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
        {achievement && (
          <p className="text-sm font-semibold text-blue-700 mt-1">
            🎯 {achievement}
          </p>
        )}
      </div>
    </div>
  );
}