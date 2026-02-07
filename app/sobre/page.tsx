'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Excelência',
    description: 'Comprometimento com qualidade em tudo que fazemos',
  },
  {
    title: 'Resultados',
    description: 'Foco em métricas, ganhos reais e impacto financeiro',
  },
  {
    title: 'Parceria',
    description: 'Trabalhando junto com nossos clientes para sucesso',
  },
  {
    title: 'Transparência',
    description: 'Comunicação clara e decisões orientadas por dados',
  },
];

export default function Sobre() {
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
              Sobre a MSS Consultoria
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Ajudamos empresas brasileiras a transformar operações com automação inteligente, IA aplicada e governança sólida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Nossa História</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A MSS Consultoria nasceu para aproximar tecnologia e resultados. Com experiência prática em ambiente corporativo bancário, estruturamos automações que respeitam regras, segurança e compliance sem perder velocidade.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ao longo dos anos, entregamos projetos de alto impacto em operações críticas, sempre com foco em produtividade, redução de custos e sustentabilidade das soluções.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold text-brand-primary">Marlow</h3>
              <p className="text-gray-600 font-semibold">Fundador & Especialista em Automação</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-4 text-gray-600"
            >
              <p>
                Com mais de 8 anos em automação inteligente, Marlow lidera projetos que
                conectam processos críticos a resultados mensuráveis. Sua trajetória inclui
                operações bancárias complexas, garantindo governança e eficiência.
              </p>
              <p>
                Formação em Engenharia Mecânica, MBA em Data Science (USP) e MBA em IA (FGV),
                combinando visão estratégica e domínio técnico para acelerar decisões.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-brand-primary">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-brand-surface rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
