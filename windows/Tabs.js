import React from 'react';
import _ from 'lodash';
import { Row } from 'react-bootstrap';

import Tab from '../components/Tab';

const Tabs = ({ tabs, minimized, expandTab, globalZ }) => (
  <Row className="fixed-bottom m-0 flex-wrap-reverse">
    {_.map(minimized, (title, index) => (
      <Tab first={index === 0} z={globalZ + _.size(minimized) - index} title={title} fg={_.get(_.find(tabs, ['title', title]), "fg")} expandTab={expandTab} />
    ))}
  </Row>
);

export default Tabs;