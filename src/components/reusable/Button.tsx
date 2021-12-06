import { Link } from 'react-router-dom';

type ButtonProps = {
  isPrimary: boolean;
  content: string;
  link: string;
};

const Button: React.FC<ButtonProps> = ({
  isPrimary,
  content,
  link,
}): JSX.Element => {
  return (
    <Link to={link}>
      <button
        className={`px-5 py-3 mx-3 
          ${
            isPrimary
              ? 'bg-primary text-secondary'
              : 'bg-secondary text-primary border border-solid border-primary'
          }`}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;

// Button.defaultProps = defaultProps;
