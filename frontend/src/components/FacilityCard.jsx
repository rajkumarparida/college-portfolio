import React from 'react';

export default function FacilityCard({ 
  icon = "🔬", 
  title = "Facility", 
  description = "Facility description",
  features = []
}) {
  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group">
      <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <div className="space-y-2 border-t pt-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}