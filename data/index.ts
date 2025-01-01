export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
        
      },
      {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
      },
      {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
      },
      {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1 lg:h-[18vh]",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
      },
      {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-1 lg:h-[50vh]",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
      },
      {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1 lg:h-[30vh] lg:mt-[-156px]",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "clothing App to Explore streetwears",
      des: "Explore the exclusive winter collection of the KARMIC clothing using typescript.",
      img: "/cloth.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://clothing-website-i43t.vercel.App  ",
    },
    {
      id: 2,
      title: "Nature Travel App",
      des: "A travel app for viewing cool places and experience the real nature.",
      img: "/travel.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/HardikDabral/Travel_App",
    },
    // {
    //   id: 3,
    //   title: "AI Image SaaS - Canva Application",
    //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //   img: "/p3.svg",
    //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //   link: "https://github.com/adrianhajdin/ai_saas_app",
    // },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
  ];
  
  export const testimonials = [
    {
      quote:
        "Debugging algorithms and Unit testing , Implementing Securing the software development lifecycle (SDLC), Data and privacy. Reading and understanding to code. Undertanding the basics od web development and implementing them.",
      name: "Accenture",
      title: "jan-2024 to march-2024",
    },
    {
      quote:
        "Enhanced system accessibility and responsiveness, leading to a 10% increase in daily active users, nitiated and led a project for code modularity and reuse, resulting in a 15% reduction in development costs , Worked on fixing the bugs and error in the code base. ",
      name: "Rablo.in",
      title: "jun-2024 to sept-2024",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    // {
    //   id: 1,
    //   title: "Frontend Engineer Intern",
    //   desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp1.svg",
    // },
    {
      id: 2,
      title: "Web development",
      desc: "Implementing Securing the software development lifecycle (SDLC) and Debugging algorithms and Unit testing",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend developer",
      desc: "Collaborated with design teams to integrate user interfaces into scalable web applications, boosting user satisfaction scores by 20%.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];