import PageLinks from './PageLinks';
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks 
        id='footer-page-links'
        parentClass="footer-links"
        itemClass="footer-link"
      />
      <SocialLinks 
        id='footer-social-links'
        parentClass="footer-icons"
        itemClass="footer-icon" 
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{getCurrentYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default Footer;