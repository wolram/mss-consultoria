'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Vamos conversar sobre como nossas soluções em RPA, IA e Engenharia de Software podem impulsionar seu crescimento.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all font-semibold text-center"
            >
              Marque uma Reunião
            </Link>
            <a
              href="mailto:contato@mssconsultoria.com.br"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all font-semibold text-center"
            >
              Enviar Email
            </a>
          </div>

          <p className="text-gray-400 mt-8">
            Responderemos em até 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
