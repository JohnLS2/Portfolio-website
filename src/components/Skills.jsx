import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const skillCategories = ['All', 'Frontend', 'Backend & DB', 'Tools & Workflow'];

const skillsData = [
  {
    name: 'React.js',
    category: 'Frontend',
    level: 88,
    status: 'Core Expertise',
    icon: (
      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 85,
    status: 'Advanced',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 3h18v18H3V3zm15.5 13.5c-.5.8-1.3 1.3-2.3 1.3-1.6 0-2.4-1-2.4-2.5v-4.7h1.6v4.6c0 .7.3 1.1 1 1.1.6 0 1-.3 1.2-.8.1-.3.2-.6.2-1.1V10.6h1.7v5.8c0 .2 0 .5-.1.7l-.9-.1zm-6.3-1.1c.3.5.7.8 1.3.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.3-1-1.4-.5-2.2-1.1-2.2-2.3 0-1.4 1.1-2.4 2.6-2.4 1.1 0 1.9.4 2.4 1.3l-1.3.8c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .4.3.6 1.1.9 1.5.5 2.4 1.2 2.4 2.4 0 1.5-1.2 2.5-2.8 2.5-1.4 0-2.3-.6-2.8-1.6l1.6-.7z"/>
      </svg>
    ),
  },
  {
    name: 'HTML5 & Modern CSS',
    category: 'Frontend',
    level: 92,
    status: 'Mastered',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Bootstrap & Tailwind',
    category: 'Frontend',
    level: 82,
    status: 'Proficient',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        <path d="M9 13h4.5a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    name: 'Node.js & Express',
    category: 'Backend & DB',
    level: 75,
    status: 'Proficient',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z" />
        <path d="m12 12 8-4.5" />
        <path d="M12 12v8" />
        <path d="m12 12-8-4.5" />
      </svg>
    ),
  },
  {
    name: 'MySQL & Relational DBs',
    category: 'Backend & DB',
    level: 72,
    status: 'Proficient',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Workflow',
    level: 88,
    status: 'Advanced',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 9v12" />
        <path d="M18 9a9 9 0 0 0-9 9" />
      </svg>
    ),
  },
  {
    name: 'UI/UX & Wireframing',
    category: 'Tools & Workflow',
    level: 80,
    status: 'Proficient',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'Vite & Modern Tooling',
    category: 'Tools & Workflow',
    level: 84,
    status: 'Advanced',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Graphic Design & AI Media',
    category: 'Tools & Workflow',
    level: 86,
    status: 'Advanced',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        <path d="M14 7h4" />
        <path d="M16 5v4" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [ref, visible] = useScrollAnimation(0.15);
  const [activeCategory, setActiveCategory] = useState('All');
  const [journeyTime, setJourneyTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /* Calculate coding journey since May 28, 2021 */
  useEffect(() => {
    const startDate = new Date('2021-05-28T00:00:00');

    const updateClock = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();

      const totalSeconds = Math.floor(diffMs / 1000);
      const seconds = totalSeconds % 60;
      const totalMinutes = Math.floor(totalSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const totalDays = Math.floor(totalHours / 24);

      const years = Math.floor(totalDays / 365.25);
      const remainingDays = Math.floor(totalDays % 365.25);
      const months = Math.floor(remainingDays / 30.4375);
      const days = Math.floor(remainingDays % 30.4375);

      setJourneyTime({ years, months, days, hours, minutes, seconds });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        <div className={`skills__header animate-on-scroll${visible ? ' visible' : ''}`}>
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested stack spanning client-side reactivity, backend integration, and aesthetic interface design.
          </p>
        </div>

        {/* Live Coding Journey Banner */}
        <div className={`skills__journey-card glass-card animate-on-scroll${visible ? ' visible' : ''}`}>
          <div className="skills__journey-left">
            <div className="skills__journey-badge">
              <span className="skills__journey-pulse" />
              LIVE JOURNEY TRACKER
            </div>
            <h3 className="skills__journey-title">Coding Continuously Since May 28, 2021</h3>
            <p className="skills__journey-sub">
              Every day dedicated to learning modern algorithms, interface engineering, and software craftsmanship.
            </p>
          </div>

          <div className="skills__journey-ticker">
            <div className="ticker-col">
              <span className="ticker-val gradient-text">{journeyTime.years}</span>
              <span className="ticker-lbl">Years</span>
            </div>
            <span className="ticker-colon">:</span>
            <div className="ticker-col">
              <span className="ticker-val gradient-text">{journeyTime.months}</span>
              <span className="ticker-lbl">Months</span>
            </div>
            <span className="ticker-colon">:</span>
            <div className="ticker-col">
              <span className="ticker-val gradient-text">{journeyTime.days}</span>
              <span className="ticker-lbl">Days</span>
            </div>
            <span className="ticker-colon">:</span>
            <div className="ticker-col">
              <span className="ticker-val gradient-text">
                {String(journeyTime.hours).padStart(2, '0')}:{String(journeyTime.minutes).padStart(2, '0')}:{String(journeyTime.seconds).padStart(2, '0')}
              </span>
              <span className="ticker-lbl">Live Ticker</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`skills__filters animate-on-scroll${visible ? ' visible' : ''}`}>
          {skillCategories.map(cat => (
            <button
              key={cat}
              className={`skills__filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card glass-card animate-on-scroll${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="skill-card__header">
                <div className="skill-card__icon">{skill.icon}</div>
                <div className="skill-card__meta">
                  <h4 className="skill-card__name">{skill.name}</h4>
                  <span className="skill-card__category">{skill.category}</span>
                </div>
                <span className="skill-card__percent">{skill.level}%</span>
              </div>

              <div className="skill-card__track">
                <div
                  className="skill-card__fill"
                  style={{ width: visible ? `${skill.level}%` : '0%' }}
                />
              </div>

              <div className="skill-card__footer">
                <span className="skill-card__status-dot" />
                <span className="skill-card__status">{skill.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
