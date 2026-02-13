import React, { useState, useEffect } from "react";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const backgroundImages = [
    "https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg",
    "https://i.pinimg.com/1200x/43/d9/25/43d925ce787ec1b4d17c307254e88770.jpg",
    "https://i.pinimg.com/1200x/32/97/44/3297449b307d2cff1b51115561b061f1.jpg",
    "https://i.pinimg.com/1200x/36/fc/e5/36fce5652a8d9b45463e02404b5fb45f.jpg",
    "https://i.pinimg.com/1200x/b9/73/9b/b9739b47e98ad9beec330627f0632545.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % backgroundImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="College Background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full py-16 text-center">

        {/* Admission Badge
        <div className="inline-block mb-8">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-base font-semibold text-gray-900">
              ✓ Admission Open for Class 11 & 12
            </span>
          </div>
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3">
          Chanakya
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-200 via-sky-200 to-cyan-200 bg-clip-text text-transparent">
            Junior Science College
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
          ଚାଣକ୍ୟ ଜୁନିଅର ସାଇନ୍ସ କଲେଜ
        </p>

        <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto mb-10">
          Excellence in Higher Secondary Education | 100% Result Rate | 10+ Years of Achievement
        </p>

        {/* Rating
        <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
          <div className="flex items-center gap-3 bg-white/85 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-900">
              <span className="font-bold text-lg">4.3</span>
              <span className="text-sm ml-2">(38 Reviews)</span>
            </div>
          </div>
        </div> */}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/admission"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>

          <a
            href="tel:06370230180"
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg"
          >
            📞 Call: 06370230180
          </a>
        </div>

        {/* Stats */}
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg max-w-xl">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-white">100%</div>
              <p className="text-sm text-blue-100">Result Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">10+</div>
              <p className="text-sm text-blue-100">Years Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <p className="text-sm text-blue-100">Happy Students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls (Bottom Center) */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">

        {/* Arrows + Dots */}
        <div className="flex items-center gap-6">

          <button
            onClick={handlePrevImage}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/30"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNextImage}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white border border-white/30"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Counter BELOW
        <div className="text-white text-sm font-semibold bg-white/20 backdrop-blur-md px-4 py-1 rounded-full border border-white/30">
          {currentImageIndex + 1} / {backgroundImages.length}
        </div> */}

      </div>
    </section>
  );
}
