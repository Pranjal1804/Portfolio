'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLock, FaUnlock, FaTerminal } from 'react-icons/fa'

const EasterEgg = () => {
  const [isActive, setIsActive] = useState(false)
  const [konamiActive, setKonamiActive] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  
  // Konami code sequence
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  const [konamiIndex, setKonamiIndex] = useState(0)

  // Track keys for Konami code
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      // Reset if wrong key
      if (e.key !== konamiCode[konamiIndex]) {
        setKonamiIndex(0)
        return
      }
      
      // Move to next key in sequence
      const nextIndex = konamiIndex + 1
      setKonamiIndex(nextIndex)
      
      // Complete sequence
      if (nextIndex === konamiCode.length) {
        setKonamiActive(true)
        setKonamiIndex(0)
        
        // Reset after 10 seconds
        setTimeout(() => {
          setKonamiActive(false)
        }, 10000)
      }
    }
    
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [konamiIndex])

  // Secret click pattern on logo
  useEffect(() => {
    const logo = document.querySelector('.logo')
    let clickCount = 0
    let clickTimer: NodeJS.Timeout
    
    const logoClickHandler = () => {
      clickCount++
      
      clearTimeout(clickTimer)
      clickTimer = setTimeout(() => {
        if (clickCount >= 5) {
          setIsActive(true)
          simulateTerminal()
        }
        clickCount = 0
      }, 2000)
    }
    
    if (logo) {
      logo.addEventListener('click', logoClickHandler)
    }
    
    return () => {
      if (logo) {
        logo.removeEventListener('click', logoClickHandler)
      }
    }
  }, [])
  
  // Simulate terminal typing effect
  const simulateTerminal = () => {
    setTerminalLines([])
    
    const lines = [
      'Initializing secure connection...',
      'Authentication required...',
      'Bypassing security protocols...',
      'Access granted!',
      'Welcome to the secret terminal.',
      'Executing shell command: ls -la /hidden',
      '- cybersecurity-toolkit.exe',
      '- blockchain-exploits.md',
      '- zero-day-vulnerabilities.log',
      '- secret-projects.zip',
    ]
    
    let currentLine = 0
    const addLine = () => {
      if (currentLine < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentLine]])
        currentLine++
        setTimeout(addLine, 500)
      } else {
        // Close after terminal sequence
        setTimeout(() => setIsActive(false), 4000)
      }
    }
    
    // Start terminal simulation
    addLine()
  }

  return (
    <AnimatePresence>
      {(isActive || konamiActive) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="easter-egg-overlay"
        >
          <motion.div
            className="easter-egg-content"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            {isActive && (
              <>
                <div className="easter-egg-icon">
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 180 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    {terminalLines.length < 4 ? <FaLock /> : <FaUnlock />}
                  </motion.div>
                </div>
                
                <motion.h2
                  className="easter-egg-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Secret Terminal Access
                </motion.h2>
                
                <div className="easter-egg-terminal">
                  <div className="terminal-header">
                    <div className="terminal-buttons">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="terminal-title">
                      <FaTerminal /> bash ~ cybersecurity
                    </div>
                  </div>
                  <div className="terminal-body">
                    {terminalLines.map((line, index) => (
                      <motion.div
                        key={index}
                        className="terminal-line"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {index === 0 ? '> ' : index < 6 ? '$ ' : '  '}
                        {line}
                      </motion.div>
                    ))}
                    <motion.div
                      className="terminal-cursor"
                      animate={{ opacity: [0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    >
                      _
                    </motion.div>
                  </div>
                </div>
              </>
            )}
            
            {konamiActive && (
              <div className="konami-content">
                <div className="konami-icon">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <polygon 
                        points="40,5 55,25 75,30 60,50 65,70 40,60 15,70 20,50 5,30 25,25" 
                        fill="none" 
                        stroke="#6366f1" 
                        strokeWidth="2" 
                      />
                      <circle cx="40" cy="40" r="15" fill="#6366f1" opacity="0.3" />
                      <text x="34" y="44" fill="#fff" fontSize="12" fontWeight="bold">30</text>
                    </svg>
                  </motion.div>
                </div>
                
                <h2 className="konami-title">Konami Code Activated!</h2>
                <p className="konami-subtitle">You found the secret code! +30 Hacker Points</p>
                
                <div className="konami-message">
                  The Konami Code (↑↑↓↓←→←→BA) is a cheat code that appears in many Konami video games,
                  and some non-Konami games. The code has become part of popular culture as a reference
                  to the third generation of video games.
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EasterEgg