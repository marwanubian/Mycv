import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <h5 className="mb-3">Let's Connect</h5>
        
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://github.com/marwanubian" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/marwamahmoud1/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin size={20} />
          </a>
                </div>

        {/* <ul className="list-inline mb-3">
          <li className="list-inline-item"><a href="#home" className="text-white">Home</a></li>
          <li className="list-inline-item"><a href="#about" className="text-white">About</a></li>
          <li className="list-inline-item"><a href="#portfolio" className="text-white">Portfolio</a></li>
          <li className="list-inline-item"><a href="#contact" className="text-white">Contact</a></li>
        </ul> */}

        {/* <p className="mb-1">
          <a href="mailto:mmhnow1@gmail.com" className="text-white">mmhnow1@gmail.com</a>
        </p> */}

        <p className="mb-0">
          Made with <FaHeart className="text-danger" /> by Marwa Mahmoud © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
