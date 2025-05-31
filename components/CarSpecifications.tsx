"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const specifications = [
  { name: "Engine", value: "4.0L V8 Biturbo" },
  { name: "Horsepower", value: "639 hp" },
  { name: "Torque", value: "664 lb-ft" },
  { name: "0-60 mph", value: "3.1 seconds" },
  { name: "Top Speed", value: "196 mph" },
  { name: "Transmission", value: "9-speed AMG SPEEDSHIFT" },
  { name: "Drive System", value: "AMG Performance 4MATIC+" },
  { name: "Fuel Economy", value: "15/20 mpg (city/highway)" },
];

const performanceMetrics = [
  { name: "Power", value: 95 },
  { name: "Handling", value: 90 },
  { name: "Luxury", value: 88 },
  { name: "Technology", value: 92 },
];

export function CarSpecifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical Specifications
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
              Engine & Performance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              {specifications.map((spec, index) => (
                <motion.div 
                  key={spec.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-sm text-gray-500">{spec.name}</span>
                  <span className="text-lg font-medium">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">
              Performance Metrics
            </h3>
            <div className="space-y-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div 
                  key={metric.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{metric.name}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-black"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${metric.value}%` } : {}}
                      transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Starting at $165,900</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium">
              Build Your Own
            </button>
            <button className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-medium">
              Schedule a Test Drive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}