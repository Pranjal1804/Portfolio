'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaFingerprint, FaLock } from 'react-icons/fa'
import { SiEthereum, SiHiveBlockchain } from 'react-icons/si'
import { HiAcademicCap } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Blockchain Security Analyzer',
    description: 'A tool for analyzing vulnerabilities in smart contracts and blockchain applications.',
    icon: <FaShieldAlt />,
    color: '#6366f1',
    tags: ['Security', 'Blockchain'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Decentralized Identity Vault',
    description: 'A secure identity management system built on blockchain with zero-knowledge proofs.',
    icon: <FaFingerprint />,
    color: '#ec4899',
    tags: ['Blockchain', 'Identity'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Encryption Visualization Tool',
    description: 'An interactive educational tool visualizing how encryption algorithms work.',
    icon: <FaLock />,
    color: '#10b981',
    tags: ['Security', 'Education'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Smart Contract Auditor',
    description: 'Automated security audit tool for Ethereum and Solana smart contracts.',
    icon: <SiEthereum />,
    color: '#f59e0b',
    tags: ['Blockchain', 'Security'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Blockchain Education Platform',
    description: 'Interactive learning environment for blockchain development and security concepts.',
    icon: <HiAcademicCap />,
    color: '#8b5cf6',
    tags: ['Education', 'Blockchain'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Distributed Ledger Explorer',
    description: 'A visualization tool for exploring and analyzing blockchain networks and their transactions.',
    icon: <SiHiveBlockchain />,
    color: '#14b8a6',
    tags: ['Blockchain', 'Education'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

const categories = ['All', 'Security', 'Blockchain', 'Identity', 'Education']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p className="section-subtitle">
            Explore my work in cybersecurity and blockchain development
          </p>
        </div>
        
        <div className="projects-filter">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="project-icon-wrapper"
                style={{ 
                  backgroundColor: `${project.color}15`,
                  color: project.color 
                }}
              >
                <div className="project-icon">
                  {project.icon}
                </div>
                
                <motion.svg 
                  className="project-icon-ring"
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 100 100" 
                  initial={{ rotate: -90, scale: 0.95, opacity: 0.3 }}
                  animate={{ 
                    rotate: hoveredId === project.id ? 0 : -90,
                    scale: hoveredId === project.id ? 1 : 0.95,
                    opacity: hoveredId === project.id ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke={project.color} 
                    strokeWidth="2" 
                    strokeDasharray="251" 
                    strokeDashoffset="0"
                  />
                </motion.svg>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="project-tag"
                      style={{ 
                        backgroundColor: `${project.color}20`, 
                        color: project.color
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link primary"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects