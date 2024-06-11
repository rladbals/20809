import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [activeSubContent, setActiveSubContent] = useState('');

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? '' : sectionId);
    setActiveSubContent(''); // Reset sub-content when changing sections
  };

  const toggleSubContent = (subSectionId) => {
    setActiveSubContent(activeSubContent === subSectionId ? '' : subSectionId);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>나의 고등학교 생활</h1>
      </header>
      <nav className="navigation">
        <a onClick={() => toggleSection('grade1')}>1학년</a>
        <a onClick={() => toggleSection('grade2')}>2학년</a>
        <a onClick={() => toggleSection('grade3')}>3학년</a>
      </nav>
      <div className={`content ${activeSection === 'grade1' ? 'active' : ''}`} id="grade1">
        <h2>1학년</h2>
        <div>
          <h3 onClick={() => toggleSubContent('grade1_curricular')}>교과활동</h3>
          <ul className={`sub-content ${activeSubContent === 'grade1_curricular' ? 'active' : ''}`} id="grade1_curricular">
            <li><a onClick={() => toggleSubContent('grade1_korean')}>국어</a></li>
            <li><a onClick={() => toggleSubContent('grade1_english')}>영어</a></li>
            <li><a onClick={() => toggleSubContent('grade1_math')}>수학</a></li>
            <li><a onClick={() => toggleSubContent('grade1_physics')}>물리</a></li>
          </ul>
        </div>
        <div>
          <h3 onClick={() => toggleSubContent('grade1_extracurricular')}>비교과활동</h3>
          <p className={`sub-content ${activeSubContent === 'grade1_extracurricular' ? 'active' : ''}`}>1학년에서의 비교과활동 내용을 작성하세요.</p>
        </div>
        <div>
          <h3>추억</h3>
          <p>1학년에서의 소중한 추억을 공유하세요.</p>
        </div>
      </div>
      <div className={`content ${activeSection === 'grade2' ? 'active' : ''}`} id="grade2">
        <h2>2학년</h2>
        <div>
          <h3 onClick={() => toggleSubContent('grade2_curricular')}>교과활동</h3>
          <ul className={`sub-content ${activeSubContent === 'grade2_curricular' ? 'active' : ''}`} id="grade2_curricular">
            <li><a onClick={() => toggleSubContent('grade2_korean')}>국어</a></li>
            <li><a onClick={() => toggleSubContent('grade2_english')}>영어</a></li>
            <li><a onClick={() => toggleSubContent('grade2_math')}>수학</a></li>
            <li><a onClick={() => toggleSubContent('grade2_physics')}>물리</a></li>
          </ul>
        </div>
        <div>
          <h3 onClick={() => toggleSubContent('grade2_extracurricular')}>비교과활동</h3>
          <p className={`sub-content ${activeSubContent === 'grade2_extracurricular' ? 'active' : ''}`}>2학년에서의 비교과활동 내용을 작성하세요.</p>
        </div>
        <div>
          <h3>추억</h3>
          <p>2학년에서의 소중한 추억을 공유하세요.</p>
        </div>
      </div>
      <div className={`content ${activeSection === 'grade3' ? 'active' : ''}`} id="grade3">
        <h2>3학년</h2>
        <div>
          <h3 onClick={() => toggleSubContent('grade3_curricular')}>교과활동</h3>
          <ul className={`sub-content ${activeSubContent === 'grade3_curricular' ? 'active' : ''}`} id="grade3_curricular">
            <li><a onClick={() => toggleSubContent('grade3_korean')}>국어</a></li>
            <li><a onClick={() => toggleSubContent('grade3_english')}>영어</a></li>
