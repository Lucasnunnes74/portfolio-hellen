import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Education from './components/Education.tsx'
import Experience from './components/Experience.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import SkipLink from './components/SkipLink.tsx'
import Skills from './components/Skills.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'
import { useScrollToHash } from './hooks/useScrollToHash.ts'

function App() {
  useScrollToHash()

  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
