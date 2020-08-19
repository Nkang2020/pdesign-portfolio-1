import React, { Component } from 'react';
import NavBar from './navbar3/nav3';
import SimpleSlider from './slider';
import SimpleSlider2 from './slider2';
import './bloomberg.css';
import Img1 from './images/bmhci4.png';
import Img2 from './images/bloomberg-2.png';
import Img3 from './images/affinity-small.png';
import Img4 from './images/dspanalysis.png';
import Img5 from './images/smmethod-5.png';
import Img6 from './images/mworkflow-1.png';
import Img7 from './images/insight1.png';
import Img8 from './images/insight4.png';
import Img9 from './images/insight3.png';
import Img10 from './images/pretotype.png';
import Img11 from './images/ia2.png';
import Img12 from './images/mscreen1.png';
import Img13 from './images/mscreen2.png';
import Img14 from './images/usability.png';
import Img15 from './images/dsystem.png';
import Img16 from './images/hscreen1.png';
import Img17 from './images/hscreen2.png';
import Tracevid from './images/trace-demo.mov';
import Footer from './footer/footer';
import ProjectStart from './project-start/project-start';
import ProjectBoxes from './project-boxes/project-boxes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class Bloomberg extends Component {
  constructor(props) {
    super(props);
    this.openCity = this.openCity.bind(this);
  }
openCity(evt,cityName) {
  }
  render() {
    return (
      <div className="slang-body"> 
      <div className="App-slang">
        <NavBar />
        <ProjectStart desc="IMPROVING BLOOMBERG’S MACHINE LEARNING MANAGEMENT WORKFLOW BY REDUCING COMPLEXITY" img={Img1}/>
        <ProjectBoxes info={"Bloomberg + Carnegie Mellon Master's of Human Computer Interation Capstone project."} duration={"January 2020 - August 2020, Ongoing"} role={"Product Designer + Technical Lead"} team={"Neha Chopade - Research \n Chi Huang - Research \n Amy Lu - Design \n Danielle Shoshani - PM"}/>
        </div>
        <div className="yellow-div-2">
        <div className="slang-div-2-bloom">
          
          <div className="flex-slang">
          <div class="wid45 bloom-divy">
            <span className="slang-head-1">IMPROVING BLOOMBERG’S MACHINE LEARNING MANAGEMENT WORKFLOW</span>
            <span className="text-1">As technological demands accelerate, machine learning has begun to play an increasingly important role at Bloomberg. Machine learning is being applied to nearly every facet of the business – from data acquisition to real-time news alerts and story generation. However, applying machine learning at scale has created friction around experiment management, thus driving the need to manage this complexity.<br/><br/>My team's goal was to design a platform for managing machine learning experiments and enhance both reproducibility and knowledge sharing to simplify the model training process, allowing for higher success rates of experiments and the delivery of increasingly sophisticated products powered by machine learning.<br/><br/>Check out the custom coded project website I developed and helped design.</span>
            <a className="aremove" href="https://nkang2020.github.io/bloomberg-mhci-site/" target="_blank"><button className="button-1">View Project Website</button></a>
          </div>
          <img className="wid45 b-fix" src={Img2} />
          </div>
        </div>
        </div>
                  <div className="design-div">
                  <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">RESEARCH</span>
                  <span className="lh23">In order to submerge ourselves in the machine learning space, we conducted in-depth primary and secondary research before meeting up with our stakeholders at Bloomberg. This included reviewing literature and interviewing Data Scientists, ML Engineers, and Project Managers.<br/><br/>With a shared machine learning language, we then conducted various research methods to try to understand and visualize where the biggest pain points were for our stakeholders and where we could bring the most value.</span>
                  <a className="aremove" href="https://drive.google.com/file/d/1iUPk7yCYiE1tMnal-OC2oJ7mPEVV6gCX/view?usp=sharing" target="_blank"><button className="button-2">Download Research Report</button></a>
                  </div>
                  <span className="lh23 fsize20 sub-header mtop150">RESEARCH GOALS</span>
                  <div className="numero-div-out">
                  <div className="flex numero-div upy2">
                        <div>
                        <span className="numero center">1</span>
                        </div>
                        <div className="numero-div-in">
                        <span className="numero-2">Understand the problem space</span>
                        <span>Gain an in-depth understanding of the realm of machine learning through primary research, secondary research, and taking online courses in machine learning.</span>
                        </div>
                  </div>
                  <div className="flex numero-div upy2">
                        <div>
                        <span className="numero">2</span>
                        </div>
                        <div className="numero-div-in">
                        <span className="numero-2">Visualize workflows across teams</span>
                        <span>Map out a master workflow– the “happy path”– and identify where different teams diverge from this.</span>
                        </div>
                  </div>
                  <div className="flex numero-div upy">
                        <div>
                        <span className="numero">3</span>
                        </div>
                        <div className="numero-div-in">
                        <span className="numero-2">Identify pain points and opportunities</span>
                        <span>Pinpoint and quantify pain points in order to target areas where we could have the most impact for product managers and ML engineers.</span>
                        </div>
                  </div>
                  <div className="flex numero-div upy">
                        <div>
                        <span className="numero">4</span>
                        </div>
                        <div className="numero-div-in">
                        <span className="numero-2">Research through design</span>
                        <span>Test out our assumptions and reframe the direction of the project through storyboarding and visual storytelling.</span>
                        </div>
                  </div>
                  
                  </div>
                  <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">DOMAIN KNOWLEDGE</span>
                  <span className="lh23">To better understand our users, we gathered domain knowledge with various methods such as literature reviews, interviews with model users and domain experts, secondary research.  We also conducted competetive analysis to find existing design patterns within the machine learning sector.</span>
                        </div>

                    <SimpleSlider />    
                    <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">FIELD RESEARCH</span>
                  <span className="lh23">We took a trip to Bloomberg’s New York headquarters to meet our spotlight users, the Bloomberg engineers. Through face-to-face interaction, we were better able to immerse ourselves in the space they were working in, empathize with them, and establish rapport. After meeting with more than 50 ML engineers across six teams, we went back to Pittsburgh with pages and pages of notes. Our team came together and ran several interpretation sessions to bounce ideas off of each other and fill in the knowledge gaps.<br/><br/>We color-coded our notes based on the different ML teams for affinity mapping. This made it easier to see which emerging patterns were most prevalent among teams. We were now able to get a preliminary sense of the shared artifacts the teams used, points of divergence for the artifacts, and the challenges they faced.</span>
                        </div>
                        <img className="img3" src={Img3} />
                        <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">CURRENT STATE ANALYSIS</span>
                  <span className="lh23">We took a deeper look into the current software Bloomberg engineers use to run Machine Learning experiments. We analyzed how the engineers complete tasks such as gathering data, running the data and models using GPUs and processing / sharing the results.<br/><br/>In this diagram we give a synthesized analysis of the pain points and opportunities identified from semi-structured interviews, love letter/breakup letters, and surveys. The synthesized findings will drive our design for the future state.</span>
                        </div>
                        <img className="img5" src={Img4} />
                        <div class="flex-div mtop150">
                        <div className="morewid2">
                        <span className="lh23 fsize20 sub-header">REMOTE INTERVIEWS AND SYNTHESIS</span>
                      <span className="lh23">Our research efforts were continued by conducting remote interviews with Bloomberg ML engineers and managers. In order to understand our users more, we developed a participatory research method.<br/><br/>We landed on visual storytelling to create a more tangible, shared understanding of our users’ processes. Users ran through the workflow of a recent experiment while the interviewer captured and reflected feedback in real-time. We found that the ML engineers were much more engaged when actively helping us design their narratives.</span>
                            </div>
                            <img className="img6" src={Img5} />
                        </div>
                        <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">MASTER WORKFLOW</span>
                  <span className="lh23">An indepth view of Bloomberg Machine Learning Engineer’s Master Workflow based on our findings.</span>
                        </div>
                        <img className="img4" src={Img6} />
                        <div className="morewid mauto mtop150">
                    <span className="slang-head-2 fix-m">INSIGHTS</span>
                  <span className="lh23">By utilizing design thinking, we took the research we conducted and produced three main insights to ground design directions.</span>
                        </div>
                        <div className="div-2">
                            <div className="div-2-inside">
                                <span className="insight-bloom">INSIGHT 01</span>
                                <span className="insight-bloom-2">Ineffective tracking leads to further issues in documentation and discoverability.</span>
                                <span className="insight-bloom-3">A lack of tracking support leaves engineer’s to their own devices when deciding which artifacts to track and subsequently the tools used for creating documentation. This in turn creates discoverability issues when engineer’s do not have a centralized documentation system.</span>
                        </div>
                        <div className="div-2-inside">
                            <img className="insight-img" src={Img7} />
                        </div>
                        </div>

                        <div className="div-2">
                            <div className="div-2-inside">
                            <img className="insight-img-2" src={Img8} />
                        </div>
                        <div className="div-2-inside">
                                <span className="insight-bloom">INSIGHT 02</span>
                                <span className="insight-bloom-2">Effective tracking of an experiment is dependent on the individual tracking of three interdependent components being data, code, and results.</span>
                                <span className="insight-bloom-3">In order to improve the reproducibility of an experiment,each component of the process must be tracked. The failure to track a single component prevents reproducibility and sharing of the whole experiment.</span>
                        </div>
                        
                            <img className="insight-img-2-b" src={Img8} />
                        
                        </div>

                        <div className="div-2">
                            <div className="div-2-inside">
                                <span className="insight-bloom">INSIGHT 03</span>
                                <span className="insight-bloom-2">Because of system limitations, machine learning engineers resort to developing their own workarounds to substitute workflow challenges.</span>
                                <span className="insight-bloom-3">Current workarounds can be learned from or integrated into our design to make use of the wealth of knowledge engineer’s possess about the current environment.</span>
                        </div>
                        <div className="div-2-inside">
                            <img className="insight-img-3" src={Img9} />
                        </div>
                        </div>
        

        <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">DESIGN</span>
                  <span className="lh23">Based on our research findings and insights from spring semester, we generated storyboards, low-fidelity mockups, and a high-fidelity prototype to arrive at our final solution, TRACE.<br/><br/>Our final product Trace provides a seamless integration of different tools Bloomberg machine learning engineers do, improving on the three components, tracking, documentation, and discoverability.</span>
        </div>
        <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">STORYBOARDING</span>
                  <span className="lh23">During our initial research phase, we synthesized visions and concepts for making the ML experiment management process simple. We created storyboards to outline some of those initial directions. These were tested with model users to gauge value.</span>
                        </div>

                    <SimpleSlider2 /> 
                    <div className="morewid mauto mtop150">
                    <span className="lh23 fsize20 sub-header">CONCEPT PRETOTYPE</span>
                  <span className="lh23">A pretotype is in between “an abstract idea and proper prototype”. It is different than that of a prototype in its ability to test ideas and their market potential cheaply and easily.<br/><br/>Instead of answering questions such as, can we build it? or will it work as expected?,  a pretotype focuses on answering core need questions such as should we build it at all? Or if we build it, will people buy it and use it? We developed 4 components of the pretotype.</span>
                        </div>
                        <img className="img3 noshadow" src={Img10} />

                        <div className="morewid mauto mtop150">
                      <span className="lh23 fsize20 sub-header">INFORMATION ARCHITECTURE</span>
                      <span className="lh23">After coming up with a list of most valuable pain points to target and the features that would do so, we built off the pretotype by deciding a direction developing an all-in-one machine learning management platform to address tracking, documentation and discoverability issues. Before delving into features, we worked on the information architecture. We iterated over this using tree testing with users to match their mental models with the information architecture.</span>
                        </div>

                        <img className="img5" src={Img11} />

                        <div class="flex-div mtop150 screenfix">
                        <div className="morewid2">
                        <span className="lh23 fsize20 sub-header">MID-FI SCREENS</span>
                      <span className="lh23">After nailing down the information architecture, we created mid-fidelity screens demonstrating various pages’ functions. The Homepage is a hub of the engineers’ projects. The documentation page documents each project’s process from goals to experiments. The runs page is a collection of all the engineers’ runs, and from there, engineers are able to graph them on a runs visualize page.</span>
                      <img className="img5" src={Img12} />
                            </div>
                            <img className="img6 img6fix h100" src={Img13} />
                        </div>

                        <div class="flex-div mtop150 screenfix">
                        <div className="morewid2">
                        <span className="lh23 fsize20 sub-header">USABILITY TESTING</span>
                      <span className="lh23">Our target user (ML engineers) consists of many types– ranging from new team members to team leads. We have identified the four primary user types for our solution, and the goal of this usability test is to have each of these types complete a task specific to their needs. Through this, we hope to understand how effectively the user is able to navigate through various flows by measuring both time and overall comprehension.</span>
                      
                            </div>
                            <img className="img6 h100" src={Img14} />
                        </div>

                        <div className="morewid mauto mtop150">
                      <span className="lh23 fsize20 sub-header">DESIGN SYSTEMS</span>
                      <span className="lh23">We created a design systems to cohesively tie together various components of our product, such as color, typeface, icons, grids, buttons, form fields, menus, and etc. Since we are creating a solution for our client Bloomberg, we wanted to make sure the design aesthetic aligns with Bloomberg’s branding. We took Bloomberg’s current web design systems and incorporated our design of various components based on the established color and typography.</span>
                        </div>

                        <img className="img5" src={Img15} />

                        <div class="flex-div mtop150 screenfix">
                        <div className="morewid2">
                        <span className="lh23 fsize20 sub-header">HI-FI SCREENS</span>
                      <span className="lh23">The push from mid-fidelity to high-fidelity screens were done in iterations based on the usability testing and group discussions. When designing these screens, we considered how the user would best accomplish the main use cases. Also, details such as blank and maximum states were designed for ensure the screens were robust. Each screen had interactions which can be seen in our demo video at the end of the page.</span>
                      <img className="img5" src={Img16} />
                            </div>
                            <div className="morewidy">
                            <img className="img7" src={Img17} />
                            </div>
                            
                        </div>
                        <div className="morewid mauto">
                  <span className="slang-head-2 fix-m">DEMO VIDEO</span>
                  <span className="lh23">The demo video shows Nathan, a Machine Learning engineer use Trace to accomplish four main uses cases, to make tracking, comparing, documenting and discovering work more easy.</span>
        </div>
        <video className="img5" controls>
                <source src={Tracevid} type="video/mp4" />
            </video>
                  </div>
                  <div class="maxw">
        <Footer />
        </div>
        
      
      </div>
    );
  }
}




export default Bloomberg;
