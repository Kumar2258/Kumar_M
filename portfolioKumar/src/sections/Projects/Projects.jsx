import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Kumar2258/AI-Enabled-Water-well-Predictor-"
          h3="AquaSage"
          p="AI Enabled Water Well Detector"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Kumar2258/Docker-Automation-Using-Python"
          h3="Docker Pilot"
          p="Docker Automation Using Python"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Kumar2258/QuizSpark"
          h3="QuizSpark"
          p="Quiz Platform Using Java Swing"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Kumar2258/Finger-Counter-using-Hand-Tracking-Computer-Vision"
          h3="FingerCounter"
          p="Finger Counter Using Hand Tracking"
        />
      </div>
    </section>
  );
}

export default Projects;