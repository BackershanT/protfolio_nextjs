import Image from 'next/image';
import styles from './HeroSection.module.css';

const skills = [
  { src: '/flutter.png', alt: 'Flutter', className: styles.butterfly1, size: 20 },
  { src: '/react.png', alt: 'React', className: styles.butterfly2, size: 20},
  { src: '/node.png', alt: 'Node.js', className: styles.butterfly3, size: 20 },
  { src: '/mongo.png', alt: 'MongoDB', className: styles.butterfly4, size: 20 },
  { src: '/html.png', alt: 'HTML', className: styles.butterfly5, size: 20 },
  { src: '/css.png', alt: 'CSS', className: styles.butterfly6, size: 20 },
  { src: '/adobe.png', alt: 'Adobe XD', className: styles.butterfly7, size: 20 },
  { src: '/adobeillustration.png', alt: 'Adobe Illustrator', className: styles.butterfly8, size: 20 },
  { src: '/express.png', alt: 'Express.js', className: styles.butterfly9, size: 20 },
  { src: '/figma.png', alt: 'Figma', className: styles.butterfly10, size: 20 },
  { src: '/firebase.png', alt: 'Firebase', className: styles.butterfly11, size: 20 },
  { src: '/python.png', alt: 'Python', className: styles.butterfly12, size: 20 },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/profile.png"
          alt="Profile"
          width={160}
          height={160}
          className={styles.profileImage}
        />

        {/* Scattered icons */}
        {skills.map((skill, index) => (
          <div key={index} className={`${styles.butterfly} ${skill.className}`}>
            <Image src={skill.src} alt={skill.alt} width={skill.size} height={skill.size} />
          </div>
        ))}
      </div>

      <h2 className={styles.title}>Hi, I'm Backershan T</h2>
      <p className={styles.subtitle}>
        A passionate developer building awesome web experiences.
      </p>
    </section>
  );
}
