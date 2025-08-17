"use client";
import { useRef } from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, isCenter }) {
    const cardRef = useRef(null);
const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // up/down tilt
    const rotateY = ((x - centerX) / centerX) * 10; // left/right tilt

    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };
   return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isCenter ? styles.centerCard : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.frameworks}>
        {Array.isArray(project.frameworks) &&
          project.frameworks.map((fw, idx) => (
            <img
              key={idx}
              src={fw}
              alt="framework"
              className={styles.frameworkIcon}
            />
          ))}
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className={styles.platforms}>
        Available on: {project.platforms?.join(", ")}
      </p>
    </div>
  );
}