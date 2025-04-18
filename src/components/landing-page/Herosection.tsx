// "use client";
// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function Herosection() {
//   const images = [
//     "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
//     "https://images.unsplash.com/photo-1682687221038-404670f367ce",
//     "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
//     "https://images.unsplash.com/photo-1682687220795-796d3f6f7000",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (!isPaused) {
//       interval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);
//     }
//     return () => clearInterval(interval);
//   }, [isPaused, images.length]);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setIsPaused(false);
//   };

//   return (
//     <div className="w-full mx-auto relative">
//       <div
//         className="relative h-[500px] md:h-[640px] overflow-hidden "
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div
//           className="h-full w-full transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           <div className="absolute flex h-full">
//             {images.map((image, index) => (
//               <div key={index} className="h-full w-full flex-shrink-0">
//                 <img
//                   src={image}
//                   alt={`Slide ${index + 1}`}
//                   className="h-full w-full object-cover"
//                   onError={(e) => {
//                     e.target.src =
//                       "https://images.unsplash.com/photo-1682687220063-4742bd7fd538";
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {isHovered && (
//           <>
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-all duration-200 opacity-0 hover:opacity-100"
//             >
//               <FaChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-all duration-200 opacity-0 hover:opacity-100"
//             >
//               <FaChevronRight size={24} />
//             </button>
//           </>
//         )}

//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                 currentIndex === index ? "bg-white w-4" : "bg-white/50"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import React from "react";

export default function Herosection() {
  return (
    <div className=" w-full h-[80vh] bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-start px-10 md:px-28 lg:px-40 xl:px-60">
      <div className="z-10 text-white">
        <h1 className="md:text-3xl text-xl font-bold mb-5 text-blue-900">
          Welcome to Sanshi
        </h1>
        <p className="text-3xl md:text-5xl font-bold my-2">
          It’s always about <br />
          Connecting people with verified profiles.
        </p>
        <p className="text-xs my-2">
          Meet the modern standard for public facing documentation. Beautiful
          <br />
          out of the box, easy to maintain, and optimized for user engagement.
        </p>
        <Link href="https://wisein.in/">
          <button className="px-4 py-2 mt-4 bg-white text-black rounded-md">
            Visit wiseIn
          </button>
        </Link>
      </div>
    </div>
  );
}
