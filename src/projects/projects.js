import React, { Component } from 'react';
import './projects.css';
import slangpic from '../images/slanguage1.png';
import bloompic from '../images/bmhci4.png';
import diagpic from '../images/wd-diagnomics.png';
import amfpic from '../images/amf1.png';
import applepic from '../images/apple-4.png';

class Projects extends Component {
    render() {
        return (
        <div className="pj">
            <a href="./apple">
            <div className="single-proj5">
            <img className="slang-pic" src={applepic} />
            </div>
            </a>
            <a href="./diagnomics">
            <div className="single-proj4">
            <img className="slang-pic" src={diagpic} />
            </div>
            </a>
        <a href="./bloomberg">
            <div className="single-proj1">
            <img className="slang-pic" src={bloompic} />
            </div>
            </a>
            {/* <p>Bloomberg: Machine Learning Experiment Management Platform</p> */}
            <a href="./slanguage">
            <div className="single-proj2">
                <img className="slang-pic" src={slangpic} />
            </div>
            </a>
            {/* <p>Slanguage: Language translator extension</p> */}
            <a href="./amf">
            <div className="single-proj3">
                <img className="slang-pic" src={amfpic} />
            </div>
            </a>
            {/* <p>Slanguage: Language translator extension</p> */}
        </div>
        );
        
    }
}

export default Projects;