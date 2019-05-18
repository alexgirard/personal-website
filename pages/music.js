import React from 'react';

import styles from './music.jsxcss';

import HomeSymbol from '../components/HomeSymbol';

const Music = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    <HomeSymbol fill="transparent"/>
    <section>
      <div className="module">
        <h1>M u s i c</h1>

        <div className="music-container">
          <iframe src="https://open.spotify.com/embed/user/alexgirard9/playlist/02RKruLhm1oWi76AD4h9xd" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/user/alexgirard9/playlist/1eq1noScSIiWXK6mvEioUw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

        <div className="music-container">
          <iframe src="https://open.spotify.com/embed/user/alexgirard9/playlist/45HcC9YjCzw8OdnDLyeHAM" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/user/alexgirard9/playlist/2nM1Xf16klY40n7pQ7XXDx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Music;
