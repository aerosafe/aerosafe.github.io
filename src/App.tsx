import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandReveal } from './components/BrandReveal';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Solutions } from './components/Solutions';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandReveal />
      <Products />
      <Features />
      <Solutions />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}