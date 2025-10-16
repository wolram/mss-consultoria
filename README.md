# MSS Consultoria - Website

Website profissional da MSS Consultoria, especializada em RPA, IA e Engenharia de Software.

## 🚀 Stack Tecnológico

- **Next.js 14** - React framework moderno
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Node.js** - Backend runtime

## 📁 Estrutura do Projeto

```
mss-consultoria/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── globals.css        # Estilos globais
│   ├── sobre/page.tsx     # Página sobre
│   ├── servicos/page.tsx  # Página serviços
│   ├── portfolio/page.tsx # Página portfolio
│   ├── blog/page.tsx      # Página blog
│   └── contato/page.tsx   # Página contato
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx     # Menu de navegação
│   ├── Footer.tsx         # Rodapé
│   ├── Hero.tsx           # Section hero
│   ├── Services.tsx       # Services cards
│   ├── CTA.tsx            # Call to action
│   └── ContactForm.tsx    # Formulário contato
├── lib/                   # Utilitários
├── public/                # Assets estáticos
├── tailwind.config.ts     # Tailwind config
├── next.config.js         # Next.js config
└── tsconfig.json          # TypeScript config
```

## 🎨 Design

- **Cores**: Preto, Cinza e Branco (estilo Apple)
- **Fonte**: System-ui sans-serif
- **Layout**: Responsivo mobile-first
- **Animações**: Suaves com Framer Motion

## 🚀 Como Começar

### 1. Clonar e Instalar

```bash
cd mss-consultoria
npm install
```

### 2. Variáveis de Ambiente

Criar `.env.local`:

```env
# Email (para formulário de contato)
NEXT_PUBLIC_EMAIL_SERVICE=your_service
EMAIL_API_KEY=your_api_key
```

### 3. Iniciar Desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

## 📄 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Home | `/` | Página inicial com hero e serviços |
| Sobre | `/sobre` | História, missão e time |
| Serviços | `/servicos` | Detalhes dos 3 serviços principais |
| Portfolio | `/portfolio` | Cases de sucesso e resultados |
| Blog | `/blog` | Artigos e insights |
| Contato | `/contato` | Formulário e informações de contato |

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build para produção
npm start        # Iniciar servidor de produção
npm run lint     # Executar ESLint
```

## 📦 Dependências Principais

- **next**: Framework React
- **react & react-dom**: Biblioteca UI
- **framer-motion**: Animações
- **tailwindcss**: Estilização
- **typescript**: Type safety
- **nodemailer**: Email service

## 🎯 Funcionalidades

✅ Landing page profissional
✅ Página sobre com time
✅ Descrição detalhada de serviços
✅ Portfolio com cases de sucesso
✅ Blog com artigos
✅ Formulário de contato
✅ Newsletter signup
✅ Design responsivo
✅ Animações suaves
✅ SEO otimizado

## 📞 Contato

- **Email**: contato@mssconsultoria.com.br
- **Telefone**: +55 (11) 99999-9999
- **Website**: mssconsultoria.com.br

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Build Manual

```bash
npm run build
npm start
```

## 📝 Customizações

### Adicionar nova página

1. Criar arquivo em `app/nova-pagina/page.tsx`
2. Adicionar link em `Navigation.tsx`
3. Seguir o padrão de layout existente

### Mudar cores

Editar `tailwind.config.ts` seção `colors`

### Adicionar animações

Usar `framer-motion` nos componentes:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Conteúdo animado
</motion.div>
```

## 📄 Licença

© 2024 MSS Consultoria. Todos os direitos reservados.

## 🤝 Contribuindo

Para contribuir:

1. Criar uma branch (`git checkout -b feature/melhoria`)
2. Commit mudanças (`git commit -am 'Adiciona melhoria'`)
3. Push para branch (`git push origin feature/melhoria`)
4. Criar Pull Request

---

**Desenvolvido com ❤️ para MSS Consultoria**
