'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Resume from '../components/sections/Resume'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import CryptoTicker from '../components/ui/CryptoTicker'
import BlockchainVisualizer from '../components/ui/BlockchainVisualizer'
import LoadingScreen from '../components/ui/LoadingScreen'
import EasterEgg from '../components/ui/EasterEgg'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const finishLoading = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <LoadingScreen finishLoading={finishLoading} />
      ) : (
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <CryptoTicker />
            <About />
            <BlockchainVisualizer />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
            <EasterEgg />
          </motion.main>
        </AnimatePresence>
      )}
    </>
  )
}