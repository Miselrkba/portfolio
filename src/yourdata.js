export default {
  name: "Michael Huna",
  headerTagline: [
    //Line 1 For Header
    "Hello! 👋 You found me. I am Michael.",
    //Line 2 For Header
    "React Software developer ",
    //Line 3 For Header
    "from Slovakia",
  ],
  //Contact Email
  contactEmail: "michaelhuna@outlook.com",
  // Add Your About Text Here
  abouttext:
    "I build awesome web experiences using React.js, JavaScript ES6, Html5 and Css3. I provide technical, creative, and business insights to all projects I work on. Build for flexibility and customization from the start. I plan responsive software for all mediums, screen sizes and device types.",
  aboutImage:
    "https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Project One", //Project Title - Add Your Project Title Here
      service: "UI/UX Design", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url: "/",
    },
    {
      id: 2,
      title: "Project Two",
      service: "Website Development",
      imageSrc:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "/",
    },
    {
      id: 3,
      title: "Project Three",
      service: "Web App",
      imageSrc:
        "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "/",
    },
    {
      id: 4,
      title: "Project Four",
      service: "Branding",
      imageSrc:
        "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "/",
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
