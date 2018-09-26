import React from 'react';
import './App.css';

import Title from "./components/Title";
import Icons from "./components/Icons";

class App extends React.Component {
  render() {
    return (
        <div>
          <Icons />
          <Title />
        </div>
    );
  }
}

export default App;
