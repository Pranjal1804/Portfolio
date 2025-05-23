'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  
  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  
  useEffect(() => {
    // Wait for client-side to detect touch capability
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    )
    
    let timeout: NodeJS.Timeout
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Show cursor after first movement
      if (!visible) {
        setVisible(true)
      }
      
      // Hide cursor after 3 seconds of inactivity
      clearTimeout(timeout)
      timeout = setTimeout(() => setVisible(false), 3000)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)
    
    // Detect interactive elements
    const addLinkListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .hoverable'
      )
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true))
        el.addEventListener('mouseleave', () => setLinkHovered(false))
      })
    }
    
    // Initial detection
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updatePosition)
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('mouseup', handleMouseUp)
      
      // Wait for DOM to be populated
      setTimeout(addLinkListeners, 1000)
      
      // Periodically check for new elements
      const checkInterval = setInterval(addLinkListeners, 3000)
      
      return () => {
        window.removeEventListener('mousemove', updatePosition)
        window.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        clearInterval(checkInterval)
        clearTimeout(timeout)
      }
    }
  }, [visible])

  if (isTouchDevice || !visible) return null
  
  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 250,
          damping: 15,
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: clicked ? 0.8 : linkHovered ? 1.4 : 1,
          opacity: clicked || linkHovered ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 180,
          damping: 18,
          delay: 0.01,
        }}
      />
    </>
  )
}

export default CustomCursor