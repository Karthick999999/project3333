'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Learning Path', path: '/content' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'My Courses', path: '/courses' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Buddy', path: '/buddy' },
    { name: 'Lexicon', path: '/lexicon' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#061425]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              ML
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">MLera</span>
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-pink-500 ${
                  pathname === item.path
                    ? 'text-pink-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400">
              Linear Regression
            </div>
            <ThemeToggle />
            <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:shadow-lg transition-shadow duration-300">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
