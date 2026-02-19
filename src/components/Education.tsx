import { motion } from 'framer-motion';
import { education } from '../data';
import styles from './Education.module.css';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.title}>Formação Acadêmica</h2>
      <div className={styles.container}>
        {education.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <GraduationCap size={40} color="var(--accent-indigo)" />
            </div>
            <h3 className={styles.institution}>{item.institution}</h3>
            <p className={styles.course}>{item.course}</p>
            <p className={styles.period}>{item.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
