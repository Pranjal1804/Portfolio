'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShieldAlt, FaLock } from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'

interface LoadingScreenProps {
  finishLoading: () => void
}

const LoadingScreen = ({ finishLoading }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')
  const [isComplete, setIsComplete] = useState(false)
  
  // Array of loading messages to display sequentially
  const loadingMessages = [
    'Initializing...',
    'Loading security modules...',
    'Establishing secure connection...',
    'Decrypting blockchain data...',
    'Generating cryptographic keys...',
    'Finalizing setup...'
  ]
  
  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.floor(Math.random() * 3) + 1
        const newProgress = prev + increment
        
        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => {
            finishLoading()
          }, 1000)
          return 100
        }
        
        // Change loading message based on progress
        if (newProgress > 80) {
          setLoadingText(loadingMessages[5])
        } else if (newProgress > 60) {
          setLoadingText(loadingMessages[4])
        } else if (newProgress > 40) {
          setLoadingText(loadingMessages[3])
        } else if (newProgress > 20) {
          setLoadingText(loadingMessages[2])
        } else if (newProgress > 5) {
          setLoadingText(loadingMessages[1])
        }
        
        return newProgress
      })
    }, 120)
    
    return () => clearInterval(interval)
  }, [finishLoading])
  
  return (
    <AnimatePresence>
      {!isComplete ? (
        <motion.div 
          className="loader-wrapper"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="loader-content">
            {/* Animated decorative elements */}
            <div className="loader-particles">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="loader-particle"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}
            </div>
            
            {/* Circular loading animation */}
            <div className="loader">
              <div className="loader-circle"></div>
              <div className="loader-circle"></div>
              <div className="loader-circle"></div>
              
              <motion.div 
                className="loader-logo"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaShieldAlt />
              </motion.div>
            </div>
            
            {/* Logo and brand */}
            <div className="loader-brand">
              <div className="loader-title">
                <span>Cyber</span>Portfolio
              </div>
              <div className="loader-subtitle">Security & Blockchain Specialist</div>
            </div>
            
            {/* Progress bar */}
            <div className="loader-progress-container">
              <motion.div 
                className="loader-progress-bar"
                style={{ width: `${progress}%` }}
                initial={{ boxShadow: '0 0 10px rgba(185, 53, 255, 0.3)' }}
                animate={{ 
                  boxShadow: ['0 0 10px rgba(185, 53, 255, 0.3)', '0 0 20px rgba(185, 53, 255, 0.6)', '0 0 10px rgba(185, 53, 255, 0.3)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Loading text and percentage */}
            <div className="loader-info">
              <div className="loader-text">{loadingText}</div>
              <div className="loader-percentage">{progress}%</div>
            </div>
            
            {/* Security icons */}
            <div className="loader-icons">
              <motion.div 
                className="loader-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaLock />
              </motion.div>
              <motion.div 
                className="loader-icon"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <SiEthereum />
              </motion.div>
              <motion.div 
                className="loader-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaShieldAlt />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default LoadingScreen