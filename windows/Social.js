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

  @media (max-width: 576px) {
    text-decoration: underline;
  }
`;

const Social = ({ socialLinks, ...restProps}) => (
  <Window {...restProps}>
    <Row className="px-3 text-center text-white justify-content-center flex-column flex-sm-row">
      {_.map(socialLinks, ({ name, link }) => (
        <h5 className="m-0 py-3 py-sm-0" key={`social-${name}`}>
          <SocialLink href={link} external className="px-2">{name}</SocialLink>
          <span className="d-none d-sm-inline">/</span>
        </h5>
      ))}
      {' '}<SocialLink href="mailto:alexgirard999@gmail.com" external className="px-2 py-3 py-sm-0">Email</SocialLink>
    </Row>
  </Window>
);

export default Social;
