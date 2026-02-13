import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export default function FacultyCard({ 
  avatar = "👨‍🏫",
  name = "Dr. Name",
  qualification = "M.Sc., Ph.D.",
  experience = "10 years",
  specialization = "Subject Specialization",
  subjects = ["Subject 1", "Subject 2"],
  bio = "Teacher bio",
  awards = []
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all group">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-24 relative">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-20 h-20 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center text-4xl shadow-lg">
            {avatar}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-6 pb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{name}</h3>
        <p className="text-sm text-center text-gray-600 mb-4">{qualification}</p>

        <div className="space-y-3 mb-6 border-t pt-4">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">{experience} experience</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">{specialization}</span>
          </div>
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">
              {subjects.join(", ")}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 italic border-t pt-4">
          "{bio}"
        </p>

        {awards.length > 0 && (
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <p className="text-xs font-bold text-yellow-800 mb-2">Awards:</p>
            <ul className="space-y-1">
              {awards.map((award, idx) => (
                <li key={idx} className="text-xs text-yellow-700 flex items-center gap-2">
                  <span className="text-yellow-600">⭐</span> {award}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}