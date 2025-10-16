import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">MSS Consultoria</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluções em RPA, IA e Engenharia de Software para transformar seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:contato@mssconsultoria.com.br" className="hover:text-white">
                  contato@mssconsultoria.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:text-white">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 MSS Consultoria. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
