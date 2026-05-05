import { useState, useEffect, useRef } from 'react'
import { Home, User, Briefcase, FileText, FolderGit2, Mail } from 'lucide-react'
import styles from './Navbar.module.css'

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const navRef = useRef(null)
  const navContentRef = useRef(null)
  const indicatorRef = useRef(null)
  const navItemsRef = useRef([])
  const wobbleRef = useRef({ y: 0, velY: 0 })
  const lastScrollRef = useRef(0)
  const animationIdRef = useRef(null)

  const physicsConfig = {
    spring: 0.15,
    damping: 0.92,
    mass: 2.0,
    inputFactor: 0.015,
    limitY: 12,
    maxScale: 0.02
  }

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const updateIndicator = (sectionId) => {
    const itemIndex = navItems.findIndex(item => item.id === sectionId)
    const navItemElement = navItemsRef.current[itemIndex]
    
    if (navItemElement && navContentRef.current) {
      // Use navContentRef as positioning reference
      const navRect = navContentRef.current.getBoundingClientRect()
      const itemRect = navItemElement.getBoundingClientRect()
      
      const left = itemRect.left - navRect.left
      const width = itemRect.width
      
      setIndicatorStyle({
        transform: `translateX(${left}px) translateY(-50%)`,
        width: `${width}px`,
        opacity: 1
      })
    }
  }

  // Force update indicator on scroll
  const forceUpdateIndicator = () => {
    const currentSection = activeSection
    updateIndicator(currentSection)
  }

  const setTransform = (yPos, scaleY) => {
    if (navRef.current) {
      navRef.current.style.transform = `translateX(-50%) translate3d(0, ${yPos.toFixed(2)}px, 0) scaleY(${scaleY.toFixed(4)})`
    }
  }

  const animateNavbarWobble = () => {
    const wobble = wobbleRef.current

    const forceY = -wobble.y * physicsConfig.spring
    wobble.velY += forceY / physicsConfig.mass
    wobble.velY *= physicsConfig.damping
    wobble.y += wobble.velY

    const deformation = Math.min(Math.abs(wobble.velY) * 0.05, physicsConfig.maxScale)
    const scaleY = 1 + deformation

    setTransform(wobble.y, scaleY)

    if (Math.abs(wobble.velY) > 0.005 || Math.abs(wobble.y) > 0.005) {
      animationIdRef.current = requestAnimationFrame(animateNavbarWobble)
    } else {
      wobble.y = 0
      wobble.velY = 0
      setTransform(0, 1)
      animationIdRef.current = null
    }
  }

  useEffect(() => {
    // Intersection Observer for reliable section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Top 20% to bottom 50% is considered "active" for body scroll
      threshold: [0, 0.1, 0.2, 0.5, 1]
    }

    const observerCallback = (entries) => {
      // Get all intersecting entries and find the one with highest visibility
      const intersectingEntries = entries.filter(entry => 
        entry.isIntersecting && navItems.some(item => item.id === entry.target.id)
      )
      
      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio (most visible first)
        const mostVisible = intersectingEntries.sort((a, b) => 
          b.intersectionRatio - a.intersectionRatio
        )[0]
        const newActiveSection = mostVisible.target.id
        
        // Only update if section actually changed
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection)
          
          // Force immediate update with setTimeout to ensure DOM is ready
          setTimeout(() => {
            updateIndicator(newActiveSection)
          }, 50)
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = navItems.map(item => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
      return { id: item.id, element }
    }).filter(s => s.element)

    // Enhanced scroll handler for wobble effect and indicator updates
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollVelocity = currentScrollY - lastScrollRef.current
      lastScrollRef.current = currentScrollY

      const clampedInput = Math.max(-80, Math.min(80, scrollVelocity))
      wobbleRef.current.velY -= clampedInput * physicsConfig.inputFactor

      if (wobbleRef.current.y > physicsConfig.limitY) wobbleRef.current.y = physicsConfig.limitY
      if (wobbleRef.current.y < -physicsConfig.limitY) wobbleRef.current.y = -physicsConfig.limitY

      if (!animationIdRef.current) {
        animateNavbarWobble()
      }

      // Backup section detection based on scroll position
      const viewportHeight = window.innerHeight
      const scrollCenter = currentScrollY + (viewportHeight / 2)
      
      // Find which section is at the center of viewport
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + currentScrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollCenter >= elementTop && scrollCenter <= elementBottom) {
            if (activeSection !== item.id) {
              setActiveSection(item.id)
              setTimeout(() => {
                updateIndicator(item.id)
              }, 50)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    lastScrollRef.current = window.scrollY

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      // Cleanup observer
      sections.forEach(section => {
        if (section.element) observer.unobserve(section.element)
      })
      observer.disconnect()
    }
  }, [activeSection])

  // Initialize indicator position on mount and handle resize
  useEffect(() => {
    const updatePosition = () => {
      const timer = setTimeout(() => {
        updateIndicator(activeSection)
      }, 100)
      return () => clearTimeout(timer)
    }

    updatePosition()
    
    // Add resize listener
    const handleResize = () => {
      updatePosition()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSection])

  return (
    <div ref={navRef} className={styles.navbarContainer}>
      <div className={styles.glassBox}>
        <nav ref={navContentRef} className={styles.navContent}>
          <div className={styles.navLogo}>My Portfolio</div>
          <ul className={styles.navLinks}>
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    ref={(el) => navItemsRef.current[index] = el}
                    onClick={() => scrollToSection(item.id)}
                    className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* Gooey Slide Indicator */}
        <div 
          ref={indicatorRef}
          className={styles.gooeyIndicator}
          style={indicatorStyle}
        />
      </div>
    </div>
  )
}

export default Navbar
