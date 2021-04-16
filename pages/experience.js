import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import Window from '../components/Window';
import Heading from '../components/Heading';
import { PurePhoto } from '../components/Photo';

import Link from '../components/NextLink';
import { windows, work } from '../util/constants';
import '../main.scss';

const workInfo = _.groupBy(work, w => (new Date(w.start)).getFullYear());
const years = _.keys(workInfo).sort((a,b) => b - a);

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 34px 74px auto;

  @media (max-width: 576px) {
    grid-gap: 1rem;
    grid-template-columns: 40px 60px auto;
  }
`;

const About = () => {
  const { experience } = windows;

  return (
    <Window {...experience}>
      <Grid>
        {years.map(year => {
          const works = workInfo[year];
          const today = new Date();

          return works.map(({ title, role, href, start, src }, iter) => {
            const startDate = new Date(start);
            const incoming = today.setHours(0, 0, 0, 0) <= startDate.setHours(0, 0, 0, 0);
            
            return (
              <>
                <div className="d-flex align-items-start justify-content-end">
                  {iter === 0 && <b><Heading tag="h5" color={experience.color}>{year}</Heading></b>}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Link href={href} external className="d-flex justify-content-center">
                    {/* <div className="d-block d-sm-none"><PurePhoto src={src} maxWidth={50}/></div>
                    <div className="d-none d-sm-block"><PurePhoto src={src} maxWidth={74}/></div> */}
                    <PurePhoto src={src} maxWidth={74}/>
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <div>
                    <Link href={href} external noUnderline>
                      <b><Heading tag="h5">{title}</Heading></b>
                    </Link>
                    <Heading tag="p">{`${incoming ? 'Incoming ' : ''}${role}`}</Heading>
                  </div>
                </div>
              </>
            );
          });
        })}
      </Grid>
    </Window>
  );
};

export default About;