import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Container from './Container';

const Box = styled(Container)`
  border: 2px solid black;
  background: ${props => props.bg || 'white'};
  max-width: 34em;
  height: 100%;
  padding: ${props => props.p ? props.p : '4em 3.5em'};
  width: ${props => props.width || '100%'};
  ${props => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${props => props.minHeight && `min-height: ${props.minHeight};`}

  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  @media (max-width: 576px) { padding: ${props => props.p === '0em' ? '0em' : '2.5em 2em'}; }

  :hover {
    color: ${props => props.hoverColor || 'black'};
    ${props => props.hoverBg && `background: ${props.hoverBg};`}
  }
`;

const AbsBox = styled(Box)`
  position: absolute;
  left: 14px;
  top: 14px;
  z-index: -1;
  background: ${props => props.bg || 'white'};
`;

const HoverContainer = styled.div`
  &:hover #absbox { ${props => props.hoverBg && `background: ${props.hoverBg};`} }
`;

const frameMargins = { marginRight: '14px', marginBottom: '14px' };

const TextFrame = ({ children, h, hOverride, ...props }) => {
  const { hoverBg } = props;
  return (
    <div style={{ height: h || 'fit-content', ...frameMargins }}>
      <HoverContainer
        className="position-relative"
        style={{
          height: hOverride ? '100%' : `calc(${h} - 14px)` || 'fit-content'
        }}
        hoverBg={hoverBg}
      >
        <Box id="box" {...props}>{children}</Box>
        <AbsBox id="absbox" {...props} />
      </HoverContainer>
    </div>
  );
};

const PictureFrame = ({ bg, fg, maxHeight, hoverBg, children, ...props }) => (
  <div className="h-100" style={frameMargins}>
    <HoverContainer className="h-100 position-relative">
      <Box id="box" bg={fg} {...props}>{children}</Box>
      <AbsBox id="absbox" bg={bg} {...props}/>
    </HoverContainer>
  </div>
);

export default TextFrame;
export { TextFrame, PictureFrame };