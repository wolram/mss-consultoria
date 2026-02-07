'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    id: 1,
    title: 'Automação de processamento de pedidos',
    sector: 'Varejo e logística',
    category: 'RPA',
    description: 'Implementação de bots para tratar milhares de pedidos diários sem intervenção manual.',
    results: [
      '80% de redução no tempo de processamento',
      '99,9% de precisão nas validações',
      'Economia anual relevante em backoffice',
    ],
    image: '📦',
  },
  {
    id: 2,
    title: 'IA para previsão de demanda',
    sector: 'Indústria de bens de consumo',
    category: 'IA',
    description: 'Modelos preditivos para compras e planejamento de produção.',
    results: [
      '95% de acurácia nas previsões',
      '30% de redução em desperdícios',
      'Otimização de estoque e compras',
    ],
    image: '📊',
  },
  {
    id: 3,
    title: 'Automação bancária com compliance',
    sector: 'Serviços financeiros',
    category: 'RPA',
    description: 'Automação de fluxos críticos com regras de compliance e auditoria.',
    results: [
      'Redução de retrabalho em 45%',
      'Rastreabilidade completa de processos',
      'Operação auditável em tempo real',
    ],
    image: '🏦',
  },
  {
    id: 4,
    title: 'Chatbot de Atendimento Inteligente',
    sector: 'Serviços',
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
    title: 'Automação de RH e onboarding',
    sector: 'Indústria e serviços',
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
    title: 'Análise inteligente de KPIs operacionais',
    sector: 'Operações corporativas',
    category: 'IA',
    description: 'Dashboards com insights automatizados para tomada de decisão.',
    results: [
      'Indicadores críticos em tempo real',
      'Automação de relatórios executivos',
      'Melhoria de produtividade em áreas-chave',
    ],
    image: '📈',
  },
];

export default function Portfolio() {
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
              Cases & Portfólio
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Projetos com métricas claras e impacto real, sempre preservando a confidencialidade dos clientes.
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
                <p className="text-gray-600 text-sm mb-4">{caseItem.sector}</p>
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
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '60+', label: 'Bots em produção' },
              { number: 'R$ 8M+', label: 'Economia gerada' },
              { number: '8+ anos', label: 'Experiência em automação' },
              { number: '12+', label: 'Setores atendidos' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-brand-primary">
            Setores atendidos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
            {[
              'Bancos e serviços financeiros',
              'Varejo e e-commerce',
              'Indústria',
              'Logística',
              'Saúde',
              'Educação corporativa',
              'BPO e backoffice',
              'Serviços profissionais',
            ].map((sector) => (
              <div
                key={sector}
                className="bg-brand-surface border border-gray-200 rounded-lg px-4 py-3 text-sm"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
