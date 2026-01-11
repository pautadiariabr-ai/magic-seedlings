import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sprout, Leaf, TreeDeciduous, TreePine } from 'lucide-react';

const steps = [
  {
    day: "Dia 1",
    title: "A Semente",
    description: "Seu filho conhece o Lucas e entende que cada moeda é uma semente de sonho.",
    icon: Sprout,
    color: "from-magic to-magic/70",
  },
  {
    day: "Dia 7",
    title: "Os Primeiros Brotos",
    description: "A família já está usando a linguagem do jardineiro. As birras começam a diminuir.",
    icon: Leaf,
    color: "from-accent to-accent/70",
  },
  {
    day: "Dia 30",
    title: "O Jardim Cresce",
    description: "Seu filho já tem metas e um 'canteiro de sonhos' próprio. O Monstro perde força.",
    icon: TreeDeciduous,
    color: "from-accent to-magic/70",
  },
  {
    day: "Dia 90",
    title: "Colheita de Sonhos",
    description: "O primeiro sonho realizado! Seu filho entende o poder de plantar e esperar.",
    icon: TreePine,
    color: "from-magic to-accent",
  },
];

const JourneySection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-magic/10 text-magic font-medium text-sm mb-4"
          >
            A Jornada
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            De <span className="text-magic">Semente</span> a <span className="text-accent">Árvore</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Veja a transformação que acontece quando você planta a educação financeira certa.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" />
          
          {/* Animated Gold Line */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-magic via-magic to-accent -translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {/* Steps */}
          <div className="relative space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    className="glass-card-hover p-6 inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${step.color} text-white`}>
                      {step.day}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon Circle */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  whileInView={{
                    scale: [0.8, 1.1, 1],
                    transition: { duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Empty Space for alternating layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-magic rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export default JourneySection;
