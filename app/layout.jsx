import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeProvider>
        <div className="max-w-[1366px] min-h-[100vh] my-0 mx-auto px-[60px] py-0 flex flex-col justify-between">
          <Navbar/>
          {children}
          <Footer/>
        </div>
        </ThemeProvider>
        </AuthProvider>
        
      </body>
    </html>
  )
}