import { socialLinks } from '../data';
import SocialLink from './SocialLink';

const SocialLinks = (props) => {
  const { id, parentClass, itemClass } = props;
  return (
    <ul
      className={parentClass}
      id={id}
    >
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            {...link}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
