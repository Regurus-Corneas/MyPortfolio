import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden snap-start"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1910&auto=format&fit=crop)'
        }}
      />
      {/* Dark overlay + blur */}
      <div className="absolute inset-0 backdrop-blur-[10px] bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      {/* Bottom dissolve - transition to About */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[30%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />

      <div className="relative z-10 h-full flex items-center justify-center pt-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="text-center space-y-8">
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] text-white opacity-90 relative z-10"
              style={{
                textShadow: '0 25px 50px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3)'
              }}
            >
              YOUSAF SALAR
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light tracking-widest uppercase">
              Software Engineer
            </p>

            <div className="flex justify-center pt-6">
              <div className="glass-glow-btn">
                <a href="#contact">Hire Me</a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/Regurus-Corneas', label: 'GitHub', glowColor: 'rgba(147, 51, 234, 0.6)', borderColor: 'rgba(147, 51, 234, 0.4)' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/regurus-corneas/', label: 'LinkedIn', glowColor: 'rgba(30, 58, 138, 0.6)', borderColor: 'rgba(30, 58, 138, 0.4)' },
                { icon: Twitter, href: '#', label: 'Twitter', glowColor: 'rgba(59, 130, 246, 0.6)', borderColor: 'rgba(59, 130, 246, 0.4)' },
                { icon: Mail, href: 'mailto:yousafsalar786@gmail.com', label: 'Email', glowColor: 'rgba(239, 68, 68, 0.6)', borderColor: 'rgba(239, 68, 68, 0.4)' }
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 group"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Icon size={20} />
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.glowColor} 0%, transparent 100%)`,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: `1px solid ${social.borderColor}`,
                        boxShadow: `0 0 20px ${social.glowColor}, 0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)`
                      }}
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
