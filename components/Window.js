import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Container from './Container';
import Link from './NextLink';
import Head from './Head';

import { CaretDown, CaretLeft, CaretTop, CaretRight, CaretMobile } from './Caret';
import { windowLinks } from '../util/constants'

const Outline = styled.div`
  height: 100%;
  width: 100%;
  border: 20px solid ${props => props.color};
  padding: 0 10rem;
  position: relative;

  @media (min-width: 769px) and (max-width: 992) { padding: 0 8rem; }
  @media (min-width: 577px) and (max-width: 768px) { padding: 0 6rem; }
  @media (max-width: 576px) {
    border: 10px solid ${props => props.color};
    padding: 0 1rem;
  }
`;

const Content = styled.div`
  height: 97%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 1.5rem;
  bottom: 1.4rem;

  @media (max-width: 576px) {
    position: relative;
    left: 0;
    bottom: 0;
    padding: 1rem 0 1rem;
    text-decoration: none;
  }
`;

const Window = ({ title, maxWidth, n, e, s, w, next, color, children }) => ( 
  <>
    {/* Mobile */}
    <div className="d-flex d-sm-none w-100 h-100">
      <Outline color={color}>
        <div className="h-100 w-100 d-flex flex-column">
          <div className="overflow-auto h-100 w-100 pt-2 d-block">
            <Content>
              <Head />
              <div className="d-block w-100 m-auto">
                {children}
              </div>
            </Content>
          </div>
          <div style={{ height: 'min-content' }}>
            <Link href="/" noUnderline>
              <Title>{title}</Title>
            </Link>
            {next && <CaretMobile text={next} href={windowLinks[next]} />}
          </div>
        </div>
      </Outline>
    </div>
    
    {/* Desktop */}
    <div className="d-none d-sm-block w-100 h-100">
      <Outline color={color}>
        <CaretDown text={s} href={windowLinks[s]} />
        <CaretLeft text={w} href={windowLinks[w]} />
        <CaretTop text={n} href={windowLinks[n]} />
        <CaretRight text={e} href={windowLinks[e]} />

        <Link href="/" noUnderline>
          <Title>{title}</Title>
        </Link>
        <Content>
          <Head />
          <Container maxWidth={maxWidth}>
            {children}
          </Container>
        </Content>
      </Outline>
    </div>
  </>
)

export default Window;