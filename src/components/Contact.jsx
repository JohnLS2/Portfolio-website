import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const [ref, visible] = useScrollAnimation(0.15);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johnsalasgt@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Sending message...' });

    // Simulate submission / mailto dispatch
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been received. I will respond to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <div className={`contact__header animate-on-scroll${visible ? ' visible' : ''}`}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's build something <span className="gradient-text">amazing</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left Column: Direct Info */}
          <div className={`contact__info-col animate-on-scroll${visible ? ' visible' : ''}`}>
            <div className="contact__card glass-card">
              <h3 className="contact__card-title">Contact Information</h3>
              <p className="contact__card-desc">
                Feel free to reach out directly via email or connect with me on social platforms.
              </p>

              <div className="contact__items">
                {/* Email Item */}
                <div className="contact__item">
                  <div className="contact__item-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="contact__item-content">
                    <span className="contact__item-label">Direct Email</span>
                    <a href="mailto:johnsalasgt@gmail.com" className="contact__item-value">
                      johnsalasgt@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact__copy-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact__item">
                  <div className="contact__item-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact__item-content">
                    <span className="contact__item-label">Location</span>
                    <span className="contact__item-value">Angeles City, Pampanga, Philippines</span>
                  </div>
                </div>

                {/* Status Item */}
                <div className="contact__item">
                  <div className="contact__item-icon contact__item-icon--active">
                    <span className="contact__active-indicator" />
                  </div>
                  <div className="contact__item-content">
                    <span className="contact__item-label">Availability</span>
                    <span className="contact__item-value contact__item-value--highlight">
                      Available for projects & internships
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="contact__socials">
                <span className="contact__socials-label">Connect with me:</span>
                <div className="contact__social-links">
                  <a href="https://github.com/JohnLS2" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/john-leonard-salas-4b74843a9/" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ehh.john/" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/LeonardSalas21" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={`contact__form-col animate-on-scroll${visible ? ' visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <form className="contact__form glass-card" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send a Direct Message</h3>

              {status.state === 'success' && (
                <div className="contact__alert contact__alert--success">
                  <span className="contact__alert-icon">✓</span>
                  <p>{status.message}</p>
                </div>
              )}

              {status.state === 'error' && (
                <div className="contact__alert contact__alert--error">
                  <span className="contact__alert-icon">!</span>
                  <p>{status.message}</p>
                </div>
              )}

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact__form-input"
                    placeholder="e.g. Alex Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact__form-input"
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact__form-input"
                  placeholder="Project inquiry / Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="contact__form-input contact__form-textarea"
                  placeholder="Tell me about your idea or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit-btn"
                disabled={status.state === 'submitting'}
              >
                {status.state === 'submitting' ? (
                  <>
                    <span className="contact__spinner" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
