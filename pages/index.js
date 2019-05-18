import React from 'react';

import styles from './index.jsxcss';

import NextLink from '../components/NextLink';
import HomeSymbol from '../components/HomeSymbol';

const Index = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol />
    <section>
      <div className="module">
        <div className="text-row name">
          <NextLink href="/about" classes="text-link">A l e x a n d r a</NextLink>
          <div className="line name" />
          <NextLink href="/about" classes="text-link">G i r a r d</NextLink>
        </div>

        <div className="text-row mobile-name">
          <NextLink href="/about" classes="text-link">A l e x  &nbsp; G i r a r d</NextLink>
        </div>


        <div className="line divider"/>

        <div className="text-row">
          <NextLink href="/music" classes="text-link">M u s i c</NextLink>
          <div className="line" />
          <NextLink href="/experience" classes="text-link">E x p e r i e n c e</NextLink>
        </div>

        <div className="line divider"/>

        <div className="text-row">
          <NextLink href="/contact" classes="text-link">C o n t a c t</NextLink>
          <div className="line" />
          <div className="divider"/>
          <NextLink href="/dance" classes="text-link">D a n c e</NextLink>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Index;
