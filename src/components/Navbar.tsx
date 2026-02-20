import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'projects', 'experience', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}></div>
        
        <ul className={styles.navLinks}>
          <li>
            <a href="#hero" className={activeSection === 'hero' ? styles.active : ''}>Início</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projetos</a>
          </li>
          <li>
            <a href="#experience" className={activeSection === 'experience' ? styles.active : ''}>Experiência</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Habilidades</a>
          </li>
          <li>
            <a href="#education" className={activeSection === 'education' ? styles.active : ''}>Educação</a>
          </li>
        </ul>

        <div className={styles.rightSection}></div>
      </div>
    </nav>
  );
};

export default Navbar;
