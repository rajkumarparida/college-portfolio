import React, { useState } from 'react';
import { Play, X, Image as ImageIcon, Video } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterType, setFilterType] = useState('all');

  // Gallery items (photos and videos)
  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      title: 'College Main Building',
      category: 'Campus',
      image: 'https://images.unsplash.com/photo-1509062522246-78489c6db588?w=600&h=400&fit=crop',
      description: 'Our beautiful main building with modern architecture',
    },
    {
      id: 2,
      type: 'photo',
      title: 'Library Interior',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
      description: '5000+ books in our central library',
    },
    {
      id: 3,
      type: 'video',
      title: 'Campus Tour',
      category: 'Campus',
      image: 'https://images.unsplash.com/photo-1516534775068-bb57367b8ac4?w=600&h=400&fit=crop',
      video: 'https://videos.pexels.com/video-files/4219123/4219123-hd_1080_1920_25fps.mp4',
      description: 'Complete tour of our campus facilities',
    },
    {
      id: 4,
      type: 'photo',
      title: 'Science Laboratory',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=400&fit=crop',
      description: 'State-of-the-art science laboratory with modern equipment',
    },
    {
      id: 5,
      type: 'photo',
      title: 'Classroom Session',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1524178232363-1601f64fbad3?w=600&h=400&fit=crop',
      description: 'Interactive teaching in our smart classrooms',
    },
    {
      id: 6,
      type: 'video',
      title: 'Student Success Stories',
      category: 'Students',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
      video: 'https://videos.pexels.com/video-files/4219123/4219123-hd_1080_1920_25fps.mp4',
      description: 'Inspiring stories from our successful students',
    },
    {
      id: 7,
      type: 'photo',
      title: 'Computer Lab',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1516321318423-f06628ca504d?w=600&h=400&fit=crop',
      description: 'Well-equipped computer lab for practical learning',
    },
    {
      id: 8,
      type: 'photo',
      title: 'Student Groups',
      category: 'Students',
      image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
      description: 'Our diverse and talented student community',
    },
    {
      id: 9,
      type: 'photo',
      title: 'Sports & Activities',
      category: 'Activities',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      description: 'Sports events and extracurricular activities',
    },
    {
      id: 10,
      type: 'video',
      title: 'Hostel Life',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=400&fit=crop',
      video: 'https://videos.pexels.com/video-files/4219123/4219123-hd_1080_1920_25fps.mp4',
      description: 'Life in our comfortable hostels',
    },
    {
      id: 11,
      type: 'photo',
      title: 'Graduation Ceremony',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop',
      description: 'Our proud graduates celebrating their achievements',
    },
    {
      id: 12,
      type: 'photo',
      title: 'Cafeteria',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'Spacious cafeteria with nutritious food options',
    },
  ];

  // Filter items
  const filteredItems = filterType === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filterType);

  // Categories
  const categories = ['all', 'photos', 'videos'];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our campus through photos and videos
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Browse Our Gallery"
            subtitle="Photos and videos from Chanakya College"
          />

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setFilterType('all')}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filterType === 'all'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All ({galleryItems.length})
            </button>
            <button
              onClick={() => setFilterType('photo')}
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                filterType === 'photo'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ImageIcon size={18} /> Photos ({galleryItems.filter(i => i.type === 'photo').length})
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                filterType === 'video'
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Video size={18} /> Videos ({galleryItems.filter(i => i.type === 'video').length})
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all shadow-lg">
                      <Play size={32} className="text-white fill-white ml-1" />
                    </div>
                  )}

                  {/* Image Icon for Photos */}
                  {item.type === 'photo' && (
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all shadow-lg opacity-0 group-hover:opacity-100">
                      <ImageIcon size={32} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.type === 'video' && (
                      <Video size={18} className="text-blue-400" />
                    )}
                  </div>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for viewing images and videos */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all"
            >
              <X size={32} />
            </button>

            {/* Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              {selectedItem.type === 'photo' ? (
                // Photo
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto"
                />
              ) : (
                // Video
                <video
                  src={selectedItem.video}
                  controls
                  autoPlay
                  className="w-full h-auto"
                />
              )}

              {/* Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">{selectedItem.title}</h2>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Gallery Categories"
            subtitle="Different aspects of our college"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏛️', title: 'Campus', desc: 'Buildings, grounds, and infrastructure', count: 'Photos & Videos' },
              { icon: '📚', title: 'Facilities', desc: 'Labs, library, classrooms, hostels', count: 'Photos & Videos' },
              { icon: '👨‍🎓', title: 'Students', desc: 'Student activities and achievements', count: 'Photos & Videos' },
              { icon: '🎓', title: 'Academic', desc: 'Teaching, learning, and research', count: 'Photos' },
              { icon: '🏆', title: 'Events', desc: 'Celebrations and ceremonies', count: 'Photos' },
              { icon: '⚽', title: 'Activities', desc: 'Sports and cultural programs', count: 'Photos' },
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all text-center">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
                <p className="text-sm font-semibold text-blue-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl border-2 border-blue-300">
              <div className="text-5xl font-bold text-blue-700 mb-2">12+</div>
              <p className="text-gray-700 font-semibold">Photo Albums</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-8 rounded-2xl border-2 border-indigo-300">
              <div className="text-5xl font-bold text-indigo-700 mb-2">50+</div>
              <p className="text-gray-700 font-semibold">High Quality Photos</p>
            </div>
            <div className="bg-gradient-to-br from-sky-100 to-sky-50 p-8 rounded-2xl border-2 border-sky-300">
              <div className="text-5xl font-bold text-sky-700 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Documentary Videos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience Our Campus"
        subtitle="Visit Chanakya College and see our facilities in person!"
        primaryText="Schedule a Tour"
        primaryLink="/contact"
        secondaryText="Call: 06370230180"
        secondaryLink="tel:06370230180"
      />
    </div>
  );
}