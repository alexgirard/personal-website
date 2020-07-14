import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Tab from '../components/Tab';
import MobileIcon from '../components/MobileIcon';

const MobileGrid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: fit-content;
`;

const Tabs = ({ tabs, minimized, expandTab, globalZ, openMobileWindow }) => (
  <>
    {/* Desktop */}
    <Row className="fixed-bottom m-0 flex-wrap-reverse d-none d-sm-flex">
      {_.map(minimized, (title, index) => (
        <Tab
          first={index === 0}
          z={globalZ + _.size(minimized) - index}
          title={title}
          fg={_.get(_.find(tabs, ['title', title]), "fg")}
          expandTab={expandTab}
          key={`tab-${title}`}
        />
      ))}
    </Row>

    {/* Mobile */}
    <MobileGrid className="w-100 m-3 p-3 d-sm-none">
      {_.map(tabs, ({ title, name, src, alt, fg, bg, useFg  }) => (
        <MobileIcon title={title} name={name} src={src} alt={alt} bg={useFg ? fg : bg} onClick={openMobileWindow} key={`tab-mobile-${title}`} />
      ))}
    </MobileGrid>
  </>
);

export default Tabs;