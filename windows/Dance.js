import React from 'react';
import ReactPlayer from "react-player";

import Window from '../components/Window';

const Dance = props => (
  <Window bg="#FFDCE5" maxWidth="700px" {...props}>
    In high school I danced competitvely in the styles ballet, pointe, contemporary, lyrical, 
    jazz and hip hop. Since university, I joined a female hip hop group, taught at a dance workshop, 
    and try to attend hip hop classes in between school. 
    Below is a video of my group Femi9’s set from BYOB Dance Competition 2018.
    <div className="pt-3 d-flex justify-content-center">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9Puns-8uXE4"
      />
    </div>
  </Window>
);

export default Dance;
