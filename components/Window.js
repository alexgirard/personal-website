import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
// import Draggable from 'react-draggable';
import { Container, Row } from 'react-bootstrap';

import dynamic from 'next/dynamic';

const Draggable = dynamic(
  () => import('react-draggable'),
  { ssr: false }
);

const WindowOutline = styled.div`
  box-shadow: 0.3rem 0.3rem 0 black;
  background: ${props => props.bg  || 'yellow'};
  border: 3px solid black;
  border-radius: 7px;
  width: fit-content;

  display: ${props => props.minimized || props.closed ? "none" : "block"};
  z-index: ${props => props.globalZ};

  position: fixed;
  top: 50%;
  left: 50%;

  @media (min-width: 768px) {
    max-width: ${props => props.maxWidth || "940px"};
  }

  @media (max-width: 576px) {
    box-shadow: none;
    border: none;
    border-radius: 0;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    overflow-y: scroll;
    width: 100%;
    z-index: 10;
    position: absolute;
  }
`;

const TitleBarOutline = styled.section`
  background: ${props => props.fg  || 'red'};
  border-bottom: 3px solid black;
  border-radius: 3px 3px 0 0;
  position: relative;

  @media (max-width: 576px) {    
    border-radius: 0;
  }
`;

const Bars = styled(Row)`
  background-image: url('/static/three_lines.png');
  background-position: 50% 50%;
  background-repeat: repeat-x;
  margin: 0;
`;

const FgWrapper = styled.span`
  background: ${props => props.fg  || 'red'};
  cursor: ${props => props.cursor};
  padding: 0 0.4rem;
`;

const ControlsWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const DraggableWrapper = styled(Draggable)`
  display: ${props => props.disabled ? "none" : "block"};
`;

const Controls = ({ fg, title, minimizeTab, closeTab, openTab, mobileHistory, setHistory }) => (
  <ControlsWrapper>
    <FgWrapper fg={fg}>
      <button className="d-none d-sm-inline" onClick={() => closeTab(title)}>
        <img src="/static/close.png" alt="close button" />
      </button>
      <button className="d-none d-sm-inline" onClick={() => minimizeTab(title)}>
        <img src="/static/minimize.png" alt="minimize button" className="pl-2 mr-1" />
      </button>
      {!!mobileHistory && (
        <button className="d-sm-none pr-1" onClick={() => { openTab(mobileHistory); setHistory(null); }}>
          <img src="/static/back.png" alt="back button" />
        </button>
      )}
    </FgWrapper>
  </ControlsWrapper>
);

const TitleBar = ({ fg, title, minimizeTab, closeTab, updateZ, openTab, mobileHistory, setHistory })=> (
  <TitleBarOutline fg={fg} className="px-2 py-1 move" onMouseDown={() => updateZ(title)}>
    <Controls fg={fg} title={title} minimizeTab={minimizeTab} closeTab={closeTab} openTab={openTab} mobileHistory={mobileHistory} setHistory={setHistory} />
    <Bars className="justify-content-center">
      <FgWrapper fg={fg}>{title}</FgWrapper>
    </Bars>
  </TitleBarOutline>
);

const Window = ({ bg, minimized, closed, children, maxWidth, globalZ, updateZ, title, ...titlebarProps }) => (
  <>
    {/* Desktop */}
    <div className="d-none d-sm-block">
      <DraggableWrapper handle="section" positionOffset={{x: '-50%', y: '-50%'}}>
        <WindowOutline 
          bg={bg}
          minimized={minimized}
          closed={closed}
          maxWidth={maxWidth}
          globalZ={_.get(globalZ, title)}
          className="p-0"
          onClick={() => updateZ(title)}
        >
          <TitleBar title={title} updateZ={updateZ} {...titlebarProps} />
          <Container className="p-4">
            {children}
          </Container>
        </WindowOutline>
      </DraggableWrapper>
    </div>

    {/* Mobile */}
    <WindowOutline 
        bg={bg}
        closed={closed}
        maxWidth={maxWidth}
        globalZ={_.get(globalZ, title)}
        className="p-0 d-sm-none"
        onClick={() => updateZ(title)}
      >
        <TitleBar title={title} updateZ={updateZ} {...titlebarProps} />
        <Container className="p-4">
          <>{children}</>
        </Container>
      </WindowOutline>
  </>
);

export default Window;

export { Bars, FgWrapper };