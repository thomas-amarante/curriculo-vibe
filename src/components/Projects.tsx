import { motion } from 'framer-motion';
import { projects } from '../data';
import styles from './Projects.module.css';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.links}>
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github /></a>}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink /></a>}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
