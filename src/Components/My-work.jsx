import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [{
    id: 1,
    title: "E-Commerce Website",
    description: "Full-featured online shopping platform built with React",
    tags: ["react", "javascript", "css", "tailwind", "api","NextJs"],
    image: "/src/assets/ecommerce.png",// ضعي صورة المشروع هنا
    github: "https://github.com/marwanubian/e-commerce-websitee", // لو عندك GitHub repo
    live: "https://e-commerce-websitee-seven.vercel.app/"
  },
  {
    id: 6,
    title: "Game Reviews",
    description: "Full-featured online store with React and Node.js",
    tags: ["bootstrap", "javascript", "api","css"],
    image: "/assets/gamereview.png",
    github: "https://github.com/marwanubian/GameVerse-Next-Gen-Game-Reviews",
    live: "https://marwanubian.github.io/GameVerse-Next-Gen-Game-Reviews/#"
  },{
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data visualization",
    tags: ["javascript", "api", "css", "bootstrap"],
    image: "/assets/weather dashboard.png",
    github: "https://github.com/marwanubian/Weather-Dashboard",
    live: "https://marwanubian.github.io/Weather-Dashboard/"
  },{
    id: 5,
    title: "CV Portfolio",
    description: "CV for a junior frontend developer",
    tags: ["react", "javascript", "api", "css", "bootstrap"],
    image: "/assets/cv.PNG",
    github: "https://github.com/marwanubian/Mycv",
    live: "https://mycv-woad-nine.vercel.app/"
  },
  
  {
    id: 2,
    title: "Smart Log In",
    description: "Productivity app with drag-and-drop functionality",
    tags: ["css", "javascript", "bootstrap"],
    image: "/assets/login.png",
    github: "https://marwanubian.github.io/smart-log-in/",
    live: "https://marwanubian.github.io/smart-log-in/"
  },
  
  {
    id: 4,
    title: "Bookmarker",
    description: "Search and save your favorite recipes",
    tags: ["javascript", "css", "bootstrap"],
    image: "/assets/bookmark.png",
    github: "https://github.com/marwanubian/Bookmarker",
    live: "https://marwanubian.github.io/Bookmarker/"
  },
  
];


const allTags = ["all", ...new Set(projects.flatMap(project => project.tags))];

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeTag === "all"
      ? projects
      : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container">
        <h2 className="section-title mb-5 text-center">
          My <span className="text-primary">Portfolio</span>
        </h2>

        <div className="text-center mb-5">
          <div className="btn-group flex-wrap">
            {allTags.map(tag => (
              <button
                key={tag}
                type="button"
                className={`btn ${activeTag === tag ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-muted text-center">No projects found for "{activeTag}"</p>
        ) : (
          <div className="row g-4">
            {filteredProjects.map(project => (
              <div className="col-md-6 col-lg-4" key={project.id}>
                <motion.div
                  className="portfolio-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="portfolio-image-container position-relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded"
                    />

                    {hoveredProject === project.id && (
                      <motion.div
                        className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 text-white rounded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="overlay-content text-center px-2">
                          <h5 className="mb-2">{project.title}</h5>
                          <p className="mb-3 small">{project.description}</p>
                          <div className="d-flex justify-content-center gap-2">
                            <a
                              href={project.github}
                              className="btn btn-sm btn-light"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub /> Code
                            </a>
                            <a
                              href={project.live}
                              className="btn btn-sm btn-primary"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaExternalLinkAlt /> Live
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="portfolio-caption mt-3 text-center">
                    <h6 className="fw-semibold">{project.title}</h6>
                    <div className="d-flex flex-wrap justify-content-center gap-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="badge bg-secondary text-lowercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
