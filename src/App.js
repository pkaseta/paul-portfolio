import HomeSection from "./Components/HomeSection/HomeSection";
import React from 'react'
import AboutSection from "./Components/AboutSection/AboutSection";
import ResumeSection from "./Components/ResumeSection/ResumeSection";
import SkillCarousel from "./Components/SkillsSection/SkillCarousel";
function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <SkillCarousel />
    </div>
  );
}

export default App;
