'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'RPA & Automação Inteligente',
    description: 'Bots confiáveis para processos repetitivos, integração de sistemas e governança de ponta a ponta.',
    icon: '⚙️',
    details: [
      'Diagnóstico e priorização de processos',
      'Desenvolvimento e orquestração de bots',
      'Integração com ERPs, CRMs e legados',
      'Monitoramento contínuo e SLAs',
      'Compliance e governança operacional',
    ],
    benefits: [
      'Redução de tempo em tarefas críticas',
      'Aumento de precisão e rastreabilidade',
      'Economia operacional mensurável',
      'Equipe focada em atividades estratégicas',
    ],
  },
  {
    id: 2,
    title: 'Soluções de IA',
    description: 'Chatbots inteligentes, análise avançada de dados e automação cognitiva com foco em performance.',
    icon: '🧠',
    details: [
      'IA conversacional com NLP',
      'Análise preditiva e prescritiva',
      'Automação cognitiva e agentes',
      'Dashboards inteligentes',
      'Governança e ética em IA',
    ],
    benefits: [
      'Decisões baseadas em dados confiáveis',
      'Melhoria da experiência do cliente',
      'Escala de atendimento e operações',
      'Ganho de eficiência em áreas críticas',
    ],
  },
  {
    id: 3,
    title: 'Consultoria Estratégica',
    description: 'Diagnóstico de processos, roadmap de automação e capacitação do time para acelerar resultados.',
    icon: '📈',
    details: [
      'Workshops de descoberta',
      'Mapeamento de indicadores e metas',
      'Roadmap de automação e IA',
      'Treinamento de equipes',
      'Gestão de mudança e adoção',
    ],
    benefits: [
      'Prioridades claras e ROI rápido',
      'Adoção com menos fricção',
      'Alinhamento entre negócio e TI',
      'Resultados sustentáveis',
    ],
  },
];

export default function Servicos() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-surface to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-primary">
              Serviços orientados a resultados
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Estruturamos soluções de automação e IA com governança e impacto mensurável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side */}
                <div>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">O que inclui:</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-brand-accent mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side */}
                <div className="bg-brand-surface p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Benefícios:</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="border-l-4 border-brand-primary pl-4">
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contato"
                    className="block text-center w-full mt-8 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-deep transition-all font-semibold"
                  >
                    Solicitar diagnóstico
                  </a>
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="border-t border-gray-200 mt-20" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
