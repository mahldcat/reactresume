import React from 'react';
import { useLocation } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Section from './components/Section';
import Aboutme from './components/Aboutme';
import ProfessionalExp from './components/ProfessionalExp';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Menu from './components/Menu';

function App() {

  // Access the current location object
  const location = useLocation();

  // Create a URLSearchParams instance to parse the query string
  const queryParams = new URLSearchParams(location.search);

  // Get specific parameters from the query string
  const withMenu = queryParams.get('withMenu');

  return (
    <div className="App">
        {(withMenu && <Menu/>)}
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