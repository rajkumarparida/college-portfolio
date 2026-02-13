import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CHANAKYA</h3>
            <p className="text-blue-100 text-sm mb-2">ଚାଣକ୍ୟ ଜୁନିଅର ସାଇନ୍ସ କଲେଜ</p>
            <p className="text-blue-100 text-xs">
              Building Future Doctors, Engineers & Scientists
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-blue-100 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/academics" className="text-blue-100 hover:text-white transition">
                  Academics
                </a>
              </li>
              <li>
                <a href="/admission" className="text-blue-100 hover:text-white transition">
                  Admission
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-100 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:06370230180" className="text-blue-100 hover:text-white">
                  06370230180
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-blue-100">
                  OM, Shanti Nagar, Khallikot, Panditagaon, Odisha 761030
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
            <p>&copy; 2024 Chanakya Junior Science College. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}