import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
