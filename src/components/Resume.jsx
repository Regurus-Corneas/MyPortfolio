import {
  Code2,
  Users,
  GraduationCap,
  Lightbulb,
  Palette,
  Heart,
  Download
} from 'lucide-react'
import './Resume.css'

function Resume() {
  return (
    <section
      id="resume"
      className="min-h-[100svh] relative snap-start flex flex-col overflow-hidden"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always'
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1771814579079-041d2d793d75?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          filter: 'blur(20px) brightness(0.4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.15)'
        }}
      />
      {/* Top fade - transition from Experience */}
      <div
        className="absolute inset-x-0 top-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-[18vh] pb-8">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-12">

          <div className="grid grid-cols-3 gap-4">

            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-2"><Code2 size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">Software Skills</h3></div>
                <div className="space-y-1.5">
                  {['React / Next.js', 'Node.js / Express', 'TypeScript', 'Python', 'MongoDB / PostgreSQL', 'AWS / Docker'].map((skill, i) => (
                    <div key={i} className="flex items-center justify-between"><span className="text-[11px] text-white/70">{skill}</span><div className="w-14 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-white/50 rounded-full" style={{ width: `${85 - i * 8}%` }} /></div></div>
                  ))}
                </div>
              </div>
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-1.5"><Users size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">Languages & Soft Skills</h3></div>
                <div className="space-y-0.5 mb-1.5">
                  {['English - Fluent', 'Urdu - Native', 'Arabic - Basic'].map((lang, i) => (<p key={i} className="text-[11px] text-white/70">{lang}</p>))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {['Leadership', 'Communication', 'Problem Solving', 'Teamwork'].map((skill, i) => (<span key={i} className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded">{skill}</span>))}
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-1.5"><GraduationCap size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">Education</h3></div>
                <div className="space-y-0.5">
                  <p className="text-[11px] font-medium text-white">BS Computer Science</p>
                  <p className="text-[10px] text-white/60">University Name</p>
                  <p className="text-[10px] text-white/40">CGPA: 3.83 / 4.0</p>
                </div>
              </div>
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-1.5"><Palette size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">Design Skills</h3></div>
                <div className="space-y-1">
                  {[{n:'Figma',l:90},{n:'Adobe XD',l:75},{n:'Tailwind CSS',l:95},{n:'Responsive Design',l:88},{n:'UI/UX Principles',l:82},{n:'Design Systems',l:78}].map((s,i)=>(
                    <div key={i} className="flex items-center justify-between"><span className="text-[11px] text-white/70">{s.n}</span><div className="w-14 h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-white/50 rounded-full" style={{width:`${s.l}%`}} /></div></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-2"><Lightbulb size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">What Can I Do?</h3></div>
                <div className="space-y-1">
                  {['Responsive Web Development','UI/UX Design & Prototyping','Front-End Architecture','Real-Time Object Detection','E-Commerce Solutions','API Consumption & Integration','Performance Optimization','Digital Visual Identity','Collaborative Version Control'].map((item,i)=>(<p key={i} className="text-[11px] text-white/70">{item}</p>))}
                </div>
              </div>
              <div className="magic-card rounded-xl">
                <div className="flex items-center gap-2 mb-1.5"><Heart size={14} className="text-white/80" /><h3 className="text-sm font-semibold text-white">Hobbies</h3></div>
                <div className="flex flex-wrap gap-1">
                  {['Gaming','Reading','Photography','Travel','Music','Fitness','Open Source'].map((hobby,i)=>(<span key={i} className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded">{hobby}</span>))}
                </div>
              </div>
            </div>

          </div>

          {/* Download CV Button */}
          <div className="flex justify-center mt-1">
            <div className="glass-glow-btn-cv">
              <a href="/cv.pdf" download>
                <Download size={16} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
      {/* Bottom fade - transition to Projects */}
      <div
        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
    </section>
  )
}

export default Resume
