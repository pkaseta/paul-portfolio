import HomeSection from "./Components/HomeSection/HomeSection";
import React from 'react'
import AboutSection from "./Components/AboutSection/AboutSection";
import ResumeSection from "./Components/ResumeSection/ResumeSection";
import SkillCarousel from "./Components/SkillsSection/SkillCarousel";
import PortfolioContainer from "./Components/PortfolioSection/PortfolioContainer";
function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <SkillCarousel />
      <PortfolioContainer />
    </div>
  );
}

export default App;
