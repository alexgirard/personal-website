import React from 'react';

import styles from './about.jsxcss';

import NextLink from '../components/NextLink';
import HomeSymbol from '../components/HomeSymbol';

const About = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol fill="transparent"/>
    <section>
      <div className="module center-div">
        <h1>A b o u t</h1>
        <div className="side">
          <h1>M e</h1>
          <div className="desc">
            <p>
              Hello <span role="img" aria-label="wave">👋</span> my name is Alexandra Girard I am a 2B
              software engineering student at the University of Waterloo.
            </p>
            <p>
              My passions include
              {' '}
              <NextLink href="/dance" classes="p-link">dance</NextLink>
              ,
              {' '}
              <NextLink href="/music" classes="p-link">music</NextLink>
              ,
              robotics and web development. I am an avid coffee drinker,
              movie lover and romantic at heart.
            </p>
            <p>
              Click
              {' '}
              <NextLink href="/experience" classes="p-link">here</NextLink>
              {' '}
              to see what I've been up to in the past few years.
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default About;
