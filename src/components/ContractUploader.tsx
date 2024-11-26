import React, { useCallback } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

export default function ContractUploader() {
  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Handle file upload logic here
  }, []);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-blue-500 transition-colors duration-200"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-200 mb-2">Upload Smart Contract</h3>
      <p className="text-sm text-gray-400 mb-4">Drag and drop your Solidity files here, or click to select files</p>
      <input
        type="file"
        className="hidden"
        accept=".sol"
        id="contract-upload"
        multiple
      />
      <label
        htmlFor="contract-upload"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
      >
        Select Files
      </label>
      <div className="mt-4 flex items-center justify-center text-sm text-gray-400">
        <AlertCircle className="h-4 w-4 mr-1" />
        Supports .sol files up to 10MB
      </div>
    </div>
  );
}