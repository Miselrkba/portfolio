
export default {
  name: 'Michael Huna',
  headerTagline: [
    //Line 1 For Header
    'Hello! 👋 I am Michael, a software developer.',
    //Line 2 For Header
    'Welcome to my website. Feel free to check out my projects below...',
    //Line 3 For Header
    '',
  ],
  //Contact Email
  contactEmail: 'michaelhuna@yahoo.com',
  // Add Your About Text Here
  abouttext:
    'I build awesome web experiences using React.js, JavaScript ES6, Html5 and Css3. I provide technical, creative, and business insights to all projects I work on. Build for flexibility and customization from the start. I plan responsive software for all mediums, screen sizes and device types.',
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: 'Searchable CRUD Table', //Project Title - Add Your Project Title Here
      service: 'Add new users, Edit users, Delete users, Search users', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`,
      //Project URL - Add Your Project Url Here
      url: 'https://searchable-crud-table.netlify.app/#',
      gitUrl:
        'https://github.com/Miselrkba/react-reusable-searchable-crud-table',
    },
    {
      id: 2,
      title: 'Dedinky Chat App',
      service: 'Chat for villages in Ružomberok region',
      imageSrc: `https://image.freepik.com/free-photo/cityscape-icon-symbol-web-element_1150-1791.jpg`,
      url: 'https://dedinky.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/dediny-barebone/tree/newfeatures',
    },
    {
      id: 3,
      title: 'XpressLeads Sales Helper',
      service: 'Productivity app for sales people. Data fetched from API. ',
      imageSrc: `https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80`,
      url: 'https://xpressleads.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/leads',
    },
    {
      id: 4,
      title: 'Admin Dashboard Table', //Project Title - Add Your Project Title Here
      service: 'Table with sorting, expandable and selectable rows', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: `https://image.freepik.com/free-vector/multitasking-concept-illustration_52683-32123.jpg`,
      //Project URL - Add Your Project Url Here
      url: 'https://admin-dashboard-table.netlify.app/',
      gitUrl: 'https://github.com/Miselrkba/admin-table',
    },

  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: 'Github', url: 'https://github.com/Miselrkba' },
  ],
};
