
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
    >
      &copy; {new Date().getFullYear()} Backershan.T  All rights reserved.
    </motion.footer>
  );
}
