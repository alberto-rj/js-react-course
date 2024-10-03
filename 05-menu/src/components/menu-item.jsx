const MenuItem = (props) => {
  const { img, title, desc, price } = props;
  return (
    <li className="menu__item">
      <div className="menu__header">
        <img
          className="menu__img"
          src={img}
          alt={title}
          width={367}
          height={240}
        />
      </div>
      <div className="menu__body">
        <div className="menu__divider">
          <h2 className="menu__title">{title}</h2>
          <span className="menu__price">${price}</span>
        </div>
        <p className="menu__description">{desc}</p>
      </div>
    </li>
  );
};

export default MenuItem;