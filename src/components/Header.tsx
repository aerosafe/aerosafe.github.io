import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl tracking-wider transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Aldrich, sans-serif' }}>
              AEROSAFE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className={`transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a
              href="#products"
              className={`transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Products
            </a>
            <a
              href="#solutions"
              className={`transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solutions
            </a>
            <a
              href="#contact"
              className={`transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}