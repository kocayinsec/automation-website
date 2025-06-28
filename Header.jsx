import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#examples', label: 'Examples' },
    { href: '#experience', label: 'Experience' },
    { href: '#expansion', label: 'Global Expansion' },
    { href: '#why', label: 'Why Choose Us' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid #1f1f1f' : '1px solid transparent',
        padding: '1rem 0',
        transition: 'all 0.3s ease'
      }}
    >
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer'
            }}
          >
            ⚡ Aspergillus Automation
          </motion.div>
          
          {/* Elegant Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontSize: '0.8rem',
              marginTop: '0.3rem',
              color: '#64748b',
              fontStyle: 'italic',
              fontWeight: '300',
              letterSpacing: '0.5px'
            }}
          >
            Transforming businesses through intelligent automation
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: window.innerWidth > 768 ? 'flex' : 'none', 
          gap: '2rem', 
          alignItems: 'center' 
        }}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                color: '#f59e0b',
                y: -2,
                textShadow: '0 0 8px rgba(245, 158, 11, 0.5)'
              }}
              style={{ 
                color: '#cbd5e1', 
                textDecoration: 'none', 
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.a
            href="https://wa.me/4545453225086"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#f59e0b',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            💬 WhatsApp
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: '#f59e0b',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.98)',
            padding: '1rem 2rem',
            borderTop: '1px solid #1f1f1f'
          }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'block',
                color: '#cbd5e1',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid #1f1f1f',
                transition: 'color 0.3s ease',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
              onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.a
            href="https://wa.me/4545453225086"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            style={{
              display: 'inline-block',
              backgroundColor: '#f59e0b',
              color: '#000',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              marginTop: '1rem'
            }}
          >
            💬 WhatsApp
          </motion.a>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header