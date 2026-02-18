import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroContent}
      >
        <h1 className={styles.name}>Thomas Ferreira Amarante</h1>
        <p className={styles.title}>DevOps Engineer | Cloud & Infrastructure Specialist</p>
        <motion.a
          href="#projects"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Veja meus projetos <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
