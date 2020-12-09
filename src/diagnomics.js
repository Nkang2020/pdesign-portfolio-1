import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import './diagnomics.css';
import D1 from './images/wd-diagnomics.png';
import D2 from './images/diagnomics-macbook.png';
import C1 from './images/working-covid.png';
import C2 from './images/geno-final-min.png';
import C3 from './images/UXPersona.png';
import C4 from './images/ia-genomatch.png';
import C5 from './images/website-genomatch-2.png';
import C6 from './images/mvp-genomatch.png';
import C7 from './images/learn3.png';
import C8 from './images/order2.png';
import C9 from './images/activate2.png';
import C10 from './images/track2.png';
import C11 from './images/results1.png';
import Footer from './footer/footer';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes/project-boxes';




class Diagnomics extends Component {
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
            <span className="slang-head-1 bb">INTRODUCING A COVID-19 TESTING PLATFORM TO AN EXISTING GENETIC TESTING SOLUTION</span>
            {/* <span className="text-1 bb"><b>Problem statement:</b></span><br/><br/> */}
            <span className="text-1 bb">Genomatch is an existing genetic testing solution that allows users to test their genes and get specialized reports and treatment plans. I was tasked with introducing and implementing a new COVID-19 subscription testing product to their webpage and web platform. As the sole designer I thought through the user experience, worked with product and engineering to conduct research sessions, planned the roadmap, and created the overall strategy of the product and how it fit into the current genetic testing system.</span>
            {/* <br/><br/><span className="text-1 bb"><b>Solution:</b></span><br/><br/>
            <span className="text-1 bb">The end solution or goal is to have a website and platform that provides an intuitive and smooth experience for users whether they are looking for COVID-19 testing, Genetic solutions or both. One of the main considerations is reducing user cognitive load and feature bloat.</span> */}
            
          </div>
          <img className="wid45 b-fix" src={D2} />
          </div>
        </div>
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m2">THE NEED</span>
                  <span className="lh23">With covid-19 numbers subsiding and regulations relaxing, organizations are looking to bring employees back to work safely. This is a complex task as each employee must be tested and monitored regularly. We planned to utilize Genomatch’s existing infrastructure to deliver and report test results. On top of that, we needed new flows that were highly efficient for users to order, retrieve and and see results on a regular basis.</span>
                  </div>
                  <img className="img3" src={C1} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">HI-FI USER FLOW</span>
                  <span className="lh23">These are high fidelity screens and flows that I designed to solve the problem of getting employees and subscribers regular Covid-19 testing kits and results while also providing genetic testing services.</span>
                  </div>
                  <img className="img3" src={C2} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">MVP</span>
                  <span className="lh23">Getting a product out as soon as possible was essential for Genomatch as COVID-19 concerns would eventually go away and therefore the product’s profit window had a shelf life. Because of this, I took the original site/platform and designed a Minimum Viable Product to release a product to existing customers as soon as possible. This was done at an agile pace and took into account current state, development viability, costs and time.</span>
                  </div>
                  <img className="img3" src={C6} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">EXPLORATION</span>
                  <span className="lh23">With the MVP allowing customers to start purchasing COVID-19 testing subscription, I set out to improve the experience. I conducted competitive research to understand trends and best practices in the space of genetic and covid testing. I also explored secondary domains such as Jira, Trello, and other platforms to better understand how industry leaders onboard users. I made an effort to look outside the box for inspiration. By gaining inspiration and understanding what was working well and how our product differed from the competition, I was able to position genomatch better.</span>
                  </div>
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">THE USER</span>
                  <span className="lh23">A large part of my design process is to understand the user’s perspective. For this project, we have two main user groups with each having a different goal. This posed an interesting challenge for us. Our solution needed to sell to employers, and provide service to the employee. I used personas to align my design process with user goals and better empathize with users. Below is a persona of an employee subscriber.</span>
                  </div>
                  <img className="persona" src={C3} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">INFORMATION ARCHITECTURE</span>
                  <span className="lh23">Before jumping into design, I wanted to understand the current system at a high level and then imagine how I could include covid-19 testing features and ways to improve the user flows. From this method, I was able to reduce redundant flows for the final designs.</span>
                  </div>
                  <img className="img3" src={C4} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">RESPONSIVE WEBSITE REDESIGN</span>
                  <span className="lh23">The project consisted of two parts: the website and the member portal. Our first point of contact with the user is via the website. I redesigned the website to include COVID-19 products and to educate the customer on our value props and how easy to use our service actually is. While designing the website, my goal was to ultimately build a simple path for customer success. The flow I designed was to educate users, compare with competitors, answer questions, then sell. The website redesign looks like this:</span>
                  </div>
                  <img className="img3" src={C5} />
        </div>

        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">FLOWS</span>
                  <span className="lh23">Despite government regulations and health complexities, the experience to learn, obtain, track and get results needed to be seamless. The design addresses this by making it viscerally clear what options there are, what the next steps are, and where the user is in the process. Below are some screens for each flow.</span>
                  </div>
                  
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">LEARN</span>
                  </div>
                  <img className="img3" src={C7} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">ORDER</span>
                  </div>
                  <img className="img3" src={C8} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">ACTIVATE</span>
                  </div>
                  <img className="img3" src={C9} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">TRACK</span>
                  </div>
                  <img className="img3" src={C10} />
        </div>
        <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">RESULTS</span>
                  </div>
                  <img className="img3" src={C11} />
        </div>
                  <div class="maxw">
        <Footer />
        </div>
        
      
      </div>
    );
  }
}




export default Diagnomics;
