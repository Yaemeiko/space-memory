import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
      {
    src: "/images/ini juga imut banget.jpg",
    style: { top: "75%", left: "5%" },
  },
     {
    src: "/images/11.jpeg",
    style: { top: "6%", right: "5%" },
  },
     {
    src: "/images/8.jpg",
    style: { top: "50%", right: "10%" },
  },
     {
    src: "/images/7.jpg",
    style: { top: "6%", left: "10%" },
  },
  {
    src: "/images/photobooth-us.jpg",
    style: { top: "10%", left: "3%" },
  },
  {
    src: "/images/2.jpg",
    style: { top: "35%", right: "4%" },
  },
  {
    src: "/images/3.jpg",
    style: { top: "55%", left: "5%" },
  },
  {
    src: "/images/4.jpg",
    style: { top: "20%", right: "10%" },
  },
  {
    src: "/images/5.jpg",
    style: { top: "80%", right: "6%" },
  },
  {
    src: "/images/6.jpg",
    style: { top: "42%", left: "10%" },
  },
 
];

export default function FloatingPhotos({ isClicked }) {
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowPhotos(true);
      }, 500); // Delay 500ms
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  if (!showPhotos) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {photos.map((photo, i) => (
        <motion.img
          key={i}
          src={photo.src}
          style={photo.style}
          className="absolute block w-20 sm:w-24 md:w-32 lg:w-40 rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6, type: "spring", stiffness: 50 },
            y: {
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            },
            rotate: {
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            },
          }}
        />
      ))}
    </div>
  );
}