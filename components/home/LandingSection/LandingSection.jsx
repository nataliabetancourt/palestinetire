// components/home/LandingSection/LandingSection.jsx
import dynamic from "next/dynamic";

// Load the video background and content ONLY on the client with a proper fallback
const LandingSectionClient = dynamic(() => import("./LandingSectionClient"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[85vh] w-full bg-gray-900">
      {/* Loading placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Centered loading indicator */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    </div>
  ),
});

export default function LandingSection() {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Preconnect to video CDN if you're hosting externally */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      
      {/* Static fallback background color */}
      <div className="absolute inset-0 z-0 bg-gray-900" />

      {/* Load video and interactive content on client */}
      <LandingSectionClient />
    </div>
  );
}