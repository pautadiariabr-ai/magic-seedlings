import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana S.",
    role: "Mãe do Pedro (6 anos)",
    text: "Eu chorei quando meu filho trocou um chocolate por guardar a moeda no cofrinho. A metáfora da semente mudou tudo aqui em casa!",
    stars: 5,
  },
  {
    id: 2,
    name: "Roberto A.",
    role: "Pai da Sofia (7 anos)",
    text: "Simples, lúdico e genial. A Sofia agora diz que é uma 'Jardineira de Sonhos'. O material da Vovó Flora é encantador.",
    stars: 5,
  },
  {
    id: 3,
    name: "Carla M.",
    role: "Mãe de Gêmeos",
    text: "O 'Monstro do Quero-Agora' virou nossa piada interna. Ajudou demais a controlar as birras no mercado sem eu precisar brigar.",
    stars: 5,
  },
  {
    id: 4,
    name: "Lucas B.",
    role: "Pai do Davi (5 anos)",
    text: "Comprei o ebook e li na mesma noite. No dia seguinte, ele já estava procurando um pote para fazer o 'jardim' dele.",
    stars: 5,
  },
  {
    id: 5,
    name: "Fernanda T.",
    role: "Tia e Madrinha",
    text: "Dei de presente e minha irmã me agradeceu horrores. É a primeira vez que vejo educação financeira sem ser chata.",
    stars: 5,
  },
  {
    id: 6,
    name: "Patrícia L.",
    role: "Mãe da Bia (8 anos)",
    text: "Finalmente consegui explicar juros compostos (a árvore crescendo) de um jeito que ela entendeu. Vale cada centavo.",
    stars: 5,
  },
];

interface TestimonialCardProps {
  data: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => (
  <div className="mb-6 glass-card-hover p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-1">
        {[...Array(data.stars)].map((_, i) => (
          <Star key={i} size={16} className="fill-magic text-magic" />
        ))}
      </div>
      <Quote size={20} className="text-primary/20" />
    </div>
    
    <p className="text-primary text-sm leading-relaxed mb-4 font-medium">
      "{data.text}"
    </p>
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-magic to-accent flex items-center justify-center text-white font-bold text-sm">
        {data.name.charAt(0)}
      </div>
      <div>
        <h4 className="text-sm font-bold text-primary">{data.name}</h4>
        <p className="text-xs text-muted-foreground">{data.role}</p>
      </div>
    </div>
  </div>
);

interface InfiniteColumnProps {
  items: Testimonial[];
  duration: number;
  className?: string;
}

const InfiniteColumn: React.FC<InfiniteColumnProps> = ({ items, duration, className = '' }) => (
  <div className={`relative ${className}`}>
    <motion.div
      animate={{ y: "-50%" }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className="w-full"
    >
      {[...items, ...items].map((item, idx) => (
        <TestimonialCard key={`${item.id}-${idx}`} data={item} />
      ))}
    </motion.div>
  </div>
);

const SocialProofSection: React.FC = () => {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);

  return (
    <section className="relative w-full py-24 bg-secondary overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4"
        >
          Depoimentos
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Famílias que já estão <span className="text-accent">colhendo sonhos</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-lg mx-auto"
        >
          Veja o que acontece quando a "birra" vira um "projeto de jardinagem".
        </motion.p>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="relative h-[600px] w-full max-w-6xl mx-auto overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full px-6">
          <InfiniteColumn items={col1} duration={25} />
          <InfiniteColumn items={col2} duration={35} className="hidden md:block pt-16" />
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-magic rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>
    </section>
  );
};

export default SocialProofSection;
