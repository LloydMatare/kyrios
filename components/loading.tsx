import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="relative">
        {/* Glass background */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl"></div>

        {/* Content */}
        <div className="relative p-8">
          {/* Orbital loader */}
          <div className="relative w-24 h-24">
            {/* Central dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>

            {/* Orbiting dots */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  animation: `orbit 2s ease-in-out ${i * 0.3}s infinite`,
                  transformOrigin: "center",
                }}
              ></div>
            ))}
          </div>

          {/* Loading text */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-medium text-lg">Just a moment</p>
            <p className="text-gray-500 text-sm mt-1">
              Preparing your experience
            </p>
          </div>
        </div>
      </div>

      {/* Add CSS for orbit animation in your global CSS or use Tailwind config */}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(40px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Loading;
