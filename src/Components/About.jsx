import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  // { name: "Node.js", level: 70 },
  { name: "UI/UX Design", level: 75 },
  { name: "Git", level: 80 },
];

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-5">
            <span className="text-primary">About</span> Me
          </h2>
          
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h3 className="mb-4">Who I Am</h3>
              <p className="lead">
                Passionate junior developer with 1+ years of experience building web applications.
              </p>
              <p>
                I specialize in creating responsive, user-friendly interfaces with clean code.
                My journey in web development started with a curiosity about how websites work,
                and it has grown into a passion for creating digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me learning new technologies,
                contributing to open source, or sharing knowledge with other developers.
              </p>
              
              <div className="mt-4">
                <a href="#" className="btn btn-outline-primary me-2">
                  Download CV
                </a>
                <a href="#contact" className="btn btn-primary">
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <h3 className="mb-4">My Skills</h3>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="skill-item mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <ProgressBar percentage={skill.level} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}