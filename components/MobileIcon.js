import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 70px;
  width: 70px;
  border-radius: 10px;
  padding: 0.5rem;
  background-color: ${props => props.bg || "#E2717C"};
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25)
`;

const MobileImage = styled.img`
  max-width:100%;
  max-height:100%;
`;

const AppName = styled.span`
  font-size: 15px;
  align-self: center;
`;

const MobileIcon = ({ name, title, src, alt, bg, onClick }) => (
  <div className="d-flex flex-column">
    <Icon bg={bg} onClick={() => onClick(title)}>
      <MobileImage src={src} alt={alt} />
    </Icon>
    {!!name && <AppName className="m-0 text-center text-wrap">{name}</AppName>}
  </div>
);

export default MobileIcon;