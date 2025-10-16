'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'RPA - Automação de Processos',
    description: 'Automatize processos repetitivos e manuais com nossa plataforma RPA.',
    icon: '🤖',
    details: [
      'Análise e mapeamento de processos',
      'Desenvolvimento de bots inteligentes',
      'Integração com sistemas existentes',
      'Monitoramento e otimização contínua',
      'Treinamento de equipes',
    ],
    benefits: [
      'Redução de 70% em tempo de execução',
      'Aumento de precisão para 99.9%',
      'Economia de custos operacionais',
      'Liberação de equipe para tarefas estratégicas',
    ],
  },
  {
    id: 2,
    title: 'IA - Inteligência Artificial',
    description: 'Implemente soluções de IA para análise, predição e decisões inteligentes.',
    icon: '🧠',
    details: [
      'Machine Learning e Deep Learning',
      'Análise preditiva de dados',
      'Processamento de linguagem natural',
      'Visão computacional',
      'Chatbots inteligentes',
    ],
    benefits: [
      'Insights mais precisos e rápidos',
      'Tomada de decisão baseada em dados',
      'Melhoria na experiência do cliente',
      'Automatização de tarefas cognitivas',
    ],
  },
  {
    id: 3,
    title: 'Engenharia de Software',
    description: 'Desenvolvimento de aplicações robustas e escaláveis.',
    icon: '💻',
    details: [
      'Desenvolvimento Full Stack',
      'Arquitetura de sistemas',
      'Migração para cloud',
      'DevOps e CI/CD',
      'Testes automatizados',
    ],
    benefits: [
      'Código limpo e manutenível',
      'Performance e escalabilidade',
      'Segurança de ponta',
      'Entrega ágil e contínua',
    ],
  },
];

export default function Servicos() {
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
              Nossos Serviços
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Soluções completas para transformar seu negócio
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
                          <span className="text-black mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Benefícios:</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="border-l-4 border-black pl-4">
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-semibold">
                    Solicitar Orçamento
                  </button>
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
