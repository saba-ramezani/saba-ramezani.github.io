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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

    carrent,
    jobit,
    tripguide,
    threejs,
    homanest,
    dataScience,
    nlp,
    robocup,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, Technologies, experiences, testimonials, projects };