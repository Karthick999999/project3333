'use client'

export default function ContentCard({ number, title, children, className = '', style = {} }) {
  return (
    <div 
      className={`glass-effect p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${className}`}
      style={style}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
        <span className="gradient-text text-3xl md:text-4xl">{number}</span>
        <span className="text-gray-800 dark:text-white">{title}</span>
      </h2>
      <div className="ml-0 md:ml-12">
        {children}
      </div>
    </div>
  )
}
