import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout title="AI Profile" description="AI Profile & Research Notes">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>AI Profile</h1>
        <p style={{fontSize: '1.5rem', marginBottom: '2rem'}}>Welcome to my personal AI & Tech research notes.</p>
        <Link
          className="button button--primary button--lg"
          to="/notes/docs/intro">
          View Notes
        </Link>
      </main>
    </Layout>
  );
}
