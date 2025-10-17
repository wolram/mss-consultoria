'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'João Silva',
    role: 'Founder & CEO',
    image: '👨‍💼',
    bio: 'Especialista em RPA com 15 anos de experiência',
  },
  {
    name: 'Maria Santos',
    role: 'CTO',
    image: '👩‍💻',
    bio: 'Engenheira de Software e especialista em IA',
  },
  {
    name: 'Pedro Oliveira',
    role: 'Head of Solutions',
    image: '👨‍🔬',
    bio: 'Consultор de automação e otimização de processos',
  },
];

const values = [
  {
    title: 'Excelência',
    description: 'Comprometimento com qualidade em tudo que fazemos',
  },
  {
    title: 'Inovação',
    description: 'Sempre buscando as melhores soluções tecnológicas',
  },
  {
    title: 'Parceria',
    description: 'Trabalhando junto com nossos clientes para sucesso',
  },
  {
    title: 'Confiança',
    description: 'Transparência e segurança em cada projeto',
  },
];

export default function Sobre() {
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
              Sobre a MSS
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Somos especialistas em transformação digital, ajudando empresas a alcançar excelência operacional através de RPA, IA e Engenharia de Software.
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
              Fundada em 2018, a MSS Consultoria nasceu da visão de transformar a forma como as empresas operam através de tecnologia inteligente. O que começou como um pequeno time de especialistas, hoje é referência em soluções de automação e inteligência artificial.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ao longo dos anos, ajudamos centenas de empresas a otimizar seus processos, reduzir custos operacionais e ganhar competitividade no mercado. Cada projeto é uma oportunidade de inovar e criar valor real para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Nosso Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
