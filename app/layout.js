'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>MLera - Linear Regression Learning Platform</title>
        <meta name="description" content="Interactive machine learning education platform" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
