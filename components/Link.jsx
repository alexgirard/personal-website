import React from 'react';
import styled from 'styled-components';
import NextLink from '../components/NextLink';
import { yellow } from './Styles';

const Decoration = styled.span`
  text-decoration: underline;

  transition: all 0.2s;
  :hover {
    color: ${yellow};
  }
`;

const Link = ({ href, external, children }) => (
  <NextLink href={href} external={external}>
    <Decoration>{children}</Decoration>
  </NextLink>
);

export default Link;
