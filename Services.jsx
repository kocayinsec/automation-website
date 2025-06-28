import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: "N8N Business Automation",
      description: "Streamline your workflows and boost productivity with intelligent N8N automation solutions",
      icon: "⚡",
      color: "#f59e0b",
      features: [
        {
          category: "Social Media Automation (N8N)",
          items: [
            "Automated posting across X/Twitter, TikTok, Instagram via N8N",
            "Content scheduling with N8N workflow triggers",
            "Cross-platform analytics using N8N integrations",
            "Hashtag optimization through N8N automation"
          ]
        },
        {
          category: "Business Process Automation (N8N)",
          items: [
            "CRM integration and lead management with N8N",
            "Email marketing automation via N8N workflows",
            "Invoice and payment processing through N8N",
            "Customer support ticket routing using N8N"
          ]
        },
        {
          category: "Custom N8N Workflow Solutions",
          items: [
            "API integrations between platforms using N8N",
            "Data synchronization and backup via N8N",
            "Notification and alert systems with N8N",
            "Report generation and distribution through N8N"
          ]
        }
      ],
      highlight: {
        title: "⚡ Powered by N8N",
        description: "Visual workflow builder with 400+ integrations for maximum flexibility and reliability."
      }
    },
    {
      title: "Personalized Vacation Planning",
      description: "Curated travel experiences that create unforgettable memories tailored to your preferences",
      icon: "🌍",
      color: "#ef4444",
      features: [
        {
          category: "Custom Itinerary Creation",
          items: [
            "Day-by-day detailed travel plans",
            "Restaurant and accommodation recommendations",
            "Transportation and logistics coordination",
            "Local experiences and hidden gems"
          ]
        },
        {
          category: "Destination Research & Planning",
          items: [
            "Weather and seasonal considerations",
            "Cultural events and festivals",
            "Visa and documentation assistance",
            "Safety and travel advisory updates"
          ]
        },
        {
          category: "Budget Optimization",
          items: [
            "Cost-effective travel options",
            "Deal hunting and discount applications",
            "Flexible booking strategies",
            "Value-maximizing recommendations"
          ]
        }
      ],
      highlight: {
        title: "⭐ Personalized Service",
        description: "From weekend getaways to dream vacations, every detail is crafted around your unique preferences."
      }
    }
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
      id="services"
      ref={ref}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#0a0a0a',
        width: '100%',
        margin: 0
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our N8N Automation Services
          </h2>
          
          <p style={{
            color: '#9ca3af',
            fontSize: '1.1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            We specialize in N8N workflow automation and personalized vacation planning to revolutionize your business operations
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px rgba(${service.color === '#f59e0b' ? '245, 158, 11' : '239, 68, 68'}, 0.3)`
              }}
              style={{
                backgroundColor: '#1f2937',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #374151',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: service.color,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem'
                }}
              >
                {service.icon}
              </motion.div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: `linear-gradient(135deg, ${service.color}, ${service.color}88)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {service.title}
              </h3>
              
              <p style={{ 
                color: '#d1d5db', 
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                {service.description}
              </p>

              {/* Features */}
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + featureIndex * 0.1 }}
                  style={{ marginBottom: '1.5rem' }}
                >
                  <h4 style={{ 
                    color: service.color, 
                    marginBottom: '0.5rem', 
                    fontWeight: '600' 
                  }}>
                    {feature.category}
                  </h4>
                  <ul style={{ 
                    color: '#d1d5db', 
                    paddingLeft: '1rem',
                    listStyle: 'none'
                  }}>
                    {feature.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + itemIndex * 0.05 }}
                        style={{
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: service.color, marginTop: '0.1rem' }}>•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Highlight Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  backgroundColor: '#374151',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginTop: '1rem'
                }}
              >
                <div style={{ 
                  color: service.color, 
                  fontWeight: '600', 
                  marginBottom: '0.5rem' 
                }}>
                  {service.highlight.title}
                </div>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  {service.highlight.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginTop: '4rem'
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
              padding: '1.25rem 2.5rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🚀 Start Your Automation Journey
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services