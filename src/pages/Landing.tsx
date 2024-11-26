import React from 'react';
import { ArrowRight, Cpu, Zap, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Optimize Your Smart Contracts
              <span className="text-blue-500"> Automatically</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Reduce gas costs and improve efficiency with our advanced optimization engine.
              Upload your contracts and let AI handle the rest.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all"
              >
                Click to Open Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:border-gray-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our advanced optimization engine analyzes your smart contracts and suggests improvements
              to reduce gas costs while maintaining functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'AI-Powered Analysis',
                description: 'Advanced algorithms analyze your code to find optimization opportunities.'
              },
              {
                icon: Zap,
                title: 'Gas Optimization',
                description: 'Reduce transaction costs with our proven optimization techniques.'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'All optimizations are verified to maintain contract security and functionality.'
              },
              {
                icon: Code,
                title: 'Multiple Contracts',
                description: 'Optimize entire projects with support for multiple contract files.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="p-2 bg-blue-500/10 w-fit rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Smart Contracts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join developers who are saving on gas fees with our platform.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all"
            >
              Click to Open Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}