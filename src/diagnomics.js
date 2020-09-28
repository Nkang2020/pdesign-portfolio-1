import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './diagnomics.css';
import D1 from './images/wd-diagnomics.png';
import D2 from './images/diagnomics-macbook.png';
import I3 from './images/amf3.png';
import I4 from './images/amf4.svg';
import I5 from './images/amf5.svg';
import I6 from './images/amf6.jpeg';
import I7 from './images/amf7.png';
import I8 from './images/amf8.png';
import I9 from './images/amf9.png';
import Footer from './footer/footer';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes/project-boxes';




class Amf extends Component {
  render() {
    return (
      <div className="slang-body"> 
      <div className="App-slang">
        <NavBar />
        <ProjectStart desc="Blank" img={D1}/>
        <ProjectBoxes info={"Designing a COVID-19 and Genetic testing subscription platform."} duration={"August 2020 - Present"} role={"UX/UI Designer"} team={"Kira Lee - Project Manager"}/>
        </div>
        <div className="covid-div">
        <div className="slang-div-2-bloom"> 
          <div className="flex-slang">
          <div class="wid45 bloom-divy">
            <span className="slang-head-1 bb">IMPLEMENTING A COVID-19 TESTING PLATFORM TO AN EXISTING GENETIC TESTING SOLUTION</span>
            <span className="text-1 bb"><b>Problem statement:</b></span><br/><br/>
            <span className="text-1 bb">Genomatch.me is an existing genetic testing solution that allows users to test their genes and get specialized reports and treatment plans. As the lead designer, I was tasked with introducing and implementing a new COVID-19 subscription testing product to their webpage and web platform.</span>
            <br/><br/><span className="text-1 bb"><b>Solution:</b></span><br/><br/>
            <span className="text-1 bb">The end solution or goal is to have a website and platform that provides an intuitive and smooth experience for users whether they are looking for COVID-19 testing, Genetic solutions or both. One of the main considerations is reducing user cognitive load and feature bloat.<br/><br/>So far, I have redesigned the existing webpage to reflect a modern/health conscious image, created a design system for the website and web platform, conducted current state analysis and competitor research, developed the information architecture of the new web platform and conducted user research. I am currently working on designing screens and conducting usability tests.</span>
            
          </div>
          <img className="wid45 b-fix" src={D2} />
          </div>
        </div>
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">RESEARCH AND DESIGN COMING</span>
                  </div>

        </div>
                  <div class="maxw">
        <Footer />
        </div>
        
      
      </div>
    );
  }
}




export default Amf;
