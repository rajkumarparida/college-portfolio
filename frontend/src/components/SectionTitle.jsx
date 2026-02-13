import React from 'react';

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-6 mx-auto"></div>
    </div>
  );
}