const Book = (props) => {
  const { author, title, img, number } = props;
  return (
    <article className="book">
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;