import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ 
  title = "Ready to Transform Your Future?", 
  subtitle = "Join our college and become part of our success story",
  primaryText = "Apply Now",
  secondaryText = "Call: 06370230180",
  primaryLink = "/admission",
  secondaryLink = "tel:06370230180"
}) {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-700 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link 
            to={primaryLink}
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {primaryText}
            <ArrowRight size={18} />
          </Link>
          <a
            href={secondaryLink}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}