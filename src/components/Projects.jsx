import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
    id: 'sweat-hard-gym',
    title: 'Sweat Hard Fitness Gym',
    category: 'UI & Landing Page',
    status: 'published',
    statusBadge: '🟢 Live Project',
    image: '/project-gym.png',
    desc: 'Bold fitness club web advertisement and promotional landing page featuring high-contrast red & dark aesthetics, membership services, interactive training programs, and responsive UI components.',
    features: [
      'Custom high-contrast dark & red branding theme',
      'Interactive member login & registration modal',
      'Responsive navigation menu with mobile drawer',
      'Structured workout programs & product showcase',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://johnls2.github.io/Gym-Advertisement/',
    githubUrl: 'https://github.com/JohnLS2/Gym-Advertisement',
  },
  {
    id: 'job-access-app',
    title: 'Job ACcess App',
    category: 'Mobile Application • Flutter & Dart',
    status: 'unpublished',
    statusBadge: '🔒 Unpublished • In Progress',
    image: '/project-job-access-app.png',
    slogan: 'Connecting Angeles City to the Future',
    desc: 'Official mobile application dedicated to connecting Angeles City job seekers with local and regional employment opportunities. Designed with Flutter for a fast, native mobile experience with streamlined applicant profiles and job search.',
    features: [
      'Angeles City focused local employment matching',
      'Cross-platform mobile architecture with Flutter & Dart',
      'Applicant authentication, profile & credentials hub',
      'Real-time application status tracking & notifications',
    ],
    tags: ['Flutter', 'Dart', 'Mobile UI/UX', 'REST API'],
    liveUrl: null,
    githubUrl: null,
    statusNote: 'Currently in active development & pre-oral defense phase for Angeles City.',
  },
  {
    id: 'job-access-employer',
    title: 'Job ACcess — Employer Portal',
    category: 'Recruitment Web Platform • React',
    status: 'unpublished',
    statusBadge: '🔒 Unpublished • In Progress',
    image: '/project-job-access-web.png',
    slogan: 'Find your next great hire',
    desc: 'Dedicated enterprise hiring and talent acquisition web portal for employers in Angeles City. Empowers local businesses to publish openings, review candidate submissions, and connect directly with qualified applicants.',
    features: [
      'Fast job posting wizard & vacancy management',
      'Applicant credential inspection & intake pipeline',
      'Angeles City commercial recruitment integration',
      'Modern responsive web interface built with React',
    ],
    tags: ['React.js', 'Vite', 'Modern CSS', 'Employer Portal'],
    liveUrl: null,
    githubUrl: null,
    statusNote: 'Currently in active development & internal staging testing.',
  },
];

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'published', label: 'Published / Live' },
  { id: 'unpublished', label: 'In Progress (Unpublished)' },
];

export default function Projects() {
  const [ref, visible] = useScrollAnimation(0.1);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true;
    return p.status === activeFilter;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        <div className={`projects__header animate-on-scroll${visible ? ' visible' : ''}`}>
          <div className="projects__header-text">
            <span className="section-label">Selected Works</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Live production deployments alongside upcoming applications currently under active development.
            </p>
          </div>

          <div className="projects__filter-tabs">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`projects__filter-btn${activeFilter === tab.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card glass-card animate-on-scroll${visible ? ' visible' : ''}${project.status === 'unpublished' ? ' project-card--unpublished' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image Thumbnail */}
              <div
                className="project-card__image-wrap"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__image-overlay">
                  <span className="project-card__view-label">Quick Preview 🔍</span>
                </div>
                <span className={`project-card__badge project-card__badge--${project.status}`}>
                  {project.statusBadge}
                </span>
              </div>

              {/* Card Body */}
              <div className="project-card__content">
                <div className="project-card__category-row">
                  <span className="project-card__category">{project.category}</span>
                </div>

                <h3 className="project-card__title">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    <span onClick={() => setActiveModalProject(project)} className="project-card__title-clickable">
                      {project.title}
                    </span>
                  )}
                </h3>

                <p className="project-card__desc">{project.desc}</p>

                {project.statusNote && (
                  <div className="project-card__status-banner">
                    <span className="project-card__status-icon">ℹ️</span>
                    <span>{project.statusNote}</span>
                  </div>
                )}

                <div className="project-card__tags">
                  {project.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.status === 'published' ? (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary project-card__btn"
                      >
                        Live Website
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline project-card__btn-outline"
                        aria-label="GitHub Repository"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn btn-outline project-card__btn-unpublished"
                        onClick={() => setActiveModalProject(project)}
                      >
                        <span>🔒 In Development</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary project-card__btn"
                        onClick={() => setActiveModalProject(project)}
                      >
                        Preview UI 🔍
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal preview */}
        {activeModalProject && (
          <div className="project-modal" onClick={() => setActiveModalProject(null)}>
            <div className="project-modal__content glass-card" onClick={e => e.stopPropagation()}>
              <button
                className="project-modal__close"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="project-modal__image"
              />

              <div className="project-modal__body">
                <div className="project-modal__meta-top">
                  <span className="project-card__category">{activeModalProject.category}</span>
                  <span className={`project-card__badge project-card__badge--${activeModalProject.status}`}>
                    {activeModalProject.statusBadge}
                  </span>
                </div>

                <h3 className="project-modal__title">{activeModalProject.title}</h3>
                <p className="project-modal__desc">{activeModalProject.desc}</p>

                {activeModalProject.statusNote && (
                  <div className="project-modal__status-banner">
                    <strong>⚠️ Status Notice:</strong> {activeModalProject.statusNote}
                  </div>
                )}

                <h4 className="project-modal__subheading">Key Architecture & Features:</h4>
                <ul className="project-card__features">
                  {activeModalProject.features.map(f => (
                    <li key={f} className="project-card__feature-item">
                      <span className="project-card__feature-icon">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-card__tags">
                  {activeModalProject.tags.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="project-modal__footer">
                  {activeModalProject.liveUrl ? (
                    <>
                      <a
                        href={activeModalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Open Live Project ↗
                      </a>
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        View Source on GitHub
                      </a>
                    </>
                  ) : (
                    <div className="project-modal__dev-note">
                      <span>🚀 Full public release coming soon. Stay tuned!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
