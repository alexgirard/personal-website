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

const welcome      = { title: "Welcome.txt",       fg: "#FF9B26",  bg: "#FFC909",  name: "Welcome",  useFg: true,   src: "static/retro_help_icon.png",      alt: "Welcome info"  };
const aboutme      = { title: "AboutMe.png",       fg: "#E2B1FF",  bg: "#FFB1C4",  name: "About Me",     cmd: "A",  src: "static/retro_mac_icon.png",      alt: "About me" };
const name         = { title: "Name.jpg",          fg: "#39C9FE",  bg: "#FFC909",  name: "Name",         cmd: "N",  src: "static/retro_img_icon.png",      alt: "Name word art" , useFg: true };

const work         = { title: "Work",              fg: "#FD4EAC",  bg: "#6E32D0",  src: "static/retro_folder_icon.png",  alt: "Work experiences" };
const social       = { title: "Social",            fg: "#CFCFCF",  bg: "#464646",  src: "static/retro_social_icon.png",  alt: "Social links" };
const extra        = { title: "Extra",             fg: "red",      bg: "#FF9B26",  src: "static/retro_extra_icon.png",  alt: "Extra experiences" };
const file         = { title: "File" };

const zillow       = { title: "Zillow.png",        fg: "#EC9CA4",  bg: "#E2717C",  name: "Zillow",       cmd: "Z",  src: "static/zillow.png",       alt: "Zillow logo" };
const hockeystick  = { title: "Hockeystick.png",   fg: "#006EF0",  bg: "#2F9BFF",  name: "Hockeystick",  cmd: "H",  src: "static/hockeystick.png",  alt: "Hockeystick logo" };
const properly     = { title: "Properly.png",      fg: "#54B9AD",  bg: "#1C7473",  name: "Properly",     cmd: "P",  src: "static/properly.png",     alt: "Properly logo" };
const sunlife      = { title: "SunLife.png",       fg: "#CBCDF9",  bg: "#767AD7",  name: "Sun Life",     cmd: "L",  src: "static/sunlife.png",      alt: "Sun Life logo" };

const robotics     = { title: "Robotics.txt",      fg: "#5BE2FF",  bg: "#D7F8FF",  name: "Robotics",     cmd: "B",  src: "static/retro_disk_icon.png",    alt: "Robotics" };
const dance        = { title: "Dance.html",        fg: "#FF7698",  bg: "#FFDCE5",  name: "Dance",        cmd: "D",  src: "static/retro_volume_icon.png",  alt: "Dance" };
const siteinfo     = { title: "SiteInfo.txt",      fg: "#8C8C8C",  bg: "#FFFFFF",  name: "Site Info",    cmd: "I",  src: "static/retro_paper_icon.png",   alt: "Site Info" };

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
  extra,
];

const mobileApps = [
  welcome,
  aboutme,
  name,
  sunlife,
  properly,
  hockeystick,
  zillow,
  robotics,
  dance,
  siteinfo,
];

const desktopTabs = [aboutme, name, work];

const mobileHotbar = [work, social, extra];

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
    updateZ(tab);
  }

  const closeTab = tab => {
    setMinimized(remove(minimized, tab));
    setOpen(remove(openTabs, tab));
  }

  const clearTabs = () => {
    setMinimized(concat(openTabs, minimized));
    setOpen([]);
  }

  const isMinimized = tab => _.includes(minimized, tab);
  const isClosed = tab => !(_.includes(minimized, tab) || _.includes(openTabs, tab));


  // Mobile
  const [mobileWindowOpen, setMobileWindowOpen] = useState(null);
  const [mobileHistory, setHistory] = useState(null);
  const openMobileWindow = tab => setMobileWindowOpen(tab);
  const closeMobileWindow = () => { setHistory(null); setMobileWindowOpen(null); }

  const openMobileWindowBack = curTab => tab => {
    setHistory(curTab);
    setMobileWindowOpen(tab);
  }

  const isClosedMobile = tab => mobileWindowOpen != tab;
  const updateZMobile = () => {};

  return (
    <>
      {/* Desktop */}
      <div className="d-none d-sm-block">
        <Head />
        <MenuBar menuDropdowns={menuDropdowns} openTab={expandTab} />
          
        <Desktop tabs={desktopTabs} clearTabs={clearTabs} openTab={expandTab} />
        <Tabs tabs={tabs} minimized={minimized} expandTab={expandTab} globalZ={globalZ} />

        <Welcome     {...welcome}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(welcome.title)}     closed={isClosed(welcome.title)} globalZ={globalZ} updateZ={updateZ} />
        <AboutMe     {...aboutme}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(aboutme.title)}     closed={isClosed(aboutme.title)} globalZ={globalZ} updateZ={updateZ} openTab={expandTab} workData={workData} extraData={extraData} />
        <Name        {...name}        minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(name.title)}        closed={isClosed(name.title)}    globalZ={globalZ} updateZ={updateZ} />

        <Work   {...work}             minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(work.title)}   closed={isClosed(work.title)}   globalZ={globalZ} updateZ={updateZ} openTab={expandTab} workData={workData} />
        <Social {...social}           minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(social.title)} closed={isClosed(social.title)} globalZ={globalZ} updateZ={updateZ} socialLinks={socialLinks} />
        <Extra  {...extra}            minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(extra.title)}  closed={isClosed(extra.title)}  globalZ={globalZ} updateZ={updateZ} openTab={expandTab} extraData={extraData} />
        
        <SunLife     {...sunlife}     minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(sunlife.title)}     closed={isClosed(sunlife.title)}     globalZ={globalZ} updateZ={updateZ} />
        <Properly    {...properly}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(properly.title)}    closed={isClosed(properly.title)}    globalZ={globalZ} updateZ={updateZ} />
        <Hockeystick {...hockeystick} minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(hockeystick.title)} closed={isClosed(hockeystick.title)} globalZ={globalZ} updateZ={updateZ} />
        <Zillow      {...zillow}      minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(zillow.title)}      closed={isClosed(zillow.title)}      globalZ={globalZ} updateZ={updateZ} />

        <SiteInfo    {...siteinfo}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(siteinfo.title)}    closed={isClosed(siteinfo.title)} globalZ={globalZ} updateZ={updateZ} />
        <Dance       {...dance}       minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(dance.title)}       closed={isClosed(dance.title)}    globalZ={globalZ} updateZ={updateZ} />
        <Robotics    {...robotics}    minimizeTab={minimizeTab} closeTab={closeTab} minimized={isMinimized(robotics.title)}    closed={isClosed(robotics.title)} globalZ={globalZ} updateZ={updateZ} />
      </div>

      {/* Mobile */}
      <div className="d-flex h-100 flex-column d-sm-none">
        <Head />
        <MenuBar menuDropdowns={menuDropdowns} openTab={expandTab} />

        <div className="d-flex flex-fill position-relative">
          <Tabs tabs={mobileApps} openMobileWindow={openMobileWindow} />
          
          <Welcome     {...welcome}     closed={isClosedMobile(welcome.title)}      updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <AboutMe     {...aboutme}     closed={isClosedMobile(aboutme.title)}      updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} workData={workData} extraData={extraData} openTab={openMobileWindowBack(aboutme.title)} />
          <Name        {...name}        closed={isClosedMobile(name.title)}         updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
  
          <Work        {...work}        closed={isClosedMobile(work.title)}         updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} workData={workData}       openTab={openMobileWindowBack(work.title)} />
          <Social      {...social}      closed={isClosedMobile(social.title)}       updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} socialLinks={socialLinks} />
          <Extra       {...extra}       closed={isClosedMobile(extra.title)}        updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} extraData={extraData}     openTab={openMobileWindowBack(extra.title)}/>
          
          <SunLife     {...sunlife}     closed={isClosedMobile(sunlife.title)}      updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <Properly    {...properly}    closed={isClosedMobile(properly.title)}     updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <Hockeystick {...hockeystick} closed={isClosedMobile(hockeystick.title)}  updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <Zillow      {...zillow}      closed={isClosedMobile(zillow.title)}       updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />

          <SiteInfo    {...siteinfo}    closed={isClosedMobile(siteinfo.title)}     updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <Dance       {...dance}       closed={isClosedMobile(dance.title)}        updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
          <Robotics    {...robotics}    closed={isClosedMobile(robotics.title)}     updateZ={updateZMobile} mobileHistory={mobileHistory} setHistory={setHistory} openTab={openMobileWindow} />
        </div>
        
        <Desktop tabs={mobileHotbar} mobileWindowOpen={mobileWindowOpen} openMobileWindow={openMobileWindow} closeMobileWindow={closeMobileWindow}  />
      </div>
    </>
  );
};

export default Index;