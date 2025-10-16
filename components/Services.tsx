'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'RPA - Automação de Processos',
    description:
      'Automatize processos repetitivos e libere sua equipe para tarefas estratégicas. Reduzindo custos e aumentando produtividade.',
    icon: '🤖',
    features: ['Workflow Automation', 'Bot Development', 'Process Optimization'],
  },
  {
    id: 2,
    title: 'IA - Inteligência Artificial',
    description:
      'Implemente soluções de IA para análise de dados, predição e tomada de decisão inteligente em tempo real.',
    icon: '🧠',
    features: ['Machine Learning', 'Data Analytics', 'AI Integration'],
  },
  {
    id: 3,
    title: 'Engenharia de Software',
    description:
      'Desenvolvimento de aplicações robustas, escaláveis e seguras com as melhores práticas e tecnologias modernas.',
    icon: '💻',
    features: ['Custom Development', 'Cloud Solutions', 'DevOps'],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos três pilares de excelência para transformar sua empresa
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
              className="p-8 border border-gray-200 rounded-xl hover:shadow-xl transition-all hover:border-gray-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/servicos"
                className="inline-block text-black font-semibold hover:underline"
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
