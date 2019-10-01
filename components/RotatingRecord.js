import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RecordWrapper = styled.div`
  display: inline-block;
  animation: ${rotate} 6s linear infinite;
`;

const RotatingRecord = () => (
  <RecordWrapper>
    <svg viewBox="0 0 8.4666665 10.583333625" height="300px">
      <g transform="translate(0.5,-287.5)">
        <path
          style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'nonzero', stroke: 'none', strokeWidth: 0.26458335}}
          d="m 3.7050781,289.5918 c -1.7519377,0 -3.17578203,1.42384 -3.17578122,3.17578 -8.1e-7,1.75194 1.42384352,3.17383 3.17578122,3.17383 1.7519378,0 3.173829,-1.42189 3.1738281,-3.17383 9e-7,-1.75194 -1.4218903,-3.17578 -3.1738281,-3.17578 z m 0,0.26367 c 1.6089463,0 2.910157,1.30316 2.9101563,2.91211 7e-7,1.60894 -1.30121,2.91015 -2.9101563,2.91015 -1.6089462,0 -2.91211009,-1.30121 -2.91210935,-2.91015 -7.4e-7,-1.60895 1.30316315,-2.91211 2.91210935,-2.91211 z"
        />
        <path
          style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'nonzero', stroke: 'none', strokeWidth: 0.26458335}}
          d="m 3.7050781,291.57617 c -0.6559958,0 -1.1914044,0.53541 -1.1914062,1.19141 -4.4e-6,0.656 0.5354061,1.18945 1.1914062,1.18945 0.655999,0 1.1894576,-0.53345 1.1894531,-1.18945 -1.7e-6,-0.656 -0.5334585,-1.19141 -1.1894531,-1.19141 z m 0,0.26367 c 0.5130036,0 0.9257799,0.41473 0.9257813,0.92774 3.4e-6,0.51301 -0.4127742,0.92578 -0.9257813,0.92578 -0.513008,0 -0.9277378,-0.41277 -0.9277343,-0.92578 1.4e-6,-0.51301 0.4147298,-0.92774 0.9277343,-0.92774 z"
        />
        <path
          style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'nonzero', stroke: 'none', strokeWidth: 0.26458335}}
          d="m 3.7050781,292.17188 c -0.3272149,-10e-6 -0.5957029,0.26848 -0.5957031,0.5957 2e-7,0.32721 0.2684882,0.59375 0.5957031,0.59375 0.3272136,0 0.5937498,-0.26654 0.59375,-0.59375 -2e-7,-0.32722 -0.2665364,-0.5957 -0.59375,-0.5957 z m 0,0.26367 c 0.1842226,0 0.330078,0.14781 0.3300781,0.33203 -1e-7,0.18422 -0.1458555,0.33008 -0.3300781,0.33008 -0.1842234,0 -0.3320311,-0.14586 -0.3320312,-0.33008 1e-7,-0.18423 0.1478078,-0.33203 0.3320312,-0.33203 z"
        />
        <path
          style={{color: 'black', fontSize: 'medium', textDecorationColor: 'black', clipRule: 'nonzero', display: 'inline', overflow: 'visible', opacity: 1, fill: 'black', fillRule: 'nonzero', stroke: 'none', strokeWidth: 0.26458335}}
          d="m 3.1621094,290.58398 a 0.13230489,0.13230489 0 0 0 -0.021484,0.004 c -0.9913556,0.2569 -1.6855495,1.15404 -1.6855469,2.17773 a 0.1328125,0.1328125 0 0 0 0.265625,0 c -2.3e-6,-0.9044 0.6103417,-1.69487 1.4863281,-1.92187 a 0.13230489,0.13230489 0 0 0 -0.044922,-0.25977 z"
        />
      </g>
    </svg>
  </RecordWrapper>
);

export default RotatingRecord;
