import React from 'react';

import styles from './error.jsxcss';

import NextLink from '../components/NextLink';
import HomeSymbol from '../components/HomeSymbol';

const Dance = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol />
    <section>
      <div className="module center-div">
        <h2>⚠️ Page Not Found ⚠️</h2>
        <p>Sorry, we couldn't find that page!</p>
        <NextLink href="/" classes="home-link">return to homepage</NextLink>
      </div>
    </section>
  </React.Fragment>
);

export default Dance;
