import { Cpu, Video, Radar, Users, MapPin, FileText } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI-Powered Fleet Management',
    description: 'Centralize control and visibility of all drone operations',
  },
  {
    icon: Video,
    title: 'Live Video Streaming',
    description: 'Monitor drone feeds in real-time for the latest updates',
  },
  {
    icon: Radar,
    title: 'Airspace Intelligence',
    description: 'Visualize and manage airspace utilization for safe and compliant flights',
  },
  {
    icon: Users,
    title: 'Pilot Oversight',
    description: 'Coordinate and oversee multiple pilots from a central command center',
  },
  {
    icon: MapPin,
    title: 'Asset Tracking',
    description: 'Monitor the location and status of your entire drone fleet in one place',
  },
  {
    icon: FileText,
    title: 'Regulatory Maps',
    description: 'Access up-to-date airspace regulations and restrictions to ensure compliance',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Powerful Features for Modern Workflows
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to capture, process, and analyze reality data in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}