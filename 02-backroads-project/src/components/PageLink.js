const PageLink = (props) => {
  const { 
    link: { id, href, text },
    itemClass 
  } = props;
  return (
    <li key={id}>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;