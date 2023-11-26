import React from 'react';
import './App.css'; // Import your CSS file

import BioSection from './components/BioSection';
import EducationSection from './components/EducationSection';
import Countdown from './components/Countdown';
import CoursesSection from './components/CoursesSection';
import SkillsSection from './components/SkillsSection';
import FunFactsSection from './components/FunFactsSection';
import MessageForm from './components/MessageForm';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App">
      <header>
        {}
      </header>

      <main>
        
        <BioSection />
        <EducationSection />
        <Countdown />
        <CoursesSection />
        <SkillsSection />
        <FunFactsSection />
        <MessageForm />
        <Slideshow />
        
      </main>

      <footer>
        {}
      </footer>
    </div>
  );
}

export default App;
