import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Candy, Ghost, PiggyBank } from 'lucide-react';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  gradientFrom: string;
  gradientTo: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    rotate: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: -5 + Math.random() * 10,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProblemCard: React.FC<ProblemCardProps> = ({
  icon,
  title,
  description,
  index,
  gradientFrom,
  gradientTo,
}) => {
  const rotations = [-8, 5, -3];
  
  return (
    <motion.div
      className="relative overflow-hidden flex justify-center items-center pt-5 mb-[-80px] last:mb-0"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: false }}
    >
      {/* Background Splash */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          clipPath: `path("M 0 200 C 0 180 20 160 50 155 L 300 100 C 330 95 350 115 350 145 L 350 350 C 350 380 330 400 300 400 L 50 400 C 20 400 0 380 0 350 Z")`,
        }}
      />
      
      {/* Card */}
      <motion.div
        variants={cardVariants}
        className="glass-card w-[280px] md:w-[320px] p-8 flex flex-col items-center text-center"
        style={{
          transformOrigin: "10% 60%",
        }}
        whileHover={{ 
          scale: 1.02,
          rotate: rotations[index] * 0.5,
          transition: { duration: 0.2 }
        }}
      >
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {icon}
        </div>
        
        <h3 className="font-serif text-xl font-bold text-primary mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const problems = [
  {
    icon: <Candy className="w-10 h-10 text-white" />,
    title: "A Tentação do Agora",
    description: "Crianças pedem tudo e não entendem o valor do dinheiro. Cada ida ao mercado vira uma batalha.",
    gradientFrom: "hsl(340, 80%, 60%)",
    gradientTo: "hsl(20, 90%, 55%)",
  },
  {
    icon: <Ghost className="w-10 h-10 text-white" />,
    title: "O Monstro do 'Quero-Agora'",
    description: "O vilão que sussurra no ouvido: 'Gaste tudo, você merece!' E lá se vão as moedinhas...",
    gradientFrom: "hsl(239, 84%, 67%)",
    gradientTo: "hsl(260, 80%, 55%)",
  },
  {
    icon: <PiggyBank className="w-10 h-10 text-white" />,
    title: "O Cofrinho Vazio",
    description: "Sem educação financeira, o futuro chega de mãos vazias. Sonhos ficam só na imaginação.",
    gradientFrom: "hsl(162, 60%, 35%)",
    gradientTo: "hsl(152, 70%, 45%)",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-villain/10 text-villain font-medium text-sm mb-4"
        >
          O Problema
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
        >
          Você reconhece esses <span className="text-villain">vilões</span>?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Sem as ferramentas certas, crianças crescem sem entender o poder de plantar hoje para colher amanhã.
        </motion.p>
      </div>

      {/* Stacking Cards */}
      <div className="max-w-md mx-auto px-6 pb-20">
        {problems.map((problem, index) => (
          <ProblemCard
            key={problem.title}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            index={index}
            gradientFrom={problem.gradientFrom}
            gradientTo={problem.gradientTo}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-villain/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-magic/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProblemSection;
