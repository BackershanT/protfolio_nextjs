import Head from 'next/head';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import styles from '../components/Header/Header.module.css';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';


export default function Home() {
  return (
    <>
      <Head>
        <title>Backershan</title>
        <meta name="description" content="My awesome portfolio built with Next.js" />
      </Head>

      <div className={styles.pageWrapper}>
        <Header />
        <main className={`${styles.container} ${styles.mainContent}`}>
          <HeroSection />
          <AboutSection />
                <ExperienceSection />
<ProjectCarousel/>
          
        
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
