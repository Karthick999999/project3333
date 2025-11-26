'use client'
import { useRouter } from 'next/navigation'
import ContentCard from '../../components/ContentCard'
import { Lightbulb } from 'lucide-react'

export default function ContentPage() {
  const router = useRouter()

  return (
    <div className="bg-white dark:bg-[#0b1220] min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#061425] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#0a1f3d] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Module progress: <span className="font-semibold text-pink-500">2/5</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            Introduction to Linear Regression
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Master the fundamentals of predictive modeling
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* Section 1 */}
          <ContentCard 
            number="1"
            title="What is Linear Regression?"
            className="animate-slide-up"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Linear Regression is a fundamental supervised learning algorithm used to predict a continuous <a href="#" className="text-blue-500 hover:text-blue-600 underline">dependent variable</a> based on one or more <a href="#" className="text-blue-500 hover:text-blue-600 underline">independent variables</a>. It assumes a linear relationship between the input features and the output.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The goal is to find the best-fitting straight line (called the regression line) through the data points that minimizes the prediction error.
            </p>
          </ContentCard>

          {/* Section 2 */}
          <ContentCard 
            number="2"
            title="Mathematical Formulation"
            className="animate-slide-up" 
            style={{ animationDelay: '0.1s' }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The linear regression model can be represented by the equation:
            </p>
            <div className="bg-gray-100 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30 mb-4">
              <p className="text-center text-xl font-semibold text-gray-800 dark:text-white">
                y = w·x + b
              </p>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><span className="font-semibold text-pink-500">y</span> = predicted output (dependent variable)</p>
              <p><span className="font-semibold text-pink-500">x</span> = input feature (independent variable)</p>
              <p><span className="font-semibold text-pink-500">w</span> = weight (slope of the line)</p>
              <p><span className="font-semibold text-pink-500">b</span> = bias (y-intercept)</p>
            </div>
          </ContentCard>

          {/* Section 3 */}
          <ContentCard 
            number="3"
            title="Intuition Behind Linear Regression"
            className="animate-slide-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Imagine plotting student study hours against their exam scores. Linear regression finds the line that best represents this relationship, allowing us to predict scores for any given study time.
            </p>
            
            {/* Scatter Plot Visualization */}
            <div className="bg-gray-50 dark:bg-[#0a1a2e] p-6 rounded-lg border border-gray-200 dark:border-purple-500/30">
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 400 250">
                  {/* Axes */}
                  <line x1="40" y1="210" x2="360" y2="210" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  <line x1="40" y1="210" x2="40" y2="30" stroke="currentColor" strokeWidth="2" className="text-gray-400" />
                  
                  {/* Axis Labels */}
                  <text x="200" y="240" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">Study Hours</text>
                  <text x="15" y="120" textAnchor="middle" transform="rotate(-90 15 120)" className="text-xs fill-gray-600 dark:fill-gray-400">Exam Score</text>
                  
                  {/* Data Points */}
                  <circle cx="60" cy="180" r="5" className="fill-blue-500" />
                  <circle cx="100" cy="160" r="5" className="fill-blue-500" />
                  <circle cx="140" cy="140" r="5" className="fill-blue-500" />
                  <circle cx="180" cy="110" r="5" className="fill-blue-500" />
                  <circle cx="220" cy="100" r="5" className="fill-blue-500" />
                  <circle cx="260" cy="80" r="5" className="fill-blue-500" />
                  <circle cx="300" cy="60" r="5" className="fill-blue-500" />
                  <circle cx="340" cy="50" r="5" className="fill-blue-500" />
                  
                  {/* Best Fit Line */}
                  <line x1="50" y1="190" x2="350" y2="45" stroke="#ec4899" strokeWidth="3" strokeDasharray="5,5" />
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                Data Points
                <span className="inline-block w-8 h-0.5 bg-pink-500 mx-2 ml-6"></span>
                Best Fit Line
              </p>
            </div>
          </ContentCard>

          {/* Section 4 */}
          <ContentCard 
            number="4"
            title="Cost Function (Mean Squared Error)"
            className="animate-slide-up" 
            style={{ animationDelay: '0.3s' }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              To find the best-fitting line, we need to minimize the <span className="font-semibold text-pink-500">cost function</span>, which measures how far our predictions are from the actual values.
            </p>
            <div className="bg-gray-100 dark:bg-[#0a1a2e] p-4 rounded-lg border border-gray-200 dark:border-purple-500/30 mb-4">
              <p className="text-center text-lg font-semibold text-gray-800 dark:text-white">
                MSE = (1/n) × Σ(y<sub>predicted</sub> - y<sub>actual</sub>)<sup>2</sup>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Where <span className="font-semibold">n</span> is the number of data points. The goal is to adjust <span className="font-semibold text-pink-500">w</span> and <span className="font-semibold text-pink-500">b</span> to minimize this error.
            </p>
          </ContentCard>

          {/* Section 5 */}
          <ContentCard 
            number="5"
            title="Gradient Descent"
            className="animate-slide-up" 
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white mb-2">Definition</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Gradient Descent is an optimization algorithm used to minimize the cost function by iteratively adjusting the parameters in the direction of steepest descent.
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The algorithm updates the weights using the gradient of the cost function. With each iteration, the model gets closer to finding the optimal line that best fits the data.
            </p>
          </ContentCard>
        </div>

        {/* Continue Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => router.push('/build')}
            className="px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Continue to Build
          </button>
        </div>
      </div>
    </div>
  )
}
