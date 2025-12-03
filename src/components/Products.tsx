import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Video, Zap, Shield, Gauge } from 'lucide-react';
import dfrDashboard from 'figma:asset/7f8a92bfbca498aa3f0a39e4866365d4769ed235.png';

export function Products() {
  return (
    <section id="products" className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-4">
            AEROSAFE Products
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced software platform designed to power your drone operations
          </p>
        </motion.div>

        {/* Product 1: DFR Software */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={dfrDashboard}
                  alt="DFR Fleet Management Software Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-slate-900 text-3xl mb-4">
                  Fleet Management System
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  AEROSAFE's DFR (Drone-as-First-Responder) & Fleet Management Platform is a real-time command and control system designed to help organizations operate drones safely, intelligently, and at scale. From automated mission dispatch to live video streaming, airspace intelligence, and compliance tools, AEROSAFE delivers everything needed to manage drone operations from a single, intuitive interface.
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-slate-900 text-lg">Key Features & Capabilities</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Video className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700">Live Video Streaming</p>
                      <p className="text-slate-500 text-sm">Real-time HD feeds from any drone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700">DFR Automation</p>
                      <p className="text-slate-500 text-sm">Dispatch within seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gauge className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700">Unified Fleet Management</p>
                      <p className="text-slate-500 text-sm">One dashboard for everything</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-700">GACA Compliance</p>
                      <p className="text-slate-500 text-sm">Automated regulatory alerts</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="text-slate-900 mb-3">Use Cases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-sm">
                    Public Safety & Emergency Response
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-sm">
                    Oil & Gas
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-sm">
                    Construction & Infrastructure
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-sm">
                    Utilities
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-sm">
                    Manufacturing Facilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}