import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './apple.css';
import D1 from './images/apple-4.png';
import D2 from './images/diagnomics-macbook.png';
import Footer from './footer/footer';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes-2/project-boxes-2';




class Apple extends Component {
  render() {
    return (
      <div className="slang-body"> 
      <div className="App-slang">
        <NavBar />
        <ProjectStart desc="Blank" img={D1}/>
        <ProjectBoxes info={"Designing a data visualization platform."} duration={"October 2020 - Present"} role={"Senior UX Designer"}/>
        </div>

        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-1">SOLVING DATA PROBLEMS FOR MANUFACTURING NEEDS</span>
                  <span className="lh23">As an end-to-end UX designer at Apple, I am closely working with PMs, engineers, and partnering with various teams to create a data visualization platform for big data from manufacturers. Due to an NDA, I cannot reveal too many details, but feel free to contact me to talk about my role and design process!</span>
                  </div>

        </div>
                  <div class="maxw">
        <Footer />
        </div>
        
      
      </div>
    );
  }
}




export default Apple;
