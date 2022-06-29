export const menuItems = {
  '/': 'Home',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  // extra: 'Extra',
  contact: 'Contact',
};

export const menuLinks = {
  Home: '/',
  About: '/about',
  Experience: '/experience',
  Projects: '/projects',
  // Extra: '/extra',
  Contact: '/contact',
}

export const windows = {
  home: { n: 'Work', e: 'Social', s: 'About', w: 'Extra', next: 'About', color: '#E2B1FF', title: 'Alexandra Girard', textColor: '#C675F6' },
  about: { n: 'Home', e: 'Social', s: 'Work', w: 'Extra', next: 'Work', color: '#38D1D1', title: 'About Me' },
  experience: { n: 'About', e: 'Social', s: 'Home', w: 'Extra', next: 'Extra', color: '#4674EA', title: 'Experience' },
  extra: { n: 'Work', e: 'Home', s: 'About', w: 'Social', next: 'Social', color: '#FFBF00', title: 'Extra' },
  social: { n: 'Work', e: 'Extra', s: 'About', w: 'Home', next: 'Home', color: '#FF6666', title: 'Social' },
};

export const windowLinks = {
  Home: '/',
  About: '/about',
  Work: '/experience',
  Extra: '/extra',
  Social: '/social',
}

export const work = {
  twitch: {
    title: 'Twitch',
    role: 'Software Developer Intern',
    href: "https://www.twitch.tv/",
    start: '2021-05',
    src: "/static/twitch.png",
  },
  splunk: {
    title: 'Splunk',
    role: 'Frontend Developer Intern',
    href: "https://splunk.com/",
    start: '2021-01-02', // add 2nd day to prevent Javascript Date from setting year before
    src: "/static/splunk.png",
  },
  zillow: {
    title: 'Zillow',
    role: 'Software Developer Intern',
    href: "https://www.zillow.com/",
    start: '2020-05',
    src: "/static/zillow.png",
  },
  hockeystick: {
    title: 'Hockeystick',
    role: 'Frontend Developer Intern',
    href: "https://www.hockeystick.co/",
    start: '2019-09',
    src: "/static/hockeystick.png",
  },
  properly: {
    title: 'Properly',
    role: 'Software Developer Intern',
    href: "https://www.properly.ca/",
    start: '2019-01-02',
    src: "/static/properly.png",
  },
  sunlife: {
    title: 'Sun Life Financial',
    role: 'Applications Developer Intern',
    href: "https://www.sunlife.ca/en/",
    start: '2018-05',
    src: "/static/sunlife.png",
  }
};

export const links = {
  email: 'alexgirard999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alexandra-girard/',
  github: 'https://github.com/alexgirard',
  spotify: 'https://open.spotify.com/user/alexgirard9',
  yourstack: 'https://yourstack.com/@alex_girard9',
  calendly: 'https://calendly.com/alexgirard/30-min-meeting',
}