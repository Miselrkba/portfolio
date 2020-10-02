import projectOneImage from "../src/images/interviewQuestions.png";
import projectTwoImage from "../src/images/dedinky.png";
import projectThreeImage from "../src/images/expressleads.png";

export default {
  name: "Michael Huna",
  headerTagline: [
    //Line 1 For Header
    "Hello! 👋 I am Michael, a software developer.",
    //Line 2 For Header
    "Welcome to my website. Feel free to check out my projects below...",
    //Line 3 For Header
    "",
  ],
  //Contact Email
  contactEmail: "michaelhuna@outlook.com",
  // Add Your About Text Here
  abouttext:
    "I build awesome web experiences using React.js, JavaScript ES6, Html5 and Css3. I provide technical, creative, and business insights to all projects I work on. Build for flexibility and customization from the start. I plan responsive software for all mediums, screen sizes and device types.",
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Interview Questions", //Project Title - Add Your Project Title Here
      service: "React, JavaScript, Html and Css job interview questions", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: `${projectOneImage}`,
      //Project URL - Add Your Project Url Here
      url: "https://interview-questions-react.netlify.app/",
      gitUrl: "https://github.com/Miselrkba/interview-questions",
    },
    {
      id: 2,
      title: "Dedinky Chat App",
      service: "Chat for villages in Ružomberok region",
      imageSrc: `${projectTwoImage}`,
      url: "https://dedinky.netlify.app/",
      gitUrl: "https://github.com/Miselrkba/dediny-barebone/tree/newfeatures",
    },
    {
      id: 3,
      title: "XpressLeads Sales Helper",
      service: "Productivity app for sales people. Data fetched from API. ",
      imageSrc: `${projectThreeImage}`,
      url: "https://xpressleads.netlify.app/",
      gitUrl: "https://github.com/Miselrkba/leads",
    },
    {
      id: 4,
      title: "Project Four",
      service: "UNDER CONSTRUCTION",
      imageSrc:
        "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: '/',
      gitUrl: "/",
    },

    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/Miselrkba" },
  ],
};
