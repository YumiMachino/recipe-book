import { Link } from 'react-router-dom';

type ButtonProps = {
  isPrimary: boolean;
  content: string;
  link?: string;
  clickHandler?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  isPrimary,
  content,
  link,
  clickHandler,
}): JSX.Element => {
  if (link) {
    return (
      <Link to={link}>
        <button
          onClick={clickHandler}
          className={`px-4 py-2 text-xs  md:px-5 md:py-3 inline-block  transform hover:scale-105 transition-transform duration-300  
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
  } else {
    if (content === 'Submit') {
      return (
        <button
          type='submit'
          className={`px-4 py-2 text-xs  md:px-5 md:py-3 inline-block  transform hover:scale-105 transition-transform duration-300  
          ${
            isPrimary
              ? 'bg-primary text-secondary'
              : 'bg-secondary text-primary border border-solid border-primary'
          }`}
        >
          {content}
        </button>
      );
    } else {
      return (
        <button
          onClick={clickHandler}
          className={`px-4 py-2 text-xs  md:px-5 md:py-3 inline-block  transform hover:scale-105 transition-transform duration-300  
          ${
            isPrimary
              ? 'bg-primary text-secondary'
              : 'bg-secondary text-primary border border-solid border-primary'
          }`}
        >
          {content}
        </button>
      );
    }
  }
};

export default Button;
