import { ImageWithFallback } from './figma/ImageWithFallback';
import { Building2, Factory, Layers, Route } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Construction',
    description: 'Monitor progress, track materials, and ensure quality with regular site scans',
    image: 'https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MzAyMTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Factory,
    title: 'Government',
    description: 'Empower public safety agencies with real-time situational awareness and rapid response capabilities',
    image: 'https://images.unsplash.com/photo-1668883738061-e46019b0b9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzYyOTYzODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Layers,
    title: 'Infrastructure',
    description: 'Inspect bridges, roads, and utilities with live video and data',
    image: 'https://images.unsplash.com/photo-1656082644825-a9227fec24ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxsJTIwdG93ZXIlMjBkcm9uZXxlbnwxfHx8fDE3NjQ2Njg5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Route,
    title: 'Oil & Gas',
    description: 'Monitor pipelines and facilities for safety and compliance',
    image: 'https://images.unsplash.com/photo-1649829725145-d93731589a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwaXBlbGluZXxlbnwxfHx8fDE3NjQ2NjkwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by leading companies across multiple industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
