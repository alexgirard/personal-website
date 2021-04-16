import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <title>Alex Girard</title>
    <meta name="description" content="Software Developer. Dancer. Robotics enthusiast. Coffee addict." />
    <meta name="keywords" content="Software Engineering,Developer,Frontend,Frontend Developer,Fullstack,Fullstack Developer,Student,Waterloo,Code" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="icon" href="static/favicon.png" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>" />
  </NextHead>
);

export default Head;