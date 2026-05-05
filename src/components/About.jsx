import './About.css'

function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden flex flex-col items-center snap-start"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Background with 30% blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1764691232136-043f3c248324?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          filter: 'blur(10px)',
          transform: 'scale(1.1)', // Scale up to prevent blur edges from showing
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
      <div 
        className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-[20%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-20">
        {/* About Heading - Below Navbar */}
        <h2 className="text-5xl font-bold text-white tracking-tight text-center mb-12 mt-12">
          About
        </h2>
        
        {/* Two-Box Content Grid */}
        <div className="flex flex-row gap-16 items-center justify-center">
          {/* Education Box */}
          <div className="glass-box">
            <span></span>
            <div className="glass-box-content">
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-base text-white/90 mb-2 leading-tight">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-white/60 mb-4 text-sm">5th Semester</p>
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wider mb-1">CGPA</p>
                <p 
                  className="text-5xl font-bold"
                  style={{
                    color: '#ff1f71',
                    textShadow: '0 0 20px rgba(255,31,113,1), 0 0 40px rgba(255,31,113,0.8), 0 0 60px rgba(255,31,113,0.5)'
                  }}
                >
                  3.83
                </p>
              </div>
            </div>
          </div>

          {/* Profile Box */}
          <div className="glass-box">
            <span></span>
            <div className="glass-box-content">
              <h3 className="text-xl font-semibold text-white mb-3">Profile</h3>
              <p className="text-white/80 leading-tight text-sm">
                Software Engineering student (5th Semester, CGPA 3.83) at FUUAST with hands-on experience in
                front-end development. Skilled in Next.js, TypeScript, React, and Figma. Built and deployed
                production-grade web applications and contributed to real client projects at DevemSoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
