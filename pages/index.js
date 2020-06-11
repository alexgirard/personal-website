import React, { useState } from 'react';
import _ from 'lodash';

import Head from '../components/head';
import MenuBar from '../components/MenuBar';

import Desktop from '../windows/Desktop';
import Tabs from '../windows/Tabs';

import Work from '../windows/Work';
import Social from '../windows/Social';
import Extra from '../windows/Extra';

import Welcome from '../windows/Welcome';
import AboutMe from '../windows/AboutMe';
import Name from '../windows/Name';

import SiteInfo from '../windows/SiteInfo';
import Dance from '../windows/Dance';
import Robotics from '../windows/Robotics';

import SunLife from '../windows/SunLife';
import Properly from '../windows/Properly';
import Hockeystick from '../windows/Hockeystick';
import Zillow from '../windows/Zillow';

import '../main.scss';

const welcome      = { title: "Welcome.txt",       fg: "#FF9B26" };
const aboutme      = { title: "AboutMe.png",       fg: "#E2B1FF",  name: "About Me",     cmd: "A",  src: "retro_mac_icon.png",      alt: "About me" };
const name         = { title: "Name.jpg",          fg: "#39C9FE",  name: "Name",         cmd: "N",  src: "retro_img_icon.png",      alt: "Name word art" };

const work         = { title: "Work",              fg: "#FD4EAC",  src: "retro_folder_icon.png",  alt: "Work experiences" };
const social       = { title: "Social",            fg: "#CFCFCF" };
const extra        = { title: "Extra",             fg: "red" };
const file         = { title: "File" };

const zillow       = { title: "Zillow.png",        fg: "#EC9CA4",  name: "Zillow",       cmd: "Z",  src: "static/zillow.png",       alt: "Zillow logo" };
const hockeystick  = { title: "Hockeystick.png",   fg: "#006EF0",  name: "Hockeystick",  cmd: "H",  src: "static/hockeystick.png",  alt: "Hockeystick logo" };
const properly     = { title: "Properly.png",      fg: "#54B9AD",  name: "Properly",     cmd: "P",  src: "static/properly.png",     alt: "Properly logo" };
const sunlife      = { title: "SunLife.png",       fg: "#CBCDF9",  name: "Sun Life",     cmd: "L",  src: "static/sunlife.png",      alt: "Sun Life logo" };

const robotics     = { title: "Robotics.txt",      fg: "#5BE2FF",  name: "Robotics",     cmd: "B",  src: "static/retro_disk_icon.png",    alt: "Robotics" };
const dance        = { title: "Dance.html",        fg: "#FF7698",  name: "Dance",        cmd: "D",  src: "static/retro_volume_icon.png",  alt: "Dance" };
const siteinfo     = { title: "SiteInfo.txt",      fg: "#8C8C8C",  name: "Site Info",    cmd: "I",  src: "static/retro_paper_icon.png",   alt: "Site Info" };

const socialLinks = [
  { name: "Github",      cmd: "G",  link: "https://github.com/alexgirard" },
  { name: "LinkedIn",    cmd: "I",  link: "https://www.linkedin.com/in/alexandra-girard/" },
  // { name: "line" },
  // { name: "Resume",      cmd: "R",  link: },
  // { name: "line" },
  { name: "YourStack",   cmd: "Y",  link: "https://yourstack.com/@alex_girard9" },
  { name: "Spotify",     cmd: "S",  link: "https://open.spotify.com/user/alexgirard9?si=pssMbYnPReuoOUfFwOx_zA" },
  { name: "Medium",      cmd: "M",  link: "https://medium.com/@alexgirard999" },
];

const workData = [zillow, hockeystick, properly, sunlife];

const extraData = [robotics, dance, siteinfo];

const menuDropdowns = [
  { section: file.title,    info: [aboutme, name],  window: welcome},
  { section: work.title,    info: workData },
  { section: social.title,  info: socialLinks },
  { section: extra.title,   info: extraData },
];

const tabs = [
  welcome,
  aboutme,
  name,
  work,
  sunlife,
  properly,
  hockeystick,
  zillow,
  social,
  robotics,
  dance,
  siteinfo,
];

const desktopTabs = [aboutme, name, work];

const concat = (array, value) => value != undefined && !_.includes(array, value) ? _.concat(array, value) : array;
const remove = (array, value) => value != undefined && _.includes(array, value) ? _.without(array, value) : array;

const Index = () => {
  const [openTabs, setOpen] = useState([aboutme.title, welcome.title]);
  const [minimized, setMinimized] = useState([name.title]);
  const [globalZ, incrementZ] = useState({ z: 1, [aboutme.title]: 0, [welcome.title]: 1 });

  const updateZ = tab => {
    if (globalZ.z != _.get(globalZ, tab)) {
      const newZ = ++globalZ.z;
      incrementZ({ ...globalZ, [tab]: newZ, z: newZ });
    }
  }

  const minimizeTab = tab => {
    setMinimized(concat(minimized, tab));
    setOpen(remove(openTabs, tab));
  }

  const expandTab = tab => {
    setMinimized(remove(minimized, tab));
    setOpen(concat(openTabs, tab));
    console.log(tab, " , ", globalZ.z);
    updateZ(tab);
    console.log(globalZ);
  }

  const closeTab = tab => {
    console.log("CLOSED")
    setMinimized(remove(minimized, tab));
    setOpen(remove(openTabs, tab));
  }

  const clearTabs = () => {
    setMinimized(concat(openTabs, minimized));
    setOpen([]);
  }

  const isMinimized = tab => _.includes(minimized, tab);

  const isClosed = tab => !(_.includes(minimized, tab) || _.includes(openTabs, tab));

  return (
    <>
      <Head />
      <MenuBar menuDropdowns={menuDropdowns} openTab={expandTab} />
      
      <Desktop tabs={desktopTabs} clearTabs={clearTabs} openTab={expandTab} />
      <Tabs tabs={tabs} minimized={minimized} expandTab={expandTab} globalZ={globalZ} />

      <Welcome     {...welcome}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(welcome.title)}     closed={isClosed(welcome.title)} globalZ={globalZ} updateZ={updateZ} />
      <AboutMe     {...aboutme}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(aboutme.title)}     closed={isClosed(aboutme.title)} globalZ={globalZ} updateZ={updateZ} openTab={expandTab} workData={workData} extraData={extraData} />
      <Name        {...name}        minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(name.title)}        closed={isClosed(name.title)}    globalZ={globalZ} updateZ={updateZ} />

      <Work   {...work}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(work.title)}   closed={isClosed(work.title)}   globalZ={globalZ} updateZ={updateZ} openTab={expandTab} workData={workData} />
      <Social {...social}  minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(social.title)} closed={isClosed(social.title)} globalZ={globalZ} updateZ={updateZ} socialLinks={socialLinks} />
      <Extra  {...extra}   minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(extra.title)}  closed={isClosed(extra.title)}  globalZ={globalZ} updateZ={updateZ} openTab={expandTab} extraData={extraData} />
      
      <SunLife     {...sunlife}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(sunlife.title)}     closed={isClosed(sunlife.title)}     globalZ={globalZ} updateZ={updateZ} />
      <Properly    {...properly}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(properly.title)}    closed={isClosed(properly.title)}    globalZ={globalZ} updateZ={updateZ} />
      <Hockeystick {...hockeystick} minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(hockeystick.title)} closed={isClosed(hockeystick.title)} globalZ={globalZ} updateZ={updateZ} />
      <Zillow      {...zillow}      minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(zillow.title)}      closed={isClosed(zillow.title)}      globalZ={globalZ} updateZ={updateZ} />

      <SiteInfo    {...siteinfo}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(siteinfo.title)}    closed={isClosed(siteinfo.title)} globalZ={globalZ} updateZ={updateZ} />
      <Dance       {...dance}       minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(dance.title)}       closed={isClosed(dance.title)}    globalZ={globalZ} updateZ={updateZ} />
      <Robotics    {...robotics}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(robotics.title)}    closed={isClosed(robotics.title)} globalZ={globalZ} updateZ={updateZ} />
    </>
  );
};

export default Index;