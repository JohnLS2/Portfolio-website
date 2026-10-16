import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Quote.css';

export default function Quote() {
  const [ref, visible] = useScrollAnimation(0.2);

  return (
    <section className="quote-section" ref={ref}>
      <div className="container">
        <div className={`quote-card glass-card animate-on-scroll${visible ? ' visible' : ''}`}>
          <div className="quote-card__icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="quote-card__text">
            “We all need people who will give us feedback. That’s how we improve.”
          </blockquote>
          <div className="quote-card__author">
            <span className="quote-card__name gradient-text">Bill Gates</span>
            <span className="quote-card__role">Foundational Philosophy for Growth</span>
          </div>
          <div className="quote-card__bg-glow" />
        </div>
      </div>
    </section>
  );
}
