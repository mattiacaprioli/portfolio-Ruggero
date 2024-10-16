//  icons
import {
  // FiYoutube,
  FiLinkedin,
  FiInstagram,
  FiMail,
  // FiMapPin,
  FiUsers,
  FiAward,
  FiClipboard 
} from 'react-icons/fi';
import { FaWineGlass } from "react-icons/fa6";

// projects images
import Project1 from './assets/img/projects/findYourCity.png';
import Project2 from './assets/img/projects/meditation.png';
import Project3 from './assets/img/projects/tictactoe.png';
import Project4 from './assets/img/projects/dashboard-hotel.png';
import Project5 from './assets/img/projects/counter-javascript.png';
import Project6 from './assets/img/projects/climate-dashboard.png';
import Project7 from './assets/img/projects/explore-footer.png';
import Project8 from './assets/img/projects/TechTrend.png';
import Project9 from './assets/img/projects/next-level-food.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/redux.png';
import SkillImg6 from './assets/img/skills/nextjs.png';
import SkillImg7 from './assets/img/skills/vue.png';
import SkillImg8 from './assets/img/skills/git.png';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'experience',
    href: 'experience',
  },
  // {
  //   name: 'portfolio',
  //   href: 'portfolio',
  // },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/mattia-caprioli/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/mattiacaprioli/?igshid=YmMyMTA2M2Y%3D',
  },
  // {
  //   icon: <FiFacebook />,
  //   href: 'https://www.facebook.com/mattia.caprioli',
  // },
];

// experience
export const timelineData = [
  { year: "2024", title: "Best Sommelier Award", description: "Recognized as Best Sommelier at the International Wine Awards.", align: "left" },
  { year: "2023", title: "Wine Consultant", description: "Consulted for Michelin-starred restaurants to refine their wine selections.", align: "right" },
  { year: "2022", title: "Wine Tasting Event", description: "Hosted exclusive wine tasting events in collaboration with top wineries.", align: "left" },
  { year: "2021", title: "Sommelier Certification", description: "Achieved advanced sommelier certification from AIS.", align: "right" },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Find your city',
    category: 'Javascript',
    href: 'https://project-js-advanced.netlify.app/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Meditation',
    category: 'React',
    href: 'https://project-react-meditation.netlify.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Tic Tac Toe',
    category: 'Vue',
    href: 'https://project-vue-tictactoe.netlify.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Dashboard Hotel',
    category: 'Vue',
    href: 'https://dashboard-pomelia.netlify.app/',
  },
  {
    id: '5',
    image: Project5,
    name: 'Counter',
    category: 'Javascript',
    href: 'https://counter-javascript01.netlify.app/',
  },
  {
    id: '6',
    image: Project6,
    name: 'Climate Dashboard',
    category: 'React',
    href: 'https://climatedashboard.netlify.app/',
  },
  {
    id: '7',
    image: Project7,
    name: 'Explore Food',
    category: 'React',
    href: 'https://explorefood.netlify.app/',
  },
  {
    id: '8',
    image: Project8,
    name: 'TechTrend',
    category: 'Vue',
    href: 'https://techtrend.netlify.app/',
  },
  {
    id: '9',
    image: Project9,
    name: 'Next Level Food',
    category: 'Next',
    href: 'https://next-level-food.netlify.app/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Javascript',
  },
  {
    name: 'React',
  },
  {
    name: 'Next',
  },
  {
    name: 'Vue',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FaWineGlass />,
    name: 'Wine Selection',
    description:
      'Expert wine selection for restaurants, events, and private collections, ensuring the best match for every occasion.',
  },
  {
    icon: <FiClipboard />,
    name: 'Wine Consultancy',
    description:
      'Providing professional consultancy to help businesses build exceptional wine programs and enhance their offerings.',
  },
  {
    icon: <FiUsers />,
    name: 'Wine Tasting Events',
    description:
      'Organizing and hosting guided wine tastings, offering a unique experience tailored to your audience.',
  },
  {
    icon: <FiAward />,
    name: 'Wine Awards & Recognition',
    description:
      'Recognition for my expertise in the field, ensuring top-quality service and knowledge of premium wines.',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at itasommwine@gmail.com',
  }
];
