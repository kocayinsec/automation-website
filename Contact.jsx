import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = ({ formData, setFormData, handleSubmit }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ahmetemrekocay@icloud.com',
      link: 'mailto:ahmetemrekocay@icloud.com',
      color: '#3b82f6'
    },
    {
      icon: '📞',
      title: 'WhatsApp',
      value: '+45 453225086',
      link: 'https://wa.me/4545453225086',
      color: '#f59e0b'
    },
    {
      icon: '⏱️',
      title: 'Response Time',
      value: 'We respond within 4 hours!',
      link: null,
      color: '#ef4444'
    },
    {
      icon: '🌍',
      title: 'Global Support',
      value: '4+ countries served',
      link: null,
      color: '#8b5cf6'
    }
  ]

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#111827',
        width: '100%',
        margin: 0
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
            Ready to Transform Your Business?
          </h2>
          
          <p style={{
            color: '#9ca3af',
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Get started with a free consultation and discover how N8N automation can revolutionize your operations. We respond within 4 hours!
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              backgroundColor: '#1f2937',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #374151'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#f59e0b'
            }}>
              Get Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#8b5cf6', fontWeight: '600' }}>
                  Full Name
                </label>
                <motion.input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  whileFocus={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #374151',
                    backgroundColor: '#111827',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#8b5cf6', fontWeight: '600' }}>
                  Email Address
                </label>
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  whileFocus={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #374151',
                    backgroundColor: '#111827',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#8b5cf6', fontWeight: '600' }}>
                  Service Interest
                </label>
                <motion.select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  whileFocus={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #374151',
                    backgroundColor: '#111827',
                    color: '#fff',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="n8n-automation">N8N Business Automation</option>
                  <option value="social-media">Social Media Automation</option>
                  <option value="vacation-planning">Vacation Planning</option>
                  <option value="custom-solution">Custom N8N Solution</option>
                </motion.select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#8b5cf6', fontWeight: '600' }}>
                  Project Details
                </label>
                <motion.textarea
                  placeholder="Tell us about your automation needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  whileFocus={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #374151',
                    backgroundColor: '#111827',
                    color: '#fff',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
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
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '1rem'
                }}
              >
                Hemen Büyüyün! 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              backgroundColor: '#1f2937',
              padding: '2rem',
              borderRadius: '1rem',
              border: '1px solid #374151'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#ef4444'
            }}>
              Get in Touch
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: info.color,
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ color: '#8b5cf6', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {info.title}
                    </div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        style={{ 
                          color: '#f59e0b', 
                          textDecoration: 'none',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div style={{ color: '#d1d5db' }}>{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact