"use client";

import { useState, useEffect, useRef } from "react";

export function MercedesGT63Viewer() {
  const [angle, setAngle] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    // Create array of angles from 0 to 350 in steps of 10
    const angles = Array.from({ length: 36 }, (_, i) => i * 10);
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === angles.length) {
        setPreloadedImages(images);
        setIsLoading(false);
      }
    };

    angles.forEach((ang) => {
      const img = new Image();
      img.src = getImageUrl(ang);
      img.onload = onImageLoad;
      images.push(img);
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovered || isLoading) return;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      
      if (deltaTime > 100) {
        setAngle(prev => (prev + 5) % 360);
        lastTimeRef.current = timestamp;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isLoading]);

  const getImageUrl = (angle: number) => {
    const normalizedAngle = angle % 360;
    const formattedAngle = normalizedAngle.toString().padStart(3, "0");
    return `https://media.oneweb.mercedes-benz.com/images/dynamic/asia/TH/192378/805_055/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtGyjtsd2HdcUfpMqXGEjnmJ0l70NOB2KbEbApHixI5usoZQC3UXQkzNp%bm7jaSthym9uv%Yhk%WyLRAYDYaxBNerH1pNHn8wiVboiCpBxySfD2MpCTfvVGZbMFwRPRYEY7fHizWKfAN59S%B8O&imgt=P27&bkgnd=9&pov=BE${formattedAngle}&uni=m&width=690`;
  };

  const getCurrentImage = () => {
    if (!preloadedImages.length) return null;
    const index = Math.floor(angle / 10);
    return preloadedImages[index];
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div 
        ref={containerRef}
        className="relative aspect-[16/9] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {getCurrentImage() && (
              <img 
                src={getCurrentImage()?.src}
                alt="Mercedes-AMG GT 63 Coupé"
                className="w-full h-full object-contain"
                style={{ opacity: isLoading ? 0 : 1 }}
              />
            )}
          </div>
        )}
        
        {!isLoading && isHovered && (
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 text-sm md:text-base text-center rounded-lg">
            <p>Keep hovering to see the car rotate</p>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Exterior in Obsidian Black</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Experience the Mercedes-AMG GT 63 from every angle. The sleek silhouette and aggressive stance showcase the perfect blend of elegance and performance.
        </p>
      </div>
    </div>
  );
}


// "use client";

// import { useState, useEffect, useRef } from "react";

// export function MercedesGT63Viewer() {
//   const [angle, setAngle] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHovered, setIsHovered] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number>();
//   const lastTimeRef = useRef<number>(0);

//   useEffect(() => {
//     // Preload images
//     const angles = Array.from({ length: 36 }, (_, i) => i * 10);
//     const preloadedImages: HTMLImageElement[] = [];
//     let loadedImages = 0;
    
//     angles.forEach((ang) => {
//       const img = new Image();
//       img.src = getImageUrl(ang);
//       preloadedImages.push(img);
//       img.onload = () => {
//         loadedImages++;
//         if (loadedImages === angles.length) {
//           setIsLoading(false);
//         }
//       };
//     });

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isHovered || isLoading) return;

//     const animate = (timestamp: number) => {
//       if (!lastTimeRef.current) lastTimeRef.current = timestamp;
//       const deltaTime = timestamp - lastTimeRef.current;
      
//       // Update angle every 100ms (10 frames per second) for slower rotation
//       if (deltaTime > 100) {
//         setAngle(prev => (prev + 5) % 360); // Reduced to 5 degrees per frame
//         lastTimeRef.current = timestamp;
//       }
      
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isHovered, isLoading]);

//   const getImageUrl = (angle: number) => {
//     // Ensure angle is between 0 and 350
//     const normalizedAngle = angle % 360;
//     // Format the angle to 3 digits with leading zeros
//     const formattedAngle = normalizedAngle.toString().padStart(3, "0");
    
//     return `https://media.oneweb.mercedes-benz.com/images/dynamic/asia/TH/192378/805_055/iris.png?q=COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtGyjtsd2HdcUfpMqXGEjnmJ0l70NOB2KbEbApHixI5usoZQC3UXQkzNp%bm7jaSthym9uv%Yhk%WyLRAYDYaxBNerH1pNHn8wiVboiCpBxySfD2MpCTfvVGZbMFwRPRYEY7fHizWKfAN59S%B8O&imgt=P27&bkgnd=9&pov=BE${formattedAngle}&uni=m&width=690`;
//   };

//   return (
//     <div className="relative w-full max-w-5xl mx-auto">
//       <div 
//         ref={containerRef}
//         className="relative aspect-[16/9] overflow-hidden cursor-pointer"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {isLoading ? (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
//           </div>
//         ) : (
//           <img 
//             src={getImageUrl(angle)}
//             alt="Mercedes-AMG GT 63 Coupé"
//             className="w-full h-full object-contain"
//           />
//         )}
        
//         {!isLoading && (
//           <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 text-sm md:text-base text-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
//             <p>Hover to rotate the car</p>
//           </div>
//         )}
//       </div>
      
//       <div className="mt-8 text-center">
//         <h3 className="text-2xl font-bold mb-4">Exterior in Obsidian Black</h3>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           Experience the Mercedes-AMG GT 63 from every angle. The sleek silhouette and aggressive stance showcase the perfect blend of elegance and performance.
//         </p>
//       </div>
//     </div>
//   );
// }