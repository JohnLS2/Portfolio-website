import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '6+', label: 'Technologies' },
];

export default function About() {
  const [ref, visible] = useScrollAnimation(0.2);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'code'

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        <div className={`about__grid${visible ? ' visible' : ''}`}>
          <div className="about__left">
            <div className="about__visual-card glass-card">
              {/* Window Header with Tabs */}
              <div className="about__card-header">
                <div className="about__code-dots">
                  <span /><span /><span />
                </div>
                <div className="about__card-tabs">
                  <button
                    type="button"
                    className={`about__tab-btn${activeTab === 'profile' ? ' active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Profile Card
                  </button>
                  <button
                    type="button"
                    className={`about__tab-btn${activeTab === 'code' ? ' active' : ''}`}
                    onClick={() => setActiveTab('code')}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    developer.ts
                  </button>
                </div>
              </div>

              {/* Tab 1: Profile View */}
              {activeTab === 'profile' ? (
                <div className="about__profile-view">
                  <div className="about__photo-container">
                    <img
                      src="/profile.jpg"
                      alt="John Leonard Salas"
                      className="about__profile-photo"
                    />
                    <div className="about__photo-overlay">
                      <span className="about__pulse-tag">
                        <span className="about__pulse-dot" /> Available for Opportunities
                      </span>
                    </div>
                  </div>

                  <div className="about__profile-info">
                    <div className="about__profile-header">
                      <h3 className="about__profile-name">John Leonard Salas</h3>
                      <span className="about__profile-title">Computer Science & Full-Stack Developer</span>
                    </div>

                    <div className="about__profile-meta">
                      <div className="about__meta-row">
                        <span className="about__meta-label">Location:</span>
                        <span className="about__meta-value">Angeles City, Pampanga, PH 🇵🇭</span>
                      </div>
                      <div className="about__meta-row">
                        <span className="about__meta-label">Discipline:</span>
                        <span className="about__meta-value">Computer Science</span>
                      </div>
                      <div className="about__meta-row">
                        <span className="about__meta-label">Focus:</span>
                        <span className="about__meta-value">React, UI/UX & Graphic Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Tab 2: Terminal Code View */
                <div className="about__code-block">
                  <pre className="about__code">
{`const developer = {
  name: "John Leonard Salas",
  location: "Angeles City, Pampanga 🇵🇭",
  education: "BS Computer Science",
  passions: [
    "Modern React Architecture",
    "UI/UX & Graphic Design",
    "AI Thumbnails & Image Editing"
  ],
  status: "Open to Internships & Projects",
  learning: "Always leveling up"
};`}
                  </pre>
                </div>
              )}
            </div>
          </div>

          <div className="about__right">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Passionate about building<br />
              <span className="gradient-text">digital experiences</span>
            </h2>
            <p className="section-subtitle">
              I'm a developer based in Angeles City, Pampanga, Philippines — focused on
              crafting clean, user-friendly web applications. I love turning ideas into
              polished products using modern technologies.
            </p>
            <p className="about__detail">
              My journey started with curiosity about how software and websites work and evolved into
              a deep passion for both frontend reactivity and software craftsmanship. I thrive on
              solving real-world problems, writing maintainable code, and creating interfaces that
              people genuinely enjoy using.
            </p>

            <div className="about__stats">
              {stats.map(stat => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-value gradient-text">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
