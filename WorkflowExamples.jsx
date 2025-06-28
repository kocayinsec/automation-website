import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const WorkflowExamples = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const workflows = [
    {
      id: 1,
      title: "Social Media Automation",
      description: "Automatically post content across all social platforms with intelligent scheduling",
      icon: "📱",
      color: "#3b82f6",
      steps: [
        { id: 1, title: "Content Creation", desc: "AI generates engaging posts", icon: "✨" },
        { id: 2, title: "Scheduling", desc: "Optimal timing analysis", icon: "⏰" },
        { id: 3, title: "Multi-Platform", desc: "Post to Instagram, Twitter, TikTok", icon: "🔗" },
        { id: 4, title: "Analytics", desc: "Track performance metrics", icon: "📊" }
      ],
      stats: { time_saved: "15 hours/week", roi: "340%", platforms: "8+" }
    },
    {
      id: 2,
      title: "Lead Management System",
      description: "Capture, qualify, and nurture leads automatically from multiple sources",
      icon: "🎯",
      color: "#f59e0b",
      steps: [
        { id: 1, title: "Lead Capture", desc: "Forms, emails, social media", icon: "📥" },
        { id: 2, title: "Qualification", desc: "AI scoring and filtering", icon: "🔍" },
        { id: 3, title: "CRM Integration", desc: "Automatic data entry", icon: "💾" },
        { id: 4, title: "Follow-up", desc: "Personalized email sequences", icon: "📧" }
      ],
      stats: { conversion: "65%", response_time: "2 minutes", leads: "500+/month" }
    },
    {
      id: 3,
      title: "E-commerce Automation",
      description: "Complete order processing, inventory management, and customer service",
      icon: "🛒",
      color: "#ef4444",
      steps: [
        { id: 1, title: "Order Processing", desc: "Automatic order validation", icon: "✅" },
        { id: 2, title: "Inventory Update", desc: "Real-time stock management", icon: "📦" },
        { id: 3, title: "Shipping", desc: "Label generation & tracking", icon: "🚚" },
        { id: 4, title: "Customer Care", desc: "Automated support responses", icon: "💬" }
      ],
      stats: { orders: "1000+/day", accuracy: "99.8%", cost_reduction: "45%" }
    },
    {
      id: 4,
      title: "Data Synchronization",
      description: "Keep all your business tools in perfect sync across platforms",
      icon: "🔄",
      color: "#8b5cf6",
      steps: [
        { id: 1, title: "Data Collection", desc: "Gather from all sources", icon: "🔗" },
        { id: 2, title: "Transformation", desc: "Clean and format data", icon: "⚙️" },
        { id: 3, title: "Validation", desc: "Error checking & quality control", icon: "✓" },
        { id: 4, title: "Distribution", desc: "Update all connected systems", icon: "📤" }
      ],
      stats: { systems: "25+", sync_time: "Real-time", errors: "0.1%" }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
      id="examples"
      ref={ref}
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#0f172a',
        width: '100%',
        margin: 0
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            🚀 N8N Workflow Examples
          </h2>
          
          <p style={{
            color: '#9ca3af',
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            See how our N8N automation workflows transform businesses. Click on each workflow to explore the magic behind the automation.
          </p>
        </motion.div>

        {/* Workflow Tabs */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {workflows.map((workflow, index) => (
            <motion.button
              key={workflow.id}
              onClick={() => setActiveWorkflow(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: activeWorkflow === index 
                  ? `linear-gradient(135deg, ${workflow.color}, ${workflow.color}88)` 
                  : 'rgba(31, 41, 55, 0.5)',
                border: `2px solid ${activeWorkflow === index ? workflow.color : '#374151'}`,
                color: activeWorkflow === index ? '#fff' : '#d1d5db',
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{workflow.icon}</span>
              {workflow.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Workflow Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWorkflow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'rgba(31, 41, 55, 0.5)',
              borderRadius: '2rem',
              padding: '3rem',
              border: '1px solid #374151',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Workflow Info */}
              <div>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem'
                }}>
                  {workflows[activeWorkflow].icon}
                </div>
                
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: workflows[activeWorkflow].color
                }}>
                  {workflows[activeWorkflow].title}
                </h3>
                
                <p style={{
                  color: '#d1d5db',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}>
                  {workflows[activeWorkflow].description}
                </p>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '1rem'
                }}>
                  {Object.entries(workflows[activeWorkflow].stats).map(([key, value]) => (
                    <div key={key} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        color: workflows[activeWorkflow].color,
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }}>
                        {value}
                      </div>
                      <div style={{
                        color: '#9ca3af',
                        fontSize: '0.9rem',
                        textTransform: 'capitalize'
                      }}>
                        {key.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              <div>
                <h4 style={{
                  color: '#f59e0b',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  🔄 Automation Flow
                </h4>
                
                <div style={{ position: 'relative' }}>
                  {workflows[activeWorkflow].steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1.5rem',
                        position: 'relative'
                      }}
                    >
                      {/* Connector Line */}
                      {index < workflows[activeWorkflow].steps.length - 1 && (
                        <div style={{
                          position: 'absolute',
                          left: '30px',
                          top: '60px',
                          width: '2px',
                          height: '40px',
                          background: `linear-gradient(to bottom, ${workflows[activeWorkflow].color}, transparent)`,
                          zIndex: 1
                        }} />
                      )}
                      
                      {/* Step Icon */}
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(135deg, ${workflows[activeWorkflow].color}, ${workflows[activeWorkflow].color}88)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        {step.icon}
                      </div>
                      
                      {/* Step Info */}
                      <div style={{ flex: 1 }}>
                        <h5 style={{
                          color: '#fff',
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem'
                        }}>
                          {step.title}
                        </h5>
                        <p style={{
                          color: '#9ca3af',
                          fontSize: '0.95rem'
                        }}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <motion.div
              style={{ 
                textAlign: 'center', 
                marginTop: '3rem' 
              }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: `linear-gradient(135deg, ${workflows[activeWorkflow].color}, ${workflows[activeWorkflow].color}88)`,
                  color: '#fff',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Build This Workflow →
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default WorkflowExamples