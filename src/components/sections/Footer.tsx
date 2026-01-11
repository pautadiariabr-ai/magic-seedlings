import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-magic/20 flex items-center justify-center">
              <Sprout className="w-6 h-6 text-magic" />
            </div>
            <span className="font-serif text-2xl font-bold text-primary-foreground">
              O Menino que Plantava Moedas
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 mb-8 max-w-md mx-auto"
          >
            Transformando a relação das crianças com o dinheiro, uma semente de cada vez.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60 mb-8"
          >
            <a href="#" className="hover:text-magic transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-magic transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-magic transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-magic transition-colors">
              FAQ
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-primary-foreground/50"
          >
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-magic fill-magic" />
            <span>para pequenos jardineiros © {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-magic rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
