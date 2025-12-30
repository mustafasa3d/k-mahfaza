"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  onComplete: () => void;
};

export default function IntroAnimation({ onComplete }: Props) {
  const [selectedSection, setSelectedSection] = useState<
    "left" | "center" | "right" | null
  >(null);
  const [hoveredSection, setHoveredSection] = useState<
    "left" | "center" | "right" | null
  >(null);

  const handleSectionClick = (section: "left" | "center" | "right") => {
    setSelectedSection(section);
    setTimeout(() => {
      onComplete();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-9999 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Candlestick Chart Pattern */}
          {Array.from({ length: 40 }).map((_, i) => (
            <rect
              key={i}
              x={i * 48}
              y={Math.random() * 800 + 100}
              width="8"
              height={Math.random() * 200 + 50}
              fill={i % 3 === 0 ? "#00D9FF" : "#E0F7FF"}
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      <AnimatePresence mode="wait">
        {!selectedSection && (
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Triangle Section - Local (Jordan) Markets */}
            <AnimatePresence>
              {(!selectedSection || selectedSection === "left") && (
                <motion.div
                  className="absolute left-0 top-0 w-1/3 h-full"
                  // style={{
                  //   clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  // }}
                  initial={{ x: 0 }}
                  animate={
                    selectedSection && selectedSection !== "left"
                      ? { x: "-100%", opacity: 0 }
                      : { x: 0, opacity: 1 }
                  }
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onMouseEnter={() => setHoveredSection("left")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {/* Background Image with Triangle Clip */}
                  <div className="relative w-full h-full group">
                    <div className="duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 bg-linear-to-bl from-green-100 to-transparent  clip-l" />
                    <motion.div
                      className={`absolute inset-0 transition-all duration-500 ${hoveredSection === "left" ? "grayscale-0" : "grayscale"
                        }`}
                    >
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Title */}
                        <div className="relative">
                          <h2 className="opacity-100 group-hover:opacity-0 duration-1000 text-3xl lg:text-2xl font-bold text-[#0054A4] mb-4 text-center">
                            Local (Jordan) Markets
                            <br />
                            (ASE)
                          </h2>
                          <h2 className="absolute w-full lg:!w-[360px] top-0 left-1/2 -translate-x-1/2 duration-1000 opacity-0 group-hover:opacity-100 text-3xl lg:text-3xl font-bold text-[#0054A4] mb-4 text-center">
                            Local (Jordan) Markets
                            <br />
                            (ASE)
                          </h2>
                        </div>
                        {/* Icon/Image */}

                        {/* Button */}
                        <motion.button
                          className="px-8 py-3 border-2 z-10 border-[#0054A4] text-[#0054A4] rounded-full font-medium hover:bg-[#0054A4] hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSectionClick("left")}
                        >
                          Get Start
                        </motion.button>

                        <motion.div
                          className="mt-8 relative w-48 h-48"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src="/assets/images/intro/arr.svg"
                            alt="Local Markets"
                            fill
                            className="object-contain scale-200"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Center Triangle Section - Discover Mahfaza */}
            <AnimatePresence>
              <motion.div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-1/2 h-full"
                // style={{
                //   clipPath: "polygon(50% 0, 100% 100%, 0% 100%)",
                // }}
                initial={{ y: 0 }}
                animate={
                  selectedSection
                    ? { y: "-100%", opacity: 0 }
                    : { y: 0, opacity: 1 }
                }
                exit={{ y: "-100%", opacity: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: selectedSection ? 0.5 : 0,
                }}
                onMouseEnter={() => setHoveredSection("center")}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Background */}
                <div className="relative w-full h-full group">
                  <div className="duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 bg-linear-to-bl from-green-100 to-transparent clip-c" />
                  <motion.div
                    className={`absolute inset-0 transition-all duration-500 ${hoveredSection === "center" ? "grayscale-0" : "grayscale"
                      }`}
                  >
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      {/* Logo/Icon */}
                      <motion.div
                        className="mb-8 relative"
                        whileHover={{ scale: 1.15, rotateY: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-32 h-32 relative">
                          <Image
                            src="/assets/images/intro/twoarr.png"
                            alt="Mahfaza Logo"
                            fill
                            className="object-contain scale-200"
                          />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <div className="relative">
                        <div className="opacity-100 duration-1000">

                          <h2 className="text-3xl lg:text-4xl font-bold text-[#0054A4] mb-10 text-center">
                            <span>Discover</span>
                            <Image src="/assets/images/intro/text-logo.svg" alt="Mahfaza Logo" fill className="!relative object-contain h-[50px]" />
                          </h2>
                          {/* <h3 className="text-3xl lg:text-4xl font-bold text-[#0054A4] mb-8 text-center">
                            mahfaza
                          </h3> */}
                          {/* <div className="mt-32 text-3xl lg:text-4xl font-bold text-[#0054A4] mb-8 text-center">
                          </div> */}
                        </div>
                      </div>

                      {/* Button */}
                      <motion.button
                        className="px-8 py-3 bg-[#0054A4] z-10 text-white rounded-full font-medium hover:bg-[#003d7a] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSectionClick("center")}
                      >
                        Explore
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Triangle Section - Forex & International */}
            <AnimatePresence>
              {(!selectedSection || selectedSection === "right") && (
                <motion.div
                  className="absolute right-0 top-0 w-1/3 h-full"
                  // style={{
                  //   clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                  // }}
                  initial={{ x: 0 }}
                  animate={
                    selectedSection && selectedSection !== "right"
                      ? { x: "100%", opacity: 0 }
                      : { x: 0, opacity: 1 }
                  }
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onMouseEnter={() => setHoveredSection("right")}
                  onMouseLeave={() => setHoveredSection(null)}

                >
                  {/* Background */}
                  <div className="relative w-full h-full group">
                    <div className="duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 bg-linear-to-bl from-green-100 to-transparent clip-r" />
                    <motion.div
                      className={`absolute inset-0 transition-all duration-500 ${hoveredSection === "right" ? "grayscale-0" : "grayscale"
                        }`}
                    >
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Title */}
                        <div className="relative">
                          <h2 className="opacity-100 group-hover:opacity-0 duration-1000 text-3xl lg:text-2xl font-bold text-[#0054A4] mb-4 text-center">
                            Forex & International
                            <br />
                            Markets
                          </h2>
                          <h2 className="absolute w-full lg:!w-[360px] top-0 left-1/2 -translate-x-1/2 duration-1000 opacity-0 group-hover:opacity-100 text-3xl lg:text-3xl font-bold text-[#0054A4] mb-4 text-center">
                            Forex & International
                            <br />
                            Markets
                          </h2>
                        </div>

                        {/* Button */}
                        <motion.button
                          className="px-8 py-3 border-2 z-10 border-[#0054A4] text-[#0054A4] rounded-full font-medium hover:bg-[#0054A4] hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSectionClick("right")}
                        >
                          Get Start
                        </motion.button>

                        {/* Icon/Image */}
                        <motion.div
                          className="mt-8 relative w-48 h-48"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src="/assets/images/intro/buf.png"
                            alt="International Markets"
                            fill
                            className="object-contain scale-150"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
