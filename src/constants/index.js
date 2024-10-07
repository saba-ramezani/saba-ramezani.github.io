import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    java,
    keras,
    matplotlib,
    mysql,
    pandas,
    python,
    pytorch,
    scikitLearn,
    tensorflow,
    carrent,
    jobit,
    tripguide,
    homanest,
    dataScience,
    nlp,
    robocup,
    hoobank,
    hilink,
    gpt3,
    gericht,
    aiChatApp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "NLP",
      icon: creator,
    },
    {
      title: "Vision",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const Technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "MatPlotLib",
      icon: matplotlib,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
  ];
  
  const experiences = [
    {
      title: "React Native and Web Developer",
      company_name: "HomaNest(Part-Time, Remote)",
      icon: homanest,
      iconBg: "#E6DEDD",
      date: "Jan. 2023 - Present",
      points: [
        "Implementing a Progressive Web Application and an Android Application",
        "for controlling smart home appliance such as smart Toaster, Oven, Stove and Hood",
        "In Html, CSS and Javascript"
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company_name: "Amirkabir University of Technology",
      icon: dataScience,
      iconBg: "#E6DEDD",
      date: "Jun. 2023 - Aug. 2024",
      points: [
        "Under the Supervision of Prof. Mostafa Haghir Chehreghani",
        "Analyzing various classification methods on Tree-Structured data",
        "Optimizing current Graph Neural Networks for sparse tree data",
      ],
    },
    {
      title: "Natural Language Processing Intern",
      company_name: "MabnaIC",
      icon: nlp,
      iconBg: "#E6DEDD",
      date: "Jul. 2022 - Oct. 2022",
      points: [
        "Under the Supervision of Prof. Saeedeh Momtazi",
        "Developed a Task-Oriented Chatbot in python using Neural Networks"      ],
    },
    {
      title: "Member of team CYRUS",
      company_name: "Soccer2D Simulation League",
      icon: robocup,
      iconBg: "#E6DEDD",
      date: "Sep. 2021 - Aug. 2022",
      points: [
        "Winner of RoboCup 2021",
        "Runner-Up of IranOpen 2022",
        "Mostly focused on Artificial Intelligence"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Chat App",
      description:
      "A fully responsive website for, introducing an AI Chat Application: BRAINWAVE",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aiChatApp,
      source_code_link: "https://github.com/saba-ramezani/AI-Chat-App",
    },
    {
      name: "Bank App",
      description:
      "A fully responsive Banking Application: HOOBANK",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/saba-ramezani/Bank-App",
    },
    {
      name: "Restaurant Landing page",
      description:
      "A fully responsive Landing Page for a fancy restaurant: GERICHT",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gericht,
      source_code_link: "https://github.com/saba-ramezani/Restaurant-Landing_Page",
    },
    {
      name: "Travel App",
      description:
      "A fully responsive web application for traveling & camping: HILINK",
      tags: [
        {
          name: "next js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hilink,
      source_code_link: "https://github.com/saba-ramezani/Travel-App",
    },
    {
      name: "GPT3",
      description:
      "A fully responsive web application for introducing an AI: GPT3",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      source_code_link: "https://github.com/saba-ramezani/GPT3",
    },
  ];
  
  export { services, Technologies, experiences, testimonials, projects };