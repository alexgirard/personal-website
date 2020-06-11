import React from 'react';

import Window from '../components/Window';

const Welcome = props => (
  <Window bg="#FFC909" maxWidth="520px" {...props}>
    Welcome! To navigate this site treat it as you would your computer desktop (double click desktop icons, drag windows around, etc). 
  </Window>
);

export default Welcome;
