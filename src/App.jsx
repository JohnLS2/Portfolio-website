import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
