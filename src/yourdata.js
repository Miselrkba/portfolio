import adminImg from './images/admin.jpg';
import chatImg from './images/chat.jpg';
import laptopImg from './images/laptop.jpg';
import productivityImg from './images/productivity.jpg';
import malconfImg from './images/malconf.jpg';
import spartanImg from './images/spartan.jpg';

export default {
  name: 'Michael Huna',
  headerTagline: [
    // line 1 for header
    'Hello! 👋 I am Michael, a software developer.',
    // line 2 For header
    'Welcome to my website. Feel free to check out my projects below...',
    // line 3 For header
    '',
  ],
  // contact email
  contactEmail: 'michaelhuna@yahoo.com',
  // add your about text here
  abouttext:
    'I build awesome web experiences using React.js, JavaScript ES6, Html5 and Css3. I provide technical, creative, and business insights to all projects I work on. Build for flexibility and customization from the start. I plan responsive software for all mediums, screen sizes and device types.',
  // change projects here
  projects: [
    {
      id: 1,
      title: 'Searchable CRUD Table',
      service: 'Add new users, Edit users, Delete users, Search users',
      // add project img here
      imageSrc: laptopImg,
      // add project url here
      url: 'https://searchable-crud-table.netlify.app/#',
      gitUrl:
        'https://github.com/Miselrkba/react-reusable-searchable-crud-table',
    },
    {
      id: 2,
      title: 'Dedinky Chat App',
      service: 'Chat for villages in Ružomberok region',
      imageSrc: chatImg,
      url: 'https://dedinky.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/dediny-barebone/tree/newfeatures',
    },
    {
      id: 3,
      title: 'XpressLeads Sales Helper',
      service: 'Productivity app for sales people. Data fetched from API. ',
      imageSrc: productivityImg,
      url: 'https://xpressleads.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/leads',
    },
    {
      id: 4,
      title: 'Admin Dashboard Table',
      service: 'Table with sorting, expandable and selectable rows',
      // add project img here
      imageSrc: adminImg,
      // add project url here
      url: 'https://admin-dashboard-table.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/admin-table',
    },
    {
      id: 5,
      title: 'Malconf Website',
      service: 'Animated website for Malconf - Malware configuration parser',
      // add project img here
      imageSrc: malconfImg,
      // add project url here
      url: 'https://malconf.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/react-malconf-client',
    },
    {
      id: 6,
      title: 'Leonides Real Estate Company',
      service: 'Beautiful real estate business landing page ',
      // add project img here
      imageSrc: spartanImg,
      // add project url here
      url: 'https://leonides.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/leonides-website-react',
    },
  ],
  social: [
    // add or remove link to social
    { name: 'Github', url: 'https://github.com/Miselrkba' },
  ],
};
