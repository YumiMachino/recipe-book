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
        className={`px-4 py-2 mx-3 text-xs  md:px-5 md:py-3   transform hover:scale-105 transition-transform duration-300  
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
