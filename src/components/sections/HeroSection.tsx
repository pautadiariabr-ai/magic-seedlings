import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/magnetic-button';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-magic/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magic/10 text-magic font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                Educação Financeira Mágica
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
            >
              Ensine seu filho a{' '}
              <span className="text-magic">plantar o futuro</span>, não apenas
              gastá-lo.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Uma história encantadora que transforma mesada em lição de vida.
              Porque grandes investidores nascem de pequenos jardineiros.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <MagneticButton>
                Quero Começar
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              
              <motion.button
                className="px-6 py-4 rounded-full font-semibold text-primary border-2 border-primary/20 hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Prévia Grátis
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-magic to-accent border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-primary">+2.500 famílias</p>
                <p className="text-sm text-muted-foreground">já plantando sonhos</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic/30 to-accent/20 rounded-3xl blur-2xl transform scale-95" />
              
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <img
                  src={heroImage}
                  alt="O Menino que Plantava Moedas - Ilustração mágica"
                  className="w-full rounded-3xl shadow-2xl"
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-magic to-accent flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">Leitura Mágica</p>
                    <p className="text-xs text-muted-foreground">15 min por dia</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
