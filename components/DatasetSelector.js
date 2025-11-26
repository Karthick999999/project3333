'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const datasets = {
  housing: {
    name: 'Housing Prices',
    description: 'Predict house prices based on square footage. A classic dataset for understanding linear relationships between property size and market value.',
    data: [
      { x: 1000, y: 150000 },
      { x: 1500, y: 200000 },
      { x: 2000, y: 250000 },
      { x: 2500, y: 300000 },
      { x: 3000, y: 350000 },
    ]
  },
  sales: {
    name: 'Sales Revenue',
    description: 'Analyze the relationship between advertising spend and sales revenue to optimize marketing budgets.',
    data: [
      { x: 1000, y: 10000 },
      { x: 2000, y: 18000 },
      { x: 3000, y: 27000 },
      { x: 4000, y: 35000 },
      { x: 5000, y: 44000 },
    ]
  },
  salary: {
    name: 'Salary vs Experience',
    description: 'Understand how years of experience correlate with salary expectations in the tech industry.',
    data: [
      { x: 1, y: 40000 },
      { x: 3, y: 55000 },
      { x: 5, y: 70000 },
      { x: 7, y: 85000 },
      { x: 10, y: 100000 },
    ]
  },
}

export default function DatasetSelector({ selectedDataset, onDatasetChange, showDataTable, onToggleDataTable }) {
  const [isOpen, setIsOpen] = useState(false)
  const currentDataset = datasets[selectedDataset]

  return (
    <div className="glass-effect p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <h2 className="text-2xl font-bold mb-4">
        <span className="gradient-text">2</span>
        <span className="ml-3 text-gray-800 dark:text-white">Visualizing the Relationship</span>
      </h2>
      
      <div className="space-y-4">
        {/* Dropdown */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Dataset
          </label>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#0a1a2e] border border-gray-300 dark:border-purple-500/30 rounded-lg hover:border-pink-500 dark:hover:border-pink-500 transition-colors duration-200"
          >
            <span className="text-gray-800 dark:text-white font-medium">{currentDataset.name}</span>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white dark:bg-[#0a1a2e] border border-gray-300 dark:border-purple-500/30 rounded-lg shadow-xl overflow-hidden">
              {Object.entries(datasets).map(([key, dataset]) => (
                <button
                  key={key}
                  onClick={() => {
                    onDatasetChange(key)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-[#061425] transition-colors duration-200 ${
                    key === selectedDataset ? 'bg-pink-50 dark:bg-purple-900/20 text-pink-600 dark:text-pink-400' : 'text-gray-800 dark:text-white'
                  }`}
                >
                  {dataset.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dataset Description */}
        <div className="bg-gray-50 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30">
          <p className="text-sm text-gray-700 dark:text-gray-300">{currentDataset.description}</p>
        </div>

        {/* View Dataset Button */}
        <button
          onClick={() => onToggleDataTable(!showDataTable)}
          className="w-full py-3 gradient-bg text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          {showDataTable ? 'Hide Dataset Table' : 'View Dataset Table'}
        </button>

        {/* Dataset Table */}
        {showDataTable && (
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-purple-500/30 animate-slide-up">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-[#0a1a2e]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">X (Input)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Y (Output)</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-[#061425]">
                {currentDataset.data.map((point, idx) => (
                  <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">{point.x}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-300">{point.y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Mini Preview Chart */}
        <div className="bg-gray-50 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Dataset Preview</p>
          <div className="h-32">
            <svg className="w-full h-full" viewBox="0 0 300 120">
              {/* Simple scatter plot */}
              {currentDataset.data.map((point, idx) => {
                const x = 40 + (idx * 50)
                const y = 100 - (point.y / Math.max(...currentDataset.data.map(p => p.y)) * 70)
                return <circle key={idx} cx={x} cy={y} r="4" className="fill-blue-500" />
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
