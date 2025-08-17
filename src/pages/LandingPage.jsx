// LandingPage.jsx
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to Plantopia</h1>
        <p>Your curated source for beautiful, low-maintenance plants.</p>
        <Link to="/products" className={styles.cta}>Browse Plants</Link>
      </section>
    </main>
  );
}

export default LandingPage;