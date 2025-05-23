'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-about">
            <Link href="/" className="footer-logo">
              <span>Cyber</span>Portfolio
            </Link>
            <p>
              Specialized in cybersecurity and blockchain development. 
              Building secure solutions for the digital world.
            </p>
            <div className="footer-social">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Resume', href: '#resume' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>San Francisco, CA</li>
              <li>contact@cyberportfolio.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} CyberPortfolio. All rights reserved.
          </p>
          <p className="credits">
            Made with <FaHeart className="heart" /> and secure code
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer