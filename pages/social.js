import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Window from '../components/Window';
import Heading from '../components/Heading';

import Link from '../components/NextLink';
import { windows, links } from '../util/constants';
import '../main.scss';

const StyledLink = styled(Link)`
  text-decoration: none !important;
  :hover {
    text-decoration: underline !important;
  }
`;

const Social = () => {
  const { social } = windows;
  const { email, ...restLinks } = links;

  const socialLinks = _.reduce(restLinks, (result, value, key) => {
    const link = { title: key, href: value };
    if (result.length === 0 || result[result.length - 1].length === 2) result.push([link]);
    else result[result.length - 1].push(link);
    return result;
  }, []);
  
  return (
    <Window {...social}>
      <Heading tag="h2" style={{ whiteSpace: 'nowrap' }}>
        Say Hello 👀
      </Heading>
      <div className="ml-md-5 pl-md-5">
        <Heading tag="h4" color={social.color} mt="0.5rem">
          <StyledLink href={`mailto:${email}`} external><m>{email}</m></StyledLink>
        </Heading>
        <div className="d-block d-md-flex">
          {_.map(socialLinks, (linkSet, index) => (
            <div className="d-flex" key={`lintset-${index}`}>
              {_.map(linkSet, ({ title, href}) => (
                <Heading tag="h4" color={social.color} mr="1.5rem" mt="0.5rem">
                  <StyledLink href={href} external>{title}</StyledLink>
                </Heading>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default Social;