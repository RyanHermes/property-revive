import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image src="/pr_name.svg" alt="logo" width={500} height={300} />
        <div className={styles.headerRight}>
          <a className={styles.active} href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className={styles.intro}>
        <Image src="/pr_logo.svg" alt="logo" width={500} height={300} />
        <div className={styles.introRight}>
          <h1>Website Coming Soon</h1>
          <p>Service Near You</p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>&copy; 2024 Property Revive</p>
      </div>
    </main>
  );
}