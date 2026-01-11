import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, Sparkles, ArrowRight } from 'lucide-react';

const benefits = [
  "E-book completo (48 páginas ilustradas)",
  "Planilha do Pequeno Jardineiro",
  "Certificado de Jardineiro de Sonhos",
  "Atualizações gratuitas para sempre",
  "Grupo exclusivo de pais no Telegram",
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Se não amar, devolvemos 100% do valor",
  },
  {
    icon: Clock,
    title: "Acesso Imediato",
    description: "Receba no email em menos de 2 minutos",
  },
];

const CheckoutSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-magic/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-magic/10 text-magic font-medium text-sm mb-4"
          >
            Oferta Especial
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Comece a <span className="text-magic">plantar hoje</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Invista menos do que uma pizza por mês na educação financeira do seu filho.
          </motion.p>
        </div>

        {/* Checkout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-magic/20 to-accent/10 rounded-full blur-2xl" />
            
            {/* Price */}
            <div className="text-center mb-8 relative">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                Preço de Lançamento
              </motion.div>
              
              <div className="mb-4">
                <span className="text-muted-foreground line-through text-xl">R$ 97</span>
              </div>
              
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-muted-foreground">12x</span>
                <span className="font-serif text-6xl md:text-7xl font-bold text-magic">
                  R$ 4,70
                </span>
              </div>
              
              <p className="text-muted-foreground mt-2">
                ou <span className="font-semibold text-primary">R$ 47</span> à vista
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="w-full py-5 rounded-full font-bold text-lg text-primary bg-gradient-to-r from-magic to-[hsl(36,100%,55%)] shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                Quero Plantar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <guarantee.icon className="w-8 h-8 text-magic mx-auto mb-2" />
                  <h4 className="font-semibold text-primary text-sm mb-1">
                    {guarantee.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-8 max-w-md mx-auto"
        >
          Pagamento 100% seguro. Seus dados estão protegidos com criptografia de ponta.
        </motion.p>
      </div>
    </section>
  );
};

export default CheckoutSection;
