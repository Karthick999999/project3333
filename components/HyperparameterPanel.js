'use client'

export default function HyperparameterPanel({ learningRate, iterations, onLearningRateChange, onIterationsChange }) {
  return (
    <div className="glass-effect p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-2xl font-bold mb-4">
        <span className="gradient-text">3</span>
        <span className="ml-3 text-gray-800 dark:text-white">Choose the Hyperparameters</span>
      </h2>
      
      <div className="space-y-6">
        {/* Explanation Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-purple-500/30">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-[#0a1a2e]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Parameter</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#061425]">
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-pink-500">Learning Rate (α)</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  Controls how big the steps are when adjusting weights. Too high = overshoot, too low = slow learning.
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-3 text-sm font-medium text-pink-500">Iterations</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  Number of times the algorithm updates the weights to minimize error.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Learning Rate Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Learning Rate (α): <span className="text-pink-500 font-semibold">{learningRate.toFixed(3)}</span>
          </label>
          <input
            type="range"
            min="0.001"
            max="0.1"
            step="0.001"
            value={learningRate}
            onChange={(e) => onLearningRateChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>0.001</span>
            <span>0.1</span>
          </div>
        </div>

        {/* Iterations Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Iterations: <span className="text-pink-500 font-semibold">{iterations}</span>
          </label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={iterations}
            onChange={(e) => onIterationsChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>10</span>
            <span>500</span>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-4 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <span className="font-semibold">💡 Tip:</span> Start with a learning rate of 0.01 and 100 iterations. If the model doesn't converge, try reducing the learning rate.
          </p>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}
