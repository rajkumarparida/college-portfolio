import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function StreamCard({ 
  icon = "⚛️",
  name = "PCM Stream",
  fullName = "Physics, Chemistry, Mathematics",
  description = "Stream description",
  subjects = [],
  careers = []
}) {
  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group card-hover">
      <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{fullName}</p>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

      {/* Subjects */}
      {subjects.length > 0 && (
        <div className="mb-6 pb-6 border-b">
          <p className="font-semibold text-gray-900 mb-3">Core Subjects:</p>
          <ul className="space-y-2">
            {subjects.map((subject, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                {subject}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Careers */}
      {careers.length > 0 && (
        <div>
          <p className="font-semibold text-gray-900 mb-3">Career Paths:</p>
          <ul className="space-y-2">
            {careers.map((career, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></span>
                {career}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}