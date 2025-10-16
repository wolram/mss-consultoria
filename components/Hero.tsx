'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-20 bg-gradient-to-b from-white to-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transforme seu negócio com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              RPA, IA e Engenharia de Software
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Soluções inteligentes e personalizadas para automação, inteligência artificial e desenvolvimento de software de alta performance.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/contato"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg font-semibold text-center"
            >
              Começar Agora
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-all font-semibold text-center"
            >
              Ver Cases
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Confie em nós</p>
            <div className="flex flex-wrap gap-8">
              {['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4'].map((name, i) => (
                <div key={i} className="text-gray-400 font-medium">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
