import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#111827',
        textAlign: 'center'
      }}
    >
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Our Experience
      </h2>
      <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
        With 98+ completed N8N projects and 147+ satisfied clients across 4+ countries, we've established ourselves as leaders in business automation.
      </p>
    </motion.section>
  )
}

export default Experience