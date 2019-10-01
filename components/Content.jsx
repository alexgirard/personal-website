import styled from 'styled-components';
import { FlexContainer, responsiveSizes } from './Styles';

const Body = styled.div`
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 0 2rem;
  }
`;

const Content = ({ children }) => (
  <FlexContainer justify="center">
    <Body>
      {children}
    </Body>
  </FlexContainer>
);

export default Content;
