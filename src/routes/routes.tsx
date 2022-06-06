import About from '../components/About';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import NoMatch from '../components/NoMatch';

export const routes = [
  { path: '/', component: About, exact: true, isNavbarLink: true, textToDisplay: 'About me' },
  { path: '/skills', component: Skills, exact: true, isNavbarLink: true, textToDisplay: 'Skills' },
  { path: '/awards', component: Awards, exact: true, isNavbarLink: true, textToDisplay: 'Awards' },
  { path: '/projects', component: Projects, exact: true, isNavbarLink: true, textToDisplay: 'Projects' },
  { path: '/contact', component: Contact, exact: true, isNavbarLink: true, textToDisplay: 'Contact' },
  { path: '/resume', component: Resume, exact: true, isNavbarLink: true, textToDisplay: 'Resume' },
  { path: '/*', component: NoMatch, exact: false, isNavbarLink: false },
];
