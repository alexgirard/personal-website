import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import Clock from './Clock';

const Cursor = styled.a`
  cursor: ${props => props.href ? "alias" : "pointer"} !important;
`;

const Info = () => (
  <Row className="navbar-extra">
    Alexandra Girard
    <span className="px-3">⚡</span>
    <span className="pr-4 mr-1">
      <Clock />
    </span>
  </Row>
);

const DropdownSection = ({ openTab, section, info, window })=> (
  <div className="dropdown nav-item" id={`${section}-dropdown`}>
    <a className="nav-link dropdown-toggle" role="button" onClick={() => openTab(window ? window.title : section)}>{section}</a>
    <div className="dropdown-menu">
      {_.map(info, ({ title, name, cmd, link }) => {
        if (name == "line") return <NavDropdown.Divider/>;

        const navProps = link ? { href: link, target: "_blank" } : { onClick: () => openTab(title) };
        return(
          <Cursor className="dropdown-item" role="button" {...navProps}>
              <Row className="justify-content-between py-1">
                <div>{name}</div>
                <>{`⌘${cmd}`}</>
              </Row>
          </Cursor>
        );
      })}
    </div>
  </div>
);

const MenuBar = ({ menuDropdowns, openTab }) => (
  <Navbar expand="lg" className="justify-content-between p-0">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <>{_.map(menuDropdowns, section => <DropdownSection openTab={openTab} {...section} />)}</>
        <Cursor href="mailto:alexgirard999@gmail.com" className="px-3 nav-link">Email</Cursor>
      </Nav>
    </Navbar.Collapse>
    <Info />
  </Navbar>
);

export default MenuBar;
