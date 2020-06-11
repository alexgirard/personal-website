import React from 'react';
import styled from 'styled-components';

import { Bars, FgWrapper } from './Window';

const TabWrapper = styled.div`
  background: ${props => props.fg  || 'red'};
  border: 3px solid black;
  border-radius: 0 7px 0 0;
  width: 220px;
  margin-left: ${props => props.first ? 0 : "-5px"};
  margin-bottom: -3px;
  z-index: ${props => props.z};
`;

const Tab = ({ fg, title, z, first, expandTab }) => (
  <TabWrapper fg={fg} className="px-2 py-1" z={z} first={first} >
    <Bars className="justify-content-center">
      <FgWrapper fg={fg} cursor="ne-resize" onClick={() => expandTab(title)}>{title}</FgWrapper>
    </Bars>
  </TabWrapper>
);

export default Tab;