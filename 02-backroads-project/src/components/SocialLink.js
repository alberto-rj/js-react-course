const SocialLink = (props) => {
  const { itemClass, href, icon } = props;
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer" 
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;