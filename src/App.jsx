import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import OurClient from "./Components/OurClient";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <OurClient />
        <Section3 />
        <Section4 />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
