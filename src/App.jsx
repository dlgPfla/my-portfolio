import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Hero />
      <About /> 
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
<div className="bg-red-500 text-white p-10">Tailwind 잘 작동하나요?</div>