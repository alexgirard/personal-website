import styled from 'styled-components';

export const yellow = '#ffd600';

export const responsiveSizes = {
  largeScreen: 1440,
  smallScreen: 1024,
  tablet: 768,
  smallTablet: 600,
  largeMobile: 425,
  smallMobile: 375
};

export const Spacer = styled.div`
  flex: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.justify || 'flex-start'};
`;

export const LineWrapper = styled.div`
  border-top: ${props => !props.hideLine && '1px solid rgb(196, 196, 196)'};
  padding: ${props => props.hideLine ? 4 : 8}rem 0 8rem;
  width: 100%;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 4rem 0;
  }
`;

export const TextBreak = styled.div`
  padding: ${props => props.size*0.8 || 0.8}rem;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: ${props => props.size ? 0.4 : 0.2}rem;
  }
`;
