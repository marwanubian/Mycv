import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <span className="text-primary">Marwa</span>
              </h1>

              <div className="mb-4" style={{ height: '80px' }}>
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000,
                    'React Developer',
                    1000,
                    'UI/UX Learner',
                    1000,
                    'Web Design Enthusiast',
                    1000
                  ]}
                  wrapper="h2"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1.5em', display: 'inline-block' }}
                />
              </div>

              <p className="lead mb-4">
                I craft modern, responsive websites using HTML, CSS, JavaScript, and React. 
                Passionate about clean UI and building practical user experiences.
              </p>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="btn btn-primary btn-lg px-4"
                >
                  Hire Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/portfolio"
                  className="btn btn-outline-primary btn-lg px-4"
                >
                  My Work
                </motion.a>
              </div>

              {/* <div className="social-links d-flex justify-content-center gap-4 fs-4">
                <a href="https://github.com/marwanubian" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/marwamahmoud1/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
