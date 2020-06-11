import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Window from '../components/Window';

const Cursor = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 77px;
  width: auto;

  :hover {
    transform: translateX(0) scale(1.1);
  }
`;

const Work = ({ workData, openTab, ...restProps }) => (
  <Window bg="#6E32D0" {...restProps}>
    <Row>
      {_.map(workData, ({ title, name, src, alt }) => (
        <Cursor className="px-3 d-flex flex-column justify-content-center align-items-center" onClick={e => { e.stopPropagation(); openTab(title); }}>
          <Image src={src} alt={alt} />
          <p className="text-white pt-2 mb-0 text-center">{name}</p>
        </Cursor>
      ))}
    </Row>
  </Window>
);

export default Work;
