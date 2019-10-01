import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Head from '../components/Head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Section from '../components/Section';
import ImageText from '../components/ImageText';
import Link from '../components/Link';
import Footer from '../components/Footer';
import { TextBreak } from '../components/Styles';
import '../main.scss';

const token = 'BQA-B0xTcNL_cFLs3qQ89HhRm8kMI52LpkWHrxbw7DwU9RVYEMSEsEg5K6TlNgu3Zr6viBZNYOMv9odKuNfXwXNJVoThuk0v5HK-4x0339kg61fnYDe474v6l7IPWBxlnD1_EUBXGVj_KS097GL1HikYBhu5lyh29G4JzlkiZ2sae_JN5Lo9A-4ol07E7YE';

const Index = ({ spotifyApi, playlist }) => (
  <>
    <Head />
    <NavBar />
    {/*<Hero spotifyApi={spotifyApi} playlist={playlist} />*/}
    <Content>
      <Section subtitle="ABOUT" hideLine>
        <ImageText imageSrc="/static/alex.png" imageSize="230px">
          <>
            <h1>Hi. I’m Alex, a 3A Software Engineering student currently studying at the University of Waterloo.</h1>
            <TextBreak size={2} />
            <p>I’m passionate about web development and user experiences. I love taking on new challenges and creating innovative solutions. </p>
            <TextBreak size={2} />
            <p>In my free time I love to take hip hop classes, dabble in robotics, play some minecraft, and experience some concerts.</p>
          </>
        </ImageText>
      </Section>

      <Section subtitle="EXPERIENCE">
        <ImageText imageSrc="/static/hockeystick.png" bottomPadding>
          <>
            <h1>Hockeystick</h1>
            <TextBreak />
            <p>Exclusive database which lets you track companies, investments and trends in the tech ecosystem.</p>
            <TextBreak />
            <h4>Front End Developer</h4>
            {/*<Link href="/hockeystick"><p>Read More ↗</p></Link>*/}
          </>
        </ImageText>
        <ImageText imageSrc="/static/properly.png" bottomPadding>
          <>
            <h1>Properly</h1>
            <TextBreak />
            <p>Provides Canadians with a fast, simple and easy way to sell their home. </p>
            <TextBreak />
            <h4>Full Stack Developer</h4>
            {/*<Link href="/properly"><p>Read More ↗</p></Link>*/}
          </>
        </ImageText>
        <ImageText imageSrc="/static/sunlife.png" bottomPadding>
          <>
            <h1>Sun Life Financial</h1>
            <TextBreak />
            <p>Financial services to help Canadians achieve lifetime financial security.</p>
            <TextBreak />
            <h4>Application Developer</h4>
            {/*<Link href="/sunlife"><p>Read More ↗</p></Link>*/}
          </>
        </ImageText>
        <ImageText imageSrc="/static/waterloo.png">
          <>
            <h1>Robotics</h1>
            <TextBreak />
            <p>University of Waterloo’s VEXU robotics and Biomechatronics teams.</p>
            <TextBreak />
            <h4>Programming Lead</h4>
            {/*<Link href="/robotics"><p>Read More ↗</p></Link>*/}
          </>
        </ImageText>
      </Section>

      <Footer>
        <p>© 2019 Alexandra Girard</p>
      </Footer>
    </Content>
  </>
);

// Index.getInitialProps = async () => {
//   const spotifyApi = await new SpotifyWebApi();
//   spotifyApi.setAccessToken(token);
//   const playlist = spotifyApi.getPlaylist('4vHIKV7j4QcZwgzGQcZg1x');
//
//   return { spotifyApi, playlist };
// };

export default Index;
