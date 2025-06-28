import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GlobalExpansion = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const offices = [
    { 
      name: 'Turkey', 
      flag: '🇹🇷', 
      clients: '85+', 
      office: 'Istanbul Office', 
      status: 'opening', 
      statusColor: '#10b981',
      description: 'EMEA Automation Hub',
      timeline: 'Opening this month',
      features: ['N8N Workflow Center', 'Client Training Hub', 'Regional Support']
    },
    { 
      name: 'Poland', 
      flag: '🇵🇱', 
      clients: '28+', 
      office: 'Warsaw Office', 
      status: 'postponed', 
      statusColor: '#ef4444',
      description: 'European Expansion Center',
      timeline: 'Q2 2025',
      features: ['EU Market Entry', 'Tech Innovation Lab', 'Partnership Network']
    }
  ]

  return (
    <motion.section
      id="expansion"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0a0a',
        textAlign: 'center'
      }}
    >
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        🏢 Our Offices
      </h2>
      
      <p style={{
        color: '#9ca3af',
        fontSize: '1.1rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        margin: '0 auto 3rem'
      }}>
        Strategic locations for serving our global N8N automation clients
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {offices.map((office, index) => (
          <motion.div
            key={office.name}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -10 }}
            style={{
              background: `linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.9))`,
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: `2px solid ${office.statusColor}40`,
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 20px 40px rgba(${office.statusColor === '#10b981' ? '16, 185, 129' : '239, 68, 68'}, 0.1)`
            }}
          >
            {/* Status Badge */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: `${office.statusColor}25`,
              color: office.statusColor,
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              border: `2px solid ${office.statusColor}60`,
              backdropFilter: 'blur(10px)'
            }}>
              {office.status === 'opening' ? '🚀 Opening Soon' : '⏸️ Postponed'}
            </div>

            {/* Flag and Country */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{ fontSize: '4rem' }}>
                {office.flag}
              </div>
              <div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '1.8rem', 
                  fontWeight: '700',
                  marginBottom: '0.25rem'
                }}>
                  {office.office}
                </h3>
                <p style={{ 
                  color: office.statusColor, 
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {office.description}
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{ 
                color: '#9ca3af', 
                fontSize: '0.85rem', 
                marginBottom: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Timeline
              </p>
              <p style={{ 
                color: '#fff', 
                fontSize: '1.1rem', 
                fontWeight: '600' 
              }}>
                {office.timeline}
              </p>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ 
                color: '#f59e0b', 
                fontSize: '0.9rem', 
                fontWeight: '600',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Key Features
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0 
              }}>
                {office.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    color: '#d1d5db',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: office.statusColor, fontSize: '0.8rem' }}>●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clients Count */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                Current Clients
              </span>
              <span style={{ 
                color: '#f59e0b', 
                fontWeight: 'bold', 
                fontSize: '1.2rem' 
              }}>
                {office.clients}
              </span>
            </div>

            {/* Background decoration */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              background: `radial-gradient(circle, ${office.statusColor}15, transparent 70%)`,
              borderRadius: '50%',
              opacity: 0.6
            }} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default GlobalExpansion