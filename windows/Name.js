import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Window from '../components/Window';

const Image = styled.img`
  max-height: 120px;
  width: auto;
`;

const Name = props => (
  <Window {...props}>
    <Row className="d-flex justify-content-center align-items-center flex-wrap">
      <Image src="/static/word_art.png" alt="name word art" />
    </Row>
  </Window>
);

export default Name;
