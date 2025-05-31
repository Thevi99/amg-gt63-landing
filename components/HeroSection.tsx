"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(0, 1 - scrollPosition / 700);
      const translateY = scrollPosition * 0.4;
      
      if (sectionRef.current) {
        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-screen" ref={sectionRef}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/13060933/pexels-photo-13060933.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-center">
          The New Mercedes-AMG
          <br />
          <span className="text-6xl md:text-8xl mt-2 block">GT 63</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl text-center mt-6 mb-12">
          Experience uncompromising performance and luxury in perfect harmony
        </p>
        <div className="flex space-x-6">
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-medium">
            Explore
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors font-medium">
            Configure
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
}