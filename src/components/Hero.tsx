import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.heroContent}
      >
        <h1 className={styles.name}>Thomas Ferreira Amarante</h1>
        <p className={styles.title}>Soluções para Datacenter | Infraestrutura física e virtual | Vendas consultivas</p>
      </motion.div>
    </section>
  );
};

export default Hero;
