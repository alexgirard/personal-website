import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo, responsiveSizes } from './Styles';

const NavContainer = styled(FlexContainer)`
  padding: 2rem;

  @media screen and (max-width: ${responsiveSizes.smallTablet}px) {
    display: block;
    text-align: center;
  }
`;

const Logos = styled.div`
  color: black;
  font-size: 30px;

  a > i {
    padding: 0.4rem;
    transition: all 0.2s;
    :hover {
      color: ${yellow};
    }
  }
`;

const NavBar = () => (
  <NavContainer>
    <NextLink href='/'>
      <h1>Alexandra Girard</h1>
      <p>Software Developer</p>
    </NextLink>
    <Spacer />
    <Logos>
      <NextLink href="mailto:alexgirard999@gmail.com" external><i className="fa fa-envelope-o"/></NextLink>
      <NextLink href="https://open.spotify.com/user/alexgirard9?si=T_2z-4tdR5ilMaWwm60-ZQ" external><i className="fa fa-spotify"/></NextLink>
      <NextLink href="https://www.linkedin.com/alexandra-girard" external><i className="fa fa-linkedin"/></NextLink>
      <NextLink href="https://github.com/alexgirard" external><i className="fa fa-github"/></NextLink>
      <NextLink href="https://docs.google.com/document/d/1LQO5B_lDf3xaVSWZYI2jUqBVWe0w86uSbFnJLtHFEPg/edit?usp=sharing" external><i className="fa fa-file-text-o"/></NextLink>
    </Logos>
  </NavContainer>
);

export default NavBar;
