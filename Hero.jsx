import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: '98+', label: 'N8N Projects', icon: '⚡' },
    { number: '147+', label: 'Happy Clients', icon: '😊' },
    { number: '4+', label: 'Countries', icon: '🌍' },
    { number: '$24K+', label: 'Avg. Savings', icon: '💰' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section 
      id="home" 
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '8rem 2rem 4rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative',
        width: '100%',
        margin: 0
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ maxWidth: '1200px', width: '100%' }}
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maxWidth: '1200px'
          }}
        >
          Transform Your Business with Smart Automation
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.25rem',
            color: '#d1d5db',
            marginBottom: '3rem',
            maxWidth: '800px',
            lineHeight: 1.7,
            margin: '0 auto 3rem'
          }}
        >
          Unlock unprecedented efficiency with cutting-edge N8N automation solutions and personalized vacation planning services. We handle the complexity while you focus on scaling your success.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginBottom: '4rem'
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#f59e0b',
              color: '#000',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Start Your Automation Journey →
          </motion.a>
          
          <motion.a
            href="#services"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#f59e0b',
              color: '#000'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: 'transparent',
              color: '#f59e0b',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              border: '2px solid #f59e0b',
              transition: 'all 0.3s ease'
            }}
          >
            Explore Our Solutions
          </motion.a>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              style={{ 
                textAlign: 'center',
                background: 'rgba(31, 41, 55, 0.5)',
                padding: '2rem 1rem',
                borderRadius: '1rem',
                border: '1px solid #374151',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#f59e0b',
                marginBottom: '0.5rem'
              }}>
                {stat.number}
              </div>
              <div style={{ 
                color: '#9ca3af', 
                fontSize: '1rem',
                fontWeight: '500'
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '3rem',
            opacity: 0.1
          }}
        >
          ⚡
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '30%',
            right: '15%',
            fontSize: '2.5rem',
            opacity: 0.1
          }}
        >
          🔄
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            fontSize: '2rem',
            opacity: 0.1
          }}
        >
          🤖
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero