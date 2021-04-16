import React from 'react';
import styled from 'styled-components';
import Link from './NextLink';

const directionStyles = {
  down: {
    position: 'fixed',
    left: '50%',
    bottom: '10px',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
  },
  left: {
    flexDirection: 'row-reverse',
    position: 'fixed',
    left: '70px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    svg: { transform: 'rotate(90deg)' },
    h6: { margin: '-0.5rem', transform: 'rotate(-90deg)' },
  },
  top: {
    flexDirection: 'column-reverse',
    position: 'fixed',
    top: '54px',
    left: '50%',
    margin: '0 auto',
    transform: 'translate(-50%, -50%)',
    svg: { transform: 'rotate(180deg)' },
  },
  right: {
    flexDirection: 'row',
    position: 'fixed',
    right: '-6px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    svg: { transform: 'rotate(-90deg)' },
    h6: { margin: '-0.5rem', transform: 'rotate(90deg)' },
  },
  mobile: {
    position: 'absolute',
    right: '20px',
    bottom: '10px',
    h6: { fontSize: '18px', marginBottom: '-0.2rem' },
    svg: { height: 20 },
  },
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: rgba(0, 0, 0, 0.3);
  svg { fill: rgba(0, 0, 0, 0.3); }

  ${props => props.styles}

  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    svg { fill: rgba(0, 0, 0, 0.5); }
  }
`;

const CaretSVG = () => (
  <svg height="28" enable-background="new 0 0 256 256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="m225.813 48.907-97.813 97.813-97.813-97.813-30.187 30.186 128 128 128-128z"/>
  </svg>
);

const Caret = ({ text, href, directionStyles }) => (
  <Link href={href} noUnderline>
    <Container styles={directionStyles}>
      <h6>{text}</h6>
      <CaretSVG />
    </Container>
  </Link>
);

const CaretDown = props => <Caret directionStyles={directionStyles.down} {...props} />;
const CaretLeft = props => <Caret directionStyles={directionStyles.left} {...props} />;
const CaretTop = props => <Caret directionStyles={directionStyles.top} {...props} />;
const CaretRight = props => <Caret directionStyles={directionStyles.right} {...props} />;

const CaretMobile = props => <Caret directionStyles={directionStyles.mobile} {...props} />;

export default Caret;
export {
  CaretDown,
  CaretLeft,
  CaretTop,
  CaretRight,
  CaretMobile,
};
