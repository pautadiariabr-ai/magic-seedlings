import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coins } from 'lucide-react';

const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const manifestoLines = [
    { text: "O tempo passa", highlight: "rápido..." },
    { text: "Enquanto você espera,", highlight: null },
    { text: "seu filho aprende a", highlight: "gastar." },
    { text: "Ou a", highlight: "plantar." },
    { text: "Não existe neutralidade", highlight: null },
    { text: "na educação", highlight: "financeira." },
    { text: "Ensine-o a ser um", highlight: null },
    { text: "", highlight: "Jardineiro de Sonhos." },
  ];

  // Generate floating coins positions
  const coins = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
    size: 24 + Math.random() * 32,
  }));

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh]"
      style={{
        background: 'linear-gradient(180deg, hsl(163, 55%, 8%) 0%, hsl(162, 39%, 10%) 100%)',
      }}
    >
      {/* Fixed Content Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Floating Coins Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {coins.map((coin) => (
            <motion.div
              key={coin.id}
              className="absolute"
              style={{
                left: coin.left,
                top: coin.top,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: coin.duration,
                repeat: Infinity,
                delay: coin.delay,
                ease: "easeInOut",
              }}
            >
              <div
                className="rounded-full bg-gradient-to-br from-magic to-[hsl(36,100%,55%)] shadow-lg"
                style={{
                  width: coin.size,
                  height: coin.size,
                  boxShadow: '0 0 20px hsl(43, 100%, 49%, 0.4)',
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div 
            className="absolute top-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to bottom, hsl(163, 55%, 8%), transparent)' }}
          />
          <div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ background: 'linear-gradient(to top, hsl(163, 55%, 8%), transparent)' }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          className="relative z-20 h-full flex items-center justify-center"
          style={{ opacity, y }}
        >
          <div className="text-center px-6 max-w-4xl">
            {manifestoLines.map((line, index) => (
              <motion.p
                key={index}
                className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{
                  color: 'hsl(0, 0%, 95%)',
                }}
                initial={{ opacity: 0.3, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {line.text}{' '}
                {line.highlight && (
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, hsl(43, 100%, 49%), hsl(36, 100%, 55%))',
                    }}
                  >
                    {line.highlight}
                  </span>
                )}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
