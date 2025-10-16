'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    id: 1,
    title: 'Automação de Processamento de Pedidos',
    company: 'Empresa Varejo',
    category: 'RPA',
    description: 'Implementação de bot para processar 10.000+ pedidos diários.',
    results: [
      '80% redução em tempo de processamento',
      '99.9% de precisão',
      'R$ 500k economizados anualmente',
    ],
    image: '📦',
  },
  {
    id: 2,
    title: 'Sistema de IA para Previsão de Demanda',
    company: 'Indústria de Alimentos',
    category: 'IA',
    description: 'ML model para prever demanda com 95% de acurácia.',
    results: [
      '95% acurácia nas previsões',
      '30% redução em desperdício',
      'Melhor planejamento de estoque',
    ],
    image: '📊',
  },
  {
    id: 3,
    title: 'Migração para Arquitetura Moderna',
    company: 'Fintech',
    category: 'Engenharia',
    description: 'Refatoração de aplicação legada para cloud native.',
    results: [
      '10x melhor performance',
      'Escalabilidade automática',
      'Redução de downtime para 0.01%',
    ],
    image: '☁️',
  },
  {
    id: 4,
    title: 'Chatbot de Atendimento Inteligente',
    company: 'Serviços Financeiros',
    category: 'IA',
    description: 'IA conversacional para atendimento 24/7.',
    results: [
      '70% dos atendimentos resolvidos automaticamente',
      'Satisfação do cliente 9.2/10',
      'Redução de custos de 60%',
    ],
    image: '💬',
  },
  {
    id: 5,
    title: 'RPA em Gestão de Recursos Humanos',
    company: 'Empresa Multinacional',
    category: 'RPA',
    description: 'Automação de processos de recrutamento e onboarding.',
    results: [
      '50% menos tempo em processamento',
      'Experiência melhorada para candidatos',
      'Redução de erros manuais em 95%',
    ],
    image: '👥',
  },
  {
    id: 6,
    title: 'Plataforma de E-commerce Escalável',
    company: 'Retail Digital',
    category: 'Engenharia',
    description: 'Desenvolvimento de plataforma suportando 1M+ usuários.',
    results: [
      'Crescimento de 300% em volume',
      'Conversão aumentada em 45%',
      'Tempo de carregamento: 800ms',
    ],
    image: '🛍️',
  },
];

export default function Portfolio() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Cases de Sucesso
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Veja como ajudamos empresas a transformar seus negócios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{caseItem.image}</div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {caseItem.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{caseItem.company}</p>
                <p className="text-gray-700 mb-6">{caseItem.description}</p>

                <div className="space-y-2 border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-sm text-gray-900">Resultados:</h4>
                  {caseItem.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projetos Entregues' },
              { number: '35M', label: 'Economizados p/ Clientes' },
              { number: '98%', label: 'Taxa de Satisfação' },
              { number: '150+', label: 'Profissionais' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
