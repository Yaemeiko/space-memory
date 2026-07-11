import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
  { src: "/images/ini juga imut banget.jpg" },
  { src: "/images/11.jpeg" },
  { src: "/images/8.jpg" },
  { src: "/images/7.jpg" },
  { src: "/images/photobooth-us.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/4.jpg" },
  { src: "/images/5.jpg" },
  { src: "/images/6.jpg" },
];

export default function PhotoGallery({ isClicked }) {
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowPhotos(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  if (!showPhotos) return null;

  return (
    <section className="lg:hidden min-h-screen bg-slate-950 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Biar Tidak Lupa</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={photo.src}
                alt={`Memory ${i + 1}`}
                className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
