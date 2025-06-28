import { motion } from 'framer-motion'

const FloatingChat = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000
      }}
    >
      <motion.a
        href="https://wa.me/4545453225086"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
        }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#f59e0b',
          color: '#000',
          padding: '1rem 1.5rem',
          borderRadius: '2rem',
          textDecoration: 'none',
          fontWeight: '600',
          boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        💬 Chat with us!
      </motion.a>
    </motion.div>
  )
}

export default FloatingChat