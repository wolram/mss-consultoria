'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para acelerar sua transformação digital?
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Conte-nos seus desafios e receba um diagnóstico com próximos passos claros e mensuráveis.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="px-8 py-4 bg-white text-brand-primary rounded-lg hover:bg-brand-surface transition-all font-semibold text-center"
            >
              Falar com especialista
            </Link>
            <a
              href="mailto:contato@mssconsultoria.com.br"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-brand-primary transition-all font-semibold text-center"
            >
              Enviar Email
            </a>
          </div>

          <p className="text-white/70 mt-8">
            Resposta em até 24 horas úteis
          </p>
        </motion.div>
      </div>
    </section>
  );
}
