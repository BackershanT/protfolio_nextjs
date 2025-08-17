"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className={styles.contactSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>

      <div className={styles.contactContainer}>
        
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p>
            📧 <a href="mailto:youremail@example.com">backershan.t@gmail.com</a>
          </p>
          <p>
            📱 <a href="tel:+1234567890">+91 9745638628</a>
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.section>
  );
}
