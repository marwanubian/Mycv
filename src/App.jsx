import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Components/Home";
import About from "./Components/About";
import Mywork from "./Components/My-work";
import Footer from "./Components/Footer";
import Mycontact from "./Components/My-contact";
import Nav from "./Components/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="container mt-2 pt-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Mywork />} />
            <Route path="/contact" element={<Mycontact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;