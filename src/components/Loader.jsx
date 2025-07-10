import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F6F1EB] relative">
      {/* Orbiting loader */}
      <div className="absolute w-40 h-40 animate-spin-slow">
        <div className="w-6 h-6 bg-[#5A4B81] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Centered text */}
      <h1 className="text-4xl font-serif text-[#5A4B81] z-10">
        Shina Kaur
      </h1>
    </div>
  );
};

export default Loader;
