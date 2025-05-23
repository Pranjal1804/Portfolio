'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import anime from 'animejs'
import { 
  FaLock, 
  FaShieldAlt, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaMobileAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaLaptopCode,
  FaTools,
  FaNetworkWired,
  FaBug,
  FaWireframe
} from 'react-icons/fa'
import { 
  SiBitcoin, 
  SiEthereum, 
  SiReact, 
  SiTypescript, 
  SiRust,
  SiSolidity,
  SiJavascript,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiGooglecloud,
  SiTailwindcss
} from 'react-icons/si'

// Skills data with categories
const skills = [
  {
    category: "Security",
    items: [
      { name: 'Penetration Testing', icon: <FaLaptopCode />, proficiency: 95 },
      { name: 'Security Research', icon: <FaShieldAlt />, proficiency: 92 },
      { name: 'Secure Coding', icon: <FaLock />, proficiency: 90 },
      { name: 'Vulnerability Analysis', icon: <FaBug />, proficiency: 88 }
    ]
  },
  {
    category: "Blockchain",
    items: [
      { name: 'Smart Contracts', icon: <SiSolidity />, proficiency: 90 },
      { name: 'Ethereum', icon: <SiEthereum />, proficiency: 85 },
      { name: 'Bitcoin Protocol', icon: <SiBitcoin />, proficiency: 82 },
      { name: 'DeFi Development', icon: <FaNetworkWired />, proficiency: 80 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: 'React', icon: <SiReact />, proficiency: 88 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 85 },
      { name: 'JavaScript', icon: <SiJavascript />, proficiency: 92 },
      { name: 'TailwindCSS', icon: <SiTailwindcss />, proficiency: 90 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: 'Node.js', icon: <FaNodeJs />, proficiency: 87 },
      { name: 'Python', icon: <FaPython />, proficiency: 85 },
      { name: 'Rust', icon: <SiRust />, proficiency: 75 },
      { name: 'Java', icon: <FaJava />, proficiency: 80 }
    ]
  },
  {
    category: "DevOps",
    items: [
      { name: 'Docker', icon: <SiDocker />, proficiency: 82 },
      { name: 'Kubernetes', icon: <SiKubernetes />, proficiency: 78 },
      { name: 'AWS', icon: <SiAmazonaws />, proficiency: 85 },
      { name: 'Google Cloud', icon: <SiGooglecloud />, proficiency: 80 }
    ]
  },
  {
    category: "Database",
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 88 },
      { name: 'MongoDB', icon: <SiMongodb />, proficiency: 85 },
      { name: 'Database Design', icon: <FaDatabase />, proficiency: 90 },
      { name: 'Query Optimization', icon: <FaTools />, proficiency: 86 }
    ]
  }
]

// Timeline data
const timelineData = [
  {
    year: '2023',
    title: 'Senior Security Engineer',
    description: 'Led security audits for blockchain infrastructure and smart contracts.'
  },
  {
    year: '2021',
    title: 'Blockchain Developer',
    description: 'Built decentralized applications focusing on security and efficiency.'
  },
  {
    year: '2019',
    title: 'Security Researcher',
    description: 'Conducted vulnerability research and contributed to security tools.'
  },
  {
    year: '2017',
    title: 'Full-Stack Developer',
    description: 'Developed web applications with focus on performance and security.'
  },
]

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  // Animate stats counter when in view
  useEffect(() => {
    if (statsInView) {
      anime({
        targets: '.stat-number',
        innerHTML: (el) => [0, el.getAttribute('data-value')],
        easing: 'linear',
        round: true,
        duration: 1500
      })
    }
  }, [statsInView])

  // Animate skill bars when in view
  useEffect(() => {
    if (skillsInView) {
      const skillBars = document.querySelectorAll('.skill-progress-inner')
      skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-width')
        if (width) {
          bar.setAttribute('style', `width: ${width}`)
        }
      })
    }
  }, [skillsInView])

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p className="section-subtitle">
            Security specialist and blockchain developer with expertise in
            developing secure applications and protecting digital assets.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="stats-grid">
          {[
            { value: 50, label: 'Security Audits' },
            { value: 35, label: 'Projects Delivered' },
            { value: 15, label: 'Smart Contracts' },
            { value: 8, label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number" data-value={stat.value}>0</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-text">
            <h3>Specialist in Cybersecurity & Blockchain</h3>
            <p>
              I help companies secure their digital assets through advanced security auditing,
              penetration testing, and building secure blockchain applications. My approach combines
              technical expertise with a deep understanding of modern security threats.
            </p>
            <p>
              With experience working across financial technology, healthcare security, and
              decentralized systems, I bring a versatile skillset to every project.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="timeline-section">
          <h3 className="timeline-title">Professional Journey</h3>
          
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-role">{item.title}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <motion.div 
          ref={skillsRef} 
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="skills-title">Technical Expertise</h3>
          
          <div className="skills-categories">
            {skills.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h4 className="category-title">{category.category}</h4>
                <div className="skill-items">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="skill-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon-wrapper">
                          <div className="skill-icon">{skill.icon}</div>
                        </div>
                        <div className="skill-content">
                          <div className="skill-name-row">
                            <h5>{skill.name}</h5>
                            <span className="skill-percentage">{skill.proficiency}%</span>
                          </div>
                          <div className="skill-progress">
                            <div 
                              className="skill-progress-inner" 
                              data-width={`${skill.proficiency}%`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About