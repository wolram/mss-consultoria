'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-brand-surface to-white flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transformação digital com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              automação inteligente e IA aplicada
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Entregamos eficiência operacional, redução de custos e escala para empresas brasileiras por meio de bots, IA e consultoria especializada.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/contato"
              className="px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-deep transition-all hover:shadow-lg font-semibold text-center"
            >
              Agendar diagnóstico
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-all font-semibold text-center"
            >
              Ver resultados
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '60+', label: 'bots em produção' },
              { value: 'R$ 8M+', label: 'em economia gerada' },
              { value: '8+ anos', label: 'de experiência prática' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-2xl font-bold text-brand-primary">{item.value}</div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
