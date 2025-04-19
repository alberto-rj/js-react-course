import { Link } from 'react-router-dom';

const Button = ({
  children,
  className = 'btn',
  asHTMLLink = false,
  asRRDLink = false,
  ...props
}) => {
  if (asRRDLink) {
    <Link
      className={className}
      {...props}
    >
      {children}
    </Link>;
  }
  return asHTMLLink ? (
    <a
      className={className}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
