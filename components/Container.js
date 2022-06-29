import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${props => props.height && `height: ${props.height}`};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
  ${props => props.maxWidth && `max-width: ${props.maxWidth}`};

  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};

  padding: ${props => props.p};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
`;

const Container = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);

export default Container;