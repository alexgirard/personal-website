import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Link from '../components/NextLink';
import Heading from '../components/Heading';
import { TextFrame as Frame } from '../components/Frame';
import PageTemplate from '../components/PageTemplate';

import '../main.scss';

const QuizemBg = "url('/static/projects/quizem.jpg') no-repeat 10% 50%/cover";
const QuizemHoverBg = "url('/static/projects/quizem.gif') no-repeat 50% 50%/cover";

const TextFrame = styled(Frame)`
  cursor: pointer;
`;

const TitlePadding = styled.div`
  padding: 6em 4em;
  @media (min-width: 1031px) and (max-width: 1120px) { padding: 5em 3.5em; }
  @media (min-width: 951px) and (max-width: 1030px) { padding: 4em 3em; }
  @media (min-width: 576px) and (max-width: 950px) { padding: 3.5em 2.5em; }
  @media (max-width: 575px) { padding: 3em 2em; }
`;

const HiddenTitle = styled(Frame)`
  opacity: 0;
  user-select: none;
`;

const HoverBg = styled.div`
  transition: all 0.2s ease-in-out;
  background: ${props => props.bg};
  :hover {
    background: ${props => props.hoverBg};
  }
`;

const Project = (tagline, job) => (
  <div className="d-flex flex-column gap-3">
    <Heading tag="h6" fontWeight="300">{tagline}</Heading>
    <Heading tag="h3" fontWeight="500">{job}</Heading>
  </div>
);

const Projects = () => {
  return (
    <PageTemplate curPage="projects">
      <Heading fontFamily="Manier" tag="h2" className="mb-4 mb-md-5">Projects</Heading>
      <div className="d-flex flex-column gap-5 pb-4">
        <div className="col-sm-12">
          <Link href="https://quizem.io/" external noUnderline>
            <TextFrame
              maxWidth="100%"
              alignItems="start"
              p="0em"
              hoverBg={QuizemBg}
            > 
              <div className="row w-100 h-100 gx-0 flex-column flex-sm-row">
                <TitlePadding className="col-auto bg-white">
                  {Project('CAPSTONE DESIGN PROJECT', 'Quizem')}
                </TitlePadding>
                <HoverBg className="col border-start border-dark border-2" bg={QuizemBg} hoverBg={QuizemHoverBg} />
                <HoverBg className="col d-sm-none border-top border-dark border-2" bg={QuizemBg} hoverBg={QuizemHoverBg}>
                  <HiddenTitle>{Project('CAPSTONE DESIGN PROJECT', 'Quizem')}</HiddenTitle>
                </HoverBg>
              </div>
            </TextFrame>
          </Link>
        </div>
        <div className="col-sm-12">
          <Heading tag="h4" fontFamily="Manier">More coming soon...</Heading>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Projects;