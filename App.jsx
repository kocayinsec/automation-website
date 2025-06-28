import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from './components/Header'
import Hero from './components/Hero'
import EmailSignup from './components/EmailSignup'
import Services from './components/Services'
import WorkflowExamples from './components/WorkflowExamples'
import Experience from './components/Experience'
import GlobalExpansion from './components/GlobalExpansion'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import FloatingChat from './components/FloatingChat'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [emailSignup, setEmailSignup] = useState('')

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    // Here you would integrate with your N8N webhook or email service
    try {
      // Example N8N webhook integration
      const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        })
      })
      
      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi! 4 saat içinde size dönüş yapacağız.')
        setFormData({ name: '', email: '', service: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Mesaj gönderilirken bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.')
    }
  }

  const handleEmailSignup = async (e) => {
    e.preventDefault()
    console.log('Email signup:', emailSignup)
    
    try {
      // Example N8N webhook for email signup
      const response = await fetch('YOUR_N8N_EMAIL_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailSignup,
          timestamp: new Date().toISOString(),
          source: 'website_email_signup'
        })
      })
      
      if (response.ok) {
        alert('Email adresiniz başarıyla kaydedildi! Otomatik içeriklerimizi almaya başlayacaksınız.')
        setEmailSignup('')
      }
    } catch (error) {
      console.error('Email signup error:', error)
      alert('Email kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      lineHeight: 1.6,
      position: 'relative'
    }}>
      {/* Rich Background Layers */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -4,
        background: `
          radial-gradient(circle at 15% 15%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 85% 25%, rgba(245, 158, 11, 0.06) 0%, transparent 45%),
          radial-gradient(circle at 25% 85%, rgba(139, 92, 246, 0.07) 0%, transparent 40%),
          radial-gradient(ellipse at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 35%),
          radial-gradient(ellipse at 50% 10%, rgba(239, 68, 68, 0.04) 0%, transparent 30%),
          radial-gradient(circle at 90% 90%, rgba(59, 130, 246, 0.03) 0%, transparent 25%)
        `
      }} />
      
      {/* Dynamic Flowing Shapes */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -3,
        background: `
          conic-gradient(from 0deg at 20% 20%, rgba(245, 158, 11, 0.04) 0deg, transparent 120deg, rgba(59, 130, 246, 0.03) 240deg, transparent 360deg),
          conic-gradient(from 180deg at 80% 80%, rgba(139, 92, 246, 0.05) 0deg, transparent 90deg, rgba(16, 185, 129, 0.04) 180deg, transparent 270deg),
          conic-gradient(from 90deg at 60% 40%, rgba(239, 68, 68, 0.03) 0deg, transparent 60deg, rgba(245, 158, 11, 0.025) 180deg, transparent 300deg)
        `
      }} />
      
      {/* Layered Geometric Patterns */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: `
          linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.02) 49%, rgba(59, 130, 246, 0.02) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(245, 158, 11, 0.015) 49%, rgba(245, 158, 11, 0.015) 51%, transparent 52%),
          linear-gradient(90deg, transparent 98%, rgba(139, 92, 246, 0.025) 100%)
        `,
        backgroundSize: '80px 80px, 60px 60px, 40px 40px'
      }} />
      
      {/* Enhanced Grid & Dots */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.008) 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.008) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.006) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '60px 60px, 60px 60px, 120px 120px, 80px 80px, 100px 100px',
        opacity: 0.6
      }} />
      
      <ParticleBackground />
      
      <Header />
      
      <main>
        <Hero />
        <EmailSignup 
          emailSignup={emailSignup}
          setEmailSignup={setEmailSignup}
          handleEmailSignup={handleEmailSignup}
        />
        <Services />
        <WorkflowExamples />
        <Experience />
        <GlobalExpansion />
        <WhyChooseUs />
        <Contact 
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </main>
      
      <FloatingChat />
    </div>
  )
}

export default App