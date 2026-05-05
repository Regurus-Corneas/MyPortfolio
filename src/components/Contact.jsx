import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yousafsalar786@gmail.com',
      href: 'mailto:yousafsalar786@gmail.com',
      external: false,
      glowClass: 'glow-red'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/regurus-corneas',
      href: 'https://www.linkedin.com/in/regurus-corneas/',
      external: true,
      glowClass: 'glow-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Regurus-Corneas',
      href: 'https://github.com/Regurus-Corneas',
      external: true,
      glowClass: 'glow-purple'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@RegurusCorneas',
      href: '#',
      external: false,
      glowClass: 'glow-cyan'
    }
  ]

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center overflow-hidden pt-24 snap-start relative"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
          filter: 'blur(8px) brightness(0.45)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Top fade - transition from Projects */}
      <div 
        className="absolute inset-x-0 top-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white text-center">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-center text-lg mb-12 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you have a question
            or just want to say hi, feel free to reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`glass-container ${link.glowClass} rounded-2xl p-6 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 group`}
                >
                  <Icon className="text-white/80 group-hover:text-white transition-colors" size={24} />
                  <div>
                    <p className="text-white/50 text-sm">{link.label}</p>
                    <p className="text-white/90 font-medium">{link.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
