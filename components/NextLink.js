import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const textDecoration = noUnderline => !!noUnderline ? 'none' : 'underline';

const StyledA = styled.a`
  text-decoration: ${props => textDecoration(props.noUnderline)} !important;
`;

const NextLink = ({ href, children, external, sb, sa, noUnderline, ...restProps }) => {
  let LinkComponent;

  if (external) {
    LinkComponent = (
      <StyledA href={href} target='_blank' noUnderline={noUnderline} {...restProps}>
        {children}
      </StyledA>
    );
  } else {
    LinkComponent = (
      <Link href={href} {...restProps}>
        {/* eslint-disable-next-line */}
        <a style={{ textDecoration: textDecoration(noUnderline) }}>{children}</a>
      </Link>
    );
  }

  return (
    <>
      {sb && ' '}
      {LinkComponent}
      {sa && ' '}
    </>
  );
};

export default NextLink;
