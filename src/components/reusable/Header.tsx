import Logo from '../../assets/logo-img.png';
import { Link } from 'react-router-dom';
import Button from './Button';

type HeaderProps = {
  isLoggedIn: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <nav className='w-screen h-20 bg-secondary px-14 flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} height={200} width={250} alt='Logo' />
      </Link>
      <div className='flex'>
        {isLoggedIn ? (
          <>
            <Button isPrimary={true} content='Sign up' link='/' />
            <Button isPrimary={false} content='Log in' link='/' />
          </>
        ) : (
          <button>not logged in</button>
        )}
        {/* <Button isPrimary={true} content='Sign up' link='/' />
        <Button isPrimary={false} content='Log in' link='/' /> */}
      </div>
    </nav>
  );
};

export default Header;
