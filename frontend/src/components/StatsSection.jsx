import React, { useState, useEffect } from 'react';
import { Trophy, Users, BookOpen, Home } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Trophy,
      label: 'Result Rate',
      value: '100%',
      color: 'text-blue-700',
      bg: 'bg-blue-100',
    },
    {
      icon: Users,
      label: 'Happy Students',
      value: '500+',
      color: 'text-indigo-700',
      bg: 'bg-indigo-100',
    },
    {
      icon: BookOpen,
      label: 'Years Excellence',
      value: '10+',
      color: 'text-sky-700',
      bg: 'bg-sky-100',
    },
    {
      icon: Home,
      label: 'Separate Hostels',
      value: 'Boys & Girls',
      color: 'text-purple-700',
      bg: 'bg-purple-100',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group card-hover"
              >
                <div className={`${stat.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${stat.color} w-8 h-8`} />
                </div>
                <p className="text-gray-600 text-sm font-medium mb-2">{stat.label}</p>
                <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}