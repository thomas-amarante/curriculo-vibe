import { motion } from 'framer-motion';
import { skills } from '../data';
import styles from './Skills.module.css';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.container}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CheckCircle color="var(--accent-indigo)" size={20} />
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
