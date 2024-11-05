import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Section from './components/Section';
import Aboutme from './components/Aboutme';
import ProfessionalExp from './components/ProfessionalExp';
import Education from './components/Education';
import Expertise from './components/Expertise';


function App() {
  return (
    <div className="App">
        <Aboutme />
        <Section SectionTitle='Professional Experience'>
          <ProfessionalExp/>
        </Section>
        <Section SectionTitle='Education'>
          <Education />          
        </Section>
        <Section SectionTitle='Expertise'>
          <Expertise />
        </Section>
    </div>
  );
}

export default App;
