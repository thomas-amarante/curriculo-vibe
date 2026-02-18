import styles from './Footer.module.css';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
      </div>
      <p>&copy; {year} Thomas Ferreira Amarante. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
