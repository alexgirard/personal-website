import styled from 'styled-components';
import { FlexContainer, responsiveSizes } from './Styles';

const PaddedFlex = styled(FlexContainer)`
  padding-bottom: ${props => props.bottomPadding ? '5rem' : '0'};

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    display: block;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 auto;
  margin-bottom: auto;
  padding-right: 2rem;
  justify-content: flex-end;
  min-width: 230px;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 0;
  }
`;

const ImageFlex = styled(FlexContainer)`
  justify-content: flex-end;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  flex-shrink: 0;
  width: ${props => props.size || '120px'}
`;

const TextContainer = styled.div`
  flex: 2 1 auto;
  padding-left: 2rem;

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    margin: 2rem 0 0;
    padding: 0;
    text-align: center;
  }
`;

const ImageText = ({ imageSize, imageSrc, bottomPadding, children }) => (
  <PaddedFlex bottomPadding={bottomPadding} justify="space-around">
    <ImageContainer>
      <ImageFlex>
        <Image src={imageSrc} size={imageSize} />
      </ImageFlex>
    </ImageContainer>
    <TextContainer>
      {children}
    </TextContainer>
  </PaddedFlex>
);

export default ImageText;
