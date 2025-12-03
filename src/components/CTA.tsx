import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-white mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join the professionals who trust AEROSAFE to power their drone operations 
          with cutting-edge control, monitoring, and fleet management tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Demo
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          Trusted by industry leaders • Enterprise-ready solutions • 24/7 support
        </p>
      </div>
    </section>
  );
}
