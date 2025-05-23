'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiBitcoin, SiEthereum, SiCardano, SiPolkadot } from 'react-icons/si'

interface CryptoPrice {
  symbol: string;
  icon: React.ReactNode;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const cryptoIcons = {
  BTC: <SiBitcoin />,
  ETH: <SiEthereum />,
  ADA: <SiCardano />,
  DOT: <SiPolkadot />
};

const mockCryptoData: CryptoPrice[] = [
  { symbol: 'BTC', icon: cryptoIcons.BTC, price: '$42,867.25', change: '+$1,245.38', changePercent: '+2.98%', isPositive: true },
  { symbol: 'ETH', icon: cryptoIcons.ETH, price: '$2,249.55', change: '-$34.23', changePercent: '-1.5%', isPositive: false },
  /*{ symbol: 'SOL', icon: cryptoIcons.SOL, price: '$103.27', change: '+$8.54', changePercent: '+9.01%', isPositive: true },*/
  { symbol: 'ADA', icon: cryptoIcons.ADA, price: '$0.52', change: '+$0.03', changePercent: '+6.13%', isPositive: true },
  { symbol: 'DOT', icon: cryptoIcons.DOT, price: '$6.75', change: '-$0.25', changePercent: '-3.57%', isPositive: false },
]

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoPrice[]>(mockCryptoData);
  const [paused, setPaused] = useState(false);
  
  useEffect(() => {
    // Simulating price updates every 8 seconds
    const interval = setInterval(() => {
      if (!paused) {
        setCryptoData(prevData => 
          prevData.map(coin => {
            const randomChange = (Math.random() * 2 - 1) * 2; // Random value between -2% and +2%
            const newPrice = parseFloat(coin.price.replace('$', '').replace(',', ''));
            const change = newPrice * (randomChange / 100);
            const updatedPrice = newPrice + change;
            
            return {
              ...coin,
              price: `$${updatedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              change: `${change >= 0 ? '+' : '-'}$${Math.abs(change).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              changePercent: `${randomChange >= 0 ? '+' : ''}${randomChange.toFixed(2)}%`,
              isPositive: randomChange >= 0
            }
          })
        )
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div 
      className="crypto-ticker"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container ticker-container">
        <div className="ticker-wrapper">
          <motion.div 
            className="ticker-inner"
            animate={{ x: paused ? 0 : "-50%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
              repeatDelay: 0
            }}
          >
            {[...cryptoData, ...cryptoData].map((crypto, index) => (
              <div 
                key={`${crypto.symbol}-${index}`} 
                className="ticker-item"
              >
                <div className={`ticker-icon ${crypto.symbol.toLowerCase()}`}>
                  {crypto.icon}
                </div>
                <div className="ticker-symbol">
                  {crypto.symbol}
                </div>
                <div className="ticker-price">
                  {crypto.price}
                </div>
                <div className={`ticker-change ${crypto.isPositive ? 'positive' : 'negative'}`}>
                  {crypto.changePercent}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CryptoTicker