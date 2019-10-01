import React from 'react';
import styled, { keyframes } from 'styled-components';
import { yellow, FlexContainer } from './Styles';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-30%, 100%, 0);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;


const FadeInUp = styled.div`
  display: inline-block;
  opacity: 0;
  animation: ${fadeInUp} 3s linear;
  animation-delay: ${props => props.delay || 0}s;
`;

const MiddleNote = styled.div`
  margin-bottom: 4rem;
`;

const EndNote = styled.div`
  margin-left: -1.5rem;
`;


const MusicNotes = ({ animationEnd }) => (
  <FlexContainer>
    <FadeInUp delay={0.3}>
      <svg height="50px" fill={yellow} viewBox="0 0 401.963 401.963">
        <path d="M253.481,0v273.579c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5
          c45.49,0,82.5-32.523,82.5-72.5V0H253.481z"/>
      </svg>
    </FadeInUp>
    <MiddleNote>
      <FadeInUp>
        <svg height="50px" fill={yellow} viewBox="0 0 300 300">
          <path id="XMLID_8_" d="M228.914,25.515C202.935,9.061,168.694,0,132.5,0c-8.284,0-15,6.716-15,15v182.399
            c-8.832-4.696-19.075-7.399-30-7.399c-33.084,0-60,24.673-60,55s26.916,55,60,55s60-24.673,60-55V30.629
            c52.836,4.418,95,31.717,95,63.537c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15C272.5,67.696,257.021,43.316,228.914,25.515z"/>
        </svg>
      </FadeInUp>
    </MiddleNote>
    <EndNote>
      <FadeInUp delay={0.6} onAnimationEnd={animationEnd}>
        <svg height="70px" fill={yellow} viewBox="0 0 489.164 489.164">
          <path d="M159.582,75.46v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5
            s82.5-32.523,82.5-72.5V168.942l245-60.615v184.415c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5
            s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.46z M189.582,138.038V98.942l245-60.615v39.095L189.582,138.038z"/>
        </svg>
      </FadeInUp>
    </EndNote>
  </FlexContainer>
);

export default MusicNotes;
