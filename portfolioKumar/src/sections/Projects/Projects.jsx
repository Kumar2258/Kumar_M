import styles from './ProjectsStyles.module.css';
import news from '../../assets/newsDesigner.png';
import AIWater from '../../assets/AIWater.png';
import Docker from '../../assets/Dockerauto.png';
import Quiz from '../../assets/QuizDesigner.png';
import finger from '../../assets/fingercounter.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={news}
          link="https://github.com/Kumar2258/AI-Enabled-Water-well-Predictor-"
          h3="News-Insight "
          p=" News Research Tool "
        />
        <ProjectCard
          src={AIWater}
          link="https://github.com/Kumar2258/AI-Enabled-Water-well-Predictor-"
          h3="AquaSage"
          p="AI Enabled Water Well Predictor"
        />
        <ProjectCard
          src={Docker}
          link="https://github.com/Kumar2258/Docker-Automation-Using-Python"
          h3="Docker Pilot"
          p="Docker Automation Using Python"
        />
        <ProjectCard
          src={Quiz}
          link="https://github.com/Kumar2258/QuizSpark"
          h3="QuizSpark"
          p="Quiz Platform Using Java Swing"
        />
        <ProjectCard
          src={finger}
          link="https://github.com/Kumar2258/Finger-Counter-using-Hand-Tracking-Computer-Vision"
          h3="FingerCounter"
          p="Finger Counter Using Hand Tracking"
        />
      </div>
    </section>
  );
}

export default Projects;