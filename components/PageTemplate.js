import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';

import Link from './NextLink';
import Heading from './Heading';

import { menuItems, menuLinks } from '../util/constants';

const Logo = styled(Heading)`
  :hover {
    color: white;
    -webkit-text-stroke: 1px black;
    text-shadow: 1px 1px 0cpx #000000;
    paint-order: stroke fill;
  }
`;

const CollapsedNav = styled.div`
  // transform: translateY(0px) translateX(0px);
  // transition: transform 400ms ease 0s;
  transition: ease height .3s; /* <--- ease in */

  // top: 0px;
  overflow: hidden;
  z-index: 1;
`;

const Item = styled.div`
  border: ${props => `2px solid ${props.active ? 'black' : 'white'}`};
  padding: 0.25em 0.75em;

  :hover {
    text-decoration: underline;
  }
`;

const MenuItem = props => <Item active={props.active}><h6>{props.children}</h6></Item>;

const PageTemplate = ({ curPage, children }) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleFunc = React.useCallback(() => setToggle(!toggle));

  return ( 
    <>
      {/* Mobile */}
      {/* <div className="d-flex d-sm-none w-100 h-100">
        
      </div> */}
      
      {/* Desktop */}
      <div className="d-block w-100 h-100 border border-dark border-2 overflow-scroll">
        <div className="d-flex position-relative">
          <div className="px-4 border border-dark border-2 border-top-0 
            border-start-0 d-flex align-items-center">
            <Link href={menuLinks.Home} noUnderline>
              <Logo fontFamily="Manier" tag="h3">
                AG
              </Logo>
            </Link>
          </div>
          {/* Mobile Navigation */}
          <div className="d-flex flex-grow-1 d-md-none border-bottom border-dark border-2" />
          <div className="d-flex d-md-none h-100 justify-content-end border-start border-bottom border-dark border-2">
            <Hamburger toggled={toggle} toggle={toggleFunc} size={28} />
          </div>
          {/* Desktop Navigation */}
          <div className="d-none d-md-flex flex-grow-1 gap-4a gap-lg-5 justify-content-center 
            p-3 border-bottom border-dark border-2 border-start-0">
            {_.map(menuItems, (m =>
              <Link href={menuLinks[m]} noUnderline>
                <MenuItem active={menuItems[curPage] === m}>{m}</MenuItem>
              </Link>
            ))}
          </div>
          {/* Collapsable Navigation */}
          <CollapsedNav
            id="nav"
            className={`position-absolute start-0 end-0 w-100`}
            style={{ top: '100%', visibility: toggle ? 'visible' : 'hidden' }}
          >
            <div className="border-bottom border-dark border-2 bg-white">
              {_.map(menuItems, ((m, i) =>
                <Link href={menuLinks[m]} noUnderline>
                  <h6 className={`px-4 py-3 
                    ${menuItems[curPage] === m ? 'fw-bold' : ''}
                    ${i !== '/' ? "border-top border-dark border-2" : ""}
                  `}>{m}</h6>
                </Link>
              ))}
            </div>
          </CollapsedNav>
        </div>
        {/* Page Content */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <div className="h-100 w-100 m-4 m-md-5 px-3 px-sm-4 px-md-5" style={{ maxWidth: '70em' }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTemplate;