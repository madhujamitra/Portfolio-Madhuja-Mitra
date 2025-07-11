import {
  ArrowDownTrayIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import DumMachine from '../images/portfolio/DumMachine.png';
import HireSwift from '../images/portfolio/HireSwift.png';
import MarkdownImage from '../images/portfolio/MarkdownImage.png';
import Muhhum from '../images/portfolio/Muhhum.png';
import profilepic from '../images/portfolio/portfolio-4.jpg';
import testimonialImage from '../images/testimonial.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Photograph,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Madhuja's portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
  SoftwareWork: 'software-work', 
  Photography: 'photography',
  
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
//  imageSrc: heroImage,
  name: `I'm Madhuja Mitra.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a Vancouver-based <strong className='text-stone-100'>Full Stack Software Engineer</strong> specializing in AI-powered applications, with expertise in building scalable microservices, implementing advanced prompt engineering solutions, and integrating cutting-edge LLM APIs to deliver innovative digital solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    }
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],

};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated Software Engineer specializing in AI-powered applications and full-stack development with expertise in React, Next.js, TypeScript, Node.js, Python, and cloud technologies. Throughout my career, I've architected scalable microservices, implemented advanced prompt engineering solutions, and integrated cutting-edge LLM APIs including OpenAI GPT and Google Gemini. My technical expertise spans containerization with Docker and Kubernetes, serverless architectures, and real-time data processing systems. With a degree in Electronics and Communication from Dr. A. P. J. Abdul Kalam Technical University and a Diploma in Software Engineering from BrainStation, I continuously evolve with emerging technologies, particularly in artificial intelligence and machine learning. My experience includes building AI-driven content generation platforms, optimizing distributed systems for performance, and leading cross-functional teams in delivering innovative digital solutions that drive measurable business impact.`,
      aboutItems: [
      {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
      {label: 'Specialization', text: 'AI/ML, Full-Stack Development, Cloud Architecture', Icon: SparklesIcon},
    // {label: 'Study', text: 'Diploma in Software Enginnering From Brainstation', Icon: AcademicCapIcon},
    // // {label: 'Employment', text: 'Infosys', Icon: BuildingOffice2Icon},
    // {label: 'Study', text: 'Enigneering in Electronics and Communication From UPTU', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'ReactJs',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 8,
      },
      {
        name: 'Next.JS',
        level: 7,
      },
    ]
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'NodeJS',
        level: 9,
      },
      {
        name: 'ExpressJS',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'MySql',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Swift',
        level: 4,
      },
      {
        name: 'Flutter',
        level: 3,
      },
    ],
  },
  {
    name: 'AI/ML & Cloud',
    skills: [
      {
        name: 'OpenAI GPT APIs',
        level: 9,
      },
      {
        name: 'Google Gemini',
        level: 8,
      },
      {
        name: 'Prompt Engineering',
        level: 9,
      },
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'Docker/Kubernetes',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
    title: 'HireSwift',
    description: 'A job portal where each posting is capped at 5 applications, then closed for review, with the option to reopen if no suitable candidates are found.',
    url: 'https://github.com/madhujamitra/Capstone-project',
    image:HireSwift,
  },
  {
    title: 'Markdown previewer',
    description: 'Created markdown converter using react and open source Libraries',
    url: 'https://markdown-convertor-react.netlify.app/',
    image: MarkdownImage,
  },
  {
    title: 'Drum Machine',
    description: 'Created a Drum using sound which displays content along with every press of new sound.',
    url: 'https://drummachine-reactjs.netlify.app/',
    image: DumMachine,
  },
  {
    title: 'Muhhum website',
    description: 'Crate e-comm platform with shopify and other plugins',
    url: 'https://muhhum.com/',
  image:Muhhum ,
  },

  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  
  
];


export const education: TimelineItem[] = [
  {
    date: 'March 2024',
    location: 'BrainStation,Vancouver',
    title: 'Diploma in Software Engineering',
    content: <p>Completed my Diploma in Software Engineering at BrainStation in 2024, which served as a comprehensive refresh and enhancement of my skills in full-stack development, further advancing my career in technology.</p>,
  },
  {
    date: 'July 2015',
    location: 'Dr.A.P.J. Abdul Kalam Technical University',
    title: 'Engineering in Electronics and communication',
    content: <p>Graduated in July 2015, where I honed my problem-solving skills and analytical thinking, and problem solving skill.</p>,
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2024 - April 2025',
    location: 'Actofy.ai, Vancouver',
    title: 'Software Engineer',
    content: (
      <p>
        Built AI-powered content generation platform from scratch using Python automation scripts and custom LLM integrations with Gemini and ChatGPT APIs.
        Engineered advanced prompt engineering solutions that optimized AI workflows, improving content quality by 40% through strategic model fine-tuning.
        Developed full-stack microservices architecture with mobile frontend and TypeScript serverless backend, leveraging Supabase for real-time data management.
        Implemented asynchronous content processing using Supabase's pgmq queue system with Python worker processes,
        eliminating 95% of generation errors and reducing platform latency by 30% through efficient distributed processing.
      </p>
    ),
  },
  {
    date: 'Feb 2024 - May 2024',
    location: 'Yunwenverse Media Inc, Vancouver',
    title: 'Software Engineer',
    content: (
      <p>
        Spearheaded the creation of an interactive data visualization tool with integrated RESTful APIs, driving a 25% increase in user engagement and improving decision-making efficiency.
        Built a push notification system with AWS SQS and SNS to enable real-time communication, improving system monitoring and performance by 25% using CloudWatch.
      </p>
    ),
  },
   {
    date: 'Dec 2021 - Dec 2023',
    location: 'Infosys, Bangalore',
    title: 'Software Engineer',
    content: (
      <p>
        Enhanced enterprise platform performance by 42% using server-side rendering and advanced caching strategies, implementing microservices architecture for better scalability.
        Architected reusable component library using MVC framework with frontend technologies and backend microservices, reducing development time by 30% across multiple teams.
        Led accessibility compliance project implementing WCAG 2.1 guidelines across distributed frontend services, mentoring junior developers on best practices and code review processes.
        Orchestrated containerized deployment strategy using Docker and Kubernetes, migrating legacy monolithic systems to microservices architecture, improving scalability by 30%.
      </p>
    ),
  },
  {
    date: 'Jul 2018 - Dec 2021',
    location: 'Colt Technology, Bangalore',
    title: 'Engineer',
    content: (
      <p>
        Developed responsive, mobile-first UI components for Colt's online platform, improving accessibility and usability with modern frontend technologies and adaptive layouts, resulting in a 25% increase in user engagement.
        Automated development workflows with GitLab CI/CD and AWS integration, reducing merge conflicts by 25%, deployment times by 40%, and improving team efficiency by 20%.
        Implemented server-side rendering and integrated JWT and RESTful HTTPS protocols for secure platform operations, ensuring compliance with industry-standard security practices.
        Applied advanced debugging techniques in single-page applications to improve software reliability, reducing UI bugs by 40% through comprehensive testing methodologies.
      </p>
    ),
  },
  {
    date: 'Feb 2017 - Jun 2018',
    location: 'Ericsson Global, Bangalore',
    title: 'Assistant Engineer',
    content: (
      <p>
        Worked on the operation of L2 networks for Virgin Media, managing and maintaining network infrastructure including switches from Nortel, Nokia, and other telecom equipment.
        Operated and troubleshooted various network systems including Tellabs ECI and other telecom systems, ensuring optimal network performance and reliability.
        Maintained network operations and provided technical support for telecommunications infrastructure, contributing to stable and efficient network services.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nilanjan Chatterjee',
      text: 'Madhuja and i worked together for COLT Technology Services in same team. She is a very fast learner and highly skilled at her domain. It was really a great experience working with her. I highly recommend her as she is very positive in terms work. Her ability to understand things during project handover helped us during hard times and we were able to innovate. She knows how to help her pairs and get the best out of them.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Vineet Sagar',
      text: 'I had the opportunity to work with Madhuja for over one and a half years, and I can confidently say that her commitment to her work and her zeal for learning are unparalleled. Madhuja expertise in frontend development, combined with her innovative problem-solving skills and thorough troubleshooting, consistently gave our team a competitive edge. Her ability to delve deep into technical challenges and come up with effective solutions was truly impressive.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "You can connect me through with number",
  items: [
    {
      type: ContactType.Email,
      text: 'madhujamitra3117@gmail.com',
      href: 'mailto:madhujamitra3117@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://www.google.com/maps/place/Downtown+Vancouver,+Vancouver,+BC/@49.2802354,-123.1383791,14z/data=!3m1!4b1!4m6!3m5!1s0x5486717f41ba2fb1:0xc6952794560a44aa!8m2!3d49.281954!4d-123.1170744!16zL20vMGMxM193?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@madhujamitra',
      href: 'https://www.instagram.com/madhujamitra/',
    },
    {
      type: ContactType.Github,
      text: 'madhujamitra',
      href: 'https://github.com/madhujamitra',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/madhujamitra'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/madhuja-mitra-0a083377/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/madhujamitra/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/MADHUJAmitra'},
];


export const photograph: Photograph[] = [
  {
    label: 'Photography Portfolio', // Provide a meaningful label
    href: 'https://example.com/photography', // Link to the photography portfolio
  },
];