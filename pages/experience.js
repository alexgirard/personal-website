import React from 'react';

import styles from './experience.jsxcss';

import HomeSymbol from '../components/HomeSymbol';

const Experience = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol fill="#C6C6C6" stroke="#C6C6C6" />
    <section>
      <h1>E x p e r i e n c e</h1>
      <div className="module">
        <h2>E D U C A T I O N</h2>
        <div className="category">
          <div className="job left-override">
            <div className="company">UNIVERSITY OF WATERLOO</div>
            <div className="job-title">SOFTWARE ENGINEERING</div>
            <div className="date">2017-2022</div>
          </div>
        </div>

        <h2>W O R K</h2>
        <div className="category">
          <div className="job">
            <div className="company">PROPERLY</div>
            <div className="job-title">FULL STACK DEVELOPER</div>
            <div className="date">JAN - APR 2019</div>
          </div>
          <div className="job">
            <div className="company">SUN LIFE FINANCIAL</div>
            <div className="job-title">APPLICATIONS DEVELOPER</div>
            <div className="date">MAY - AUG 2018</div>
          </div>
        </div>

        <h2>E X T R A</h2>
        <div className="category">
          <div className="job">
            <div className="company">UW ROBOTICS</div>
            <div className="job-title">TEAM LEAD</div>
            <div className="date">2019</div>
          </div>
          <div className="job">
            <div className="company">UW BIOMECHATRONICS</div>
            <div className="job-title">PROGRAMMER</div>
            <div className="date">2018-2019</div>
          </div>
          <div className="job">
            <div className="company">VEX ROBOTICS</div>
            <div className="job-title">PROGRAMMING LEAD</div>
            <div className="date">2014 - 2017</div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Experience;
