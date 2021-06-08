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
                  <span className="lh23">As an end-to-end Senior UX designer at Apple, I am closely working with PMs, engineers, and partnering with various teams to design a data visualization platform for big data from manufacturers. Due to an NDA, I cannot reveal too many details, but below are some learnings and thoughts on my experience. Please reach out to me if you're interested in learning more!</span>
                  </div>

        </div>
        <div className="design-div spup">
                  <div className="morewid mauto">
                  <span className="slang-head-1">MY CONTRIBUTIONS</span>
                  <span className="lh23">Our team's goal was simple but challenging: Help manufacturing professionals analyze manufacturing data to improve real time decisions. During my time at Apple, my team was working on incredibly exploratory projects pushing the boundaries of the manufacturing domain. I worked on defining the problem, conducting user research, ideating solutions, driving usability tests, navigating technical constraints, aligning with cross-functional stakeholders and producing high fidelity mockups and prototypes.</span>
                  <br/>
                  <ol>
                    <li className="itemy1">Conduct and synthesize user research to drive ideation, usability and design direction.</li>
                    <li className="itemy1">Identify data visualization specific needs in the data platform and design new solutions.</li>
                    <li className="itemy1">Redesigned the platform to simplify workflows, improve connection with user mental models, and simplify development challenges.</li>
                    <li className="itemy1">Designed MVP for a developer experience to create custom visualizations on the platform.</li>
                    <li className="itemy1">Test and enhance the platform’s user experience.</li>
                  </ol>
                  <span className="lh23">Throughout the project, I was challenged with simplifying complex technical flows, jargon and details into fluent, easy to grasp solutions. The first step to this was to understand our user and the environment they work in. I used numerous sources to gather as much information as possible as I knew this would pay dividends in designing for our user’s perspective. I scoped the project to include three main user groups that stood to gain the most value from our platform. There were times where I had to refocus and rescope, but driving it back to the users I identified allowed me to do so. I collaborated heavily with cross functional stakeholders which helped me view problems with another’s skilled perspective. This was invaluable in the technical manufacturing space.</span>
                  </div>
        </div>
        <div className="design-div spup">
                  <div className="morewid mauto">
                  <span className="slang-head-1">SIDE PROJECTS</span>
                  <span className="lh23">I wanted to maximize my value at Apple and took on a few side projects which enriched my experience there. I worked with another team to design dashboards for executives to manage various lines of businesses at a glance. I regularly contributed to a design system which was used to assimilate experiences throughout Apple.</span>
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
