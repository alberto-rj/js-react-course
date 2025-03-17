import { pageLinks } from "../data";
import PageLink from './PageLink';

const PageLinks = (props) => {
  const { id, parentClass, itemClass  } = props;
  return (
    <ul className={parentClass} id={id}>
      {
        pageLinks.map((link) => {
          return (
            <PageLink 
              key={link.id}
              link={link}
              itemClass={itemClass}
            />
          );
        })
      }
    </ul>
  );
};

export default PageLinks;