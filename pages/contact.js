import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import NextLink from '../components/NextLink';
import Heading from '../components/Heading';
import { TextFrame } from '../components/Frame';
import PageTemplate from '../components/PageTemplate';

import { links } from '../util/constants';
import '../main.scss';

const Grid = styled.div`
  display: grid;
  max-width: 66em;
  grid-template-columns: 1fr;
`;

const StyledLink = styled(NextLink)`
  :hover {
    text-decoration: underline !important;
  }
`;

const Link = props => <p><StyledLink href={props.href} external noUnderline>{props.children}</StyledLink></p>;

const About = () => {
  return (
    <PageTemplate curPage="contact">
      <Heading fontFamily="Manier" tag="h2" className="mb-4 mb-md-5">Let's Chat</Heading>
      <Grid className="pb-4">
        <TextFrame maxWidth="100%">
          <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 w-100">
            <Link href={`mailto:${links.email}`} external>alexgirard999@gmail.com</Link>
            <Link href={links.linkedin} external>linkedin</Link>
            <Link href={links.github} external>github</Link>
            <Link href={links.spotify} external>spotify</Link>
            <Link href={links.yourstack} external>yourstack</Link>
            <Link href={links.calendly} external>calendly</Link>
          </div>
        </TextFrame>
      </Grid>
    </PageTemplate>
  );
};

export default About;