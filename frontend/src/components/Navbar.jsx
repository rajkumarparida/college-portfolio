import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admission', path: '/admission' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            {/* Logo Image */}
            <img
              src="cjscRemoveBg.svg"   // put your logo inside public folder
              alt="Logo"
              className="h-12 w-auto object-contain"
            />

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <h1 className="text-2xl font-bold gradient-text">
                CHANAKYA
              </h1>
              <p className="text-xs text-gray-600">
                Junior Science College
              </p>
            </div>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-300 relative ${isActive(link.path)
                    ? 'text-blue-700'
                    : 'text-gray-700 hover:text-blue-700'
                  } ${isActive(link.path) ? 'after:w-full' : 'after:w-0'} after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-700 after:transition-all duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:06370230180"
              className="hidden md:flex items-center gap-2 btn-primary text-sm"
            >
              <Phone size={16} />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all ${isActive(link.path)
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:06370230180"
                className="mx-4 btn-primary text-center text-sm"
              >
                <Phone className="inline mr-2" size={16} />
                06370230180
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}