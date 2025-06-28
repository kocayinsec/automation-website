import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const EmailSignup = ({ emailSignup, setEmailSignup, handleEmailSignup }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#111827',
        textAlign: 'center',
        width: '100%',
        margin: 0,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        zIndex: 1
      }} />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          📧 Stay Ahead of the Automation Curve
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            color: '#9ca3af',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}
        >
          Get exclusive N8N automation insights, workflow templates, and early access to our latest solutions delivered to your inbox.
        </motion.p>
        
        <motion.form
          onSubmit={handleEmailSignup}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '500px',
            margin: '0 auto'
          }}
        >
          <motion.input
            type="email"
            placeholder="Enter your email address"
            value={emailSignup}
            onChange={(e) => setEmailSignup(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            style={{
              flex: 1,
              minWidth: '250px',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '2px solid #374151',
              backgroundColor: '#1f2937',
              color: '#fff',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#f59e0b',
              color: '#000',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Subscribe Now
          </motion.button>
        </motion.form>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ 
            color: '#6b7280', 
            marginTop: '1rem', 
            fontSize: '0.9rem' 
          }}
        >
          Join 300+ business owners already transforming their operations with N8N automation
        </motion.p>
      </div>
    </motion.section>
  )
}

export default EmailSignup