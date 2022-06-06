import facebookIcon from '../assets/logos/fb.svg';
import githubIcon from '../assets/logos/github.svg';
import gmailIcon from '../assets/logos/gmail.svg';
import linkedInIcon from '../assets/logos/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/kpeti515"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="icon"
          src={githubIcon}
          alt="link to github profile"
        />
      </a>
      <a href="mailto: lorandkallai@gmail.com">
        <img
          className="icon"
          src={gmailIcon}
          alt="link to e-mail"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/lorand-kallai-67747b183/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="icon"
          src={linkedInIcon}
          alt="link to linkedIn profile"
        />
      </a>
      <a
        href="https://www.facebook.com/kpeti515/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="icon"
          src={facebookIcon}
          alt="link to facebook profile"
        />
      </a>
      <p className="copyright">Lorand Kallai</p>
    </footer>
  );
};

export default Footer;
