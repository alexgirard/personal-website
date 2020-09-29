import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import MobileIcon from '../components/MobileIcon';

const Draggable = dynamic(
  () => import('react-draggable'),
  { ssr: false }
);


const Image = styled.img`
  max-height: 77px;
  width: auto;
  max-width: 80px;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  
  :hover {
    transform: translateX(0) scale(1.1);
  }
`;

const IconDesc = styled.p`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const IconGroup = styled.div`
  height: calc(100% - 4rem);
  position: absolute;
  right: 0;
  ${props => props}
`;

const IconCursor = styled.div`
  cursor: pointer;
`;

const MobileHotbar = styled.div`
  border-radius: 24px;
  background: rgba(174,174,178,0.9)
`;

const MobileHome = styled.div`
  text-align: center;
  background-color: #E2717C;
  border-top: 3px solid black;
`;

const DesktopIcon = ({ title, src, alt, onClick, onDoubleClick }) => (
  <Draggable>
    <IconCursor
      onClick={onClick ? () => onClick(title) : () => {}}
      onDoubleClick={onDoubleClick ? () => onDoubleClick(title) : () => {}}
      className="px-4 py-2 d-flex flex-column justify-content-center align-items-center"
    >
      <Image src={src} alt={alt} />
      <IconDesc>{title}</IconDesc>
    </IconCursor>
  </Draggable>
);

const Desktop = ({ tabs, clearTabs, openTab, mobileWindowOpen, openMobileWindow, closeMobileWindow }) => (
  <>
    {/* Desktop */}
    <IconGroup top="3.5rem" className="flex-column justify-content-between d-none d-sm-flex">
      <div>
        {_.map(tabs, tab => <DesktopIcon {...tab} onDoubleClick={openTab} key={`desktop-icon-${tab.title}`} />)}
      </div>
      <div>
        <DesktopIcon title="Clear" src="/static/retro_bomb_icon.png" alt="Clear desktop" onClick={clearTabs} />
        {/* FIXME: Add random photos? */}
        {/* <DesktopIcon title="Trash" src="retro_trash_icon.png" alt="Trash folder" /> */}
      </div>
    </IconGroup>

    {/* Mobile */}
    {!!mobileWindowOpen ? (
      <MobileHome className="py-1" onClick={() => closeMobileWindow()}>HOME</MobileHome>
    ) : (
      <div className="m-3 d-sm-none">
        <MobileHotbar className="px-3 pt-2 pb-1 d-flex justify-content-around">
            {_.map(tabs, tab => <MobileIcon {...tab} name={tab.title} bg={tab.fg} onClick={openMobileWindow} key={`mobile-icon-${tab.title}`} />)}
        </MobileHotbar>
      </div>
    )}
  </>
);

export default Desktop;
