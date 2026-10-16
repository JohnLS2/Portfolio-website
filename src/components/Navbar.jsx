import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Prevent scroll-listener overrides while a clicked smooth scroll is animating
      if (isClickScrolling.current) return;

      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Check sections from top to bottom
      const navOffset = 140;
      let current = 'home';

      for (let i = 0; i < navLinks.length; i++) {
        const id = navLinks[i].href;
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset) {
            current = id.slice(1);
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.slice(1);

    // Immediately snap indicator to clicked item
    setActiveSection(targetId);
    isClickScrolling.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);

    const el = document.querySelector(href);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: href === '#home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={e => handleNav(e, '#home')}>
          <span className="navbar__logo-icon">JLS</span>
        </a>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link${activeSection === link.href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/JohnLS2" target="_blank" rel="noopener noreferrer" className="navbar__link">
              GitHub ↗
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
