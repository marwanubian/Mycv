import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  console.log("Contact component rendered");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="section-title mb-5">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary px-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                <FaPaperPlane className="ms-2" />
              </motion.button>
              
              {submitMessage && (
                <div className="alert alert-success mt-3">
                  {submitMessage}
                </div>
              )}
            </motion.form>
          </div>
          
          <div className="col-lg-6">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="icon-circle bg-primary text-white me-3">
                    <FaMapMarkerAlt />
                  </div>
                  <h5 className="mb-0">Location</h5>
                </div>
                <p>Aswan, Egypt</p>
              </div>
              
              <div className="info-item mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="icon-circle bg-primary text-white me-3">
                    <FaEnvelope />
                  </div>
                  <h5 className="mb-0">Email</h5>
                </div>
                <p>mmhnow1@gmail.com</p>
              </div>
              
              {/* <div className="info-item">
                <div className="d-flex align-items-center mb-2">
                  <div className="icon-circle bg-primary text-white me-3">
                    <FaPhone />
                  </div>
                  <h5 className="mb-0">Phone</h5>
                </div>
                <p>01118495612</p>
              </div> */}
              
              {/* <div className="social-links mt-5">
                <a href="#" className="btn btn-outline-primary me-2">
                  <FaGithub />
                </a>
                <a href="#" className="btn btn-outline-primary me-2">
                  <FaLinkedin />
                </a>
                <a href="#" className="btn btn-outline-primary">
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