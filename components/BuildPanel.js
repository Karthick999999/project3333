'use client'
import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

export default function BuildPanel({ 
  selectedDataset, 
  learningRate, 
  iterations,
  isTraining,
  setIsTraining,
  currentIteration,
  setCurrentIteration
}) {
  const [cost, setCost] = useState(1.0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasBuilt, setHasBuilt] = useState(false)

  const handleBuild = () => {
    setIsTraining(true)
    setHasBuilt(true)
    setCurrentIteration(0)
    setCost(1.0)
    setIsPlaying(true)
  }

  const handleReset = () => {
    setIsTraining(false)
    setHasBuilt(false)
    setCurrentIteration(0)
    setCost(1.0)
    setIsPlaying(false)
  }

  useEffect(() => {
    if (isTraining && isPlaying && currentIteration < iterations) {
      const timer = setTimeout(() => {
        setCurrentIteration(prev => prev + 1)
        // Simulate cost reduction
        setCost(prev => Math.max(0.01, prev * 0.97))
      }, 50)
      return () => clearTimeout(timer)
    } else if (currentIteration >= iterations) {
      setIsTraining(false)
      setIsPlaying(false)
    }
  }, [isTraining, isPlaying, currentIteration, iterations])

  const progress = hasBuilt ? (currentIteration / iterations) * 100 : 0

  return (
    <div className="glass-effect p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-2xl font-bold mb-4">
        <span className="gradient-text">4</span>
        <span className="ml-3 text-gray-800 dark:text-white">Model's Growth</span>
      </h2>

      {/* Control Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleBuild}
          disabled={isTraining}
          className="flex-1 py-3 gradient-bg text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isTraining ? 'Training...' : 'Build Model'}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-2"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>

      {/* Placeholder or Charts */}
      {!hasBuilt ? (
        <div className="bg-gray-50 dark:bg-[#0a1a2e] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Select a dataset and parameters, then click <span className="font-semibold text-pink-500">'Build Model'</span> to start training
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Training Progress</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full gradient-bg transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Linear Regression Model Chart */}
            <div className="bg-gray-50 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Linear Regression Model</h3>
              <div className="h-48">
                <svg className="w-full h-full" viewBox="0 0 300 180">
                  {/* Axes */}
                  <line x1="30" y1="160" x2="280" y2="160" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  <line x1="30" y1="160" x2="30" y2="20" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  
                  {/* Data Points */}
                  <circle cx="50" cy="140" r="4" className="fill-blue-500" />
                  <circle cx="90" cy="120" r="4" className="fill-blue-500" />
                  <circle cx="130" cy="100" r="4" className="fill-blue-500" />
                  <circle cx="170" cy="80" r="4" className="fill-blue-500" />
                  <circle cx="210" cy="60" r="4" className="fill-blue-500" />
                  <circle cx="250" cy="40" r="4" className="fill-blue-500" />
                  
                  {/* Best Fit Line - animates based on progress */}
                  <line 
                    x1="40" 
                    y1={160 - (progress * 1.2)} 
                    x2="260" 
                    y2={30 + ((100 - progress) * 0.3)} 
                    stroke="#ec4899" 
                    strokeWidth="3" 
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            </div>

            {/* Cost Function Chart */}
            <div className="bg-gray-50 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Cost Function (MSE)</h3>
              <div className="h-48">
                <svg className="w-full h-full" viewBox="0 0 300 180">
                  {/* Axes */}
                  <line x1="30" y1="160" x2="280" y2="160" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  <line x1="30" y1="160" x2="30" y2="20" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  
                  {/* Cost curve - decreasing */}
                  <path
                    d={`M 40 40 Q 100 ${140 - progress} 260 ${160 - progress * 0.8}`}
                    stroke="#06b6d4"
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-300"
                  />
                  
                  {/* Current point */}
                  <circle 
                    cx={40 + (progress * 2.2)} 
                    cy={160 - progress * 0.8} 
                    r="5" 
                    className="fill-pink-500 animate-pulse"
                  />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                Current Cost: <span className="font-semibold text-cyan-500">{cost.toFixed(4)}</span>
              </p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentIteration(Math.max(0, currentIteration - 10))}
              disabled={currentIteration === 0}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={currentIteration >= iterations}
              className="p-3 rounded-lg gradient-bg text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={() => setCurrentIteration(Math.min(iterations, currentIteration + 10))}
              disabled={currentIteration >= iterations}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
