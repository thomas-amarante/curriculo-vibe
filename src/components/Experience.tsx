import { motion } from 'framer-motion';
import { experience } from '../data';
import styles from './Experience.module.css';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experiência Profissional</h2>
      <div className={styles.timeline}>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <Briefcase color="var(--accent-titanium)" />
            </div>
            <div className={styles.content}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.period}>{item.period}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
