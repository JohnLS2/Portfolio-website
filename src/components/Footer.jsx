import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">JLS</span>
            <p className="footer__tagline">
              Crafting refined digital experiences with modern web technologies.
            </p>
          </div>

          <div className="footer__nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            type="button"
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} <span className="gradient-text font-bold">John Leonard Salas</span>. All rights reserved.
          </p>
          <p className="footer__built">
            Built with <span className="footer__heart">⚡</span> React 19 & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
