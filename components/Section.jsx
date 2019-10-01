import styled from 'styled-components';
import { FlexContainer, LineWrapper, responsiveSizes } from './Styles';

const Subtitle = styled.div`
  display: inline-block;
  border-top: 2px solid black;
  margin-bottom: 4rem;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    border-top: none;
    border-bottom: 2px solid black;
  }
`;

const BodyContent = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Section = ({ subtitle, hideLine, children }) => (
  <LineWrapper hideLine={hideLine}>
    <Subtitle>
      <h2>{subtitle}</h2>
    </Subtitle>
    <FlexContainer justify="center">
      <BodyContent>
        {children}
      </BodyContent>
    </FlexContainer>
  </LineWrapper>
);

export default Section;
