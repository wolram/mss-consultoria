'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-black">
          MSS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contato"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Conversar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-opacity ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-black transition-transform ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="px-6 py-2 bg-black text-white rounded-lg text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Conversar
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
