import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';
import { StyledNavbar } from '../components/styles/Navbar.styles';
import menuIcon from '../assets/Hamburger_menuIcon.svg';
import { useState } from 'react';

const Navbar = () => {
  const [showLinksInMobileView, setShowLinksInMobileView] = useState<boolean>(false);
  const toggleLinks = () => setShowLinksInMobileView(state => !state);

  const navbarLinks = routes.map(({ path, isNavbarLink, textToDisplay }, key) =>
    isNavbarLink ? (
      <li key={key}>
        <Link to={path}>{textToDisplay}</Link>
      </li>
    ) : null
  );

  return (
    <StyledNavbar>
      <img
        src={menuIcon}
        alt="menu"
        onClick={toggleLinks}
      />
      <ul className={showLinksInMobileView ? 'responsive-navbar' : undefined}>{navbarLinks}</ul>
    </StyledNavbar>
  );
};

export default Navbar;
