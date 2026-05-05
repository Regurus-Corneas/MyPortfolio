function Projects() {
  const projects = [
    {
      title: 'LiveTrack: Crypto Tracker',
      description: 'Real-time cryptocurrency tracker with live prices, charts, and price alerts.',
      tech: ['Next.js', 'TanStack Query', 'Recharts'],
      link: 'https://livetrack-gold.vercel.app',
      image: '/images/livetrack-preview.png'
    },
    {
      title: 'ShopSegment: E-vibe',
      description: 'Dark-themed e-commerce store with curated products, gallery, and shopping cart.',
      tech: ['React / Next.js', 'Tailwind CSS', 'FakeStore API'],
      link: 'https://shopsegment-e-vibe.vercel.app',
      image: '/images/shopsegment-preview.png'
    },
    {
      title: 'LUCID CV',
      description: 'AI-powered resume matcher and optimizer tailored for specific job descriptions.',
      tech: ['Next.js', 'Clerk Authentication', 'Groq AI API'],
      link: 'https://lucid-cv.vercel.app',
      image: '/images/lucid-cv-preview.png'
    }
  ]

  return (
    <section
      id="projects"
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
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1725371369163-ff6576d7df6a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          filter: 'blur(6px) brightness(0.4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Top fade - transition from Resume */}
      <div 
        className="absolute inset-x-0 top-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white">Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glass-container rounded-2xl p-6 flex flex-col group hover:bg-white/5 transition-all duration-300 overflow-hidden">
              {project.image && (
                <div className="mb-3 -mx-6 -mt-6 overflow-hidden bg-black/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom fade - transition to Contact */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
    </section>
  )
}

export default Projects
