/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      data-aos="fade-down"
      className="bg-primary-container text-white shadow-lg sticky top-0 z-50 h-20 w-full flex justify-between items-center px-4 md:px-12"
    >
      <img src="/assets/agro limk logo png3.png" alt="AgroLink Logo" className="h-14 w-auto" />
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 font-inter text-sm tracking-tight">
        <a className="text-secondary-container font-semibold border-b-2 border-secondary-container pb-1" href="#who-we-are">Who we are</a>
        <a className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" href="#product">Product</a>
        <a className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" href="#sustainability">Sustainability</a>
        <a className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" href="#careers">Careers</a>
      </nav>
      
      <button className="hidden md:block bg-secondary-container text-primary-container font-semibold px-6 py-2.5 rounded-full hover:scale-95 active:scale-100 duration-200 transition-all text-sm">
        DM Whatsapp
      </button>

      {/* Hamburger Button */}
      <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-primary-container text-white flex flex-col items-center gap-6 py-8 md:hidden">
          <a className="text-secondary-container font-semibold" href="#who-we-are" onClick={() => setIsOpen(false)}>Who we are</a>
          <a className="text-white/80" href="#product" onClick={() => setIsOpen(false)}>Product</a>
          <a className="text-white/80" href="#sustainability" onClick={() => setIsOpen(false)}>Sustainability</a>
          <a className="text-white/80" href="#careers" onClick={() => setIsOpen(false)}>Careers</a>
          <button className="bg-secondary-container text-primary-container font-semibold px-6 py-2.5 rounded-full text-sm">
            DM Whatsapp
          </button>
        </nav>
      )}
    </header>
  );
}
