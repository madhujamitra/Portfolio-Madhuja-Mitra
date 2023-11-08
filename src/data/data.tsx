import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
// import heroImage from '../images/header-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import ParticlesBackground from '../components/Sections/ParticlesBackground';

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
        I'm a Vancouver based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Infosys</strong> helping build a modern, responsive and site builder.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
  backgroundComponent: <ParticlesBackground />
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a dedicated Sr. Software Engineer with a strong foundation in React, Next.js, and TypeScript. Throughout my career, I've taken pride in enhancing web performance and user experiences, leading agile teams, and pioneering innovative digital solutions. With a degree in Electronics and Communication from Dr. A. P. J. Abdul Kalam Technical University, I am a firm believer in continuous learning and always seek opportunities that promote professional advancement. Beyond the technical realm, 
  I find joy in photograpght, hiking, playing the guitar, and indulging in delectable cuisines.`,
  aboutItems: [
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Food,travelling, Music, Photography', Icon: SparklesIcon},
    {label: 'Study', text: 'Dr. A. P. J. Abdul Kalam Technical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Infosys', Icon: BuildingOffice2Icon},
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
        name: 'French',
        level: 2,
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
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Next.JS',
        level: 7,
      },
      {
        name: 'Shopify',
        level: 7,
      },
    ]
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 5,
      },
      {
        name: '.net',
        level: 6,
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
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Markdown previewer',
    description: 'Created markdown converter using react and open source Libraries',
    url: 'https://markdown-convertor-react.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Drum Machine',
    description: 'Created a Drum using sound which displays content along with every press of new sound.',
    url: 'https://drummachine-reactjs.netlify.app/',
    image: porfolioImage2,
  },
  {
    title: 'Muhhum website',
    description: 'Crate e-comm platform with shopify and other plugins',
    url: 'https://muhhum.com/',
    image: porfolioImage3,
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2015',
    location: 'Dr.A.P.J. Abdul Kalam Technical University',
    title: 'Engineering in Electronics and communication',
    content: <p>Graduated in July 2015, where I honed my problem-solving skills and analytical thinking, and problem solving skill.</p>,
  },
  {
    date: 'March 2011',
    location: 'Nutan Vidya Mindir',
    title: 'High School',
    content: <p>Completed my High School at Nutan Vidya Mandir in 2011, where I developed a strong foundation in science and computer science, laying the groundwork for my future in technology.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2021 - Present',
    location: 'Infosys',
    title: 'Senior software Developer',
    content: (
      <p>
        Led a developer team in Agile Scrum, achieving rapid feature releases and designing a frontend architecture for Bupa Global's scheduling system. 
        Enhanced web performance by 42% and revamped the site for WCAG compliance, boosting user accessibility by 40%.
      </p>
    ),
  },
  {
    date: 'July 2018 - December 2021',
    location: 'Colt technology',
    title: 'Engineer',
    content: (
      <p>
        Designed UI elements with ReactJS, streamlined Git workflows, ensured backend security with JWT, developed npm modules, expertly debugged single-page apps,
        and reduced UI bugs by 40% using Jest and Cypress testing.
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
  description: "You can connect me through",
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
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/11493962/madhuja-mitra'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/madhuja-mitra-0a083377/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/madhujamitra/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/MADHUJAmitra'},
];
