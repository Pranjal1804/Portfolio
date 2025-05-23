'use client'

import { motion } from 'framer-motion'
import Typed from 'react-typed'
import Link from 'next/link'
import { FiArrowDown } from 'react-icons/fi'
import Image from 'next/image'
import { FaShieldAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">Cybersecurity & Blockchain Expert</span>
            <h1 className="hero-title">Securing The Digital Frontier</h1>
            <p className="hero-subtitle">
              <Typed
                strings={[
                  "I'm a Cybersecurity Specialist",
                  "I'm a Blockchain Developer",
                  "I'm a Security Researcher",
                  "I'm a Full-Stack Developer"
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </p>
            <div className="hero-actions">
              <Link href="#projects" className="btn btn-primary">View My Work</Link>
              <Link href="#contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image-wrapper simple">
              {/* Hexagon frame effect */}
              <div className="hero-hex-container">
                <div className="hero-hex-border"></div>
                <div className="hero-hex"></div>
              </div>
              
              <div className="hero-image-frame simple">
                <Image 
                  src="/profile-photo.jpg" 
                  width={360}
                  height={360}
                  alt="Your Name" 
                  className="hero-image simple"
                  priority
                />
                
                <div className="hero-image-overlay simple"></div>
                <div className="hero-shine"></div>
              </div>
              
              <div className="hero-experience-badge simple">
                <div className="experience-icon">
                  <FaShieldAlt />
                </div>
                <div className="experience-years">2+</div>
                <div className="experience-text">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hero-animation"
      >
        <Link href="#about">
          <FiArrowDown className="text-2xl" />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero