import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundOrbs from "./components/BackgroundOrbs.jsx";
import ParticleField from "./components/ParticleField.jsx";
import Home from "./pages/Home.jsx";
import Classifier from "./pages/Classifier.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-cosmic-gradient font-body text-white">
        <BackgroundOrbs />
        <ParticleField />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-4 pb-16 pt-24 sm:px-8 lg:px-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/classifier" element={<Classifier />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

