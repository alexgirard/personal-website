import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
// import Draggable from 'react-draggable';

import dynamic from 'next/dynamic'

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

const DesktopIcon = ({ title, src, alt, onClick, onDoubleClick }) => (
  <Draggable>
    <IconCursor
      onClick={onClick ? () => onClick(title) : () => {}}
      onDoubleClick={onDoubleClick ? () => onDoubleClick(title) : () => {}}
      className="px-4 py-2 d-flex flex-column justify-content-center align-items-center"
    >
      <Image src={`/static/${src}`} alt={alt} />
      <IconDesc>{title}</IconDesc>
    </IconCursor>
  </Draggable>
);

const Desktop = ({ tabs, clearTabs, openTab }) => (
  <>
    <IconGroup top="3.5rem" className="d-flex flex-column justify-content-between">
      <div>
        {_.map(tabs, tab => <DesktopIcon {...tab} onDoubleClick={openTab} />)}
      </div>
      <div>
        <DesktopIcon title="Clear" src="retro_bomb_icon.png" alt="Clear desktop" onClick={clearTabs} />
        {/* FIXME: Add random photos? */}
        {/* <DesktopIcon title="Trash" src="retro_trash_icon.png" alt="Trash folder" /> */}
      </div>
    </IconGroup>
  </>
);

export default Desktop;
