import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    number: '01',
    title: 'Frontend Web Apps',
    desc: 'Crafting responsive, high-performance web applications using React, modern JavaScript, and component-driven architecture with buttery-smooth interactions.',
    tags: ['React.js', 'Vite', 'JavaScript ES6+', 'HTML5/CSS3'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="m9.17 14.83-4.24 4.24" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    number: '02',
    title: 'UI / UX Design',
    desc: 'Designing intuitive, modern user interfaces that delight users. Focus on aesthetics, accessibility, clear visual hierarchy, and cohesive design systems.',
    tags: ['User Research', 'Figma', 'Wireframing', 'Design Systems'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
    number: '03',
    title: 'API & Backend Integration',
    desc: 'Connecting dynamic client-side apps with REST APIs, handling data fetching, caching, real-time updates, and backend workflows with Node.js and MySQL.',
    tags: ['REST APIs', 'Node.js', 'MySQL', 'JSON / Async'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        <path d="M14 7h4" />
        <path d="M16 5v4" />
      </svg>
    ),
    number: '04',
    title: 'Graphic Design & AI Media',
    desc: 'High-impact visual design, comprehensive image editing, photo manipulation, and custom AI-powered thumbnails engineered for maximum engagement and click-through rates.',
    tags: ['Image Editing', 'AI Thumbnails', 'Photoshop', 'Visual Branding'],
  },
];

export default function Services() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="services" className="section services">
      <div className="container" ref={ref}>
        <div className={`services__header animate-on-scroll${visible ? ' visible' : ''}`}>
          <span className="section-label">Services</span>
          <h2 className="section-title">
            What I <span className="gradient-text">bring to the table</span>
          </h2>
          <p className="section-subtitle">
            Specialized solutions tailored to transform concepts into refined, scalable, and responsive digital products.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card glass-card animate-on-scroll${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="service-card__top">
                <div className="service-card__icon-wrap">
                  {service.icon}
                </div>
                <span className="service-card__number">{service.number}</span>
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>

              <div className="service-card__tags">
                {service.tags.map(tag => (
                  <span key={tag} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="service-card__shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
