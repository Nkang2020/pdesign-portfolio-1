import React, { Component } from 'react';
import './project-boxes-2.css';

class ProjectBoxes2 extends Component {
  render() {
    return (
        <div className="boxes">
            <div className="box-1">
                <p className="box-title">Info</p>
                <span>{this.props.info}</span>
            </div>
            <div className="box-1">
                <p className="box-title">Duration</p>
                <span>{this.props.duration}</span>
            </div>
            <div className="box-1">
                <p className="box-title">Role</p>
                <span>{this.props.role}</span>
            </div>
        </div>
    );
  }
}

export default ProjectBoxes2;




