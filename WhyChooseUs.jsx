import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const reasons = [
    {
      icon: '⚡',
      title: 'N8N Experts',
      description: 'Deep expertise in N8N workflow automation with 98+ successful projects'
    },
    {
      icon: '🚀',
      title: 'Fast Implementation',
      description: 'Get your automation running within 48 hours with our rapid deployment process'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Save an average of $24K annually with our efficient automation solutions'
    },
    {
      icon: '🔧',
      title: 'Custom Solutions',
      description: 'Tailored N8N workflows designed specifically for your business needs'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for all your automations'
    },
    {
      icon: '🌍',
      title: 'Global Experience',
      description: 'Serving clients across 4+ countries with culturally adapted solutions'
    }
  ]

  return (
    <motion.section
      id="why"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#111827'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #8b5cf6, #ef4444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Why Choose Us?
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>
            We're not just automation experts - we're your partners in business transformation
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)'
              }}
              style={{
                background: 'rgba(31, 41, 55, 0.5)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #374151',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {reason.icon}
              </div>
              <h3 style={{
                color: '#fff',
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {reason.title}
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: 1.6
              }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default WhyChooseUs