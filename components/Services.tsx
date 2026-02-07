'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'RPA & Automação',
    description:
      'Bots confiáveis para processos repetitivos, integração de sistemas e governança ponta a ponta.',
    icon: '⚙️',
    features: ['Mapeamento de processos', 'Orquestração de bots', 'Integração com ERPs'],
  },
  {
    id: 2,
    title: 'Soluções de IA',
    description:
      'Chatbots inteligentes, análise avançada de dados e automação cognitiva com foco em resultados mensuráveis.',
    icon: '🧠',
    features: ['IA conversacional', 'Analytics aplicado', 'Automação cognitiva'],
  },
  {
    id: 3,
    title: 'Consultoria Estratégica',
    description:
      'Diagnóstico de processos, roadmap de automação e capacitação do time para acelerar entregas.',
    icon: '📈',
    features: ['Diagnóstico executivo', 'Roadmap de automação', 'Treinamento interno'],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">
            Soluções sob medida
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Três frentes integradas para garantir eficiência, escala e governança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all hover:border-gray-300 bg-white"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/servicos"
                className="inline-block text-brand-primary font-semibold hover:underline"
              >
                Saiba mais →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
