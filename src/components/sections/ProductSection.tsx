import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BookOpen, Star, Gift, Sparkles } from 'lucide-react';
import bookMockup from '@/assets/book-mockup.jpg';

const features = [
  {
    icon: BookOpen,
    title: "História Encantadora",
    description: "48 páginas de pura magia e aprendizado"
  },
  {
    icon: Star,
    title: "Atividades Práticas",
    description: "Exercícios lúdicos para aplicar no dia a dia"
  },
  {
    icon: Gift,
    title: "Bônus Exclusivos",
    description: "Planilha do Jardineiro + Certificado"
  }
];

const ProductSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-magic/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-magic/10 text-magic font-medium text-sm mb-4"
          >
            O Produto
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            O Menino que <span className="text-magic">Plantava Moedas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Uma jornada mágica que transforma a relação do seu filho com o dinheiro para sempre.
          </motion.p>
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Tilt Book */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magic/40 to-accent/30 rounded-3xl blur-2xl transform scale-90 -z-10" />
              
              {/* Book Image */}
              <img
                src={bookMockup}
                alt="O Menino que Plantava Moedas - Ebook"
                className="w-full max-w-md rounded-2xl shadow-2xl"
                style={{
                  transform: "translateZ(50px)",
                }}
              />
              
              {/* Floating Sparkle */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-magic flex items-center justify-center shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transform: "translateZ(80px)",
                }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-magic/20 to-accent/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-magic" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <div className="glass-card p-6 inline-flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Acesso imediato</p>
                  <p className="font-serif text-2xl font-bold text-primary">
                    12x de <span className="text-magic">R$ 4,70</span>
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">ou</p>
                  <p className="font-semibold text-primary">R$ 47</p>
                  <p className="text-xs text-muted-foreground">à vista</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
