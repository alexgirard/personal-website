import React from 'react';
import PropTypes from 'prop-types';

import '../main.scss';
import styles from './HomeSymbol.jsxcss';

import NextLink from './NextLink';

const HomeSymbol = ({ fill, stroke }) => (
  <NextLink href="/">
    <style jsx>{styles}</style>
    <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 0 68 165" fill-rule="evenodd" clip-rule="evenodd">
      <g stroke={stroke} strokeWidth="2px" >
        <polygon fill={fill} points="0,59 25,0 60,0 40,44 68,44 12,132 31,59 "/>
      </g>
    </svg>
  </NextLink>
);

HomeSymbol.defaultProps = {
  fill: 'black',
  stroke: 'black',
};

HomeSymbol.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default HomeSymbol;
