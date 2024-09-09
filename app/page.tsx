// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to My Landing Page</title>
        <meta name="description" content="A simple landing page built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h1 style={styles.title}>Welcome to My Landing Page</h1>
        <p style={styles.description}>
          This is a basic landing page created using Next.js.
        </p>
        <button style={styles.button}>Get Started</button>
      </main>

      <footer style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        backgroundColor: '#f1f1f1',
        width: '100%',
        position: 'fixed',
        bottom: '0',
      }}>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
}

// Simple inline styles for the components
const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
  description: {
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#f1f1f1',
    width: '100%',
    position: 'fixed',
    bottom: '0',
  },
};
