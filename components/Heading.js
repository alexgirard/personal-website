import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const Wrapper = styled.span`
  > * {
    ${props => props.color && `color: ${props.color}`};
  
    margin: ${props => props.m || '0px'};
    margin-top: ${props => props.mt || '0px'};
    margin-bottom: ${props => props.mb || '0px'};
    margin-left: ${props => props.ml || '0px'};
    margin-right: ${props => props.mr || '0px'};
  
    padding: ${props => props.p || '0px'};
    padding-top: ${props => props.pt || '0px'};
    padding-bottom: ${props => props.pb || '0px'};
    padding-left: ${props => props.pl || '0px'};
    padding-right: ${props => props.pr || '0px'};
  }
`;

const Heading = ({ tag, children, ...props }) => {
  const Tag = tag;

  return (
    <Wrapper {...props}>
      <Tag>{children}</Tag>
    </Wrapper>
  );
 };

export default Heading;