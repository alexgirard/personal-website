import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Window from '../components/Window';

const Cursor = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 63px;
  width: auto;

  :hover {
    transform: translateX(0) scale(1.1);
  }
`;

const Extra = ({ extraData, openTab, ...restProps }) => (
  <Window {...restProps}>
    <Row className="justify-content-center">
      {_.map(extraData, ({ title, name, src, alt }) => (
        <Cursor
          className="px-3 d-flex flex-column justify-content-center align-items-center"
          onClick={e => { e.stopPropagation(); openTab(title); }}
        >
          <Image src={src} alt={alt} />
          <p className="pt-2 mb-0 text-center">{name}</p>
        </Cursor>
      ))}
    </Row>
  </Window>
);

export default Extra;
