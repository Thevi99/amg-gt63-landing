"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Gauge, 
  Zap, 
  Award, 
  PanelTop, 
  Heart, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    title: "Performance",
    icon: Gauge,
    description: "Twin-turbo 4.0L V8 engine producing 639 horsepower and 664 lb-ft of torque for breathtaking acceleration.",
  },
  {
    title: "Speed",
    icon: Zap,
    description: "0-60 mph in just 3.1 seconds with a top speed of 196 mph, delivering exhilarating performance.",
  },
  {
    title: "Craftsmanship",
    icon: Award,
    description: "Handcrafted with meticulous attention to detail by skilled AMG engineers in Affalterbach.",
  },
  {
    title: "Technology",
    icon: PanelTop,
    description: "State-of-the-art MBUX infotainment system with augmented reality navigation and voice control.",
  },
  {
    title: "Comfort",
    icon: Heart,
    description: "Premium Nappa leather interior with heated and ventilated seats for ultimate comfort.",
  },
  {
    title: "Safety",
    icon: ShieldCheck,
    description: "Comprehensive safety systems including active distance assist and 360° camera system.",
  },
];

export function FeatureHighlights() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Engineered to Perfection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-6 border cursor-pointer transition-all duration-300 ${
                activeFeature === index
                  ? "border-white bg-white bg-opacity-10"
                  : "border-gray-800 hover:border-gray-600"
              }`}
              whileHover={{ y: -5 }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-medium">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}