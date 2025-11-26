'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import BuildPanel from '../../components/BuildPanel'
import DatasetSelector from '../../components/DatasetSelector'
import HyperparameterPanel from '../../components/HyperparameterPanel'

export default function BuildPage() {
  const router = useRouter()
  const [selectedDataset, setSelectedDataset] = useState('housing')
  const [learningRate, setLearningRate] = useState(0.01)
  const [iterations, setIterations] = useState(100)
  const [isTraining, setIsTraining] = useState(false)
  const [currentIteration, setCurrentIteration] = useState(0)
  const [showDataTable, setShowDataTable] = useState(false)

  return (
    <div className="bg-white dark:bg-[#0b1220] min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => router.push('/content')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg gradient-bg text-white hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Module progress: <span className="font-semibold text-pink-500">3/5</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            Build A Linear Regression Model
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interactive model training experience
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="glass-effect p-6 rounded-2xl animate-slide-up">
            <h2 className="text-2xl font-bold mb-3">
              <span className="gradient-text">1</span>
              <span className="ml-3 text-gray-800 dark:text-white">Let's Build The Model</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Follow these steps to train your own linear regression model. Select a dataset, choose hyperparameters, and visualize how the model learns to fit the data through gradient descent.
            </p>
          </div>

          {/* Section 2 - Dataset Selection */}
          <DatasetSelector 
            selectedDataset={selectedDataset}
            onDatasetChange={setSelectedDataset}
            showDataTable={showDataTable}
            onToggleDataTable={setShowDataTable}
          />

          {/* Section 3 - Hyperparameters */}
          <HyperparameterPanel 
            learningRate={learningRate}
            iterations={iterations}
            onLearningRateChange={setLearningRate}
            onIterationsChange={setIterations}
          />

          {/* Section 4 - Model Training */}
          <BuildPanel 
            selectedDataset={selectedDataset}
            learningRate={learningRate}
            iterations={iterations}
            isTraining={isTraining}
            setIsTraining={setIsTraining}
            currentIteration={currentIteration}
            setCurrentIteration={setCurrentIteration}
          />
        </div>

        {/* Navigation Footer */}
        <div className="mt-12 flex items-center justify-between">
          <button 
            onClick={() => router.push('/content')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-white hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <div className="text-center">
            {isTraining && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Iteration: <span className="font-semibold text-pink-500">{currentIteration}/{iterations}</span>
              </div>
            )}
          </div>

          <button 
            className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-white hover:shadow-lg transition-all duration-200"
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
