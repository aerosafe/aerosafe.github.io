import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function BrandReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tagline = "CONNECTED ECOSYSTEM FOR DRONE OPERATIONS";
  const brandName = "AEROSAFE";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sky to Space Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #87CEEB 0%, #4A90E2 20%, #1e3a8a 40%, #0f172a 70%, #020617 100%)'
        }}
      ></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Tagline */}
        <motion.div
          className="text-white/60 tracking-[0.3em] text-xs md:text-sm mb-12 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {tagline.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: 0.5 + index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Brand Name with Typewriter Effect */}
        <div className="text-white text-7xl md:text-8xl lg:text-9xl overflow-hidden" style={{ fontFamily: 'Aldrich, sans-serif' }}>
          {brandName.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 1.5 + index * 0.1,
                ease: "easeOut"
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"
          initial={{ width: 0 }}
          whileInView={{ width: '300px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </section>
  );
}