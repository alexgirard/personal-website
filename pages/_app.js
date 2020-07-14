import React from 'react';
import App from 'next/app';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

class MyApp extends App {
  componentDidMount = () => {
    // only initialize when in the browser
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      LogRocket.init('csxlg4/alexandra-girard');
      // plugins should also only be initialized when in the browser
      setupLogRocketReact(LogRocket);
    }
  };


  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;