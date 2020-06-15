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

const MobileGrid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  height: fit-content;
`;

const WorkApps = ({ workData, openTab }) => _.map(workData, ({ title, name, src, alt }) => (
  <Cursor className="px-3 d-flex flex-column justify-content-center align-items-center" onClick={e => { e.stopPropagation(); openTab(title); }}>
    <Image src={src} alt={alt} />
    <p className="text-white pt-2 mb-0 text-center">{name}</p>
  </Cursor>
));

const Work = ({ workData, openTab, ...restProps }) => (
  <Window {...restProps}>
    {/* Desktop */}
    <Row className="justify-content-center d-none d-sm-flex">
      <WorkApps workData={workData} openTab={openTab} />
    </Row>

    {/* Mobile */}
    <MobileGrid className="d-sm-none">
      <WorkApps workData={workData} openTab={openTab} />
    </MobileGrid>
  </Window>
);

export default Work;
