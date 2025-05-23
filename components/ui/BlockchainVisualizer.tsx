'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDatabase, FaLink, FaClock } from 'react-icons/fa'

interface Block {
  id: number;
  hash: string;
  prevHash: string;
  timestamp: number;
  nonce: number;
  data: string;
}

// Generate random hash
const generateHash = () => {
  return Array.from({ length: 16 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

// Mock blockchain data
const generateBlockchain = (length: number): Block[] => {
  const blockchain: Block[] = [];
  
  for (let i = 0; i < length; i++) {
    const hash = generateHash();
    
    const prevHash = i === 0 
      ? '0000000000000000' 
      : blockchain[i - 1].hash;
      
    blockchain.push({
      id: i,
      hash,
      prevHash,
      timestamp: Date.now() - (length - i) * 60000,
      nonce: Math.floor(Math.random() * 10000),
      data: `Transaction ${i}`
    });
  }
  
  return blockchain;
}

const BlockchainVisualizer = () => {
  const [blocks, setBlocks] = useState<Block[]>(generateBlockchain(5));
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const blockchainRef = useRef<HTMLDivElement>(null);
  
  // Add a new block every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prevBlocks => {
        const lastBlock = prevBlocks[prevBlocks.length - 1];
        
        const newBlock: Block = {
          id: lastBlock.id + 1,
          hash: generateHash(),
          prevHash: lastBlock.hash,
          timestamp: Date.now(),
          nonce: Math.floor(Math.random() * 10000),
          data: `Transaction ${lastBlock.id + 1}`
        };
        
        // Animation flag for new block
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
        
        const updatedBlocks = [...prevBlocks, newBlock];
        if (updatedBlocks.length > 8) {
          return updatedBlocks.slice(-8); // Keep only the latest 8 blocks
        }
        return updatedBlocks;
      });
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="blockchain" className="section with-bg">
      <div className="container">
        <div className="section-title">
          <h2>Blockchain Explorer</h2>
          <p className="section-subtitle">Interactive visualization of how blockchain technology works</p>
        </div>
        
        <div 
          ref={blockchainRef} 
          className="blockchain-container"
        >
          <div className="blockchain-guide">
            <p>Select any block to view its transaction details</p>
            <small>New blocks are mined every 20 seconds</small>
          </div>
          
          <div className="blocks-wrapper">
            {blocks.map((block, index) => (
              <motion.div
                key={block.id}
                className={`block ${activeBlock === block.id ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveBlock(activeBlock === block.id ? null : block.id)}
                whileHover={{ y: -5 }}
              >
                <div className="block-label">Block #{block.id}</div>
                
                <div className="block-hash">
                  <div className="block-detail-label">
                    <FaDatabase /> Hash
                  </div>
                  <div className="block-value">{block.hash}</div>
                </div>
                
                <div className="block-prevhash">
                  <div className="block-detail-label">
                    <FaLink /> Prev
                  </div>
                  <div className="block-value">{block.prevHash}</div>
                </div>
                
                <div className="block-timestamp">
                  <div className="block-detail-label">
                    <FaClock /> Time
                  </div>
                  <div className="block-value">
                    {new Date(block.timestamp).toLocaleTimeString()}
                  </div>
                </div>
                
                <div className="block-nonce">Nonce: {block.nonce}</div>
                
                <motion.div 
                  className="block-pulse"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                ></motion.div>
                
                {index < blocks.length - 1 && (
                  <div className="block-connector"></div>
                )}
                
                {isAnimating && index === blocks.length - 1 && (
                  <motion.div 
                    className="block-new"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    NEW
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          <AnimatePresence>
            {activeBlock !== null && (
              <motion.div
                className="block-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Block #{activeBlock} Transactions</h3>
                <div className="transactions-list">
                  {Array.from({ length: 3 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="transaction-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <div className="transaction-id">{i + 1}</div>
                      <div className="transaction-content">
                        <div className="transaction-title">
                          Transfer {(Math.random() * 0.5 + 0.1).toFixed(3)} ETH
                        </div>
                        <div className="transaction-hash">
                          0x{Array.from({ length: 12 }, () => 
                            Math.floor(Math.random() * 16).toString(16)
                          ).join('')}
                        </div>
                      </div>
                      <div className="transaction-status">
                        <span className="status confirmed">Confirmed</span>
                        <div className="transaction-time">
                          {new Date(blocks[activeBlock].timestamp - i * 10000).toLocaleTimeString()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default BlockchainVisualizer