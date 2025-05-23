'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaDownload, 
  FaFilePdf, 
  FaFileWord, 
  FaGithub, 
  FaLinkedin, 
  FaFileAlt,
  FaShieldAlt,
  FaLock,
  FaCode,
  FaBug,
  FaUserSecret,
  FaFire,
  FaCubes,
  FaEthereum,
  FaFileContract,
  FaCube,
  FaLink,
  FaJs,
  FaPython,
  FaJava
} from 'react-icons/fa'
import { SiRust, SiSolidity, SiTypescript } from 'react-icons/si'

const Resume = () => {
  const [downloading, setDownloading] = useState<string | null>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)
  const resumeDownloadRef = useRef<HTMLDivElement>(null)
  const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 })
  const isExpertiseInView = useInView(expertiseRef, { once: true, amount: 0.2 })
  const isResumeInView = useInView(resumeDownloadRef, { once: true, amount: 0.2 })

  // Animation for skill bars when in view
  useEffect(() => {
    if (isSkillsInView) {
      const skillBars = document.querySelectorAll('.skill-progress-bar')
      skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-width')
        if (width) {
          bar.setAttribute('style', `width: ${width}`)
        }
      })
    }
  }, [isSkillsInView])

  const handleDownload = (format: string) => {
    // Simulate download
    setDownloading(format)
    setTimeout(() => {
      setDownloading(null)
      // In a real app, this would trigger actual file download
    }, 1500)
  }

  return (
    <section id="resume" className="section with-bg">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p className="section-subtitle">
            Professional background in cybersecurity and blockchain development
          </p>
        </div>

        <div className="resume-container">
          {/* Skills Column 
          <div ref={skillsRef} className="resume-column">
            <h3 className="resume-heading">Professional Skills</h3>

            <div className="skills-container">
              {[
                { skill: 'Security Analysis', percentage: 95 },
                { skill: 'Smart Contract Development', percentage: 90 },
                { skill: 'Blockchain Architecture', percentage: 85 },
                { skill: 'Frontend Development', percentage: 88 },
                { skill: 'Backend Development', percentage: 82 },
                { skill: 'Penetration Testing', percentage: 92 },
              ].map((item, index) => (
                <div key={index} className="skill-bar">
                  <div className="skill-header">
                    <span className="skill-name">{item.skill}</span>
                    <span className="skill-percentage">{item.percentage}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar"
                      data-width={`${item.percentage}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="professional-links">
              <h4>Professional Profiles</h4>
              <div className="profile-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="profile-link">
                  <FaGithub /> GitHub Profile
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="profile-link">
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>*/}

          {/* Resume Downloads - Original Version (Can be removed) */}
          <div className="resume-column" style={{ display: 'none' }}>
            <h3 className="resume-heading">Download Resume</h3>

            <div className="resume-download-card">
              <div className="download-options">
                <div className="download-option" onClick={() => handleDownload('pdf')}>
                  <div className="download-icon pdf">
                    <FaFilePdf />
                  </div>
                  <div className="download-info">
                    <h4>PDF Format</h4>
                    <p>Universal format for all devices</p>
                    <button 
                      className={`download-btn ${downloading === 'pdf' ? 'downloading' : ''}`}
                      disabled={downloading === 'pdf'}
                    >
                      <FaDownload /> 
                      {downloading === 'pdf' ? 'Downloading...' : 'Download PDF'}
                    </button>
                  </div>
                </div>

                <div className="download-option" onClick={() => handleDownload('docx')}>
                  <div className="download-icon docx">
                    <FaFileWord />
                  </div>
                  <div className="download-info">
                    <h4>DOCX Format</h4>
                    <p>Editable for ATS optimization</p>
                    <button 
                      className={`download-btn ${downloading === 'docx' ? 'downloading' : ''}`}
                      disabled={downloading === 'docx'}
                    >
                      <FaDownload /> 
                      {downloading === 'docx' ? 'Downloading...' : 'Download DOCX'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="resume-preview">
                <h4>Experience Highlights</h4>
                
                <div className="experience-item">
                  <h5>Senior Security Engineer</h5>
                  <div className="experience-meta">
                    <span className="company">Blockchain Security Inc.</span>
                    <span className="duration">2023 - Present</span>
                  </div>
                  <ul className="experience-details">
                    <li>Led security audits for 20+ blockchain projects</li>
                    <li>Implemented secure infrastructure for crypto custody</li>
                    <li>Reduced security incidents by 40% through proactive measures</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <h5>Blockchain Developer</h5>
                  <div className="experience-meta">
                    <span className="company">DeFi Solutions</span>
                    <span className="duration">2021 - 2023</span>
                  </div>
                  <ul className="experience-details">
                    <li>Developed 15+ smart contracts for DeFi applications</li>
                    <li>Optimized gas usage by 30% in token contracts</li>
                    <li>Created secure multi-signature wallet implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technical Expertise Section */}
        {/*<motion.div 
          ref={expertiseRef}
          className="tech-expertise-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-subtitle">
            <h3>Technical Expertise</h3>
            <p>My specialized skills and technologies</p>
          </div>
          
          <div className="expertise-grid">
            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="expertise-icon-wrapper">
                <div className="expertise-icon">
                  <FaShieldAlt />
                </div>
              </div>
              
              <h3 className="expertise-title">Cybersecurity</h3>
              
              <ul className="expertise-list">
                <li className="expertise-item">
                  <div className="tech-logo"><FaBug /></div>
                  <span className="tech-name">Penetration Testing</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaUserSecret /></div>
                  <span className="tech-name">Threat Intelligence</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaFire /></div>
                  <span className="tech-name">Incident Response</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaLock /></div>
                  <span className="tech-name">Encryption</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="expertise-icon-wrapper">
                <div className="expertise-icon">
                  <FaCubes />
                </div>
              </div>
              
              <h3 className="expertise-title">Blockchain</h3>
              
              <ul className="expertise-list">
                <li className="expertise-item">
                  <div className="tech-logo"><FaEthereum /></div>
                  <span className="tech-name">Ethereum Development</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><SiSolidity /></div>
                  <span className="tech-name">Solidity</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaFileContract /></div>
                  <span className="tech-name">Smart Contracts</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaLink /></div>
                  <span className="tech-name">DeFi Protocols</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="expertise-icon-wrapper">
                <div className="expertise-icon">
                  <FaCode />
                </div>
              </div>
              
              <h3 className="expertise-title">Development</h3>
              
              <ul className="expertise-list">
                <li className="expertise-item">
                  <div className="tech-logo"><SiTypescript /></div>
                  <span className="tech-name">TypeScript</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaPython /></div>
                  <span className="tech-name">Python</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><SiRust /></div>
                  <span className="tech-name">Rust</span>
                </li>
                <li className="expertise-item">
                  <div className="tech-logo"><FaJava /></div>
                  <span className="tech-name">Java</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>*/}
        
        {/* Enhanced Resume Download Section */}
        <motion.section 
          ref={resumeDownloadRef}
          className="resume-download-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isResumeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-download-bg purple"></div>
          <div className="resume-download-bg red"></div>
          <div className="resume-download-content">
            <h2 className="resume-title">Download My Complete Resume</h2>
            <p className="resume-description">
              Get a detailed overview of my professional experience, education, and technical skills.
              The document highlights my achievements and expertise in cybersecurity and blockchain development.
            </p>
            
            <button 
              onClick={() => handleDownload('pdf')}
              className={`resume-download-btn ${downloading === 'pdf' ? 'downloading' : ''}`}
              disabled={downloading === 'pdf'}
            >
              <FaDownload />
              {downloading === 'pdf' ? 'Downloading...' : 'Download Resume'}
            </button>
            
            <div className="resume-format-options">
              <button 
                onClick={() => handleDownload('pdf')}
                className="resume-format-btn" 
                disabled={downloading !== null}
              >
                <FaFilePdf />
                PDF Format
              </button>
              <button 
                onClick={() => handleDownload('docx')}
                className="resume-format-btn"
                disabled={downloading !== null}
              >
                <FaFileWord />
                DOCX Format
              </button>
              <button 
                onClick={() => handleDownload('txt')}
                className="resume-format-btn"
                disabled={downloading !== null}
              >
                <FaFileAlt />
                Plain Text
              </button>
            </div>
          </div>
        </motion.section>
        
        {/* Experience Highlights for the enhanced version 
        <div className="experience-highlights">
          <div className="section-subtitle">
            <h3>Experience Highlights</h3>
          </div>
          
          <div className="experience-grid">
            <div className="experience-item">
              <h4>Senior Security Engineer</h4>
              <div className="experience-meta">
                <span className="company">Blockchain Security Inc.</span>
                <span className="duration">2023 - Present</span>
              </div>
              <ul className="experience-details">
                <li>Led security audits for 20+ blockchain projects</li>
                <li>Implemented secure infrastructure for crypto custody</li>
                <li>Reduced security incidents by 40% through proactive measures</li>
                <li>Developed security training programs for development teams</li>
              </ul>
            </div>

            <div className="experience-item">
              <h4>Blockchain Developer</h4>
              <div className="experience-meta">
                <span className="company">DeFi Solutions</span>
                <span className="duration">2021 - 2023</span>
              </div>
              <ul className="experience-details">
                <li>Developed 15+ smart contracts for DeFi applications</li>
                <li>Optimized gas usage by 30% in token contracts</li>
                <li>Created secure multi-signature wallet implementation</li>
                <li>Contributed to protocol design for lending and staking platforms</li>
              </ul>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}

export default Resume