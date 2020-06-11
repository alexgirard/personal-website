import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import Window from '../components/Window';
import NextLink from '../components/NextLink';

const SocialLink = styled(NextLink)`
  color: #CFCFCF !important;
  cursor: alias;
  :hover {
    color: white !important;
  }
`;

const Social = ({ socialLinks, ...restProps}) => (
  <Window bg="#464646" {...restProps}>
    <Row className="px-3 text-center text-white">
      {_.map(socialLinks, ({ name, link }, index) => (
        <h5 className="m-0">
          <SocialLink href={link} external className="px-2">{name}</SocialLink>
          /
        </h5>
      ))}
      {' '}<SocialLink href="mailto:alexgirard999@gmail.com" external className="px-2">Email</SocialLink>
    </Row>
  </Window>
);

export default Social;
