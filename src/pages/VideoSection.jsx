import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error('Video play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-[#E8DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#5A4B81] mb-6 animate-slide-in">
            Discover Your Journey
          </h2>
          <p className="text-lg text-[#7D6C61] max-w-2xl mx-auto">
            Watch this video to learn how our coaching can guide you through your transformative journey with clarity and compassion.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl group">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            src="https://res.cloudinary.com/dbyjiqjui/video/upload/v1752409961/Extended_VSL_1_ik1zmn.mp4"
            poster="./4.JPG"
            controls
            controlsList="nodownload"
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#3F2E56]/50 transition-opacity duration-300 group-hover:bg-[#3F2E56]/40 z-10">
              <button
                onClick={handlePlayVideo}
                className="bg-[#D9A5B3] text-white rounded-full p-4 sm:p-6 hover:bg-[#5A4B81] transform hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 sm:w-12 sm:h-12" />
              </button>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#D9A5B3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;