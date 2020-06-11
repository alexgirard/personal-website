import React from 'react';
import Link from 'next/link';

const NextLink = ({ href, children, external, ...restProps }) => {
  if (external) {
    return (
      <a href={href} target='_blank' {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href} {...restProps}>
        {/* eslint-disable-next-line */}
        <a>{children}</a>
      </Link>
    );
  }
};

export default NextLink;
