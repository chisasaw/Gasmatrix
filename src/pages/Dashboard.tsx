import React from 'react';
import { BarChart3, Zap, Clock, Settings } from 'lucide-react';
import ContractUploader from '../components/ContractUploader';
import OptimizationResults from '../components/OptimizationResults';

export default function Dashboard() {
  const stats = [
    { title: 'Total Gas Saved', value: '2.5M', icon: Zap },
    { title: 'Contracts Optimized', value: '12', icon: Settings },
    { title: 'Average Improvement', value: '25%', icon: BarChart3 },
    { title: 'Last Optimization', value: '2h ago', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Upload Contract</h2>
              <ContractUploader />
            </div>
          </div>
          <div>
            <OptimizationResults />
          </div>
        </div>
      </div>
    </div>
  );
}