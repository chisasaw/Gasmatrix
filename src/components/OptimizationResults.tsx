import React from 'react';
import { TrendingDown, Clock, Code, Check } from 'lucide-react';

export default function OptimizationResults() {
  const results = [
    {
      contract: 'TokenContract.sol',
      originalGas: 150000,
      optimizedGas: 120000,
      savings: '20%',
      status: 'Completed'
    },
    {
      contract: 'Marketplace.sol',
      originalGas: 280000,
      optimizedGas: 195000,
      savings: '30%',
      status: 'Completed'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Optimization Results</h2>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-white font-medium">{result.contract}</span>
              </div>
              <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full flex items-center">
                <Check className="h-3 w-3 mr-1" />
                {result.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Original Gas</div>
                <div className="text-white font-medium">{result.originalGas}</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Optimized Gas</div>
                <div className="text-white font-medium">{result.optimizedGas}</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-gray-400 text-sm mb-1">Savings</div>
                <div className="text-green-400 font-medium flex items-center">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {result.savings}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}