const colors = [
  {
    name: 'Azul profundo',
    hex: '#1E3A5F',
    description: 'Confiança, solidez e foco em resultados.',
    className: 'bg-brand-primary text-white',
  },
  {
    name: 'Verde tecnológico',
    hex: '#00D4AA',
    description: 'Inovação, energia e crescimento sustentável.',
    className: 'bg-brand-accent text-brand-deep',
  },
  {
    name: 'Cinza sofisticado',
    hex: '#F5F7FA',
    description: 'Base neutra, clareza e leitura confortável.',
    className: 'bg-brand-surface text-brand-primary',
  },
  {
    name: 'Azul profundo escuro',
    hex: '#162C46',
    description: 'Contraste para chamadas e elementos de destaque.',
    className: 'bg-brand-deep text-white',
  },
];

const typography = [
  { label: 'H1', className: 'text-5xl md:text-6xl font-bold', text: 'Transformação digital com foco em impacto' },
  { label: 'H2', className: 'text-4xl md:text-5xl font-bold', text: 'Automação inteligente e IA aplicada' },
  { label: 'H3', className: 'text-2xl font-semibold', text: 'Resultados mensuráveis e previsíveis' },
  { label: 'Body', className: 'text-base text-gray-600', text: 'Tom de comunicação direto, formal e acessível para lideranças.' },
];

const patterns = [
  {
    title: 'Seção com KPI',
    description: 'Combina headline com números de impacto para gerar confiança imediata.',
  },
  {
    title: 'Cards de serviço',
    description: 'Explicam valor com linguagem simples e CTA visível.',
  },
  {
    title: 'Bloco de prova social',
    description: 'Depoimentos sem expor clientes, focando em métricas e ganhos.',
  },
  {
    title: 'CTA final',
    description: 'Mensagem objetiva com ação única para acelerar conversão.',
  },
];

export default function DesignSystem() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-brand-surface to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-primary">
              Design System MSS Consultoria
            </h1>
            <p className="text-2xl text-gray-600">
              Guia institucional de identidade visual, componentes e padrões para manter consistência,
              performance e clareza em todas as páginas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-brand-primary mb-6">Estudo de cor</h2>
              <p className="text-gray-600 mb-6">
                A paleta equilibra credibilidade com modernidade, mantendo foco em performance e clareza.
              </p>
              <div className="space-y-4">
                {colors.map((color) => (
                  <div key={color.name} className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl border border-white/40 ${color.className}`} />
                    <div>
                      <p className="font-semibold">{color.name}</p>
                      <p className="text-sm text-gray-600">{color.hex}</p>
                      <p className="text-sm text-gray-500">{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-surface rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Aplicação de cor</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Primária: botões principais, links e headlines.</li>
                <li>Accent: indicadores de sucesso e bullet points.</li>
                <li>Surface: fundos suaves e cartões de apoio.</li>
                <li>Deep: contraste para CTA e rodapé.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-primary mb-10">Tipografia</h2>
          <div className="space-y-6">
            {typography.map((item) => (
              <div key={item.label} className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-24 text-sm font-semibold text-gray-500">{item.label}</div>
                <div className={item.className}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-primary mb-10">Componentes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Botões</h3>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold">
                  CTA primário
                </button>
                <button className="w-full px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg font-semibold">
                  CTA secundário
                </button>
                <button className="w-full px-6 py-3 bg-brand-accent text-brand-deep rounded-lg font-semibold">
                  Ação de destaque
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Cards informativos</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-500">Métrica de impacto</p>
                  <p className="text-2xl font-bold text-brand-primary">R$ 8M+</p>
                  <p className="text-sm text-gray-600">Economia gerada</p>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 bg-brand-surface">
                  <p className="text-sm text-gray-500">Eficiência</p>
                  <p className="text-xl font-semibold">35% menos tempo</p>
                  <p className="text-sm text-gray-600">Processos críticos</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Campos de formulário</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                />
                <input
                  type="email"
                  placeholder="Email corporativo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary">
                  <option>Selecione o interesse</option>
                  <option>RPA & Automação</option>
                  <option>Soluções de IA</option>
                  <option>Consultoria</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-primary mb-10">Design Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patterns.map((pattern) => (
              <div key={pattern.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
                <p className="text-gray-600">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-brand-primary text-white rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">SEO & performance</h2>
              <p className="text-white/80 max-w-2xl">
                Metadados estruturados, sitemap e robots configurados para maximizar descobrimento
                orgânico e garantir Core Web Vitals.
              </p>
            </div>
            <a
              href="/contato"
              className="px-8 py-4 bg-white text-brand-primary rounded-lg font-semibold"
            >
              Falar com a MSS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
