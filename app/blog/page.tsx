'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'RPA: O Futuro da Automação Empresarial',
    excerpt: 'Descubra como RPA está revolucionando a forma como as empresas operam.',
    date: '16 de Outubro, 2024',
    author: 'João Silva',
    category: 'RPA',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'IA em Negócios: Aplicações Práticas e Casos de Sucesso',
    excerpt: 'Explore as principais aplicações de IA que estão transformando indústrias.',
    date: '14 de Outubro, 2024',
    author: 'Maria Santos',
    category: 'IA',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Engenharia de Software Moderna: Arquiteturas em 2024',
    excerpt: 'Tendências e melhores práticas em arquitetura de software.',
    date: '10 de Outubro, 2024',
    author: 'Pedro Oliveira',
    category: 'Engenharia',
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'Cloud Migration: Guia Completo para sua Empresa',
    excerpt: 'Passo a passo para migrar sua infraestrutura para a nuvem.',
    date: '05 de Outubro, 2024',
    author: 'João Silva',
    category: 'DevOps',
    readTime: '7 min',
  },
  {
    id: 5,
    title: 'Machine Learning: Algoritmos que Transformam Dados em Insights',
    excerpt: 'Entenda os principais algoritmos de ML e como aplicá-los.',
    date: '01 de Outubro, 2024',
    author: 'Maria Santos',
    category: 'IA',
    readTime: '9 min',
  },
  {
    id: 6,
    title: 'Automação de Testes: Qualidade em Velocidade',
    excerpt: 'Como implementar testes automatizados para melhorar a qualidade.',
    date: '28 de Setembro, 2024',
    author: 'Pedro Oliveira',
    category: 'Engenharia',
    readTime: '6 min',
  },
];

export default function Blog() {
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
              Blog MSS
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Insights, tendências e conhecimento sobre RPA, IA e Engenharia de Software
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 hover:text-gray-600 transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-6">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-4">
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p>{post.date}</p>
                    </div>
                    <Link href="#" className="text-black font-semibold hover:underline">
                      Ler →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Receba nossos artigos por email
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Insights semanais sobre tecnologia e transformação digital
            </p>

            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-semibold"
              >
                Inscrever
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
