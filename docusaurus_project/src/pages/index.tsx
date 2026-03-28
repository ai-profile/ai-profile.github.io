import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

type CardProps = {
  icon: string;
  title: string;
  description: string;
  to: string;
  label: string;
};

function ContentCard({icon, title, description, to, label}: CardProps): ReactNode {
  return (
    <Link to={to} className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <span className="card-arrow">{label} →</span>
    </Link>
  );
}

const CARDS: CardProps[] = [
  {
    icon: '🔬',
    title: 'Research',
    description:
      'Deep technical investigations — PDF extraction pipelines, OCR engines, accuracy benchmarks and engineering trade-offs.',
    to: '/docs/research/pdf-extraction-research',
    label: 'Read research',
  },
  {
    icon: '💡',
    title: 'LinkedIn',
    description:
      'Long-form drafts, refinement iterations and thinking-out-loud posts before they hit the feed.',
    to: '/docs/linkedin/linkedin_post_final_version',
    label: 'Browse posts',
  },
  {
    icon: '📖',
    title: 'All Notes',
    description:
      'The full index — everything organized by topic, searchable and always growing as new things get documented.',
    to: '/docs/intro',
    label: 'Open index',
  },
];

function HeroSection(): ReactNode {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Personal Knowledge Base
        </div>

        <h1 className="hero-title">
          Engineering notes &amp;{' '}
          <span className="hero-title-gradient">research</span>
        </h1>

        <p className="hero-subtitle">
          A curated collection of technical deep-dives, research findings, and
          engineering insights — built in the open.
        </p>

        <div className="hero-cta">
          <Link className="btn-primary" to="/docs/intro">
            Browse Notes
          </Link>
          <Link
            className="btn-secondary"
            href="https://github.com/ai-profile/ai-profile.github.io"
          >
            View on GitHub
          </Link>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Research docs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">LinkedIn posts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Ideas explored</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardsSection(): ReactNode {
  return (
    <section className="cards-section">
      <div className="section-header">
        <span className="section-label">Explore</span>
        <h2 className="section-title">What you'll find here</h2>
      </div>
      <div className="cards-grid">
        {CARDS.map((card) => (
          <ContentCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Engineering notes, research and insights — a personal knowledge base built in the open."
    >
      <HeroSection />
      <CardsSection />
    </Layout>
  );
}
