'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Em poucas semanas reduzimos etapas manuais e aumentamos a precisão operacional. O time da MSS trouxe clareza e resultados rápidos.',
    name: 'Diretoria de Operações',
    detail: 'Empresa do setor financeiro',
  },
  {
    quote:
      'A automação liberou nossa equipe para iniciativas estratégicas. O projeto trouxe ROI comprovado e governança real.',
    name: 'Gerência de Processos',
    detail: 'Indústria de bens de consumo',
  },
  {
    quote:
      'A solução de IA melhorou o atendimento e encurtou o tempo de resposta ao cliente. Uma parceria sólida e transparente.',
    name: 'Liderança de Atendimento',
    detail: 'Operadora de serviços',
  },
];

const metrics = [
  { value: '35%', label: 'redução média de tempo de processo' },
  { value: '99,7%', label: 'taxa de precisão em fluxos críticos' },
  { value: '24/7', label: 'operações automatizadas contínuas' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">
            Casos reais, impacto comprovado
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias de transformação com foco em resultados mensuráveis, sem expor clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <p className="text-gray-700 mb-6">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-brand-primary">{item.name}</p>
                <p className="text-sm text-gray-500">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-brand-primary mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
