import type { Metadata } from 'next'
import { Poppins, Roboto_Mono } from 'next/font/google'
import './globals.css'
import  {CustomCursor}  from '../components/ui/CustomCursor'
import ParticleBackground from '../components/ui/ParticleBackground'
import Navigation from '../components/navigation/Navigation'
import '../styles.css'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Cyber Portfolio | Blockchain & Security Expert',
  description: 'Portfolio website showcasing expertise in cybersecurity and blockchain technologies',
  keywords: 'cybersecurity, blockchain, developer, portfolio, security, crypto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${robotoMono.variable} font-sans bg-background text-white relative`}>
        <CustomCursor />
        <ParticleBackground />
        <Navigation />
        {children}
      </body>
    </html>
  )
}