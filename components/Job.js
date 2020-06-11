import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import NextLink from '../components/NextLink';
import Window from '../components/Window';

const Image = styled.img`
  max-height: 110px;
  width: auto;

  :hover {
    transform: translateX(0) scale(1.1);
  }
`;

const Job = ({ link, src, alt, company, role, desc, ...restProps}) => (
  <Window maxWidth="575px" {...restProps}>
    <div className="px-3">
      <Row className="flex-column flex-md-row align-items-md-center">
        <NextLink href={link} external>
          <Image src={src} alt={alt} />
        </NextLink>
        <div className="pl-md-4 pt-3 pt-md-0">
          <h1 className="m-0">
            <NextLink href={link} external>{company}</NextLink>
          </h1>
          <p className="m-0"><u>Role:</u> {role}</p>
        </div>
      </Row>
      <Row className="pt-3">
        <p className="m-0">{desc}</p>
      </Row>
    </div>
  </Window>
);

export default Job;
