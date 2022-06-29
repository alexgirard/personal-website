import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Link from '../components/NextLink';
import Heading from '../components/Heading';
import { TextFrame as Frame } from '../components/Frame';
import PageTemplate from '../components/PageTemplate';

import { work } from '../util/constants';
import '../main.scss';

const { twitch, splunk, zillow, hockeystick, properly, sunlife } = work;

const TextFrame = styled(Frame)`
  cursor: pointer;
`;

const Job = (tagline, job) => (
  <div className="d-flex flex-column gap-3">
    <Heading tag="h6" fontWeight="300">{tagline}</Heading>
    <Heading tag="h3" fontWeight="500">{job}</Heading>
  </div>
);

const Experience = () => {
  const p = '3em 2.5em';

  return (
    <PageTemplate curPage="experience">
      <Heading fontFamily="Manier" tag="h2" className="mb-4 mb-md-5">Experience</Heading>
      <div className="d-flex flex-column gap-5 pb-4">
        <div className="col-sm-12">
          <Link href={twitch.href} external noUnderline>
            <TextFrame
              maxWidth="100%"
              alignItems="start"
              p={p}
              hoverColor="white"
              hoverBg="url('/static/companies/twitch.gif') no-repeat 70% 50%/cover"
            >
              {Job('INCOMING FULL-TIME 2022', 'Twitch  - Full Stack Developer - Ad Experience Team')}
            </TextFrame>
          </Link>
        </div>
        <div className="d-flex flex-wrap gap-5">
          <div className="col-12 col-md-4">
            <Link href={twitch.href} external noUnderline>
              <TextFrame
                h="100%"
                maxWidth="100%"
                alignItems="start"
                p={p}
                hoverColor="white"
                hoverBg="url('/static/companies/twitch2.gif') no-repeat 50% 50%/cover"
              >
                {Job('INTERNSHIP 2021', 'Twitch - Software Developer')}
              </TextFrame>
            </Link>
          </div>
          <div className="col d-flex flex-wrap flex-column gap-5">
            <div className="col-12">
              <Link href={splunk.href} external noUnderline>
                <TextFrame
                  maxWidth="100%"
                  alignItems="start"
                  p={p}
                  hoverColor="white"
                  hoverBg="url('/static/companies/splunk.jpg') no-repeat 50% 10%/cover"
                >
                  {Job('INTERNSHIP 2021', 'Splunk - Frontend Developer')}
                </TextFrame>
              </Link>
            </div>
            <div className="col-12">
              <Link href={zillow.href} external noUnderline>
                <TextFrame
                  maxWidth="100%"
                  alignItems="start"
                  p={p}
                  hoverColor="white"
                  hoverBg="url('/static/companies/zillow.jpg') no-repeat 50% 50%/cover"
                >
                  {Job('INTERNSHIP 2020', 'Zillow - Software Developer')}
                </TextFrame>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-5">
          <div className="col-12 col-md">
            <Link href={hockeystick.href} external noUnderline>
              <TextFrame
                h="100%"
                maxWidth="100%"
                alignItems="start"
                p={p}
                hoverColor="white"
                hoverBg="url('/static/companies/hockeystick.jpg') no-repeat 90% 50%/cover">
                {Job('INTERNSHIP 2019', 'Hockeystick - Frontend Developer')}
              </TextFrame>
            </Link>
          </div>
          <div className="col-12 col-md">
            <Link href={properly.href} external noUnderline>
            <TextFrame
              h="100%"
              maxWidth="100%"
              alignItems="start"
              p={p}
              hoverColor="white"
              hoverBg="url('/static/companies/properly.jpg') no-repeat 50% 50%/cover"
            >
              {Job('INTERNSHIP 2019', 'Properly - Full Stack Developer')}
            </TextFrame>
            </Link>
          </div>
          <div className="col-12 col-md">
            <Link href={sunlife.href} external noUnderline>
              <TextFrame
                h="100%"
                maxWidth="100%"
                alignItems="start"
                p={p}
                hoverColor="white"
                hoverBg="url('/static/companies/sunlife.jpg') no-repeat 90% 50%/cover">
                {Job('INTERNSHIP 2018', 'Sun Life Financial - Applications Developer')}
              </TextFrame>
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Experience;