import React from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../components/Styles';
import Link from '../components/Link';
import '../main.scss';

const ErrorWrapper = styled.div`
  text-align: center;
  margin: 8rem 0;

  & > * {
    padding: 0.5rem 0;
  }
`;

const Error404 = () => (
  <FlexContainer justify="center">
    <ErrorWrapper>
      <h1>⚠️ Page Not Found ⚠️</h1>
      <p>Sorry, we couldn't find that page!</p>
      <Link href="/">Return to homepage</Link>
    </ErrorWrapper>
  </FlexContainer>
);

export default Error404;
