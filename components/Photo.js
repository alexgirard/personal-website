import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import ReactPlayer from "react-player";

const OUTLINE_SIZE = '0.5rem';

const PhotoContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhotoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: min-content;
`;

const StyledPhoto = styled.img`
  max-width: ${props => props.maxWidth ? `min(${props.maxWidth}px, 100%)` : '100%'};
  ${props => props.maxHeight ? `max-height: ${props.maxHeight}px;` : ''}
  height: auto;
  overflow: hidden;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const StyledPhotoWithOutline = styled(StyledPhoto)`
  transform: translate3d(${OUTLINE_SIZE}, -${OUTLINE_SIZE}, 0px);
`;

const StyledVideoWithOutline = styled(ReactPlayer)`
  transform: translate3d(${OUTLINE_SIZE}, -${OUTLINE_SIZE}, 0px);
  max-width: ${props => props.maxWidth ? `min(${props.maxWidth}px, 100%)` : '100%'};
  height: auto;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const OutlineTopCorner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-top: ${OUTLINE_SIZE} solid transparent;
  border-bottom: ${OUTLINE_SIZE} solid transparent;
  border-right: ${OUTLINE_SIZE} solid ${props => props.color};
  transform-origin: left center;
  transform: translateY(-${OUTLINE_SIZE}) scale(1);
`;

const OutlineLeft = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: ${props => props.color};
  transform-origin: 0px 100%;
  width: ${OUTLINE_SIZE};
  transform: scaleX(1);
`;

const OutlineBottom = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${props => props.color};
  transform-origin: 0px 100%;
  height: ${OUTLINE_SIZE};
  transform: scaleY(1);
`;

const OutlineBottomCorner = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-left: ${OUTLINE_SIZE} solid transparent;
  border-right: ${OUTLINE_SIZE} solid transparent;
  border-top: ${OUTLINE_SIZE} solid ${props => props.color};
  transform-origin: center bottom;
  transform: translateX(${OUTLINE_SIZE}) scale(1);
`;

const PurePhoto = ({ src, maxWidth }) => <StyledPhoto src={src} maxWidth={maxWidth} />;

const Photo = ({ color, src, maxWidth, maxHeight, video }) => (
  <PhotoContainer>
    <PhotoWrapper>
      <OutlineTopCorner color={color} />
      <OutlineBottomCorner color={color} />
      <OutlineLeft color={color} />
      <OutlineBottom color={color} />
      {!video
        ? <StyledPhotoWithOutline src={src} maxWidth={maxWidth} maxHeight={maxHeight} />
        : <StyledVideoWithOutline url={src} maxWidth={maxWidth}/>
      }
    </PhotoWrapper>
  </PhotoContainer>
);

export default Photo;
export { PurePhoto };