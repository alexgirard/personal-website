import React from 'react';

import styles from './dance.jsxcss';

import NextLink from '../components/NextLink';
import HomeSymbol from '../components/HomeSymbol';

const Dance = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol fill="transparent"/>
    <section>
      <div className="module">
        <h2>🚧 Page under construction 🚧</h2>
        <NextLink href="/" classes="home-link">back to home</NextLink>
      </div>
    </section>
  </React.Fragment>
);

export default Dance;
