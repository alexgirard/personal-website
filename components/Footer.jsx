import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { FlexContainer, LineWrapper } from './Styles';

const Footer = ({ children }) => (
  <LineWrapper>
    <FlexContainer justify="center">
      {children}
    </FlexContainer>
  </LineWrapper>
);

export default Footer;
