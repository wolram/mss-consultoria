'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contato() {
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
              Vamos Conversar
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              Entre em contato conosco para discutir como podemos ajudar seu negócio a crescer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">Telefone</h3>
                <a
                  href="tel:+5511999999999"
                  className="text-gray-600 hover:text-black transition-colors text-lg"
                >
                  +55 (11) 99999-9999
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">Email</h3>
                <a
                  href="mailto:contato@mssconsultoria.com.br"
                  className="text-gray-600 hover:text-black transition-colors text-lg"
                >
                  contato@mssconsultoria.com.br
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">Localização</h3>
                <p className="text-gray-600">
                  São Paulo, SP<br />
                  Brasil
                </p>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black transition-colors">
                    Twitter
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3">Horário</h3>
                <p className="text-gray-600">
                  Segunda - Sexta<br />
                  9:00 - 18:00
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Qual é o tempo médio para implementação?',
                a: 'Varia conforme a complexidade. Projetos simples: 2-4 semanas. Projetos complexos: 3-6 meses.',
              },
              {
                q: 'Como funciona o processo de consultoria?',
                a: '1. Diagnóstico inicial 2. Planejamento 3. Implementação 4. Testes 5. Deploy 6. Suporte',
              },
              {
                q: 'Oferecem suporte pós-implementação?',
                a: 'Sim! Oferecemos diferentes planos de suporte e manutenção adaptados às suas necessidades.',
              },
              {
                q: 'Posso contratar por projeto ou precisa ser um contrato longo?',
                a: 'Oferecemos flexibilidade! Podemos trabalhar com projetos pontuais ou contratos de longa duração.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
