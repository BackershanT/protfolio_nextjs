import { motion } from 'framer-motion';
import styles from './AboutSection.module.css'; 
export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className={styles.aboutSection}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className={styles.heading}>About Me</h3>
      <p className={styles.paragraph}>
        I’m a passionate frontend developer with a strong foundation in flutter, React, and modern web technologies. I enjoy crafting beautiful, responsive, and accessible websites that make an impact.
      </p>
    </motion.section>
  );
}
