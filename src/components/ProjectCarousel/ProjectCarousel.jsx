"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectCarousel.module.css";

export default function ProjectCarousel() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = null;
      let closestDistance = Infinity;

      [...container.children].forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    };

    containerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      containerRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="projects"
      className={styles.experienceSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.carousel} ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isCenter={index === centerIndex}
          />
        ))}
      </div>
    </motion.section>
  );
}
