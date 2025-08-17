// import { motion } from "framer-motion";
// import styles from "./ExperienceSection.module.css";

// const experiences = [
//   {
//     role: "Flutter & React Developer",
//     company: "Tech Solutions Inc.",
//     logo: "/images/tech-solutions.png", // Your logo path in public/images
//     period: "Jan 2023 – Present",
//     description:
//       "Lead the development of cross-platform mobile apps and modern web apps, optimizing performance and enhancing user experience.",
//     skills: ["Flutter", "React.js", "Firebase", "UI/UX"],
//   },
//   {
//     role: "MERN Stack Developer",
//     company: "Creative Web Agency",
//     logo: "/images/creative-web.png",
//     period: "Jun 2021 – Dec 2022",
//     description:
//       "Built scalable web applications with Node.js, Express, React, and MongoDB. Implemented secure authentication and dynamic dashboards.",
//     skills: ["Node.js", "Express", "React", "MongoDB"],
//   },
//   {
//     role: "Junior Web Developer",
//     company: "Startup Labs",
//     logo: "/images/startup-labs.png",
//     period: "Jan 2020 – May 2021",
//     description:
//       "Worked on responsive websites, improving SEO and loading speeds by 40%.",
//     skills: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export default function ExperienceSection() {
//   return (
//     <section className={styles.experienceSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Experience</h2>
//         <div className={styles.timeline}>
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className={styles.timelineItem}
//             >
//               <span className={styles.dot}></span>
//               <div className={styles.card}>
//                 <div className={styles.header}>
//                   <img
//                     src={exp.logo}
//                     alt={`${exp.company} logo`}
//                     className={styles.logo}
//                   />
//                   <div>
//                     <h3 className={styles.role}>{exp.role}</h3>
//                     <p className={styles.company}>{exp.company}</p>
//                   </div>
//                 </div>
//                 <p className={styles.period}>{exp.period}</p>
//                 <p className={styles.description}>{exp.description}</p>
//                 <div className={styles.skills}>
//                   {exp.skills.map((skill, i) => (
//                     <span key={i} className={styles.skill}>
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";

const experiences = [
  {
    role: "Flutter & React Developer",
    company: "Tech Solutions Inc.",
    logo: "/images/tech-solutions.png",
    period: "Jan 2023 – Present",
    description:
      "Lead the development of cross-platform mobile apps and modern web apps, optimizing performance and enhancing user experience.",
    skills: ["Flutter", "React.js", "Firebase", "UI/UX"],
  },
  {
    role: "MERN Stack Developer",
    company: "Creative Web Agency",
    logo: "/images/creative-web.png",
    period: "Jun 2021 – Dec 2022",
    description:
      "Built scalable web applications with Node.js, Express, React, and MongoDB. Implemented secure authentication and dynamic dashboards.",
    skills: ["Node.js", "Express", "React", "MongoDB"],
  },
  {
    role: "Junior Web Developer",
    company: "Startup Labs",
    logo: "/images/startup-labs.png",
    period: "Jan 2020 – May 2021",
    description:
      "Worked on responsive websites, improving SEO and loading speeds by 40%.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className={styles.experienceSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={styles.timelineItem}
            >
              <span className={styles.dot}></span>
              <div className={styles.card}>
                <div className={styles.header}>
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={styles.logo}
                  />
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
