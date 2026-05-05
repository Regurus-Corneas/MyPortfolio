import { Building2 } from 'lucide-react'
import './Experience.css'
import { useState, useEffect, useRef } from 'react'

const experiences = [
    {
      company: 'DevemSoft',
      role: 'Full Stack Developer',
      period: 'Jan 2023 - Present',
      mainResponsibility: 'Led development of scalable web applications',
      detailedDescription: 'Architected and developed full-stack web applications using React, Node.js, and MongoDB. Implemented RESTful APIs, optimized database performance, and led a team of 3 junior developers. Successfully reduced page load times by 40% through code optimization and implemented CI/CD pipelines for automated testing and deployment.'
    },
    {
      company: 'SoftSoftware',
      role: 'Frontend Developer',
      period: 'Jun 2022 - Dec 2022',
      mainResponsibility: 'Created responsive user interfaces with modern frameworks',
      detailedDescription: 'Developed responsive and interactive user interfaces using React, TypeScript, and Tailwind CSS. Collaborated with UX designers to implement pixel-perfect designs and improved user experience by 35%. Integrated third-party APIs and implemented state management solutions for complex data flows.'
    },
    {
      company: 'Nucleus Systems',
      role: 'Junior Developer',
      period: 'Jan 2022 - May 2022',
      mainResponsibility: 'Assisted in development and maintenance of web applications',
      detailedDescription: 'Contributed to the development and maintenance of enterprise web applications using Angular and .NET Core. Participated in code reviews, bug fixes, and feature implementation. Gained experience in agile methodologies and improved code quality through comprehensive testing and documentation practices.'
    }
  ]

function ExperienceCard({ exp, isFlipped, onFlipToBack, onFlipToFront }) {
  return (
    <div className="flip-card-wrapper" style={{ perspective: '1000px' }}>
      <div
        className={`flip-card-inner transition-transform duration-700 ease-in-out`}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div
          className="flip-card-front glass-card"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div className="card-content flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-white/80" size={24} />
              <h3 className="card-title">{exp.company}</h3>
            </div>

            <p className="card-role">{exp.role}</p>
            <p className="card-period">{exp.period}</p>
            <p className="card-description">{exp.mainResponsibility}</p>

            <button
              className="card-button"
              onClick={onFlipToBack}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back glass-card"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="card-content flex flex-col items-center justify-center p-10">
            <div className="flex-1 w-full">
              <p className="card-description detailed-text text-justify leading-relaxed tracking-tight">{exp.detailedDescription}</p>
            </div>

            <button
              className="card-button"
              onClick={onFlipToFront}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  const [flippedIndex, setFlippedIndex] = useState(-1)
  const sectionRef = useRef(null)

  // Reset flip when section leaves viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setFlippedIndex(-1)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen relative overflow-hidden bg-transparent snap-start"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Background with 60% blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683121661002-cdd8c175ecf7?q=80&w=1543&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      {/* Top dissolve - transition from About */}
      <div
        className="absolute inset-x-0 top-0 h-[20%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      {/* Bottom fade - transition to Resume */}
      <div
        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center pt-14">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
          <h2 className="text-5xl font-bold text-white tracking-tight text-center mb-12 mt-12">Experience</h2>

          <div className="flex flex-row gap-10 mt-12 items-center justify-center w-full px-10">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                isFlipped={flippedIndex === index}
                onFlipToBack={() => handleFlip(index)}
                onFlipToFront={() => setFlippedIndex(-1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
